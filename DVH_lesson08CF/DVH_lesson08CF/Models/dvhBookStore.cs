using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;

namespace DVH_lesson08CF.Models
{
    public class dvhBookStore:DbContext
    {
        public dvhBookStore() : base("dvhBookStoreConnectionString")
        {

        }
            // tao cac bang 
            public DbSet<dvhCategory> dvhCategories { get; set; }
            public DbSet<dvhBook> dvhBooks { get; set; }
    }
}