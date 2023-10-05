using Data;
using Data.Entities;
using MediatR;
using ModelBuilder.Queries.Hospitals;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ModelBuilder.Handlers.Hospital
{
    public class AllHospitalDetailsQueryHandler : IRequestHandler<AllHospitalDetailsQuery, List<HospitalDetails>>
    {
        private readonly EHealthDbContext _dbContext;
        public AllHospitalDetailsQueryHandler(EHealthDbContext dbContext)
        {

            _dbContext = dbContext;
        }
        public Task<List<HospitalDetails>> Handle(AllHospitalDetailsQuery request, CancellationToken cancellationToken)
        {
            var data = _dbContext.HospitalDetails.ToList(); ;
            return Task.FromResult(data);
        }
    }
}
