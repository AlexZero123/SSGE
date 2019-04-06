function show_hide(ident) {
    if (document.getElementById(ident).style.display === 'none') {
        document.getElementById(ident).style.display = 'block';
    } else {
        document.getElementById(ident).style.display = 'none';
    }
}

function duplicarCampos(origem, destino) {

    var clone = document.getElementById(origem).cloneNode(true);
    var inputsClone = clone.getElementsByTagName('input'); // todos os inputs clonados

    for (var i = 0; i < inputsClone.length; i++) {
       inputsClone[i].value = '';
    }

    document.getElementById(destino).appendChild(clone); // todos inputs clonados "limpos"
}

function destruirCopia(destino, id) {
    document.getElementById(destino).removeChild(document.getElementById(destino).childNodes[0])
}
//<no_use>
function construct_form(idTab, thisId) {
    document.getElementById(thisId).innerHTML = document.getElementById(idTab).innerHTML;
} 
//<no_use>
function trataForm(ident) {
    if(document.getElementById(ident).value == '') //teste
        prompt(null);
}

function carregaCombo(nome, combo) {
    let xhr = new XMLHttpRequest();
    url = 'http://localhost/bancos/sqp/get_dados_json.php?campo=';
    switch (nome){
        case 'Cliente': url += "nome&tabela=cliente";
        break;
        case 'Inspetor': url += "sigla&tabela=colaborador";
        break;
        case 'Descrição': url += "descricao&tabela=servico";
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
                var elem = document.createElement('option');
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

function carregaLista(nome, container) {
    let xhr = new XMLHttpRequest();
    url = 'http://localhost/bancos/sqp/get_dados_json.php?campo=';
    switch (nome){
        case 'Serviço': url += "descricao&tabela=servico";
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
            var i, l;
             var conteudo = '<div class="col-sm-12">';
            for(i = 0; i < dados.length; i += 4) //dados.length retorna o tamanho do vetor.
            {
                for(l = 0; l < 4; l++){
                    if(dados[i+l]){
                        conteudo += '<label class="col-sm-3"><input type="checkbox" class="minimal" id="radioServico' + i+l + '" value="' + dados[i+l].nome + '">' + dados[i+l].nome + '</label>';
                        //alert(conteudo);
                    }
                }
                if (dados[i+l]) {
                conteudo += '</div><div class="col-sm-12">';
                } else {
                    conteudo += '</div></div>';
                }
            }
            document.getElementById(container).innerHTML = conteudo;
      }
    };
    xhr.onerror = function() {
      alert("Request failed");
    };
}
//<no_use>
function carregaValores(form) {
    alert(form);
    var elementos = [];
    switch(form){
        case "OS":
            elementos.push(document.getElementById('comboClienteOs').value);
            elementos.push(document.getElementById('inputHorasQtde').value);
            elementos.push(document.getElementById('comboLocal').value);
            elementos.push(document.getElementById('comboDescricao').value);
            elementos.push(document.getElementById('datepickerSolicitacao').value);
            //elementos.append(document.getElementById('comboInspetor').value);
            elementos.push(document.getElementById('inputDetalhamento').value);
        break;
    }
    alert(elementos);
}

function clearInput(){
    var elementos =  document.getElementsByTagName("input");
    for (var i = 0; elementos.length; i++){
        elementos[i].value = "";
    }
}

function clearSelect(){
    var elementos = document.getElementsByTagName("select");
    for (var i = 0; elementos.length; i++){
        elementos[i].value = "";
    }
}

function clearTextarea(){
    var elementos = document.getElementsByTagName("textarea");
    for (var i = 0; elementos.length; i++){
        elementos[i].value = "";
    }
}
    
function clearChecks(){
    var elementos = document.getElementsByClassName("minimal");
    for (var i = 0; elementos.length; i++){
        elementos[i].checked = "false";
    }
}

function dateToEN(date) {	 
    return date.split('/').reverse().join('-'); 
} 


function formatarDatas(datepickers){
    if (datepickers.length > 1){
        for(var i = 0; i < datas.length; i++){
            alert('olá');
            document.getElementById(datepickers[i]).value = dateToEN(document.getElementById(datepickers[i]).value);
            alert('foi');
        }
    } else {
        var new_value = dateToEN(document.getElementById(datepickers).value);
        document.getElementById(datepickers).value = new_value;
    }
    
}

/*
function formatarHoras(){
     
}*/