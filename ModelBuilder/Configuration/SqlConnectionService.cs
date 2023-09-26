

using Microsoft.Extensions.Options;
using ModelBuilder.Settings;
using System.Data.SqlClient;

namespace ModelBuilder.Configuration
{
    public class SqlConnectionService : ISqlConnectionService
    {
        private readonly IOptions<ConnectionStrings> _connectionStrings;
        public SqlConnection sqlConnection;

        public SqlConnectionService(IOptions<ConnectionStrings> connectionStrings)
        {
            _connectionStrings = connectionStrings;
        }

        /// <summary>
        /// Opens a database connection with the property settings specified by the System.Data.SqlClient.SqlConnection.ConnectionString.
        /// </summary>
        /// <returns>A System.Data.SqlClient.SqlConnection object</returns>
        public SqlConnection OpenConection()
        {
            sqlConnection = new SqlConnection(_connectionStrings.Value.DefaultConnection);
            sqlConnection.Open();
            return sqlConnection;
        }

        /// <summary>
        /// Sends the System.Data.SqlClient.SqlCommand.CommandText to the System.Data.SqlClient.SqlCommand.Connection and builds a System.Data.SqlClient.SqlDataReader.
        /// </summary>
        /// <param name="sqlConnectionQuery">It contains Procedure Name and Parameters for it</param>
        /// <returns>A System.Data.SqlClient.SqlDataReader object</returns>
        public SqlDataReader ExecuteReaderQueries(SqlConnectionQuery sqlConnectionQuery)
        {
            SqlCommand sqlCommand = new SqlCommand(sqlConnectionQuery.ProcedureName, sqlConnection);
            sqlCommand.CommandType = sqlConnectionQuery.SqlCommandType;
            if (sqlConnectionQuery.CommandTimeout.HasValue)
            {
                sqlCommand.CommandTimeout = sqlConnectionQuery.CommandTimeout.Value;
            }
            else { sqlCommand.CommandTimeout= 300; }
            if (sqlConnectionQuery.LstParameter != null)
            {
                foreach (var item in sqlConnectionQuery.LstParameter)
                {
                    sqlCommand.Parameters.Add(new SqlParameter(item.ParameterName, item.Value));
                }
            }
            return sqlCommand.ExecuteReader();
        }

        /// <summary>
        /// An asynchronous version of System.Data.SqlClient.SqlCommand.ExecuteReader, 
        /// which sends the System.Data.SqlClient.SqlCommand.CommandText to the System.Data.SqlClient.SqlCommand.Connection 
        /// and builds a System.Data.SqlClient.SqlDataReader.
        /// </summary>
        /// <param name="sqlConnectionQuery">It contains Procedure Name and Parameters for it</param>
        /// <returns>A task representing the asynchronous operation</returns>
        public Task<SqlDataReader> ExecuteReaderAsyncQueries(SqlConnectionQuery sqlConnectionQuery)
        {
            SqlCommand sqlCommand = new SqlCommand(sqlConnectionQuery.ProcedureName, sqlConnection);
            sqlCommand.CommandType = sqlConnectionQuery.SqlCommandType;
            if (sqlConnectionQuery.CommandTimeout.HasValue)
            {
                sqlCommand.CommandTimeout = sqlConnectionQuery.CommandTimeout.Value;
            }
            if (sqlConnectionQuery.LstParameter != null)
            {
                foreach (var item in sqlConnectionQuery.LstParameter)
                {
                    sqlCommand.Parameters.Add(new SqlParameter(item.ParameterName, item.Value));
                }
            }
            return sqlCommand.ExecuteReaderAsync();
        }

        /// <summary>
        /// An asynchronous version of System.Data.Common.DbCommand.ExecuteNonQuery, which
        /// executes a SQL statement against a connection object.Invokes System.Data.Common.DbCommand.ExecuteNonQueryAsync(System.Threading.CancellationToken)
        /// with CancellationToken.None.
        /// </summary>
        /// <param name="sqlConnectionQuery">It contains Procedure Name and Parameters for it</param>
        /// <returns>A task representing the asynchronous operation</returns>
        public Task<int> ExecuteNonQueryAsync(SqlConnectionQuery sqlConnectionQuery)
        {
            SqlCommand sqlCommand = new SqlCommand(sqlConnectionQuery.ProcedureName, sqlConnection);
            sqlCommand.CommandType = sqlConnectionQuery.SqlCommandType;
            if (sqlConnectionQuery.CommandTimeout.HasValue)
            {
                sqlCommand.CommandTimeout = sqlConnectionQuery.CommandTimeout.Value;
            }
            if (sqlConnectionQuery.LstParameter != null && sqlConnectionQuery.LstParameter.Count > 0)
            {
                foreach (var item in sqlConnectionQuery.LstParameter)
                {
                    sqlCommand.Parameters.Add(new SqlParameter(item.ParameterName, item.Value));
                }
            }
            return sqlCommand.ExecuteNonQueryAsync();
        }
    }
}
