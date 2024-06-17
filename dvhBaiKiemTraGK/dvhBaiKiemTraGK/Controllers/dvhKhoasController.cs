using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using dvhBaiKiemTraGK.Models;

namespace dvhBaiKiemTraGK.Controllers
{
    public class dvhKhoasController : Controller
    {
        private dvhK22CNT1Lesson07DbEntities1 db = new dvhK22CNT1Lesson07DbEntities1();

        // GET: dvhKhoas
        public ActionResult Index()
        {
            return View(db.dvhKhoa.ToList());
        }

        // GET: dvhKhoas/Details/5
        public ActionResult Details(string id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            dvhKhoa dvhKhoa = db.dvhKhoa.Find(id);
            if (dvhKhoa == null)
            {
                return HttpNotFound();
            }
            return View(dvhKhoa);
        }

        // GET: dvhKhoas/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: dvhKhoas/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult dvhCreate([Bind(Include = "dvhMaKhoa,dvhTenKH,dvhTrangThai")] dvhKhoa dvhKhoa)
        {
            if (ModelState.IsValid)
            {
                db.dvhKhoa.Add(dvhKhoa);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            return View(dvhKhoa);
        }

        // GET: dvhKhoas/Edit/5
        public ActionResult dvhEdit(string id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            dvhKhoa dvhKhoa = db.dvhKhoa.Find(id);
            if (dvhKhoa == null)
            {
                return HttpNotFound();
            }
            return View(dvhKhoa);
        }

        // POST: dvhKhoas/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult dvhEdit([Bind(Include = "dvhMaKhoa,dvhTenKH,dvhTrangThai")] dvhKhoa dvhKhoa)
        {
            if (ModelState.IsValid)
            {
                db.Entry(dvhKhoa).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            return View(dvhKhoa);
        }

        // GET: dvhKhoas/Delete/5
        public ActionResult dvhDelete(string id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            dvhKhoa dvhKhoa = db.dvhKhoa.Find(id);
            if (dvhKhoa == null)
            {
                return HttpNotFound();
            }
            return View(dvhKhoa);
        }

        // POST: dvhKhoas/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(string id)
        {
            dvhKhoa dvhKhoa = db.dvhKhoa.Find(id);
            db.dvhKhoa.Remove(dvhKhoa);
            db.SaveChanges();
            return RedirectToAction("Index");
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}
