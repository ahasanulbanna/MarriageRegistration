using MarriageRegitrar.Models.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MarriageRegitrar.Models.Models
{
    public class Couple:Entity<int>
    {
        public string BrName { get; set; }     //Br=Brid  
        public string BrFName { get; set; }
        public string BrMName { get; set; }
        public string BrAddress { get; set; }
        public string BrNidNo { get; set; }
        public string BrMobileNo { get; set; }
        public DateTime BrDoB { get; set; }
        public int BrMarriageCount { get; set; }
        public string BgName { get; set; }   //Bg=Bridegroom
        public string BgFName { get; set; }
        public string BgMName { get; set; }
        public string BgAddress { get; set; }
        public string BgNidNo { get; set; }
        public string BgMobileNo { get; set; }
        public DateTime BgDoB { get; set; }
        public int BgMarriageCount { get; set; }
    }
}
