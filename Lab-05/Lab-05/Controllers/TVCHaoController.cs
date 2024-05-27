using Lab_05.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Lab_05.Controllers
{
    public class TVCHaoController : Controller
    {
        private static List<Models.TVCSong> tVCHaos = new List<Models.TVCSong>()
        {
            new Models.TVCSong{id=100,tvctitle="Duong Hao",tvcAuthor="k22cnt1",tvcArtist="Haod",tvcYearRelease=2023},
            new Models.TVCSong{id=100,tvctitle="Duong Haoo",tvcAuthor="k22cnt",tvcArtist="Haoduong",tvcYearRelease=2024}
        };
        // GET: TVCHao
        public ActionResult Index()
        {
            return View();
        }
        //get create song
        public ActionResult TVCCreate()
        {
            var tvcSong = new TVCSong();
            return View();
        }
        // post create song
        [HttpPost]
        public ActionResult TVCCreate(TVCSong tvcSong)
        {
            if(!ModelState.IsValid) // neu co loi xay ra
            { 
                return View(tvcSong); 
            }
            // neu du lieu dung -> luu vao danh sach bai hat
            tVCHaos.Add(tvcSong);
            return RedirectToAction("Index");
        }
    }
}