<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Default.aspx.cs" Inherits="_Default" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
    <div>
    
      Firstname:  <asp:TextBox ID="fName" runat="server"></asp:TextBox>
        <br />
      LastName:  <asp:TextBox ID="lName" runat="server"></asp:TextBox>
      <br />
      Age:  <asp:TextBox ID="age" runat="server"></asp:TextBox>

       <asp:Button ID="Button1" runat="server" onclick="Button1_Click" Text="Basic" />
    <asp:Button ID="Button2" runat="server" onclick="Button2_Click" 
        Text="Take Input" />
    <asp:Button ID="Button3" runat="server" onclick="Button3_Click" 
        Text="Show All Results" />
 
      <br /><br />
        <asp:Button ID="Button4" runat="server" onclick="Button4_Click" 
            Text="Show this ID only" />
        <asp:TextBox ID="txtID" runat="server"></asp:TextBox>
    </div>
      <asp:GridView ID="GridView1" runat="server">
    </asp:GridView>
    <asp:TextBox ID="txtSanitize" runat="server"></asp:TextBox>
    <asp:Button ID="Button5" runat="server" onclick="Button5_Click" 
        Text="Sanitize" />
    </form>
</body>
</html>
