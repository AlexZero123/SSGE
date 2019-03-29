<?php
header('Content-type: text/html; charset=utf-8');
setlocale( LC_ALL, 'pt_BR.utf-8');
mb_internal_encoding('UTF8');
mb_regex_encoding('UTF8'); 
// Carrega os dados da conexão!
 $servidor = 'localhost';
 $usuario = 'root';
 $senha = 'vertrigo';
 $banco = 'mybd'; 	
	if ($_GET) 
	{
		try { 
			$conecta = new PDO("mysql:host=$servidor;dbname=$banco", $usuario , $senha); //istancia a classe PDO
			$comandoSQL = "call inserirColaborador('".$_GET['nome']."', '".$_GET['sexo']."', '".$_GET['dtNasc']."', '".$_GET['localNasc']."', '".$_GET['estdCivil']."', '".$_GET['etinia']."', '".$_GET['nomeMae']."', '".$_GET['nomePai']."', '".$_GET['pais']."', '".$_GET['endereco']."', '".$_GET['complemento']."', '".$_GET['resPropria']."', '".$_GET['resFgts']."', '".$_GET['escolaridade']."', '".$_GET['contato']."', '".$_GET['funcao']."', '".$_GET['defMotor']."', '".$_GET['defVisual']."', '".$_GET['defAuditiva']."', '".$_GET['obsDef']."', '".$_GET['empresa']."', '".$_GET['cnpj']."', '".$_GET['obsEmpresa']."', '".$_GET['remuneracao']."', '".$_GET['sigla']."');";
            $grava = $conecta->prepare($comandoSQL); //testa o comando SQL
			$grava->execute(array()); 			
		} catch(PDOException $e) { // casso retorne erro
			echo('Deu erro: ' . $e->getMessage()); 
		}
        
        try { 
			$conecta = new PDO("mysql:host=$servidor;dbname=$banco", $usuario , $senha); //istancia a classe PDO
			$comandoSQL = "call inserirIdentificacao('".$_GET['cpf']."', '".$_GET['nisPisPasepInss']."', '".$_GET['ctps']."', '".$_GET['serie']."', '".$_GET['dtExpedicaoCtps']."', '".$_GET['rg']."', '".$_GET['cnh']."', '".$_GET['categoriaCnh']."', '".$_GET['dtValidade']."', '".$_GET['tituloEleitor']."', '".$_GET['zona']."', '".$_GET['secao']."', '".$_GET['numReservista']."', '".$_GET['categoriaReservista']"');";
            $grava = $conecta->prepare($comandoSQL); //testa o comando SQL
			$grava->execute(array()); 			
		} catch(PDOException $e) { // casso retorne erro
			echo('Deu erro: ' . $e->getMessage()); 
		}
	} 
?>