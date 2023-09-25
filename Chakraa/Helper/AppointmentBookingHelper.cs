using Microsoft.AspNetCore.Mvc.Rendering;

namespace Chakraa.Helper
{
    public static class City
    {
        public static SelectList CityDropdownOptions()
        {
            var cities = new List<string>() { "Mumbai", "Pune", "Delhi", "Banglore", "Hydrabad", "Indore" };
            return new SelectList(cities, cities[0]);
        }
    }
    public static class Departments
    {
        public static SelectList DepartmentDropdownOptions()
        {
            var departments = new List<string>() { "Dentist", "Gynecologist", "General Physician", "Dermatologist",
                "ENT Specialist" };
            return new SelectList(departments, departments[0]);
        }
    }
}
