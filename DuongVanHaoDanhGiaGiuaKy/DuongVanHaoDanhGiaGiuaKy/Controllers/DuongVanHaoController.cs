using DuongVanHaoDanhGiaGiuaKy.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace DuongVanHaoDanhGiaGiuaKy.Controllers
{
    public class DuongVanHaoController : Controller
    {
        // GET: ĐthStudents
        // <summmary>
        // Mock data:
        // </summmary>

        private static List<DuongVanHaoProduct> DuongVanHaoProducts = new List<DuongVanHaoProduct>
        {
            new DuongVanHaoProduct() {Id = 0, Name="Dương Văn Hào", Image= "Haodepgai", Quality=24, Price=20000, IsActive="Hoat dong"},
            new DuongVanHaoProduct() {Id = 1, Name="Dương Văn Hào", Image= "Haodepzai", Quality=28, Price=30000, IsActive="Khong hoat dong"}

        };
        public ActionResult DVHIndex()
        {
            return View(DuongVanHaoProducts);
        }

        // Create Actions
        public ActionResult DVHCreate()
        {
            return View();
        }

        [HttpPost]
        public ActionResult DVHCreate(DuongVanHaoProduct product)
        {
            if (!ModelState.IsValid)
            {
                return View(product);
            }
            product.Id = DuongVanHaoProducts.Count > 0 ? DuongVanHaoProducts.Max(p => p.Id) + 1 : 0;
            DuongVanHaoProducts.Add(product);
            return RedirectToAction("DVHIndex");
        }

        // Edit Actions
        public ActionResult DVHEdit(int id)
        {
            var product = DuongVanHaoProducts.FirstOrDefault(p => p.Id == id);
            if (product == null)
            {
                return HttpNotFound();
            }
            return View(product);
        }

        [HttpPost]
        public ActionResult DVHEdit(DuongVanHaoProduct product)
        {
            if (!ModelState.IsValid)
            {
                return View(product);
            }
            var existingProduct = DuongVanHaoProducts.FirstOrDefault(p => p.Id == product.Id);
            if (existingProduct == null)
            {
                return HttpNotFound();
            }
            existingProduct.Name = product.Name;
            existingProduct.Image = product.Image;
            existingProduct.Quality = product.Quality;
            existingProduct.Price = product.Price;
            existingProduct.IsActive = product.IsActive;
            return RedirectToAction("DVHIndex");
        }

        // Delete Actions
        public ActionResult DVHDelete(int id)
        {
            var product = DuongVanHaoProducts.FirstOrDefault(p => p.Id == id);
            if (product == null)
            {
                return HttpNotFound();
            }
            return View(product);
        }

        [HttpPost, ActionName("DVHDelete")]
        public ActionResult DVHDeleteConfirmed(int id)
        {
            var product = DuongVanHaoProducts.FirstOrDefault(p => p.Id == id);
            if (product == null)
            {
                return HttpNotFound();
            }
            DuongVanHaoProducts.Remove(product);
            return RedirectToAction("DVHIndex");
        }
    }
}
