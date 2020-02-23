<?php

$dsn = 'mysql:host=Localhost;dbname=crud;charset=UTF8';
$username = 'root';
$password = '2402';
$options = [];
//echo "Am here...\n";

try {

	$connection = new PDO($dsn, $username, $password, $options);
	//echo "Connection succesful\n";
 	
 } catch (PDOException $e) {

 	//echo "Error here\n $e\n";
 	
 } 
 