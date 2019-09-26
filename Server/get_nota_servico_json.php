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
		$consulta = $conecta->prepare('SELECT N.descricao as Descricao from Nota_Tipo_Servico N inner join Nota_Tipo_Servico_has_Tipo_Servico NT on NT.Nota_Tipo_Servico_idNota_Tipo_Servico = N.idNota_Tipo_Servico where NT.Tipo_Servico_idTipo_Servico = (SELECT Tipo_Servico_idTipo_Servico from servico where descricao = "' . $_GET['servico'] . '")');
		$consulta->execute(array());  
		$resultadoDaConsulta = $consulta->fetchAll();
 
		$StringJson = "[";
 
	if ( count($resultadoDaConsulta) ) {
		foreach($resultadoDaConsulta as $registro) {
 
			if ($StringJson != "[") {$StringJson .= ",";}
            $StringJson .= '{"descricao":"' . $registro['Descricao'] . '"}';
		}  
		echo $StringJson . "]"; // Exibe o vettor JSON
  } 
} catch(PDOException $e) {
    echo 'ERROR: ' . $e->getMessage(); // opcional, apenas para teste
}
?>
