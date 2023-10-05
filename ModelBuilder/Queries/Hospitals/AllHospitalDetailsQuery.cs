using Data.Entities;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ModelBuilder.Queries.Hospitals
{
    public class AllHospitalDetailsQuery: IRequest<List<HospitalDetails>>
    {

    }
}
