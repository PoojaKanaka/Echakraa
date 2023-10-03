
using System.ComponentModel.DataAnnotations;


namespace Data.Entities
{
    public class Login
    {
        [Key]
        public string UserId { get; set; }

        public string? Password { get; set; }
        public string? MobileNumber { get; set; }
        public string? Email { get; set; }
    }
}
