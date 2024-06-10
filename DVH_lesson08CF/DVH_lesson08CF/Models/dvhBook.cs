using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;

namespace DVH_lesson08CF.Models
{
    //tao ra cau truc bang book
    public class dvhBook
    { 
        [Key]
        public int dvhBookId { get; set; }
        public string dvhTitle { get; set; }
        public string dvhAuthor { get; set; }
        public int dvhYear { get; set; }
        public string dvhPublisher { get; set; }
        public string dvhPicture { get; set; }
        public int dvhCategoryId { get; set; }
        // thuoc tinh quan he
        public virtual dvhCategory dvhCategory { get; set; }
    }
}