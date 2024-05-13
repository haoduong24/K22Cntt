using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace TVC_Haoduong.Controllers
{
    /// <summary>
    /// Author: Duong Van Hao
    /// Class: K22CNT1
    /// </summary>
    public class StudentsController : Controller
    {
        // GET: Students
        public ActionResult Index()
        {
            // Truyen du lieu tu Controller -> View
            ViewBag.name = "Duong Van Hao";
            ViewData["Birthday"] = "24/08/2004";
            TempData["Phone"] = "0377004824";

            return View();
        }
        public ActionResult Details()
        {
            string tvsStr = "";
            string tvcStr = null;
            tvcStr += "<h3>Ho ten: DUong Van Hao<h3/>";
            tvcStr += "<p> Ma so:2210900099";
            tvcStr += "<p> Dia chi gmail:haoduong2408@gmail.com";
            ViewBag.Details = tvcStr;

            return View("chi tiet");
        }
        public ActionResult NgonNguRazor()
        {
            return View();
        }
        // HTMP helper
        public ActionResult AddNewStudent()
        {
            return View();
        }
        [HttpPost]
        public ActionResult AddNewStudent(FormCollection form)
        {
            //lay du lieu tren form
            string Fullname = form["fullname"];
            string MaSV = form["MaSv"];
            string Taikhoan = form["Tai khaon"];
            string Password = form["Mat Khau"];

            string tvcStr = "<h3>" + Fullname + "<h3/>";
            tvcStr += "<p>" + MaSV;
            tvcStr += "<p>" + Taikhoan;
            tvcStr += "<p>" + Password;
            ViewBag.info = tvcStr;
            return View("Ket qua");
        }
    }
}