using System;
using System.Data;
using System.Data.Sql;
using System.Data.SqlClient;

/// <summary>
/// This Class is specifically design to connect with optimized pooling to Microsoft Sql Server.
/// </summary>
public class MySqlConnection
{
    public SqlConnection Connection;
    public SqlDataReader DataReader;
    public SqlCommand Command;
    private string mySqlConnectionString = "server=DKRUTZ-PC;database=DKTest;User ID=dan;Password=dan;Trusted_Connection=True;";
    public void CloseConn()
    {
        if (Connection != null)
        {
            if (Connection.State == ConnectionState.Open)
            {
                Connection.Close();
            }
            Connection.Dispose();
        }
    }


    public SqlConnection CreateConn()
    {
        if (Connection == null) { Connection = new SqlConnection(); };
        if (Connection.ConnectionString == string.Empty || Connection.ConnectionString == null)
        {
            try
            {
                Connection.ConnectionString = "Min Pool Size=5;Max Pool Size=40;Connect Timeout=4;" + mySqlConnectionString + ";";
                Connection.Open();
            }
            catch (Exception)
            {
                if (Connection.State != ConnectionState.Closed)
                {
                    Connection.Close();
                }
                Connection.ConnectionString = "Pooling=false;Connect Timeout=45;" + mySqlConnectionString + ";";
                Connection.Open();
            }
            return Connection;
        }
        if (Connection.State != ConnectionState.Open)
        {
            try
            {
                Connection.ConnectionString = "Min Pool Size=5;Max Pool Size=40;Connect Timeout=4;" + mySqlConnectionString + ";";
                Connection.Open();
            }
            catch (Exception)
            {
                if (Connection.State != ConnectionState.Closed)
                {
                    Connection.Close();
                }
                Connection.ConnectionString = "Pooling=false;Connect Timeout=45;" + mySqlConnectionString + ";";
                Connection.Open();
            }
        }
        return Connection;
    }
    public MySqlConnection()
    {

    }
}
