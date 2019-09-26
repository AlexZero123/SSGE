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
		$consulta = $conecta->prepare('SELECT C.nome as Contato, CL.nome as Cliente, CO.sigla as Emissor, P.revisao as Revisao, day(P.data) as D, month(P.data) as M, date_format(P.data, "%y") as A, P.escopo as Escopo, P.sequencia as Sequencia, F.descricao as FP, C.email as Email, C.telefone as Telefone, N.texto as Nota FROM proposta P inner join forma_pagamento F on F.idForma_Pagamento = P.Forma_Pagamento_idForma_Pagamento inner join contatoext as C on C.idContato = P.ContatoExt_idContato inner join cliente CL on CL.idCliente = C.Cliente_idCliente inner join colaborador CO on CO.idColaborador = P.Colaborador_idColaborador inner join nota_proposta N on N.Proposta_Cliente_has_Servico_id = P.Cliente_has_Servico_id');
		$consulta->execute(array());  
		$resultadoDaConsulta = $consulta->fetchAll();
 
		$StringJson = "[";
 
	if ( count($resultadoDaConsulta) ) {
		foreach($resultadoDaConsulta as $registro) {
 
			if ($StringJson != "[") {$StringJson .= ",";}
            $StringJson .= '{"cliente":"' . $registro['Cliente']  . '",';
			$StringJson .= '"contato":"' . $registro['Contato']  . '",';
			$StringJson .= '"emissor":"' . $registro['Emissor']  . '",';
			$StringJson .= '"revisao":"' . $registro['Revisao']  . '",';
			$StringJson .= '"dia":"' . $registro['D']  . '",';
			$StringJson .= '"mes":"' . $registro['M']  . '",';
			$StringJson .= '"ano":"' . $registro['A']  . '",';
			$StringJson .= '"escopo":"' . $registro['Escopo']  . '",';
			$StringJson .= '"email":"' . $registro['Email']  . '",';
			$StringJson .= '"telefone":"' . $registro['Telefone']  . '",';
			$StringJson .= '"sequencia":"' . $registro['Sequencia']  . '",';
			$StringJson .= '"nota":"' . $registro['Nota']  . '",';
			$StringJson .= '"fp":"' . $registro['FP'] . '"}';
		}  
		echo $StringJson . "]"; // Exibe o vettor JSON
  } 
} catch(PDOException $e) {
    echo 'ERROR: ' . $e->getMessage(); // opcional, apenas para teste
}
?>
