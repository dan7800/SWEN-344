<html>
 <body>

<?php

// Author: Daniel Krutz
// Description: Create a RESTful client to read the API from another site

// Use GETs to read person info
if (isset($_GET["action"]) && isset($_GET["id"]) && $_GET["action"] == "get_person") 
{
  $person_info = file_get_contents('http://www.se.rit.edu/~dkrutz/swen-344/REST/RESTAPI.php?action=get_person&id=' . $_GET["id"]);
  $person_info = json_decode($person_info, true);
  ?>


    <!-- Buld the table to display the data in
          Notice how the person_info variables are being passed in.      
    -->
    <table border ="1">
      <tr>
        <td>Name: </td><td> <?php echo $person_info["person_name"] ?></td>
      </tr>
      <tr>
        <td>Age: </td><td> <?php echo $person_info["person_age"] ?></td>
      </tr>
      <tr>
        <td>Favorite Movie: </td><td> <?php echo $person_info["favorite_movie"] ?></td>
      </tr>
    </table>
    <br />

    <!-- Create a basic link to return to the previous page -->
    <a href="http://www.se.rit.edu/~dkrutz/swen-344/REST/RestClient.php?action=get_person_list" alt="person list">Return to the person list</a>
  <?php
}
else // else take the person list
{

  // Create the person list
  $person_list = file_get_contents('http://www.se.rit.edu/~dkrutz/swen-344/REST/RESTAPI.php?action=get_person_list');

  // Retrieve & decode the necessary JSON information
  $person_list = json_decode($person_list, true);
  ?>
    <ul>
    <?php foreach ($person_list as $person): ?>
      <li>
        <!-- Loop through the list and create the links-->
        <a href=<?php echo "http://www.se.rit.edu/~dkrutz/swen-344/REST/RestClient.php?action=get_person&id=" . $person["id"]  ?> alt=<?php echo "person_" . $person_["id"] ?>><?php echo $person["name"] ?></a>
    </li>
    <?php endforeach; ?>
    </ul>
  <?php
} ?>
 </body>
</html>