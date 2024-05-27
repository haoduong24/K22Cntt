using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel;

namespace Lab_05.Models
{
    public class TVCSong
    {
        public int id { get; set; }
        [DisplayName("Tieu de")]
        [Required(ErrorMessage ="TVC: Hay nhap tieu de")]
        public string tvctitle { get; set; }
        [DisplayName("Tac gia")]
        [Required(ErrorMessage = "TVC: Hay nhap tac gia")]
        public string tvcAuthor { get; set; }
        [DisplayName("Nghe si")]
        [Required(ErrorMessage = "TVC: Hay nhap nghe si")]
        [StringLength(50, MinimumLength = 2, ErrorMessage = "TVC: do dai trong khoang [2-50]")]
        public string tvcArtist { get; set; }
        [DisplayName("Nam xuat ban")]
        [Required(ErrorMessage = "TVC: Hay nhap nam xuat ban")]
        [RegularExpression(@"[0-9]{4}",ErrorMessage ="TVC: Nam xuat ban pai la so co 4 ky tu")]
        [Range(1900,2020,ErrorMessage ="TVC Nam xuat ban trong khoang 1900 - 2020")]
        public int tvcYearRelease { get; set; }
    }
}