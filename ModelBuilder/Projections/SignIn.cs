using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ModelBuilder.Projections
{
    public class SignIn
    {
        public string token { get; set; }
        public string role { get; set; }
        public string fullUsername { get; set; }
        public string  userId { get; set; }
        public string error { get; set; }
        public string Email { get; set; }
    }
}
