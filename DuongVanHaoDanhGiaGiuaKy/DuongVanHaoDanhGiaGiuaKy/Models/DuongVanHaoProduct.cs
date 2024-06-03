using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;

namespace DuongVanHaoDanhGiaGiuaKy.Models
{
    public class DuongVanHaoProduct
    {
        [Required(ErrorMessage = "DVH: Hay nhap Id")]
        [RegularExpression(@"^A-Z\s]+$", ErrorMessage = "Ten Chi chua cac ky tu viet hoa va khoang  trang ")]
        public int Id { get; set; }
        [Required(ErrorMessage = "DVH: Hay nhap ten")]
        [StringLength(100, MinimumLength = 5, ErrorMessage = "Ten trong khoang 5-100 ky tu")]
        public string Name { get; set; }
        [Required(ErrorMessage = "DVH: Hay nhap Anh")]
        public string Image { get; set; }
        [Required(ErrorMessage = "DVH: Hay nhap chat luong sp")]
        [Range(1, 100, ErrorMessage = "So trong khaong 1-100")]
        public int Quality { get; set; }
        [Required(ErrorMessage = "DVH: Hay nhap gia")]
        [Range(0.01, double.MaxValue, ErrorMessage = "gia phai lon hon 0")]
        public int Price { get; set; }
        [Required(ErrorMessage = "DVh: Dang hoat dong hay khong hoat dong")]
        public string IsActive { get; set; }
        
    }
}