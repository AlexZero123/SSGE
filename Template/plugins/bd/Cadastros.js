/*
$.getJSON("https://viacep.com.br/ws/" + cep + "/json/?callback=?", function (dados) {

                    if (!("erro" in dados)) {
                        //Atualiza os campos com os valores da consulta.
                        $("#endereco").val(dados.logradouro + ', ' + dados.bairro);
                        $("#cidade").val(dados.localidade);
                        $("#uf").val(dados.uf);
                    } //end if.
                    else {
                        //CEP pesquisado não foi encontrado.
                        limpa_formulário_cep();
                        alert("CEP não encontrado.");
                    }
*/

function CadastrarColaborador(nome, sexo, dtNasc, localNasc, estdCivil, etinia, nomeMae, nomePai, pais, endereco, complemento, 
                              resPropria, resFgts, identificacao, escolaridade, contato, tipo, funcao, defMotor, defVisual, 
                              defAuditiva, obsDef, empresa, cnpj, obsEmpresa, remuneracao, sigla, cpf, nisPisPasepInss, ctps, serie, dtExpedicaoCtps, rg, cnh, categoriaCnh, dtValidade, tituloEleitor, zona, secao, numReservista, categoriaReservista)
    {
        var xmlhttp = new XMLHttpRequest();
            var url = "http://localhost/%5bbancos%5d/sqp/cadastrocolaborador.php?nome=" + nome + "&sexo='" + sexo + "'&dtNasc='" + dtNasc + "'&localNasc='" + localNasc + "'&estdCivil='" + estdCivil + "'&etinia='" + etinia + "'&nomeMae='" + nomeMae + "'&nomePai=" + nomePai + "'&pais='" + pais + "'&endereco='" + endereco + "'&complemento='" + complemento + "'&resPropria='" + resPropria + "&resFgts=" + resFgts + "&escolaridade=" + escolaridade + "&contato=" + contato + "&funcao=" + funcao + "&defMotor=" + defMotor + "&defVisual=" + defVisual + "&defAuditiva=" + defAuditiva + "&obsDef='" + obsDef + "'&empresa='" + empresa + "'&cnpj='" + cnpj + "'&obsEmpresa='" + obsEmpresa + "'&remuneracao='" + remuneracao + "'&sigla='" + sigla + "'&cpf='" + cpf + "'&nisPisPasepInss='" + nisPisPasepInss + "&ctps=" + ctps + "&serie=" + serie + "&dtExpedicaoCtps=" + dtExpedicaoCtps + "&rg=" + rg + "&cnh=" + cnh + "&categoriaCnh=" + categoriaCnh + "&dtValidade=" + dtValidade + "&tituloEleitor='" + tituloEleitor + "'&zona='" +zona + "'&secao='" + secao + "'&numReservista='" + numReservista + "'&categoriaReservista='" + categoriaReservista +  "';";
            xmlhttp.onreadystatechange=function() 
            {
                if (xmlhttp.readyState == 4 && xmlhttp.status == 200) 
                {
                    ConectaServidorF(xmlhttp.responseText);
                }
            }
            xmlhttp.open("GET", url, true);
            xmlhttp.send();
    }

function CadastrarOS(dtPedido, horas, qtde, custoKM, extras, noturnas, cliente, local, colaborador, servico, detalhamento, produto)
    {
		alert('cadastrando os');
        var xmlhttp = new XMLHttpRequest();
            var url = "http://localhost/%5bbancos%5d/sqp/cadastroos.php?dtPedido=" + dtPedido + "&horas='" + horas + "'&qtde='" + qtde + "'&custoKM='" + custoKM + "'&detalhamento='" + detalhamento + "'&produto='" + produto + "'&servico='" + servico + "'&cliente=" + cliente + "'&extras='" + extras + "'&noturnas='" + noturnas + "'&colaborador='" + colaborador + "'&local='" + local +  "';";
            xmlhttp.onreadystatechange=function() 
            {
                if (xmlhttp.readyState == 4 && xmlhttp.status == 200) 
                {
                    ConectaServidorF(xmlhttp.responseText);
                }
            }
            xmlhttp.open("GET", url, true);
            xmlhttp.send();
    }

var dados = {};

function CadastrarServico(descricao, prazo)
    {
        var xmlhttp = new XMLHttpRequest();
            var url = "http://localhost/bancos/sqp/cadastroservico.php?descricao=" + descricao + "&prazo=" + prazo;
            alert(url);
            xmlhttp.onreadystatechange=function() 
            {
                if (xmlhttp.readyState == 4 && xmlhttp.status == 200) 
                {
                    ConectaServidorF(xmlhttp.responseText);
                }
            }
            xmlhttp.open("GET", url, true);
            xmlhttp.send();
    }

function enviaForm(ident){
    var form = $(ident).closest('form');
    // Cria um objeto dados onde será salvo os valores dos inputs
    dados = {};
    var valores = []
    var ind;
    // Cria um laço que percorre todos os input do formulário
    $('input', form).each(function(){
        // Pega o name do input atual do laço
        ind = $(this).attr('id');
        // Adiciona um objeto com o name do formulário e o seu valor
        if(dados[ind] == ""){dados[ind] = null}
        dados[ind] = $(this).val();
        valores.push(dados[ind]);
        //alert(ind + " - " + dados[ind]);
    });
    $('select', form).each(function(){
        ind = $(this).attr('id');
        dados[ind] = $(this).val();
        valores.push(dados[ind]);
        //alert(ind + " - " + dados[ind]);
    });
    $('textarea', form).each(function(){
        ind = $(this).attr('id');
        dados[ind] = $(this).val();
        valores.push(dados[ind]);
        //alert(ind + " - " + dados[ind]);
    });
    var identString = ident.toString();
	alert(identString.valueOf());
    switch (identString.valueOf()){
        case 'formOS':
            alert(oi);
            CadastroOS(null, null, null, null, null, null, null, null, null, null, null, null);
            //alert(valores);
        break;
    }/*
    if (ident == 'formOS'){
		alert(oi);
	}
    */
}

