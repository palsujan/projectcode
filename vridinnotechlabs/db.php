
<?php
	DEFINE ('DB_HOST', 'localhost');
	DEFINE ('DB_USER', 'u868530951_vrid');
	DEFINE ('DB_PASSWORD', '~2|0aWddwKS');
	DEFINE ('DB_NAME', 'u868530951_vridinnodata');
	//Make Connection
	$conn=@mysqli_connect(DB_HOST, DB_USER, DB_PASSWORD);
	if (!$conn)
	{
	    die('Did not connect to MySQL:' .mysqli_connect_error());
	}
	// select the database
	mysqli_select_db($conn, DB_NAME);
?>






