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
		$consulta = $conecta->prepare('SELECT S.descricao as Servico, P.prazo as Prazo, P.preco as Preco, P.quantidade as Quantidade, P.escopo Escopo FROM proposta_has_servico P inner join servico S on S.idServico = P.Servico_idServico where Proposta_Cliente_has_Servico_id = (SELECT MAX(Proposta_Cliente_has_Servico_id) from proposta_has_servico)');
		$consulta->execute(array());  
		$resultadoDaConsulta = $consulta->fetchAll();
 
		$StringJson = "[";
 
	if ( count($resultadoDaConsulta) ) {
		foreach($resultadoDaConsulta as $registro) {
 
			if ($StringJson != "[") {$StringJson .= ",";}
            $StringJson .= '{"servico":"' . $registro['Servico']  . '",';
			$StringJson .= '"prazo":"' . $registro['Prazo']  . '",';
			$StringJson .= '"preco":"' . $registro['Preco']  . '",';
			$StringJson .= '"quantidade":"' . $registro['Quantidade']  . '",';
			$StringJson .= '"escopo":"' . $registro['Escopo'] . '"}';
		}  
		echo $StringJson . "]"; // Exibe o vettor JSON
  } 
} catch(PDOException $e) {
    echo 'ERROR: ' . $e->getMessage(); // opcional, apenas para teste
}
?>
