<!DOCTYPE html>
<html>

<!--
	Description: Basic hello world using cookies
	Author: Daniel Krutz
	Course: SWEN-344
-->

<head>
<script>

function setCookie(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    var name=getCookie("name");
    var age=getCookie("age");
    if (name != "") {
      //  alert("Welcome again " + user);
      document.getElementById("name").innerHTML=name;
      document.getElementById("age").innerHTML=age;

    } else {
       name = prompt("Please enter your name:","");
       if (name != "" && name != null) {
           setCookie("name", name, 30);
       }


       age = prompt("Please enter your age:","");
       if (age != "" && age != null) {
           setCookie("age", age, 30);
       }



    }
}

</script>
</head>
<body onload="checkCookie()">

<div id="name"></div>
<div id="age"></div>


</body>
</html>