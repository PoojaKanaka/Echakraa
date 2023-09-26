using Data.Entities;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using ModelBuilder.Projections;
using ModelBuilder.Queries;

namespace Chakraa.Controllers.Account
{
    public class LoginLogoutController : Controller
    {
        private readonly IMediator _mediator;

        public LoginLogoutController(IMediator mediator)
        {

            _mediator = mediator;
        }

        public IActionResult Index()
        {
            return View();
        }

        /// <summary> 
        /// For authenticating user credential 
        /// </summary>

        [AllowAnonymous]
        [HttpPost("Login")]
        public async Task<SignIn> SignIn([FromBody] Login userData)
        {
            var user = await _mediator.Send(new LoginQuery()
            {
                UserId = userData.UserId,
                Password = userData.Password
            });

            return await Task.FromResult(user);
            //return View();

        }
    }
}
