using MarriageRegitrar.Models.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MarriageRegitrar.Models.Models
{
    public class MarriageWitness:Entity<int>
    {
        public string BrWitnessName { get; set; }
        public string BrWitnessNid { get; set; }
        public string BrWitnessAddress { get; set; }
        public string BrWitnessMobileNo { get; set; }
        public string BgWitnessName { get; set; }
        public string BgWitnessNid { get; set; }
        public string BgWitnessAddress { get; set; }
        public string BgWitnessMobileNo { get; set; }

    }
}
