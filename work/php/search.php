<?php
/* **********
Olakunle Ibrahim
//Inspiration from polodev
*******/

require 'db.php';
$sql = 'SELECT * FROM crudtable'; 
$statement = $connection -> prepare($sql);
$statement -> execute();
$crudtable = $statement -> fetchAll(PDO::FETCH_OBJ);
?>

<?php require 'header.php'; ?>

<div class="container">
	<div class="card mt-5">
		<div class="card-header">
			<h1>Search Member Data</h1>	
		</div>
		<div class="card-body">
			
			
		</div>
		
	</div>
	
</div>



<?php require 'footer.php';  ?>