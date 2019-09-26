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
		$consulta = $conecta->prepare('SELECT P.Cliente_has_Servico_id as ID, CL.sigla as Cliente, CO.sigla as Emissor, P.revisao as Revisao, day(P.data) as D, month(P.data) as M, date_format(P.data, "%y") as A, P.sequencia as Sequencia FROM proposta P inner join contatoext as C on C.idContato = P.ContatoExt_idContato inner join cliente CL on CL.idCliente = C.Cliente_idCliente inner join colaborador CO on CO.idColaborador = P.Colaborador_idColaborador');
		$consulta->execute(array());  
		$resultadoDaConsulta = $consulta->fetchAll();
 
		$StringJson = "[";
 
	if ( count($resultadoDaConsulta) ) {
		foreach($resultadoDaConsulta as $registro) {
 
			if ($StringJson != "[") {$StringJson .= ",";}
            $StringJson .= '{"id":"' . $registro['ID']  . '",';
			$StringJson .= '"emissor":"' . $registro['Emissor']  . '",';
			$StringJson .= '"cliente":"' . $registro['Cliente']  . '",';
			$StringJson .= '"revisao":"' . $registro['Revisao']  . '",';
			$StringJson .= '"dia":"' . $registro['D']  . '",';
			$StringJson .= '"mes":"' . $registro['M']  . '",';
			$StringJson .= '"ano":"' . $registro['A']  . '",';
			$StringJson .= '"sequencia":"' . $registro['Sequencia']  . '"}';
		}  
		echo $StringJson . "]"; // Exibe o vettor JSON
  } 
} catch(PDOException $e) {
    echo 'ERROR: ' . $e->getMessage(); // opcional, apenas para teste
}
?>
