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
        public string BrAttorneyName { get; set; }
        public string BrAttorneyNidNo { get; set; }
        public string BrAttorneyMobileNo { get; set; }
        public string BrAttorneyAddress { get; set; }
        public string BgAttorneyName { get; set; }
        public string BgAttorneyNidNo { get; set; }
        public string BgAttorneyMobileNo { get; set; }
        public string BgAttorneyAddress { get; set; }
    }
}
