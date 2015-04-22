<?php
$host           = "localhost"; // Local do Servidor | Normalmente é usado localhost.
$user           = "%"; //Nome de usuário do Sql
$password       = ""; //Senha do servidor
$database       = "dbponto"; // Base de dados


$conexao = mysqli_connect($host,$user,$password,$database) or die("Error " . mysqli_error($link));



?>