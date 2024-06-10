using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using DVH_lesson08CF.Models;
using System.Data.Entity;

namespace DVH_lesson08CF.Controllers
{
    public class dvhCotegoryController : Controller
    {
        private static dvhBookStore _dvhBookStore;
        public dvhCotegoryController()
        {
            _dvhBookStore = new dvhBookStore();
        }
        // GET: dvhCotegory
        public ActionResult dvhIndex()
        {
            var dvhCategory = _dvhBookStore.dvhCategories.ToList();
            return View(dvhCategory);
        }
        public ActionResult dvhCreate()
        {
            var dvhCategory = new dvhCategory();
            return View(dvhCategory);
        }
        [HttpPost]
        public ActionResult dvhCreate(dvhCategory dvhCategory)
        {
            _dvhBookStore.dvhCategories.Add(dvhCategory);
            _dvhBookStore.SaveChanges();
            return RedirectToAction("dvhIndex");
        }
    }
}