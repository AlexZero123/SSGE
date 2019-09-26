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
			//$conf = "window.opener.localStorage.getItem('t')"
			$conecta = new PDO("mysql:host=$servidor;dbname=$banco", $usuario , $senha); //istancia a classe PDO
			$comandoSQL = "insert into os VALUES(null, '".$_GET['dtPedido']."', '".$_GET['dtEntrega']."', '".$_GET['horas']."', ".$_GET['qtde'].", ".$_GET['custoKM'].", '".$_GET['detalhamento']."', null, (SELECT idServico from servico WHERE descricao = '".$_GET['servico']."'), (SELECT Cliente_has_Servico_id from proposta WHERE Cliente_has_Servico_id = (SELECT IDProposta FROM Info WHERE NomeCliente = '".$_GET['cliente']."' and DescricaoServico = '".$_GET['servico']."')), '".$_GET['extras']."', '".$_GET['noturnas']."', (SELECT idColaborador from colaborador WHERE sigla = '".$_GET['colaborador']."'), '".$_GET['local']."')";
            $grava = $conecta->prepare($comandoSQL); //testa o comando SQL
			$grava->execute(array());
            echo($comandoSQL);
            //echo("<script>window.alert(window.opener.location)</script>");
        } catch(PDOException $e) { // casso retorne erro
			echo('Deu erro: ' . $e->getMessage()); 
		}
	} 
?>
<script type="text/javascript"> 
	alert(window.parent.localStorage.getItem('username-colab'));
</script> 