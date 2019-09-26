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
			$comandoSQL = "insert into proposta_has_obrigacao values((select max(Cliente_has_Servico_id) from proposta), (select idObrigacao from obrigacao where descricao = '".$_GET['obrigacao']."'));";
            $grava = $conecta->prepare($comandoSQL); //testa o comando SQL
			$grava->execute(array()); 			
		} catch(PDOException $e) { // casso retorne erro
			echo('Deu erro: ' . $e->getMessage()); 
		}
	} 
?>