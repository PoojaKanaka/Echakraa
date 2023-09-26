using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Chakraa.Controllers
{
    public class AppointmentBookingController : Controller
    {
        // GET: AppointmentBookingController
        public ActionResult Index()
        {
            return View();
        }

        // GET: AppointmentBookingController/Details/5
        public ActionResult Details(int id)
        {
            return View();
        }

        // GET: AppointmentBookingController/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: AppointmentBookingController/Create
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create(IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // GET: AppointmentBookingController/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: AppointmentBookingController/Edit/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit(int id, IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // GET: AppointmentBookingController/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: AppointmentBookingController/Delete/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Delete(int id, IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }
    }
}
