using Data.Entities;
using MediatR;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using ModelBuilder.Projections;
using ModelBuilder.Queries;
using ModelBuilder.Queries.Hospitals;

namespace Chakraa.Controllers.Hospital
{
    [Route("api/[controller]")]
    [ApiController]
    //[EnableCors("AllowSpecificOrigin")]
    public class HospitalsController : Controller
    {
        private readonly IMediator _mediator;
        public HospitalsController(IMediator mediator)
        {

            _mediator = mediator;
        }

      

        [HttpPost("HospitalRegistration")]
        public async Task<HospitalDetails> Registration([FromBody] HospitalDetails Data)
        {
            var hospital = await _mediator.Send(new HospitalRegistrationQuery()
            {
                HospitalName = Data.HospitalName,
                Address = Data.Address,
                MobileNumber = Data.MobileNumber,
                RegistrationNumber = Data.RegistrationNumber,

            });

            return await Task.FromResult(hospital);
            //return View();

        }
    }
}
