using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ModelBuilder.Configuration
{
    public class AppSettings : IAppsettings
    {
        public string Secret { get; set; }
    }
}
