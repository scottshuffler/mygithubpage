<?php
    // Connect to MySQL
    include("dbconnect.php");
	$score = $_GET["score"];
	$initials = $_GET["initials"];
	if(isset(score) && !empty(score) AND isset(initials) && !empty(initials);
	$score=mysql_escape_string($score);
	$initials=mysql_escape_string($initials); 
	
    $SQL="INSERT INTO esshuff_Aquarium.Data VALUES ('$initials', '$score')";
	

    header("Location: review_data.php");
?>
