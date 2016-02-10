<html>
  <body>
    
    <?php
  
      # - Get user responses, set variables - #
      $firstName  = $_GET['fname'];
      $lastName   = $_GET['lname'];
      $age        = $_GET['age'];
      $gender     = $_GET['gender'];
      $state      = $_GET['state'];

      include_once 'response.php';

    ?>
  </body>
</html>
