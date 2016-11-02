<?php
// Start the session
session_start();
?>
<!DOCTYPE html>
<html>
<body>


<h3>Sessions are cleared</h3>

<?php
// Set session variables
$_SESSION["username"] = "";

?>



<a href="session1.php">Set sessions</a>




</body>
</html>