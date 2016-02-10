<?php

  # - Determine cooler information from this data - #
  
  #determine title (mr or mrs)  
  $title = ($gender == 'male' ? 'Mr.' : 'Mrs.');

  # - present this information back to the user - #

  #say hello
  $greeting = <<<EOD
    Hello $title $firstName $lastName from $state!
EOD;
  echo "$greeting </br></br>";
  
  #tell them when they were born
  $year_born = getBirthYear($age);
  echo "You were born in $year_born </br></br>";
  
  #tell them when they turn certain ages 
  for($x = 10; $x <= 100; $x+=10){
    if($x >= $age){
      $year = $year_born+$x;
      echo "You will turn $x in $year </br>";
    }
  }
  
  # - helper functions - #
  function getBirthYear($age_param){
    $current_year = date("Y");
    return $current_year-$age_param-1;
  }
?>