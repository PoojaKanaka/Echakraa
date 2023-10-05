using Data;
using Data.Entities;
using MediatR;
using Microsoft.Extensions.Options;
using ModelBuilder.Configuration;
using ModelBuilder.Queries.Hospitals;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ModelBuilder.Handlers.Hospital
{
    public class HospitalRegistrationQueryHandler : IRequestHandler<HospitalRegistrationQuery, HospitalDetails>
    {
        private readonly EHealthDbContext _dbContext;
        public HospitalRegistrationQueryHandler(EHealthDbContext dbContext)
        {

            _dbContext = dbContext;
        }
        public Task<HospitalDetails> Handle(HospitalRegistrationQuery request, CancellationToken cancellationToken)
        {
           
            var hospitalentry = _dbContext.HospitalDetails.FirstOrDefault(x => x.MobileNumber.Equals(request.MobileNumber));
            var lastentry = _dbContext.HospitalDetails.OrderByDescending(x=>x.HospitalId).Take(1).FirstOrDefault();
            if (hospitalentry == null && lastentry==null) {

              
                var data = new HospitalDetails {
                    MobileNumber = request.MobileNumber,
                    Address = request.Address,
                    //GoogleMapLatandLng = request.GoogleMapLatandLng,
                    HospitalName = request.HospitalName,
                    RegistrationNumber = request.RegistrationNumber,
                    HospitalId = 1
                   
                };

                _dbContext.HospitalDetails.Add(data);
                _dbContext.SaveChangesAsync();
                return Task.FromResult(data);

            }
            if (hospitalentry == null && lastentry != null)
            {

                
                var data = new HospitalDetails
                {
                    MobileNumber = request.MobileNumber,
                    Address = request.Address,
                    //GoogleMapLatandLng = request.GoogleMapLatandLng,
                    HospitalName = request.HospitalName,
                    RegistrationNumber = request.RegistrationNumber,
                    HospitalId = lastentry.HospitalId+1

                };

                _dbContext.HospitalDetails.Add(data);
                _dbContext.SaveChangesAsync();
                return Task.FromResult(data);

            }
            throw new NotImplementedException();
        }
    }
}
