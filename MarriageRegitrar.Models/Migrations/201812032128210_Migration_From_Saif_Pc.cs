namespace MarriageRegitrar.Models.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Migration_From_Saif_Pc : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.NID", "NidNo", c => c.String());
            AddColumn("dbo.NID", "PostCode", c => c.Double(nullable: false));
            DropColumn("dbo.NID", "Type");
        }
        
        public override void Down()
        {
            AddColumn("dbo.NID", "Type", c => c.String());
            DropColumn("dbo.NID", "PostCode");
            DropColumn("dbo.NID", "NidNo");
        }
    }
}
