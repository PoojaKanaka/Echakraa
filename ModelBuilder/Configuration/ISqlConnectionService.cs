

using System.Data.SqlClient;

namespace ModelBuilder.Configuration
{
    public interface ISqlConnectionService
    {
        SqlConnection OpenConection();
        SqlDataReader ExecuteReaderQueries(SqlConnectionQuery sqlConnectionQuery);
        Task<SqlDataReader> ExecuteReaderAsyncQueries(SqlConnectionQuery sqlConnectionQuery);
        Task<int> ExecuteNonQueryAsync(SqlConnectionQuery sqlConnectionQuery);
    }
}
