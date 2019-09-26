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
		$comand = 'SELECT Con.nome FROM '.$_GET['tabela'].' Con inner join ';
		switch ($_GET['tabela']){
                    case 'contatoext': $comand .= 'cliente C on C.idCliente = Con.Cliente_idCliente where C.nome = "' . $_GET['filtro'] . '";';
                    break;
                    case 'contatoint': $comand .= 'colaborador = "' . $_GET['filtro'] . '"}';
                    break;
            }
		$consulta = $conecta->prepare($comand);
		$consulta->execute(array());  
		$resultadoDaConsulta = $consulta->fetchAll();
 
		$StringJson = "[";
 
	if ( count($resultadoDaConsulta) ) {
		foreach($resultadoDaConsulta as $registro) {
 
			if ($StringJson != "[") {$StringJson .= ",";}
            $StringJson .= '{"nome":"' . $registro['nome']  . '"}';
		}  
		echo $StringJson . "]"; // Exibe o vettor JSON
  } 
} catch(PDOException $e) {
    echo 'ERROR: ' . $e->getMessage(); // opcional, apenas para teste
}
?>
