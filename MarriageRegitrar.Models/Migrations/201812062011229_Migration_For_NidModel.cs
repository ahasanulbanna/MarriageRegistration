namespace MarriageRegitrar.Models.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Migration_For_NidModel : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.NID", "FName", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.NID", "FName");
        }
    }
}
