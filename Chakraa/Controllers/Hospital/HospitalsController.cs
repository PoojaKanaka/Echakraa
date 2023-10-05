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
        public async Task<IActionResult> Registration([FromBody] HospitalDetails Data)
        {
            try
            {
                var hospital = await _mediator.Send(new HospitalRegistrationQuery()
                {
                    HospitalName = Data.HospitalName,
                    Address = Data.Address,
                    MobileNumber = Data.MobileNumber,
                    RegistrationNumber = Data.RegistrationNumber,

                });

                return Ok(hospital);
            }
            catch (Exception ex)
            {
                return StatusCode(300, ex.Message);
            }


        }

        [HttpPost("GetHospitalData")]
        public async Task<IActionResult> GetHospitalDetails(  int HospitalID)
        {
            try
            {
                var hospital = await _mediator.Send(new HospitalDetailsQuery()
                {
                    HospitalId = HospitalID

                });

                return Ok(hospital);
            }
            catch (Exception ex)
            {
                return StatusCode(300, ex.Message);
            }
           


        }
        [HttpPost("DeleteHospitalData")]
        public async Task<IActionResult> DeleteHospitalDetails(int HospitalID)
        {
            try
            {
                var hospital = await _mediator.Send(new DeleteHospitalDetailsQuery()
                {
                    HospitalId = HospitalID

                });

                return Ok(hospital);
            }
            catch (Exception ex)
            {
                return StatusCode(300, ex.Message);
            }



        }


        [HttpPost("GetAllHospitals")]
        public async Task<IActionResult> GetAllHospital()
        {
            try
            {
                var hospital = await _mediator.Send(new AllHospitalDetailsQuery() { });
                

                return Ok(hospital);
            }
            catch (Exception ex)
            {
                return StatusCode(300, ex.Message);
            }



        }

    }
}
