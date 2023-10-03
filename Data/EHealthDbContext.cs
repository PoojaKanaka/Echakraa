using Data.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Data
{
    public interface IEHealthDbContext {

        DbSet<Login> Login { get; set; }
       DbSet<HospitalDetails> HospitalDetails { get; set; }
    }

    public class EHealthDbContext : DbContext, IEHealthDbContext
    {
        public EHealthDbContext(DbContextOptions<EHealthDbContext> options) : base(options)
        {
        }

        public virtual DbSet<Login> Login { get; set; }
        public virtual DbSet<HospitalDetails> HospitalDetails { get; set; }



        protected override void OnModelCreating(ModelBuilder builder)
        { 
            base.OnModelCreating(builder);

           // builder.Entity<Login>().ToTable("Login");
        }
    }
}
