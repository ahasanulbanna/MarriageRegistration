using MarriageRegitrar.Models.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MarriageRegitrar.Models.Models
{
    public class Admin:Entity<int>
    {
        public string Name { get; set; }
        public string NidNo { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
    }
}
