using MarriageRegitrar.Models.Common;

namespace MarriageRegitrar.Models.Models_Bride
{
    public class BrWitness : Entity<int>
    {
        public string BrWitnessName { get; set; }
        public string BrWitnessNid { get; set; }
        public string BrWitnessAddress { get; set; }
        public string BrWitnessPhoneNo { get; set; }
    }
}
