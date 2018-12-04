using MarriageRegitrar.Models.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MarriageRegitrar.Models.Models
{
    public class DivorceWitness:Entity<int>
    {
        public string BrDWitnessName { get; set; }
        public string BrDWitnessNid { get; set; }
        public string BrDWitnessAddress { get; set; }
        public string BrDWitnessMobileNo { get; set; }
        public string BgDWitnessName { get; set; }
        public string BgDWitnessNid { get; set; }
        public string BgDWitnessAddress { get; set; }
        public string BgDWitnessMobileNo { get; set; }
    }
}
