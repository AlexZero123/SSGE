<?php
header('Content-type: text/html; charset=utf-8');
setlocale( LC_ALL, 'pt_BR.utf-8');
mb_internal_encoding('UTF8');
mb_regex_encoding('UTF8'); 
// Carrega os dados da conexão!
 include("conexao.php");
	if ($_GET) 
	{
		try { 
			$conecta = new PDO("mysql:host=$servidor;dbname=$banco", $usuario , $senha); //istancia a classe PDO
			$comandoSQL = "insert into cliente VALUES(null, '".$_GET['nome']."', '".$_GET['sigla']."', '".$_GET['cnpj']."', '".$_GET['IM']."', '".$_GET['IE']."', '".$_GET['endereco']."', '".$_GET['site']."', '".$_GET['info']."');insert into contatoext VALUES(null, 'Geral', '".$_GET['email']."', '".$_GET['telefone']."', (select C.idCliente from cliente C where C.nome = '".$_GET['nome']."'), 9998);";
	            $grava = $conecta->prepare($comandoSQL); //testa o comando SQL
	            $grava->execute(array());
	            echo($comandoSQL);
        	} catch(PDOException $e) { // casso retorne erro
			echo('Deu erro: ' . $e->getMessage()); 
		}
	} 
?>