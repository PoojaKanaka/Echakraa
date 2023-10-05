using Data.Entities;
using Data;
using MediatR;
using ModelBuilder.Queries.Hospitals;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ModelBuilder.Handlers.Hospital
{
    public class HospitalDetailsQueryHandler : IRequestHandler<HospitalDetailsQuery, HospitalDetails>
    {
        private readonly EHealthDbContext _dbContext;
        public HospitalDetailsQueryHandler(EHealthDbContext dbContext)
        {

            _dbContext = dbContext;
        }

        Task<HospitalDetails> IRequestHandler<HospitalDetailsQuery, HospitalDetails>.Handle(HospitalDetailsQuery request, CancellationToken cancellationToken)
        {
            var hospitalentry = _dbContext.HospitalDetails.FirstOrDefault(x => x.HospitalId.Equals(request.HospitalId));
            if (hospitalentry == null)
            {
                throw new Exception("Hospital does not created");
            }
            return Task.FromResult(hospitalentry);

        }
    
    }
}
