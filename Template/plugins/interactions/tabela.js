'use strict';

class Tabela {

    constructor(url_base) {
      this.url_base = url_base;
    }

    carregaTabela (nome , table){
        //alert(nome + " - " + table);
        let xhr = new XMLHttpRequest();
        var url = this.url_base;
        const t = this;
        switch (nome){
            case 'InputServiço': url += "get_dado_json.php?campo=descricao&tabela=servico"
            break;
            //case 'Serviço': url += "get_dado_json.php?campo=descricao&tabela=servico";
            break;
            case 'Cliente': url += "get_ciente_json.php";
            break;
            case 'OS': url += "get_os_json.php";
            break;
            case 'Proposta': url += "get_proposta_json.php";
            break;
            case 'Contato': url += "get_contato_json.php";
            break;

        }
        xhr.open('GET', url);
        xhr.send();
        xhr.onload = function() {
            //alert(url);
          if (xhr.status != 200) { // analyze HTTP status of the response
            alert(`Error ${xhr.status}: ${xhr.statusText}`); // e.g. 404: Not Found
          } else { // show the result
                var dados = JSON.parse(xhr.responseText); //faz a conversão do texto da WEB para JSON
              //alert(dados);
                switch (nome){
                    case 'InputServiço': document.getElementById(table).innerHTML = t.carregaServicosInput(dados);
                    break;
                    case 'Serviço': document.getElementById(table).innerHTML = t.carregaServicos(dados);
                    break;
                    case 'Cliente': document.getElementById(table).innerHTML = t.carregaCliente(dados);;
                    break;
                    case 'OS': document.getElementById(table).innerHTML = t.carregaOS(dados);;
                    break;
                    case 'Proposta': document.getElementById(table).innerHTML = t.carregaPropostas(dados);;
                    break;
                    case 'Contato': document.getElementById(table).innerHTML = t.carregaContato(dados);;
                    break;
                }

          }
        };
        xhr.onerror = function() {
          alert("Request failed");
        };
    }

    carregaServicosInput (dados) {
        var i, l;
        let conteudo = '<table class="table table-bordered"><tbody><tr><th style="width: 10px">#</th><th>Atividade</th><th style="width: 100px">Valor Unitário</th><th style="width: 80px">Qtde</th></tr>';
                for(i = 0; i < dados.length; i += 4) //dados.length retorna o tamanho do vetor.
                {
                    for(l = 0; l < 4; l++){
                        if(dados[i+l]){
                            conteudo += '<tr><td><input type="checkbox" class="minimal"id="C' + (i+l) + '"></td><td><b id="S' + (i+l) + '">' + dados[i+l].nome + '</b></td><td><input type="number" class="form-control"id="V' + (i+l) + '"></td><td><input type="number" class="form-control"id="Q' + (i+l) + '"></td></tr><tr><td></td><td><b>Escopo:</b><br><textarea id="E' + (i+l) + '" class="form-control textarea" style="height: 150px"></textarea></td><td><b>Prazo:</b><input type="number" class="form-control"id="P' + (i+l) + '"></td><td></td></tr>';
                            //alert(conteudo);
                        }
                        else{
                            conteudo += '</tbody></table>';
                        }
                    }
                    //conteudo += '</div><div class="col-sm-12">';
                }
        return conteudo;
    }

    carregaServicos (dados) {
        i, l;
        conteudo = '<table class="table table-bordered" id="tabCont"><tbody><tr><th>Serviços</th><th>Escopo</th><th style="width: 100px">Valor Unitário</th><th style="width: 80px">Qtde.</th></tr>';
                for(i = 0; i < dados.length; i += 4) //dados.length retorna o tamanho do vetor.
                {
                    for(l = 0; l < 4; l++){
                        if(dados[i+l]){
                            conteudo += '<tr><td><b>' + dados[(i*4)+l].servico + '</b></td><td>' + dados[(i*4)+l].escopo + '</td><td>' + dados[i+l].preco + '</td>' + dados[(i*4)+l].quantidade + '</td></tr>';
                            //alert(conteudo);
                        }
                        else{
                            conteudo += '</tbody></table>';
                        }
                    }
                    //conteudo += '</div><div class="col-sm-12">';
                }
        return conteudo;
    }

    carregaClientes (dados) {
        i, l;
        conteudo = '<table class="table table-bordered"><tbody><tr><th style="width: 5%">#</th><th>Nome</th><th style="width: 2%">Sigla</th><th style="width: 10%">Cnpj</th><th style="width: 10%">Insc. Municipal</th><th style="width: 30%">Insc. Estadual</th><th style="width: 60%">Endereço</th><th style="width: 10%">Site</th><th style="width: 12%">Info</th></tr>';
        for(i = 0; i < dados.length; i += 4) //dados.length retorna o tamanho do vetor.
                {
                    for(i = 0; i < dados.length; i +=4) //dados.length retorna o tamanho do vetor.
                    {
                        for(l = 0; l < dados.length; l++){
                            conteudo += '<tr><td>' + dados[(i*4)+l].nome + '</td><td>' + dados[(i*4)+l].sigla + '</td><td>' + dados[(i*4)+l].cnpj + '</td><td>' + dados[(i*4)+l].inscMunicipal + '</td><td> ' + dados[(i*4)+l].inscEstadual + '</td><td> ' + dados[(i*4)+l].endereco + '</td><td> ' + dados[(i*4)+l].site + '</td><td> ' + dados[(i*4)+l].info + '</td></tr>';
                                //alert(conteudo);
                            //servicos.push(dados[(i*4)+l].servico);
                            //alert(dados[(i*4)+l].servico);
                        }
                        //conteudo += '</div><div class="col-sm-12">';
                    }
                    //conteudo += '</div><div class="col-sm-12">';
                }
        return conteudo;
    }

    carregaInfoProposta(proposta, querry){
        const url = this.url_base + 'get_info_proposta_json.php?proposta=' + proposta;
        querry.pesquisa(url);
    }

    carregaInfoOS(cliente, querry){
        const url = this.url_base + 'get_info_os_json.php?cliente=' + cliente;
        querry.pesquisa(url);
    }


    montarTabela(tabela, info){
        //alert(dados[0].cliente);
        const dados = info;
        var i, l, servicos = [], conteudo;
        switch(tabela){
            case "Proposta":
                //alert(dados);
                //const dados = JSON.parse(info);
                conteudo = '<table class="table table-bordered" id="tabCont"><thead><tr><th style="width: 30%">Serviço</th><th style="width: 10%">Preço</th><th style="width: 5%">Qtde.</th><th style="width: 5%">Prazo</th><th style="width: 40%">Escopo</th><th style="width: 10%">Edit</th></tr></thead><tbody>';
                for(i = 0; i < dados.length; i +=4) //dados.length retorna o tamanho do vetor.
                {
                    for(l = 0; l < dados.length; l++){
                        conteudo += '<tr><td>' + dados[(i*4)+l].servico + '</td><td>R$ ' + parseFloat(dados[(i*4)+l].preco).toFixed(2) + '</td><td>' + dados[(i*4)+l].quantidade + '</td><td>' + dados[(i*4)+l].prazo + '</td><td> ' + dados[(i*4)+l].escopo + '</td><td><button type="submit" class="btn btn-warning"><i class="fa fa-fw fa-pencil"></i></button><button type="submit" class="btn btn-danger"><i class="fa fa-fw fa-trash"></i></button></td></tr>';
                        //alert(conteudo);
                        servicos.push(dados[(i*4)+l].servico);
                        //alert(dados[(i*4)+l].servico);
                    }
                    //conteudo += '</div><div class="col-sm-12">';
                }
                document.getElementById('tabelaConteudo').innerHTML = conteudo;
                //document.getElementById('script').innerHTML += $("#example1").DataTable();
                break;
            case "OS":
                //alert(dados);
                //const dados = JSON.parse(info);
                conteudo = '<table class="table table-bordered" id="tabCont"><thead><tr><th style="width: 25%">Serviço</th><th style="width: 5%">Qtde.</th><th style="width: 5%">Dt. Pedido</th><th style="width: 5%">Dt. Entrega</th><th style="width: 5%">Hr. Noturnas</th><th style="width: 5%">Hr. Extras</th><th style="width: 40%">Escopo</th><th style="width: 5%">Edit</th></tr></thead><tbody>';
                for(i = 0; i < dados.length; i +=4) //dados.length retorna o tamanho do vetor.
                {
                    for(l = 0; l < dados.length; l++){
                        conteudo += '<tr><td>' + dados[(i*4)+l].servico + '</td><td>' + dados[(i*4)+l].quantidade + '</td><td>' + Basic.dateToPORT(dados[(i*4)+l].dtPedido) + '</td><td> ' + Basic.dateToPORT(dados[(i*4)+l].dtEntrega) + '</td><td> ' + dados[(i*4)+l].hrsNoturnas + '</td><td> ' + dados[(i*4)+l].hrsExtras + '</td><td> ' + dados[(i*4)+l].detalhamento + '</td><td><button type="submit" class="btn btn-warning"><i class="fa fa-fw fa-pencil"></i></button><button type="submit" class="btn btn-danger"><i class="fa fa-fw fa-trash"></i></button></td></tr>';
                        //alert(conteudo);
                        servicos.push(dados[(i*4)+l].servico);
                        //alert(dados[(i*4)+l].servico);
                    }
                    //conteudo += '</div><div class="col-sm-12">';
                }
                document.getElementById('tabelaConteudo').innerHTML = conteudo;
                break;
        }
    }

    carregaInfo (info, tipo, querry){
        //alert(info);
        //alert(tipo);
        const t = this;
        switch(tipo){
            case "Proposta":
                //alert(q);
                t.carregaInfoProposta(info, querry);
                //yield infor;
                var c = setInterval(function(){
                    if(querry.dados != null){
                        let dados = querry.dados;
                        clearInterval(c);
                        //alert(dados);
                        t.montarTabela(tipo, dados);
                    }
                }, 500);
            case "OS":
                //alert(q);
                t.carregaInfoOS(info, querry);
                //yield infor;
                var c = setInterval(function(){
                    if(querry.dados != null){
                        let dados = querry.dados;
                        clearInterval(c);
                        //alert(dados);
                        t.montarTabela(tipo, dados);
                    }
                }, 500);
        }
        return true;
    }

}
