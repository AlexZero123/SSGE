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
		$consulta = $conecta->prepare('SELECT C.nome as "Nome", C.sigla as "Sigla", C.Funcao_idFuncao as "IDF", year(C.dtNasc) as "YNasc", day(C.dtNasc) as "DNasc", month(C.dtNasc) as "MNasc", F.nome as "Funcao" from colaborador C inner join contatoint on Colaborador_idColaborador = C.idColaborador inner join funcao F on F.idFuncao = Funcao_idFuncao where emailPrim ="' . $_GET['entrada'] . '"');
		$consulta->execute(array());  
		$resultadoDaConsulta = $consulta->fetchAll();
 
		$StringJson = "[";
 
	if ( count($resultadoDaConsulta) ) {
		foreach($resultadoDaConsulta as $registro) {
 
			if ($StringJson != "[") {$StringJson .= ",";}
			$StringJson .= '{"nome":"' . $registro['Nome']  . '",';
			$StringJson .= '"funcao":"' . $registro['Funcao']  . '",';
			$StringJson .= '"senha":"' . $registro['Sigla']  . '@' . $registro['IDF'] . $registro['YNasc'] . $registro['DNasc'] . $registro['MNasc'] . '"}';
		}  
		echo $StringJson . "]"; // Exibe o vettor JSON
  } 
} catch(PDOException $e) {
    echo 'ERROR: ' . $e->getMessage(); // opcional, apenas para teste
}
?>
