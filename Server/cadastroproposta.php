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
			$comandoSQL = "insert into proposta values(null, (select idContato from contatoext where nome = '".$_GET['contato']."' and Cliente_idCliente = (select idCliente from cliente where nome = '".$_GET['cliente']."')), 1, current_date(), '".$_GET['escopo']."', (select idColaborador from colaborador where nome = '".$_GET['colaborador']."'), null, (select idForma_Pagamento from forma_pagamento where descricao = '".$_GET['pagamento']."'), null);";
			$grava = $conecta->prepare($comandoSQL); //testa o comando SQL
			$grava->execute(array()); 			
		} catch(PDOException $e) { // casso retorne erro
			echo('Deu erro: ' . $e->getMessage()); 
		}
	} 
?>