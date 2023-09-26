using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;

namespace ModelBuilder.Configuration
{
    public class SqlConnectionQuery
    {
        public string ProcedureName { get; set; }
        public List<SqlParameter> LstParameter { get; set; }
        public CommandType SqlCommandType { get; set; }
        public int? CommandTimeout { get; set; }
    }

}
