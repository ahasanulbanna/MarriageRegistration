using MarriageRegitrar.Models.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MarriageRegitrar.Models.Models
{
    public class Quazi:Entity<int>
    {
        public string Name { get; set; }
        public string NidNo { get; set; }
        public string RegistrationNo { get; set; }
        public string MobileNo { get; set; }
        public string Address { get; set; }
        public string Password { get; set; }
        public int AdminId { get; set; }
        public Admin Admin { get; set; }
    }
}
