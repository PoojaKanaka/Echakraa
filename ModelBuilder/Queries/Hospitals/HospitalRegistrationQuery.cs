using Data.Entities;
using MediatR;
using ModelBuilder.Projections;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ModelBuilder.Queries.Hospitals
{
    public  class HospitalRegistrationQuery : IRequest<HospitalDetails>
    {
        public string HospitalName { get; set; }
        public string Address { get; set; }
        public string RegistrationNumber { get; set; }

        public string MobileNumber { get; set; }
        public string GoogleMapLatandLng { get; set; }
    }
}
