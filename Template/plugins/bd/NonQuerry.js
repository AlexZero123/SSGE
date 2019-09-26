//Descometar o trecho abaixo
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

var url_base = "http://krasengenharia.com.br/server/";

function CadastrarColaborador(nome, sexo, dtNasc, localNasc, estdCivil, etinia, nomeMae, nomePai, pais, endereco, complemento, 
                              resPropria, resFgts, identificacao, escolaridade, contato, tipo, funcao, defMotor, defVisual, 
                              defAuditiva, obsDef, empresa, cnpj, obsEmpresa, remuneracao, sigla, cpf, nisPisPasepInss, ctps, serie, dtExpedicaoCtps, rg, cnh, categoriaCnh, dtValidade, tituloEleitor, zona, secao, numReservista, categoriaReservista)
    {
            var url = url_base + "cadastrocolaborador.php?nome=" + nome + "&sexo='" + sexo + "'&dtNasc='" + dtNasc + "'&localNasc='" + localNasc + "'&estdCivil='" + estdCivil + "'&etinia='" + etinia + "'&nomeMae='" + nomeMae + "'&nomePai=" + nomePai + "'&pais='" + pais + "'&endereco='" + endereco + "'&complemento='" + complemento + "'&resPropria='" + resPropria + "&resFgts=" + resFgts + "&escolaridade=" + escolaridade + "&contato=" + contato + "&funcao=" + funcao + "&defMotor=" + defMotor + "&defVisual=" + defVisual + "&defAuditiva=" + defAuditiva + "&obsDef='" + obsDef + "'&empresa='" + empresa + "'&cnpj='" + cnpj + "'&obsEmpresa='" + obsEmpresa + "'&remuneracao='" + remuneracao + "'&sigla='" + sigla + "'&cpf='" + cpf + "'&nisPisPasepInss='" + nisPisPasepInss + "&ctps=" + ctps + "&serie=" + serie + "&dtExpedicaoCtps=" + dtExpedicaoCtps + "&rg=" + rg + "&cnh=" + cnh + "&categoriaCnh=" + categoriaCnh + "&dtValidade=" + dtValidade + "&tituloEleitor='" + tituloEleitor + "'&zona='" +zona + "'&secao='" + secao + "'&numReservista='" + numReservista + "'&categoriaReservista='" + categoriaReservista +  "';";
            AbrirUrlCadastro(url);
    }

function CadastrarOS(dtPedido, dtEntrega, horas, qtde, extras, noturnas, custoKM, cliente, servico, local, colaborador, detalhamento, produto)
    {
		//alert('cadastrando os');
		var url = url_base + "cadastroos.php?dtPedido=" + dtPedido + "&dtEntrega=" + dtEntrega + "&horas=" + horas + "&qtde=" + qtde + "&custoKM=" + custoKM + "&detalhamento=" + detalhamento + "&servico=" + servico + "&cliente=" + cliente + "&extras=" + extras + "&noturnas=" + noturnas + "&colaborador=" + colaborador + "&local=" + local;
        AbrirUrlCadastro(url);
        //alert("Cadastrando...");
    }

function AbrirUrlCadastro(url){
    pop = window.open('', '',"width=350, height=255, top=100, left=110, scrollbars=no");
    pop.document.write('<center><h1>Só um segundo</h1><h2>Finalizando seu Cadastro é realizado</h2><h4>Sua conexão com a internet pode dificultar as coisas</h4></center><iframe src="'+url+'" scrolling="no" height=100% width=100% style="display: none" onload="window.close()">');
}

/*
function testeCadastrarOS(dtPedido, dtEntrega, horas, qtde, extras, noturnas, custoKM, cliente, servico, local, colaborador, detalhamento, produto)
    {
		//alert('cadastrando os');
        var url = "http://krasengenharia.com.br/server/cadastroos.php?dtPedido=2019-07-29&dtEntrega=2019-07-29&horas=01:00:00&qtde=1&custoKM=1&detlhamento=VOID&servico=Transporte / Hospedagem / Alimentação&cliente=Delp&extras=00:00:00&noturnas=00:00:00&colaborador=AS&local=Cliente";
        //alert(url);
        //alert(url);
        pop = window.open('', '',"width=350, height=255, top=100, left=110, scrollbars=no");
        pop.document.write('<iframe src="'+url+'" scrolling="no" height=100% width=100% style="display: none" onload="window.close()"></iframe>');
        //pop.close();
    }
*/

//var dados = {};

function CadastrarServico(descricao, prazo)
    {
        var url = url_base + "cadastroservico.php?descricao=" + descricao + "&prazo=" + prazo;
		//alert(url);
		AbrirUrlCadastro(url);
    }

function CadastrarCliente(nome, sigla, cnpj, iM, iE, endereco, site, info, email, telefone)
    {
		//alert('cadastrando cliente');
		var url = url_base + "cadastrocliente.php?nome='" + nome + "'&sigla='" + sigla + "'&cnpj='" + cnpj + "'&IM='" + iM + "'&IE='" + iE + "'&endereco='" + endereco + "'&site='" + site + "'&info='" + info + "'&email='" + email + "'&telefone='" + telefone +  "'";
		//alert(url);
		AbrirUrlCadastro(url);
    }

function CadastrarContatoExt(nome, email, telefone, cliente, funcao)
    {
		//alert('cadastrando cliente');
		var url = url_base + "cadastrocontatoext.php?nome='" + nome + "'&cliente='" + cliente + "'&funcao='" + funcao + "'&email='" + email + "'&telefone='" + telefone +  "'";
		//alert(url);
		AbrirUrlCadastro(url);
    }

function CadastrarDemonstrativoSimples(cliente, range)
    {
        var datas = $('#reservation span').html().split(' - ');
        localStorage.setItem('client', cliente);
        localStorage.setItem('begin', datas[0]);
        localStorage.setItem('end', datas[1]);
        //window.open('http://krasengenharia.com.br/server/invoice2.html');
        window.open('../pages/invoice2.html');
    }

function CadastrarDemonstrativoSimples2(cliente, dtRange)
    {
		//alert('cadastrando demonstrativo');
		var datas = dtRange.split(' - ');
        //+ start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD')
		var url = url_base + "gerardemonstrativosimples.php?cliente='" + cliente + "'&dtInicio='" + dateToEN(datas[0]) + "'&dtFinal='" + dateToEN(datas[1]) +  "'";
		//alert(url);
		AbrirUrlCadastro(url);
    }

function CadastrarProposta(contato, escopo, colaborador, pagamento, cliente)
    {
		var url = url_base + "cadastroproposta.php?contato=" + contato + "&escopo=" + escopo + "&colaborador=" + colaborador + "&pagamento=" + pagamento + "&cliente=" + cliente +  "";
		//alert(url);
		AbrirUrlCadastro(url);
        //alert(url);
    }

function ComplementaPropostaObrigacoes(obrigacao)
    {
		//alert('entrou - 3');
		var url = url_base + "cadastroobrigacaoproposta.php?obrigacao=" + obrigacao + "";
		//alert(url);
		AbrirUrlCadastro(url);
        //alert(url);
    }

function ComplementaPropostaServicos(servico, preco, quantidade, prazo, escopo)
    {
		//alert('entrou - 4');
		var url = url_base + "cadastroservicoproposta.php?servico=" + servico + "&preco=" + preco + "&quantidade=" + quantidade + "&prazo=" + prazo + "&escopo=" + escopo +  "";
		//alert(url);
		AbrirUrlCadastro(url);
        //alert(url);
    }

function ComplementaPropostaNotas(nota)
    {
		var url = url_base + "cadastronotaproposta.php?nota=" + nota + "";
		//alert(url);
		AbrirUrlCadastro(url);
        //alert(url);
    }


function loadScript(filename,callback){
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.onload = callback;
    fileref.setAttribute("src", filename);
    if (typeof fileref!="undefined"){
        document.getElementsByTagName("head")[0].appendChild(fileref)
    }
}

         
        
function enviaContainerParaCadastro(valores)
	{
        //alert("1");
        const cont = valores.getValoresContainer();
        //alert("2");
        switch (valores.getContainer().id){
			case 'formOS':
				CadastrarOS(cont.inputs[0], cont.inputs[1], cont.inputs[2], cont.inputs[3], cont.inputs[4], cont.inputs[5], cont.inputs[6], cont.selects[0], cont.selects[1], cont.selects[2], cont.selects[3], cont.textareas[0], null);
			break;
			case 'formCliente':
				//alert("É cliente");
				CadastrarCliente(valores.getValoresContainer().valores.inputs[0], valores.getValoresContainer().valores.inputs[4], valores.getValoresContainer().valores.inputs[1], valores.getValoresContainer().valores.inputs[3], valores.getValoresContainer().valores.inputs[2], (valores.getValoresContainer().valores.inputs[7] + ", " + valores.getValoresContainer().valores.inputs[8] + ", " + valores.getValoresContainer().valores.inputs[9]+ ", " + valores.getValoresContainer().valores.inputs[6] + ", " + valores.getValoresContainer().valores.selects[0] + ", " + valores.getValoresContainer().valores.inputs[5]+ ". " +  valores.getValoresContainer().valores.inputs[10]), valores.getValoresContainer().valores.inputs[11], valores.getValoresContainer().valores.textareas[0], valores.getValoresContainer().valores.inputs[12], valores.getValoresContainer().valores.inputs[13]);
				if(valores.getValoresContainer().valores.inputs[14] != 0) {CadastrarContatoExt(valores.getValoresContainer().valores.inputs[14], valores.getValoresContainer().valores.inputs[15], valores.getValoresContainer().valoresinputs[16], valores.getValoresContainer().valores.inputs[0], valores.getValoresContainer().valores.selects[1]);}
				if(valores.getValoresContainer().valores.inputs[16] != 0) {CadastrarContatoExt(valores.getValoresContainer().valores.inputs[17], valores.getValoresContainer().valores.inputs[18], valores.getValoresContainer().valores.inputs[19], valores.getValoresContainer().valores.inputs[0], valores.getValoresContainer().valores.selects[2]);}
				if(valores.getValoresContainer().valores.inputs[20] != 0) {CadastrarContatoExt(valores.getValoresContainer().valores.inputs[20], valores.getValoresContainer().valores.inputs[21], valores.getValoresContainer().valores.inputs[22], valores.getValoresContainer().valores.inputs[0], valores.getValoresContainer().valores.selects[3]);}
				if(valores.getValoresContainer().valores.inputs[23] != 0) {CadastrarContatoExt(valores.getValoresContainer().valores.inputs[23], valores.getValoresContainer().valores.inputs[24], valores.getValoresContainer().valores.inputs[25], valores.getValoresContainer().valores.inputs[0], valores.getValoresContainer().valores.selects[4]);}
				if(valores.getValoresContainer().valores.inputs[26] != 0) {CadastrarContatoExt(valores.getValoresContainer().valores.inputs[26], valores.getValoresContainer().valores.inputs[27], valores.getValoresContainer().valores.inputs[28], valores.getValoresContainer().valores.inputs[0], valores.getValoresContainer().valores.selects[5]);}
				if(valores.getValoresContainer().valores.inputs[29] != 0) {CadastrarContatoExt(valores.getValoresContainer().valores.inputs[29], valores.getValoresContainer().valores.inputs[30], valores.getValoresContainer().valores.inputs[31], valores.getValoresContainer().valores.inputs[0], valores.getValoresContainer().valores.selects[6]);}
			break;
            /*case 'formDemonstrativo':
				CadastrarDemonstrativoSimples(valores[0], valores[2], valores[1]);
				if(valores[14] != null) {CadastrarContatoExt(valores[14], valores[15], valores[16], valores[0], valores[33]);}
				if(valores[17] != null) {CadastrarContatoExt(valores[17], valores[18], valores[19], valores[0], valores[34]);}
				if(valores[20] != null) {CadastrarContatoExt(valores[20], valores[21], valores[22], valores[0], valores[35]);}
				if(valores[23] != null) {CadastrarContatoExt(valores[23], valores[24], valores[25], valores[0], valores[36]);}
				if(valores[26] != null) {CadastrarContatoExt(valores[26], valores[27], valores[28], valores[0], valores[37]);}
				if(valores[29] != null) {CadastrarContatoExt(valores[29], valores[30], valores[31], valores[0], valores[38]);}
			break;*/
            case 'formProposta':
				CadastrarProposta(valores.getValoresContainer().valores.selects[1], valores.getValoresContainer().valores.textareas[0], localStorage.getItem("username-colab"), valores.getValoresContainer().valores.selects[2], valores.getValoresContainer().valores.selects[0]);
				for(i = 0; i < valoresTextareasTabela.length; i++){
				//alert('criou');
					if(valores.getValoresContainer().valores.inputsTabela[i*4] == 'checked'){
						ComplementaPropostaServicos(valores.getValoresContainer().valores.bTabela[i*3], valores.getValoresContainer().valores.inputsTabela[1+(i*4)], valores.getValoresContainer().valores.inputsTabela[2+(i*4)], valores.getValoresContainer().valores.inputsTabela[3+(i*4)], valores.getValoresContainer().valores.textareasTabela[i]);
					}
				}
				for(i = 0; i < valoresChecks.length; i++){
					ComplementaPropostaObrigacoes(valores.getValoresContainer().valores.checks[i]);
				}
                //alert((valoresTextareas.length)-2);
                ComplementaPropostaNotas(valores.getValoresContainer().valores.textareas[(valores.getValoresContainer().valores.textareas.length)-1]);
			break;
        }
        //alert("saiu");
	}