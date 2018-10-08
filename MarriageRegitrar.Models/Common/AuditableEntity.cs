using System;
using System.ComponentModel.DataAnnotations;

namespace MarriageRegitrar.Models.Common
{
    public class AuditableEntity<T> : Entity<T>
    { 
        [ScaffoldColumn(false)]
        public DateTime? CreatedDate { get; set; }
        [ScaffoldColumn(false)]
        public int? CreatedBy { get; set; }
        [ScaffoldColumn(false)]
        public DateTime? UpdatedDate { get; set; }
        [ScaffoldColumn(false)]
        public int? UpdatedBy { get; set; }
    }
}
