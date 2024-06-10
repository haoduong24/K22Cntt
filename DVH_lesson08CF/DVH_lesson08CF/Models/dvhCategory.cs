using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;

namespace DVH_lesson08CF.Models
{
    public class dvhCategory
    {
        [Key]
        public int Category { get; set; }
        public int CategoryName { get; set; }
        // thuoc tinh quan he
        public virtual ICollection<dvhBook> dvhBooks { get; set; }
    }
}