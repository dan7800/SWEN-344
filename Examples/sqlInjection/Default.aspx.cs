using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;
using System.Data.SqlClient;

public partial class _Default : System.Web.UI.Page
{


    private string mySqlConnectionString = "server=DKRUTZ-PC;database=DKTest;User ID=dan;Password=dan;Trusted_Connection=True;";
    protected void Page_Load(object sender, EventArgs e)
    {
    }


    // Insert Simple Input
    protected void Button1_Click(object sender, EventArgs e)
    {
        MySqlConnection mySql = new MySqlConnection();
        mySql.CreateConn();
        mySql.Command = mySql.Connection.CreateCommand();
        mySql.Command.CommandText = "insert into try1 (Fname, Lname, age) values ('Bill','Smith',56);";

        mySql.Command.ExecuteNonQuery();

        mySql.Command.Dispose();
        mySql.Connection.Close();
        mySql.CloseConn();
    }


    // Insert more complicated Input
    protected void Button2_Click(object sender, EventArgs e)
    {
        MySqlConnection mySql = new MySqlConnection();
        mySql.CreateConn();
        mySql.Command = mySql.Connection.CreateCommand();

        String sqlInsert = "insert into try1 (Fname, Lname, age) values ('" + fName.Text + "','" + lName.Text + "'," + age.Text + ");";
        Response.Write(sqlInsert);

        mySql.Command.CommandText = sqlInsert;
        mySql.Command.ExecuteNonQuery();
        mySql.Command.Dispose();
        mySql.Connection.Close();
        mySql.CloseConn();
    }


    // Show all results
    protected void Button3_Click(object sender, EventArgs e)
    {
        MySqlConnection mySql = new MySqlConnection();
        mySql.CreateConn();
        mySql.Command = mySql.Connection.CreateCommand();

        String sqlSearch = "select * from try1 order by ID;";
        Response.Write(sqlSearch);

        mySql.Command.CommandText = sqlSearch;
        GridView1.DataSource = mySql.Command.ExecuteReader();
        GridView1.DataBind();
        mySql.Connection.Close();


    }




    // Get user input
    protected void Button4_Click(object sender, EventArgs e)
    {

        MySqlConnection mySql = new MySqlConnection();
        mySql.CreateConn();
        mySql.Command = mySql.Connection.CreateCommand();

        String sqlSearch = "select * from try1 where ID= " + txtID.Text + ";";
        Response.Write(sqlSearch);

        mySql.Command.CommandText = sqlSearch;
        GridView1.DataSource = mySql.Command.ExecuteReader();
        GridView1.DataBind();
        mySql.Connection.Close();



        // 1; delete from try1 where ID > 4
        // 1 or ID >2;

    }
   
    
    
    // Make sure the select statement is sanitized
    protected void Button5_Click(object sender, EventArgs e)
    {
      DataSet userDataset = new DataSet();
      MySqlConnection mySql = new MySqlConnection();
      mySql.CreateConn();
      mySql.Command = mySql.Connection.CreateCommand();

      SqlDataAdapter myCommand = new SqlDataAdapter("select * from try1 where ID=@id", mySqlConnectionString);
      myCommand.SelectCommand.Parameters.Add("@id", SqlDbType.VarChar, 50);
      myCommand.SelectCommand.Parameters["@id"].Value = txtSanitize.Text;
      myCommand.Fill(userDataset);



      GridView1.DataSource = userDataset;
      GridView1.DataBind();
      mySql.Connection.Close();

    }
}