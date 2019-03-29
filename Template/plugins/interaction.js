function show_hide(ident){
    if(document.getElementById(ident).style.display=='none'){
        document.getElementById(ident).style.display='block';
    } else {
        document.getElementById(ident).style.display='none';
    }
}

function duplicarCampos(origem, destino){

    var clone = document.getElementById(origem).cloneNode(true);
    var inputsClone = clone.getElementsByTagName('input'); // todos os inputs clonados

    for (var i = 0; i < inputsClone.length; i++) {
       inputsClone[i].value = '';
    }

    document.getElementById(destino).appendChild(clone); // todos inputs clonados "limpos"
}

function destruirCopia(destino, id){
    document.getElementById(destino).removeChild(document.getElementById(destino).childNodes[0])
}

function construct_form(idTab, thisId){
    document.getElementById(thisId).innerHTML = document.getElementById(idTab).innerHTML;
} 

function trataForm(ident){
    if(document.getElementById(ident).value == '') //teste
        prompt(null);
}

function carregaCombo(nome, combo){
    let xhr = new XMLHttpRequest();
    url = 'http://localhost/bancos/sqp/get_dados_json.php?campo=';
    switch (nome){
        case 'Cliente': url += "nome&tabela=cliente";
        break;
        case 'Inspetor': url += "sigla&tabela=colaborador";
        break;
        case 'Descrição': url += "descricao&tabela=servico";
        break;
        case 'Cliente': url += "cliente";
        break;
        case 'Função': url += "funcao";
        break;
        case 'Certificação': url += "certificacao";
        break;
        case 'Banco': url += "nome&tabela=banco";
        break;
    }
    xhr.open('GET', url);
    xhr.send();
    xhr.onload = function() {
        //alert(combo);
      if (xhr.status != 200) { // analyze HTTP status of the response
        alert(`Error ${xhr.status}: ${xhr.statusText}`); // e.g. 404: Not Found
      } else { // show the result
            var dados = JSON.parse(xhr.responseText); //faz a conversão do texto da WEB para JSON
            qCombo = document.getElementById(combo);
            var i;
            for(i = 0; i < dados.length; i++) //dados.length retorna o tamanho do vetor.
            {
                var elem = document.createElement('option')
                elem.value = dados[i].nome;
                elem.text  = dados[i].nome;
                qCombo.add(elem, qCombo.options[i])
                //alert(i + ' - ' + qCombo.id);
            }
      }
    };
    xhr.onerror = function() {
      alert("Request failed");
    };
}