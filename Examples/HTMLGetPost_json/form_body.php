First name: <input type="text" name="fname"><br>
Last name:  <input type="text" name="lname"><br>
Age:        <input type="text" name="age"><br>

<!-- gender selection -->
Gender: 
            <input type="radio" name="gender" value="male" checked/> Male
            <input type="radio" name="gender" value="female" /> Female 
            
<br>

<!-- state selection -->
State: 
<select name=state id=statesDropDown>
  
  <?php 
    $json = json_decode( file_get_contents("./states.json") ,true);
    
    foreach($json['states'] as $state){
      echo "<option value=$state>$state</option> </br>";
    }
  ?>
  
</select> 

<input type="submit" value="Submit">