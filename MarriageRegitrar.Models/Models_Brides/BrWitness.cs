using MarriageRegitrar.Models.Common;

namespace MarriageRegitrar.Models.Models_Bride
{
    public class BrWitness : Entity<int>
    {
        public string BrideName { get; set; }
        public string BrideNidNumber { get; set; }
        public string BrideAddress { get; set; }
        public string BridePhoneNo { get; set; }
        
    }
}
