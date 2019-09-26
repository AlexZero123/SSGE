class Basic {
    
    constructor(url_base = 'http://krasengenharia.com.br/server/') {
      this.url_base = url_base;
    }
    
    getUrl(){
        return this.url_base;
    }
    
    show_hide(ident) {
        if (document.getElementById(ident).style.display === 'none') {
            document.getElementById(ident).style.display = 'block';
        } else {
            document.getElementById(ident).style.display = 'none';
        }
    }

    dateToEN(date) {	 
        return date.split('/').reverse().join('-'); 
    } 

    static dateToPORT(date) {	 
        return date.split('-').reverse().join('/'); 
    }

    formatarDatas(datepickers){
        if (datepickers.length > 1){
            for(var i = 0; i < datas.length; i++){
                //alert('olá');
                document.getElementById(datepickers[i]).value = dateToEN(document.getElementById(datepickers[i]).value);
                //alert('foi');
            }
        } else {
            var new_value = dateToEN(document.getElementById(datepickers).value);
            document.getElementById(datepickers).value = new_value;
        }

    }

    duplicarCampos(origem, destino) {

        var clone = document.getElementById(origem).cloneNode(true);
        var inputsClone = clone.getElementsByTagName('input'); // todos os inputs clonados

        for (var i = 0; i < inputsClone.length; i++) {
           inputsClone[i].value = '';
        }

        document.getElementById(destino).appendChild(clone); // todos inputs clonados "limpos"
    }

    destruirCopia(destino, id) {
        document.getElementById(destino).removeChild(document.getElementById(destino).childNodes[0])
    }
    
    carregaLista(nome, container) {
        let xhr = new XMLHttpRequest();
        var url = url_base + 'get_dado_json.php?campo=';
        switch (nome){
            case 'Serviço': url += "descricao&tabela=servico";
            break;
            case 'Contratada': url += "descricao&tabela=obrigacao WHERE Obrigacao_Tipo_idObrigcao_Tipo = 1";
            break;
            case 'Contratante': url += "descricao&tabela=obrigacao WHERE Obrigacao_Tipo_idObrigcao_Tipo = 2";
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
                            conteudo += '<label class="col-sm-6"><input type="checkbox" class="minimal" id="' + container.valueOf() + 'Radio' + i+l + '" value="' + dados[i+l].nome + '">' + dados[i+l].nome + '</label>';
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

    clearInput(){
        var elementos =  document.getElementsByTagName("input");
        for (var i = 0; elementos.length; i++){
            elementos[i].value = "";
        }
    }

    clearSelect(){
        var elementos = document.getElementsByTagName("select");
        for (var i = 0; elementos.length; i++){
            elementos[i].value = "";
        }
    }

    clearTextarea(){
        var elementos = document.getElementsByTagName("textarea");
        for (var i = 0; elementos.length; i++){
            elementos[i].value = "";
        }
    }

    clearChecks(){
        var elementos = document.getElementsByClassName("minimal");
        for (var i = 0; elementos.length; i++){
            elementos[i].checked = "false";
        }
    }

    Gravar()
        {
            //alert("entrou");
            var gravaemail = document.getElementById('email').value;
            var gravasenha = document.getElementById('senha').value;
            //alert(gravaemail + " - " + gravasenha)
            var xmlhttp = new XMLHttpRequest();
            var url = this.url_base + 'login_json.php?entrada=' + gravaemail; //https:...
            xmlhttp.onreadystatechange=function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) { ConectaServidor(xmlhttp.responseText); }
            }
            xmlhttp.open("GET", url, true);
            xmlhttp.send();
            alert("Estabelecendo conexão");
            function ConectaServidor(response) {
                alert("Validando dados");
                var dados = JSON.parse(response); //faz a conversão do texto da WEB para JSON
                alert('Entrando');
                if (gravasenha == dados[0].senha){
                    localStorage.setItem("email-colab", gravaemail);
                    //localStorage.setItem("password-colab", gravasenha);
                    localStorage.setItem("function-colab", dados[0].funcao);
                    localStorage.setItem("username-colab", dados[0].nome);
                    window.location='sign.html';
                } else {
                    alert("Credenciais inválidas!");
                }
            }
        }
//module.exports = Valores;
}