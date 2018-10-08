using System.ComponentModel.DataAnnotations.Schema;
using MarriageRegitrar.Models.Common;
using MarriageRegitrar.Models.Models_Admin;

namespace MarriageRegitrar.Models.Models_Kazi
{
    public class Kazi : Entity<int>
    {
        public string Name { get; set; }
        public string FName { get; set; }
        public string MName { get; set; }
        public string Address { get; set; }
        [ForeignKey("AdminId")]
        public Admin Admin { get; set; }
        public int AdminId { get; set; }
    }
}
