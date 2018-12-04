using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;
using MarriageRegitrar.Models.Models_NID;
using MarriageRegitrar.Models.Models;

namespace MarriageRegitrar.Models
{
    public class MarriageRegistrarDbContext:DbContext
    {
        public MarriageRegistrarDbContext() : base("Con")
        {
           Database.SetInitializer(new MigrateDatabaseToLatestVersion<MarriageRegistrarDbContext, MarriageRegitrar.Models.Migrations.Configuration>("Con"));
        }
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();
            modelBuilder.Conventions.Remove<ManyToManyCascadeDeleteConvention>();
            modelBuilder.Conventions.Remove<OneToManyCascadeDeleteConvention>();

        }
        public DbSet<NID> Nids { get; set; }
        public DbSet<Admin> Admins { get; set; }
        public DbSet<Quazi> Quazies { get; set; }
        public DbSet<Couple> Couples { get; set; }
        public DbSet<MarriageWitness> MarriageWitnesses { get; set; }
        public DbSet<Marriage> Marriages { get; set; }
        public DbSet<Attorney> Attornies { get; set; }
        public DbSet<Moulovi> Moulovies { get; set; }
        public DbSet<Divorce> Divorces { get; set; }
        public DbSet<DivorceWitness> DivorceWitnesses { get; set; }


    }
}
