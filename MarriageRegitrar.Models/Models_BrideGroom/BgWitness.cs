using MarriageRegitrar.Models.Common;

namespace MarriageRegitrar.Models.Models_BrideGroom
{
    public class BgWitness : Entity<int>
    {
        public string BridegroomName { get; set; }
        public string BridegroomNidNumber { get; set; }
        public string BridegroomAddress { get; set; }
        public string BridegroomPhoneNo { get; set; }
      
    }
}
