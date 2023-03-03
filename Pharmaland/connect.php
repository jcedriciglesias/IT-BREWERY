<?php 
$username = filter_input(INPUT_POST 'username');
$username = filter_input(INPUT_POST 'password');
if (!empty($username)) {
if (!empty($password)) {
	$host = "localhost";
	$dbusername = "root";
	$dbpassword ="";
	$dbhome = "youtube";

	}
	else{
		echo "Password should not be empty";
		die();
	}
}
else{
	echo "username should not be empty";
	die();
}
?>