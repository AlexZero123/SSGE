<?php
header('Content-type: text/html; charset=utf-8');
setlocale( LC_ALL, 'pt_BR.utf-8');
mb_internal_encoding('UTF8');
mb_regex_encoding('UTF8'); 
// Carrega os dados da conexão!
 $servidor = 'localhost';
 $usuario = 'root';
 $senha = 'vertrigo';
 $banco = 'mydb'; 	
	if ($_GET) 
	{
		try { 
			$conecta = new PDO("mysql:host=$servidor;dbname=$banco", $usuario , $senha); //istancia a classe PDO
			$comandoSQL = "call inserirServico('".$_GET['descricao']."', ".$_GET['prazo'].");";
            $grava = $conecta->prepare($comandoSQL); //testa o comando SQL
			$grava->execute(array());
            echo($comandoSQL);
        } catch(PDOException $e) { // casso retorne erro
			echo('Deu erro: ' . $e->getMessage()); 
		}
	} 
?>