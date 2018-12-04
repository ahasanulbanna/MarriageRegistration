using MarriageRegitrar.Models.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MarriageRegitrar.Models.Models
{
    public class Moulovi:Entity<int>
    {
        public string MouloviName { get; set; }
        public string NidNo { get; set; }
        public string MobileNo { get; set; }
        public string Address { get; set; }


    }
}
