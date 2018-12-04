using System;
using MarriageRegitrar.Models.Common;

namespace MarriageRegitrar.Models.Models_NID
{
    public class NID:Entity<int>
    {
        public string Name { get; set; }
        public string NidNo { get; set; }
        public string MName { get; set; }
        public DateTime DoB { get; set; }
        public double PostCode { get; set; }
        public string Address { get; set; }
        public string Photo { get; set; }
        public bool MaritalStatus { get; set; }
    }
}
