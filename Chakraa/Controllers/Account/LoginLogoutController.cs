using Data.Entities;
using Data.Models;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using ModelBuilder.Projections;
using ModelBuilder.Queries;
using System.Data;

namespace Chakraa.Controllers.Account
{

    [Route("api/[controller]")]
    [ApiController]
    //[EnableCors("AllowSpecificOrigin")]
    public class LoginLogoutController : Controller
    {
        private readonly IMediator _mediator;

        public LoginLogoutController(IMediator mediator)
        {

            _mediator = mediator;
        }

        //public IActionResult Index()
        //{
        //    return View();
        //}

        /// <summary> 
        /// For authenticating user credential 
        /// </summary>

        [AllowAnonymous]
        [HttpPost("Login")]
        public async Task<IActionResult> SignIn([FromBody] LoginDataModel userData)
        {
            try
            {
                var user = await _mediator.Send(new LoginQuery()
                {
                   
                    Password = userData.Password,
                    MobileNumber = userData.MobileNumber,
                    
                });
                return Ok(user);
            }
            catch(Exception ex) {
                return StatusCode(300, ex.Message);
            }
           

        }
    }
}
