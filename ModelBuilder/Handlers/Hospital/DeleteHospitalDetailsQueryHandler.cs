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
    public class DeleteHospitalDetailsQueryHandler : IRequestHandler<DeleteHospitalDetailsQuery, HospitalDetails>
    {
        private readonly EHealthDbContext _dbContext;
        public DeleteHospitalDetailsQueryHandler(EHealthDbContext dbContext)
        {

            _dbContext = dbContext;
        }


        public Task<HospitalDetails> Handle(DeleteHospitalDetailsQuery request, CancellationToken cancellationToken)
        {
            var hospitalentry = _dbContext.HospitalDetails.FirstOrDefault(x => x.HospitalId.Equals(request.HospitalId));
            if (hospitalentry == null)
            {
                throw new Exception("Hospital does not created");
            }
            _dbContext.HospitalDetails.Remove(hospitalentry);
            _dbContext.SaveChangesAsync();
            return Task.FromResult(hospitalentry);

        }
    }
}
