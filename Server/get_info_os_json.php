<?php
	/* prepara o documento para comunicação com o JSON, as duas linhas a seguir são obrigatórias 
	  para que o PHP saiba que irá se comunicar com o JSON, elas sempre devem estar no ínicio da página */
	header("Access-Control-Allow-Origin: *");
	header("Content-Type: application/json; charset=UTF-8"); 
?>

<?php
    include("conexao.php");
 
	try {
		$conecta = new PDO("mysql:host=$servidor;dbname=$banco", $usuario , $senha);
		$consulta = $conecta->prepare('SELECT OS.dtPedido as dtPedido, OS.dtEntrega as dtEntrega, OS.horas as Hrs, OS.quantidade as Qtde, OS.custoKm as KM, OS.detalhamento as Detalhamento, S.descricao as Descricao, OS.horasExtras as Extras, OS.horasNoturnas as Noturnas, OS.local as Local from os OS inner join servico S on S.idServico = OS.Servico_idServico inner join proposta P on P.Cliente_has_Servico_id = OS.Cliente_Cliente_has_Servico_id inner join contatoext ext on ext.idContato = P.ContatoExt_idContato inner join cliente C on C.idCliente = ext.Cliente_idCliente where C.nome = "'.$_GET['cliente'].'"');
		$consulta->execute(array());  
		$resultadoDaConsulta = $consulta->fetchAll();
 		//echo ('SELECT OS.dtPedido as Pedido, OS.dtEntrega as dtEntrega, OS.horas as Hrs, OS.quantidade as Qtde, OS.custoKm as KM, OS.detalhamento as Detalhamento, S.descricao as Descricao, OS.horasExtras as Extras, OS.horasNoturnas as Noturnas, OS.local as Local from os OS inner join servico S on S.idServico = OS.Servico_idServico inner join proposta P on P.Cliente_has_Servico_id = OS.Cliente_Cliente_has_Servico_id inner join contatoext ext on ext.idContato = P.ContatoExt_idContato inner join cliente C on C.idCliente = ext.Cliente_idCliente where C.nome = "'.$_GET['cliente'].'"');
		$StringJson = "[";
 
	if ( count($resultadoDaConsulta) ) {
		foreach($resultadoDaConsulta as $registro) {
 
			if ($StringJson != "[") {$StringJson .= ",";}
            $StringJson .= '{"servico":"' . $registro['Descricao']  . '",';
			$StringJson .= '"quantidade":"' . $registro['Qtde']  . '",';
			$StringJson .= '"detalhamento":"' . $registro['Detalhamento']  . '",';
			$StringJson .= '"dtEntrega":"' . $registro['dtEntrega']  . '",';
			$StringJson .= '"dtPedido":"' . $registro['dtPedido']  . '",';
			$StringJson .= '"horas":"' . $registro['Hrs']  . '",';
			$StringJson .= '"hrsExtras":"' . $registro['Extras']  . '",';
			$StringJson .= '"hrsNoturnas":"' . $registro['Noturnas']  . '",';
			$StringJson .= '"local":"' . $registro['Local']  . '",';
			$StringJson .= '"KM":"' . $registro['KM']  . '"}';
		}  
		echo $StringJson . "]"; // Exibe o vettor JSON
  } 
} catch(PDOException $e) {
    echo 'ERROR: ' . $e->getMessage(); // opcional, apenas para teste
}
?>
