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

function enviaForm(id){
    /*$(id).submit(function(){

      var answer = $("input[name='cbn']:checked").val();
      var question = $(".thide").val();
      var button = $(this).find('input[type="submit"]');
      button.prop("disabled", true).val("respondido");

      $.ajax({
        type: "GET",
        url: "proc_update_teste.php",
         data: {
              'campo1': answer,
              'campo2': question,
            },
        success: function(result){              
              answer = $("input[name='cbn']:checked").parent().css('background', 'gray');
              answer = $("input[name='cbn']").prop('disabled',true);
              var question = $(".thide").val('');
              var view = $('#resultSend').html(result);
            }
      });      
      return false;
    }); 
    */
    
    alert(document.getElementById(id).getElementsByTagName('input')[1].value);
}

