class Combo {
    constructor(url_base) {
      this.url_base = url_base;
    }
    
    selecionaCarregaCombo(nome, combo){
        var url = this.url_base + 'get_dado_json.php?campo=';
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
            case 'Condição': url += "descricao&tabela=forma_pagamento";
            break;
            case 'ContatoExt': url += "nome&tabela=funcao";
            break;
        }
        this.carregaCombo(url, combo);
    }
    
    carregaCombo(url, combo) {
        var qCombo = document.getElementById(combo);
        /*
        var length = select.options.length;
        for (i = 0; i < length; i++) {
          select.options[i] = null;
        }
        */
        let xhr = new XMLHttpRequest();
        //alert(url);
        xhr.open('GET', url);
        xhr.send();
        xhr.onload = function() {
            //alert('ok send '+url);
          if (xhr.status != 200) { // analyze HTTP status of the response
            alert(`Error ${xhr.status}: ${xhr.statusText}`); // e.g. 404: Not Found
          } else { // show the result
              //alert('NOT ERROR: ' + url)
                var dados = JSON.parse(xhr.responseText); //faz a conversão do texto da WEB para JSON
                var i, j = 0;
                for(i = 0; i < dados.length; i++) //dados.length retorna o tamanho do vetor.
                {
                    if(dados[i].nome != "Geral" && dados[i].nome != "ADMIN"){
                        var elem = document.createElement('option');
                        elem.value = dados[i].nome;
                        elem.text  = dados[i].nome;
                        j++;
                        qCombo.add(elem, qCombo.options[j])
                    //alert(i + ' - ' + qCombo.id);
                    }
                }
          }
        };
        xhr.onerror = function() {
          alert("Request failed: " + url);
        };
    }
    
    limpaCombo(comboF, comboP){
        //alert("entrou");
        var select = document.getElementById(comboF);
        var cont = parseInt(select.options.length);
        //alert(select.selectedIndex);
        document.getElementById(comboP).selectedIndex = 0;
        for (var i = cont - 1; i > 0; i--) {
            //alert(i);
            //alert(select.options[i].value);
            select.remove(i);
        }
        select.remove(0);
    }
    
    //Especialização
    
    carregaComboProposta(combo) {
        //alert(2);
        let xhr = new XMLHttpRequest();
        //alert('entrou');
        xhr.open('GET', 'http://krasengenharia.com.br/server/get_propostas_json.php');
        xhr.send();
        xhr.onload = function() {
          //alert('ok send');
          if (xhr.status != 200) { // analyze HTTP status of the response
            alert(`Error ${xhr.status}: ${xhr.statusText}`); // e.g. 404: Not Found
          } else { // show the result
              var dados = JSON.parse(xhr.responseText); //faz a conversão do texto da WEB para JSON
              //alert(dados);
              var qCombo = document.getElementById(combo);
                var i;
              //alert(dados.length);
                for(i = 0; i < dados.length; i++) //dados.length retorna o tamanho do vetor.
                {
                    var elem = document.createElement('option');
                    //alert(dados[i].id);
                    elem.value = dados[i].id;
                    elem.text  = dados[i].ano + "" + dados[i].mes + "" + dados[i].dia + "-" + dados[i].emissor + "-" + dados[i].sequencia + " - Rev." + dados[i].revisao;
                    qCombo.add(elem, qCombo.options[i]);
                    //alert(i + ' - ' + qCombo.id);
                }
          }
        };
        xhr.onerror = function() {
          alert("Request failed");
        };
    }
    
    carregaComboContato(nome, combo, filtro) {
        document.getElementById(combo).innerHTML="<select id='comboContato' class='form-control select2' style='width: 100%;'><option></option></select>";
        let xhr = new XMLHttpRequest();
        var url = this.url_base + 'get_contatos_json.php?tabela=';
        switch (nome){
            case 'Externo': url += "contatoext&filtro=" + document.getElementById(filtro).value;
            break;
            case 'Interno': url += "contatoint&filtro=" + document.getElementById(filtro).value;
            break;
        }
        //alert(url);
        //alert(document.getElementById(combo).options[0].value);
        this.carregaCombo(url, combo);
        //document.getElementById(combo).options[0].selected = true;
        //alert(document.getElementById(combo).options[0].value);
    }
}