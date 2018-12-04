using MarriageRegitrar.Models.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MarriageRegitrar.Models.Models
{
    public class Attorney:Entity<int>
    {
        public string BrName { get; set; }
        public string BrNidNo { get; set; }
        public string BrMobileNo { get; set; }
        public string BrAddress { get; set; }
        public string BgName { get; set; }
        public string BgNidNo { get; set; }
        public string BgMobileNo { get; set; }
        public string BgAddress { get; set; }
    }
}
