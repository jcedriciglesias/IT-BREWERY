<!DOCTYPE html>
<html>
<head>
	<title>Pharmaland</title>
	<link rel="stylesheet" type="text/css" href="style.css">
     <link rel="shortcut icon" href="logo.png" type="image/jpeg"/>
</head>
<body>
     <form action="login.php" method="post">
          <center><img src="logo.png" width="100px" height="100px"></center>
     	<h2>Pharmaland</h2>
     	<?php if (isset($_GET['error'])) { ?>
     		<p class="error"><?php echo $_GET['error']; ?></p>
     	<?php } ?>
            <br>
    
     	<label>Username</label>
     	<input type="text" name="uname" placeholder="Username"><br>
            <br>
          <br>
       
     	<label>Password</label>
     	<input type="password" name="password" placeholder="Password"><br>
          <br>
     	<button type="submit">Login</button>
          <a href="signup.php" class="ca">Create an account</a>
     </form>
</body>
</html>