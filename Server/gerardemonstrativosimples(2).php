<?php
	/* prepara o documento para comunicação com o JSON, as duas linhas a seguir são obrigatórias 
	  para que o PHP saiba que irá se comunicar com o JSON, elas sempre devem estar no ínicio da página */
	header("Access-Control-Allow-Origin: *");
	header("Content-Type: application/json; charset=UTF-8"); 
?>
<?php
// Carrega os dados da conexão!
include("conexao.php");	
	if ($_GET) 
	{
		try { 
			$conecta = new PDO("mysql:host=$servidor;dbname=$banco", $usuario , $senha); //istancia a classe PDO
			$comandoSQL = "SELECT C.nome as 'Cliente', OS.dtPedido as 'Solicitado', OS.dtEntrega as 'Realizado', OS.horas as 'Horas', OS.horasExtras as 'Extras', OS.custoKM as 'KM', Col.sigla as 'Inspetor', OS.local as 'Local', S.descricao as 'Descrição', OS.detalhamento as 'Detalhamento', OS.quantidade as Quantidade, PS.preco*PS.quantidade as 'Custo' from os OS inner join proposta P on P.Cliente_has_Servico_id = OS.Cliente_Cliente_has_Servico_id inner join contatoext CE on CE.idContato = P.ContatoExt_idContato inner join cliente C on C.idCliente = CE.Cliente_idCliente inner join servico S on S.idServico = OS.Servico_idServico inner join colaborador Col on Col.idColaborador = OS.Colaborador_idColaborador INNER JOIN proposta_has_servico PS on PS.Servico_idServico = S.idServico WHERE C.nome = '".$_GET['cliente']."' and OS.dtPedido > DATE_FORMAT(str_to_date('".$_GET['dtInicio']."', '%d/%m/%Y'), '%Y-%m-%d') and OS.dtPedido <= DATE_FORMAT(str_to_date('".$_GET['dtFinal']."', '%d/%m/%Y'), '%Y-%m-%d') GROUP BY PS.Servico_idServico;";
			
			$consulta = $conecta->prepare($comandoSQL );
		$consulta->execute(array());  
		$resultadoDaConsulta = $consulta->fetchAll();
			
			//echo($comandoSQL);
            $StringJson = "[";
 
	if ( count($resultadoDaConsulta) ) {
		foreach($resultadoDaConsulta as $registro) {
 		//echo("Oi");
			if ($StringJson != "[") {$StringJson .= ",";}
            $StringJson .= '{"cliente":"' . $registro['Cliente']  . '",';
			$StringJson .= '"solicitado":"' . $registro['Solicitado']  . '",';
			$StringJson .= '"realizado":"' . $registro['Realizado']  . '",';
			$StringJson .= '"quantidade":"' . $registro['Quantidade']  . '",';
			$StringJson .= '"horas":"' . $registro['Horas']  . '",';
			$StringJson .= '"extras":"' . $registro['Extras']  . '",';
			$StringJson .= '"km":"' . $registro['KM']  . '",';
			$StringJson .= '"inspetor":"' . $registro['Inspetor']  . '",';
			$StringJson .= '"local":"' . $registro['Local']  . '",';
			$StringJson .= '"descricao":"' . $registro['Descrição']  . '",';
			$StringJson .= '"detalhamento":"' . $registro['Detalhamento']  . '",';
			$StringJson .= '"custo":"' . $registro['Custo']  . '"}';
		} 
		echo $StringJson . "]"; // Exibe o vettor JSON
		}
		//echo("Oi");
        } catch(PDOException $e) { // casso retorne erro
			echo('Deu erro: ' . $e->getMessage()); 
		}
	} 
?>

