using System;
using System.ComponentModel.DataAnnotations.Schema;
using MarriageRegitrar.Models.Common;
using MarriageRegitrar.Models.Models_Bride;

namespace MarriageRegitrar.Models.Models_Brides
{
    public class Bride : Entity<int>
    {
        public string BrideName { get; set; }
        public string BrideNid { get; set; }
        public string BrideFName { get; set; }
        public string BrideMName { get; set; }
        public string BrideAddress { get; set; }
        public DateTime BrideDoB { get; set; }
        public int BrideNumberOfMarriage { get; set; }
        [ForeignKey("BrWitnessId")]
        public BrWitness BrWitness { get; set; }
        public int BrWitnessId { get; set; }
    }
}
