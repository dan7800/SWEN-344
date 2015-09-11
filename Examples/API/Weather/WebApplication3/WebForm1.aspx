<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="WebForm1.aspx.cs" Inherits="WebApplication3.WebForm1" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>SWEN-344 Example Weather API Page</title>
</head>
<body>

    <form id="form1" runat="server">
    <div>
    <asp:TextBox ID="txtCity" runat="server" Text="" />
<asp:Button ID="Button1" Text="Get Weather Information" runat="server" OnClick="GetWeatherInfo" />
<hr />
<table id="tblWeather" runat="server" border="0" cellpadding="0" cellspacing="0"
    visible="false">
    <tr>
        <th colspan="2">
            Weather Information
        </th>
    </tr>
    <tr>
        <td rowspan="3">
            <asp:Image ID="imgWeatherIcon" runat="server" />
        </td>
    </tr>
    <tr>
        <td>
            <asp:Label ID="lblCity_Country" runat="server" />
            <asp:Image ID="imgCountryFlag" runat="server" />
            <asp:Label ID="lblDescription" runat="server" />
            Humidity:
            <asp:Label ID="lblHumidity" runat="server" />
        </td>
    </tr>
    <tr>
        <td>
            Temperature:
            (Min:
            <asp:Label ID="lblTempMin" runat="server" />
            Max:
            <asp:Label ID="lblTempMax" runat="server" />
                Day:
            <asp:Label ID="lblTempDay" runat="server" />
                Night:
            <asp:Label ID="lblTempNight" runat="server" />)
        </td>
    </tr>
</table>
    </div>
    </form>

    <br />
    <img src="https://c1.staticflickr.com/1/33/61081517_dc34c23a90.jpg" alt="Will is snow?">
</body>
</html>
