using ModelBuilder.Projections;
using MediatR;

namespace ModelBuilder.Queries
{
    public class LoginQuery : IRequest<SignIn>
    {
        public string UserId { get; set; }
        public string Password { get; set; }
        public string Email { get; set; }
        public int MobileNumber { get; set; } 

    }

}
