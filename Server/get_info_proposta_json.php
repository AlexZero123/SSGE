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
		$consulta = $conecta->prepare('select C.nome AS NomeCliente, C.idCliente AS IDCliente, CE.nome AS NomeContato, CE.email as Email, CE.telefone as Telefone ,CE.idContato AS IDContato, S.descricao AS DescricaoServico,S.idServico AS IDServico, P.Cliente_has_Servico_id AS IDProposta, P.revisao AS Revisao, P.data AS DataProposta, P.sequencia AS Sequencia, PS.preco AS Preco, PS.prazo as Prazo, PS.quantidade AS Qtde, PS.escopo as Escopo, NP.texto as Nota from ((((proposta_has_servico PS join proposta P on((P.Cliente_has_Servico_id = PS.Proposta_Cliente_has_Servico_id))) join servico S on((S.idServico = PS.Servico_idServico))) join contatoext CE on((CE.idContato = P.ContatoExt_idContato))) join cliente C on((C.idCliente = CE.Cliente_idCliente))) inner join nota_proposta NP on NP.Proposta_Cliente_has_Servico_id = P.Cliente_has_Servico_id where P.Cliente_has_Servico_id = '.$_GET['proposta']);
		$consulta->execute(array());  
		$resultadoDaConsulta = $consulta->fetchAll();
 
		$StringJson = "[";
 
	if ( count($resultadoDaConsulta) ) {
		foreach($resultadoDaConsulta as $registro) {
 
			if ($StringJson != "[") {$StringJson .= ",";}
            $StringJson .= '{"servico":"' . $registro['DescricaoServico']  . '",';
            		$StringJson .= '"idservico":"' . $registro['IDServico']  . '",';
			$StringJson .= '"preco":"' . $registro['Preco']  . '",';
			$StringJson .= '"quantidade":"' . $registro['Qtde']  . '",';
			$StringJson .= '"contato":"' . $registro['NomeContato']  . '",';
			$StringJson .= '"cliente":"' . $registro['NomeCliente']  . '",';
			$StringJson .= '"idcliente":"' . $registro['IDCliente']  . '",';
			$StringJson .= '"sigla":"' . $registro['Emissor']  . '",';
			$StringJson .= '"revisao":"' . $registro['Revisao']  . '",';
			$StringJson .= '"dia":"' . $registro['D']  . '",';
			$StringJson .= '"mes":"' . $registro['M']  . '",';
			$StringJson .= '"ano":"' . $registro['A']  . '",';
			$StringJson .= '"escopoii":"' . $registro['Escopo']  . '",';
			$StringJson .= '"sequencia":"' . $registro['Sequencia']  . '",';
			$StringJson .= '"descricao":"' . $registro['Descricao']  . '",';
			$StringJson .= '"email":"' . $registro['Email']  . '",';
			$StringJson .= '"telefone":"' . $registro['Telefone']  . '",';
			$StringJson .= '"escopo":"' . $registro['Escopo']  . '",';
			$StringJson .= '"prazo":"' . $registro['Prazo']  . '",';
			$StringJson .= '"nota":"' . $registro['Nota']  . '"}';
		}  
		echo $StringJson . "]"; // Exibe o vettor JSON
  } 
} catch(PDOException $e) {
    echo 'ERROR: ' . $e->getMessage(); // opcional, apenas para teste
}
?>
