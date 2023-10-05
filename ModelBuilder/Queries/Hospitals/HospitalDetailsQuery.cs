using Data.Entities;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ModelBuilder.Queries.Hospitals
{
    public class HospitalDetailsQuery : IRequest<HospitalDetails>
    {
        public int HospitalId { get; set; }
    }
}
