﻿using Data;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using ModelBuilder.Configuration;
using ModelBuilder.Projections;
using ModelBuilder.Queries;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ModelBuilder.Handlers
{
    public class LoginQueryHandler : IRequestHandler<LoginQuery, SignIn>
    {
        
        private readonly EHealthDbContext _dbContext;
        private readonly IAppsettings _appsettings;

        public LoginQueryHandler( IOptions<AppSettings> appsettings, EHealthDbContext dbContext)
        {
            
            _appsettings = appsettings.Value;
            _dbContext = dbContext;
        }

        public Task<SignIn> Handle(LoginQuery request, CancellationToken cancellationToken)
        {
            var user = _dbContext.Login.FirstOrDefault(x => x.UserId == request.UserId && x.Password == request.Password);
            if (user == null)
                return null;

            var tokenHandler = new JwtSecurityTokenHandler();

            //var key = Encoding.ASCII.GetBytes(_appsettings.Secret);

            var key = Encoding.ASCII.GetBytes("4DB73B6D1CA74E39E1BE94487638F3FFEC8F2ECEA1AEE11CCB79AAA64E90E663");
            var tokenDescriptor = new SecurityTokenDescriptor
            {


                Expires = DateTime.UtcNow.AddMinutes(7),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature),
                Issuer = "admin",
                Audience = "admin"
            };
            var token = tokenHandler.CreateToken(tokenDescriptor);
            var getToken = tokenHandler.WriteToken(token);

            var result = new SignIn
            {

                token = getToken,
                userId = user.UserId,
                //Email = user.Email,

            };
            return Task.FromResult(result);
        }
    }
}