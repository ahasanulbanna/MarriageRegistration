namespace MarriageRegitrar.Models.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Migration_From_Saif_PC3 : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Marriage", "DowerAmount", c => c.Double(nullable: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.Marriage", "DowerAmount");
        }
    }
}
