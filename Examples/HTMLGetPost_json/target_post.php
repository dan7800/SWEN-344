<html>
  <body>
    
    <?php 
    
      # - Get user responses, set variables - #
      $firstName  = $_POST['fname'];
      $lastName   = $_POST['lname'];
      $age        = $_POST['age'];
      $gender     = $_POST['gender'];
      $state      = $_POST['state'];
      
      include_once 'response.php';
      
    ?>
    
  </body>
</html>
