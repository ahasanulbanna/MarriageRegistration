namespace MarriageRegitrar.Models.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Migration_From_Saif_PC2 : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Attorney", "BrAttorneyName", c => c.String());
            AddColumn("dbo.Attorney", "BrAttorneyNidNo", c => c.String());
            AddColumn("dbo.Attorney", "BrAttorneyMobileNo", c => c.String());
            AddColumn("dbo.Attorney", "BrAttorneyAddress", c => c.String());
            AddColumn("dbo.Attorney", "BgAttorneyName", c => c.String());
            AddColumn("dbo.Attorney", "BgAttorneyNidNo", c => c.String());
            AddColumn("dbo.Attorney", "BgAttorneyMobileNo", c => c.String());
            AddColumn("dbo.Attorney", "BgAttorneyAddress", c => c.String());
            DropColumn("dbo.Attorney", "BrName");
            DropColumn("dbo.Attorney", "BrNidNo");
            DropColumn("dbo.Attorney", "BrMobileNo");
            DropColumn("dbo.Attorney", "BrAddress");
            DropColumn("dbo.Attorney", "BgName");
            DropColumn("dbo.Attorney", "BgNidNo");
            DropColumn("dbo.Attorney", "BgMobileNo");
            DropColumn("dbo.Attorney", "BgAddress");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Attorney", "BgAddress", c => c.String());
            AddColumn("dbo.Attorney", "BgMobileNo", c => c.String());
            AddColumn("dbo.Attorney", "BgNidNo", c => c.String());
            AddColumn("dbo.Attorney", "BgName", c => c.String());
            AddColumn("dbo.Attorney", "BrAddress", c => c.String());
            AddColumn("dbo.Attorney", "BrMobileNo", c => c.String());
            AddColumn("dbo.Attorney", "BrNidNo", c => c.String());
            AddColumn("dbo.Attorney", "BrName", c => c.String());
            DropColumn("dbo.Attorney", "BgAttorneyAddress");
            DropColumn("dbo.Attorney", "BgAttorneyMobileNo");
            DropColumn("dbo.Attorney", "BgAttorneyNidNo");
            DropColumn("dbo.Attorney", "BgAttorneyName");
            DropColumn("dbo.Attorney", "BrAttorneyAddress");
            DropColumn("dbo.Attorney", "BrAttorneyMobileNo");
            DropColumn("dbo.Attorney", "BrAttorneyNidNo");
            DropColumn("dbo.Attorney", "BrAttorneyName");
        }
    }
}
