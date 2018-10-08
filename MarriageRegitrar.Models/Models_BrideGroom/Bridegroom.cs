using System;
using System.ComponentModel.DataAnnotations.Schema;
using MarriageRegitrar.Models.Common;

namespace MarriageRegitrar.Models.Models_BrideGroom
{
    public class Bridegroom : Entity<int>
    {
        public string BridegroomName { get; set; }
        public string BridegroomFName { get; set; }
        public string BridegroomMName { get; set; }
        public string BridegroomAddress { get; set; }
        public DateTime BridegroomDoB { get; set; }
        public int BridegroomNumberOfMarriage { get; set; }
        [ForeignKey("BgWitnessId")]
        public BgWitness BgWitness { get; set; }
        public int BgWitnessId { get; set; }

    }
}
