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
		$consulta = $conecta->prepare('SELECT '.$_GET['campo'].' FROM '.$_GET['tabela']);
		$consulta->execute(array());  
		$resultadoDaConsulta = $consulta->fetchAll();
 
		$StringJson = "[";
 
	if ( count($resultadoDaConsulta) ) {
		foreach($resultadoDaConsulta as $registro) {
 
			if ($StringJson != "[") {$StringJson .= ",";}
            switch ($_GET['campo']){
                    case 'nome': $StringJson .= '{"nome":"' . $registro['nome']  . '"}';
                    break;
                    case 'descricao': $StringJson .= '{"nome":"' . $registro['descricao']  . '"}';
                    break;
                    case 'sigla': $StringJson .= '{"nome":"' . $registro['sigla']  . '"}';
                    break;
            }
		}  
		echo $StringJson . "]"; // Exibe o vettor JSON
  } 
} catch(PDOException $e) {
    echo 'ERROR: ' . $e->getMessage(); // opcional, apenas para teste
}
?>
