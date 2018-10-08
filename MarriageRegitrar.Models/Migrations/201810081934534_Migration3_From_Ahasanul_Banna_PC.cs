namespace MarriageRegitrar.Models.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Migration3_From_Ahasanul_Banna_PC : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.BgWitness", "BridegroomName", c => c.String());
            AddColumn("dbo.BgWitness", "BridegroomNidNumber", c => c.String());
            AddColumn("dbo.BgWitness", "BridegroomAddress", c => c.String());
            AddColumn("dbo.BgWitness", "BridegroomPhoneNo", c => c.String());
            AddColumn("dbo.Bridegroom", "BridegroomName", c => c.String());
            AddColumn("dbo.Bridegroom", "BridegroomFName", c => c.String());
            AddColumn("dbo.Bridegroom", "BridegroomMName", c => c.String());
            AddColumn("dbo.Bridegroom", "BridegroomAddress", c => c.String());
            AddColumn("dbo.Bridegroom", "BridegroomDoB", c => c.DateTime(nullable: false));
            AddColumn("dbo.Bridegroom", "BridegroomNumberOfMarriage", c => c.Int(nullable: false));
            AddColumn("dbo.Bride", "BrideName", c => c.String());
            AddColumn("dbo.Bride", "BrideFName", c => c.String());
            AddColumn("dbo.Bride", "BrideMName", c => c.String());
            AddColumn("dbo.Bride", "BrideAddress", c => c.String());
            AddColumn("dbo.Bride", "BrideDoB", c => c.DateTime(nullable: false));
            AddColumn("dbo.Bride", "BrideNumberOfMarriage", c => c.Int(nullable: false));
            AddColumn("dbo.BrWitness", "BrideName", c => c.String());
            AddColumn("dbo.BrWitness", "BrideNidNumber", c => c.String());
            AddColumn("dbo.BrWitness", "BrideAddress", c => c.String());
            AddColumn("dbo.BrWitness", "BridePhoneNo", c => c.String());
            DropColumn("dbo.BgWitness", "Name");
            DropColumn("dbo.BgWitness", "NidNumber");
            DropColumn("dbo.BgWitness", "Address");
            DropColumn("dbo.BgWitness", "Number");
            DropColumn("dbo.Bridegroom", "Name");
            DropColumn("dbo.Bridegroom", "FName");
            DropColumn("dbo.Bridegroom", "MName");
            DropColumn("dbo.Bridegroom", "Address");
            DropColumn("dbo.Bridegroom", "DoB");
            DropColumn("dbo.Bridegroom", "NumberOfMarriage");
            DropColumn("dbo.Bride", "Name");
            DropColumn("dbo.Bride", "FName");
            DropColumn("dbo.Bride", "MName");
            DropColumn("dbo.Bride", "Address");
            DropColumn("dbo.Bride", "DoB");
            DropColumn("dbo.Bride", "NumberOfMarriage");
            DropColumn("dbo.BrWitness", "Name");
            DropColumn("dbo.BrWitness", "NidNumber");
            DropColumn("dbo.BrWitness", "Address");
            DropColumn("dbo.BrWitness", "Number");
        }
        
        public override void Down()
        {
            AddColumn("dbo.BrWitness", "Number", c => c.String());
            AddColumn("dbo.BrWitness", "Address", c => c.String());
            AddColumn("dbo.BrWitness", "NidNumber", c => c.String());
            AddColumn("dbo.BrWitness", "Name", c => c.String());
            AddColumn("dbo.Bride", "NumberOfMarriage", c => c.Int(nullable: false));
            AddColumn("dbo.Bride", "DoB", c => c.DateTime(nullable: false));
            AddColumn("dbo.Bride", "Address", c => c.String());
            AddColumn("dbo.Bride", "MName", c => c.String());
            AddColumn("dbo.Bride", "FName", c => c.String());
            AddColumn("dbo.Bride", "Name", c => c.String());
            AddColumn("dbo.Bridegroom", "NumberOfMarriage", c => c.Int(nullable: false));
            AddColumn("dbo.Bridegroom", "DoB", c => c.DateTime(nullable: false));
            AddColumn("dbo.Bridegroom", "Address", c => c.String());
            AddColumn("dbo.Bridegroom", "MName", c => c.String());
            AddColumn("dbo.Bridegroom", "FName", c => c.String());
            AddColumn("dbo.Bridegroom", "Name", c => c.String());
            AddColumn("dbo.BgWitness", "Number", c => c.String());
            AddColumn("dbo.BgWitness", "Address", c => c.String());
            AddColumn("dbo.BgWitness", "NidNumber", c => c.String());
            AddColumn("dbo.BgWitness", "Name", c => c.String());
            DropColumn("dbo.BrWitness", "BridePhoneNo");
            DropColumn("dbo.BrWitness", "BrideAddress");
            DropColumn("dbo.BrWitness", "BrideNidNumber");
            DropColumn("dbo.BrWitness", "BrideName");
            DropColumn("dbo.Bride", "BrideNumberOfMarriage");
            DropColumn("dbo.Bride", "BrideDoB");
            DropColumn("dbo.Bride", "BrideAddress");
            DropColumn("dbo.Bride", "BrideMName");
            DropColumn("dbo.Bride", "BrideFName");
            DropColumn("dbo.Bride", "BrideName");
            DropColumn("dbo.Bridegroom", "BridegroomNumberOfMarriage");
            DropColumn("dbo.Bridegroom", "BridegroomDoB");
            DropColumn("dbo.Bridegroom", "BridegroomAddress");
            DropColumn("dbo.Bridegroom", "BridegroomMName");
            DropColumn("dbo.Bridegroom", "BridegroomFName");
            DropColumn("dbo.Bridegroom", "BridegroomName");
            DropColumn("dbo.BgWitness", "BridegroomPhoneNo");
            DropColumn("dbo.BgWitness", "BridegroomAddress");
            DropColumn("dbo.BgWitness", "BridegroomNidNumber");
            DropColumn("dbo.BgWitness", "BridegroomName");
        }
    }
}
