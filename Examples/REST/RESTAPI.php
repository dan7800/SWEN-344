<?php

// Author: Daniel Krutz
// Description: Create a RESTful API to be used by another page or site.

function get_person_by_id($id)
{
  $person_info = array();

  // Normally this info would be pulled from a database.
  // Build JSON array to create the necessary data structure
  switch ($id){
    case 1:
      $person_info = array("person_name" => "Dan Krutz", "person_age" => "12", "favorite_movie" => "Bloodsport 2"); 
      break;
    case 2:
      $person_info = array("person_name" => "Mike Lutz", "person_age" => "34", "favorite_movie" => "Bloodsport");
      break;
    case 3:
      $person_info = array("person_name" => "Jim Vallino", "person_age" => "45", "favorite_movie" => "Goodfellas");
      break;
    case 4:
      $person_info = array("person_name" => "Sam Malachowsky", "person_age" => "89", "favorite_movie" => "Sound of Music");
      break;
  }

  return $person_info;
}


// Create the function to pull in the JSON array list
function get_person_list()
{
  //normally this info would be pulled from a database.
  //build JSON array
  $app_list = array(array("id" => 1, "name" => "Prof 1"), array("id" => 2, "name" => "Prof 2"), array("id" => 3, "name" => "Prof 3"), array("id" => 4, "name" => "Prof 4")); 

  return $app_list;
}

// Define the possible URLs which the page can be accessed from
$possible_url = array("get_person_list", "get_person");

// Create a default error string
$value = "An error has occurred";


// Determine which information should be returned by the API
if (isset($_GET["action"]) && in_array($_GET["action"], $possible_url))
{
  switch ($_GET["action"])
    {
      case "get_person_list":
        $value = get_person_list();
        break;
      case "get_person":
        if (isset($_GET["id"]))
          $value = get_person_by_id($_GET["id"]);
        else
          $value = "Missing argument";
        break;
    }
}

//return JSON array
exit(json_encode($value));
?>