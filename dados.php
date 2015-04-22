<?php
include 'conecta.php';

header("Access-Control-Allow-Origin: *");

$sql = mysqli_query($conexao,"SELECT * 
					  			FROM lugares");

	while($row = mysqli_fetch_array($sql)) {

		$row['foto_lugar'] = 'Imagens/'.$row['foto_lugar'];

		$result[] = $row; 
    }

// var_dump($result);

$imp = json_encode($result);

echo $imp;

mysqli_close($conexao); 

?>
