namespace MarriageRegitrar.Models.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Migration1_From_Ahasanul_Banna_PC : DbMigration
    {
        public override void Up()
        {
            DropIndex("dbo.Kazi", new[] { "AdminId" });
            AddColumn("dbo.BgWitness", "BgWitnessName", c => c.String());
            AddColumn("dbo.BgWitness", "BgWitnessNid", c => c.String());
            AddColumn("dbo.BgWitness", "BgWitnessAddress", c => c.String());
            AddColumn("dbo.BgWitness", "BgWitnessPhoneNo", c => c.String());
            AddColumn("dbo.Bridegroom", "BridegroomNid", c => c.String());
            AddColumn("dbo.Bride", "BrideNid", c => c.String());
            AddColumn("dbo.BrWitness", "BrWitnessName", c => c.String());
            AddColumn("dbo.BrWitness", "BrWitnessNid", c => c.String());
            AddColumn("dbo.BrWitness", "BrWitnessAddress", c => c.String());
            AddColumn("dbo.BrWitness", "BrWitnessPhoneNo", c => c.String());
            AddColumn("dbo.MarriageRegistrarModel", "CurrentStatus", c => c.Boolean(nullable: false));
            AddColumn("dbo.MarriageRegistrarModel", "MarriageDate", c => c.DateTime(nullable: false));
            AlterColumn("dbo.Kazi", "AdminId", c => c.Int());
            CreateIndex("dbo.Kazi", "AdminId");
            DropColumn("dbo.BgWitness", "BridegroomName");
            DropColumn("dbo.BgWitness", "BridegroomNidNumber");
            DropColumn("dbo.BgWitness", "BridegroomAddress");
            DropColumn("dbo.BgWitness", "BridegroomPhoneNo");
            DropColumn("dbo.BrWitness", "BrideName");
            DropColumn("dbo.BrWitness", "BrideNidNumber");
            DropColumn("dbo.BrWitness", "BrideAddress");
            DropColumn("dbo.BrWitness", "BridePhoneNo");
        }
        
        public override void Down()
        {
            AddColumn("dbo.BrWitness", "BridePhoneNo", c => c.String());
            AddColumn("dbo.BrWitness", "BrideAddress", c => c.String());
            AddColumn("dbo.BrWitness", "BrideNidNumber", c => c.String());
            AddColumn("dbo.BrWitness", "BrideName", c => c.String());
            AddColumn("dbo.BgWitness", "BridegroomPhoneNo", c => c.String());
            AddColumn("dbo.BgWitness", "BridegroomAddress", c => c.String());
            AddColumn("dbo.BgWitness", "BridegroomNidNumber", c => c.String());
            AddColumn("dbo.BgWitness", "BridegroomName", c => c.String());
            DropIndex("dbo.Kazi", new[] { "AdminId" });
            AlterColumn("dbo.Kazi", "AdminId", c => c.Int(nullable: false));
            DropColumn("dbo.MarriageRegistrarModel", "MarriageDate");
            DropColumn("dbo.MarriageRegistrarModel", "CurrentStatus");
            DropColumn("dbo.BrWitness", "BrWitnessPhoneNo");
            DropColumn("dbo.BrWitness", "BrWitnessAddress");
            DropColumn("dbo.BrWitness", "BrWitnessNid");
            DropColumn("dbo.BrWitness", "BrWitnessName");
            DropColumn("dbo.Bride", "BrideNid");
            DropColumn("dbo.Bridegroom", "BridegroomNid");
            DropColumn("dbo.BgWitness", "BgWitnessPhoneNo");
            DropColumn("dbo.BgWitness", "BgWitnessAddress");
            DropColumn("dbo.BgWitness", "BgWitnessNid");
            DropColumn("dbo.BgWitness", "BgWitnessName");
            CreateIndex("dbo.Kazi", "AdminId");
        }
    }
}
