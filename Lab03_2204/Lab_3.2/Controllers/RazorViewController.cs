﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Lab_3._1.Controllers
{
    public class RazorViewController : Controller
    {
        // GET: RazorView
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult Variable_If_Else_Switch()
        {
            return View();
        }
        public ActionResult Array_Loop()
        {
            return View();
        }
    }
}