using MarriageRegitrar.Models.Common;

namespace MarriageRegitrar.Models.Models_BrideGroom
{
    public class BgWitness : Entity<int>
    {
        public string BgWitnessName { get; set; }
        public string BgWitnessNid { get; set; }
        public string BgWitnessAddress { get; set; }
        public string BgWitnessPhoneNo { get; set; }
      
    }
}
