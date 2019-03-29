use V1;

delimiter &&
create procedure inserirFuncao (nome varchar(45), cbo varchar(8), obs varchar(45))
	begin
		insert into Funcao values(null, nome, cbo, obs);
    end
&&

delimiter &&
create procedure inserirPermicao (nome varchar(45))
	begin
		insert into Permicao values(null, nome);
    end
&&

delimiter &&
create procedure relacionarFuncaoPermicao (funcao int, permicao int)
	begin
		insert into Funcao_has_Permicao values(null, funcao, permicao);
    end
&&

delimiter &&
create procedure inserirColaboradorTipo (nome varchar(45), desccricao varchar(100))
	begin
		insert into ColaboradorTipo values(null, nome, descricao);
    end
&&

delimiter &&
create procedure inserirIdentificacao (cpf varchar(14), nisPisPasepInss varchar(45), ctps varchar(7), serie varchar(5), dtExpedicaoCtps date, 
					rg varchar(12), cnh varchar(11), categoriaCnh char(2), dtValidade date, tituloEleitor varchar(12), zona char(3), secao char(4), 
                    numReservista varchar(13), categoriaReservista varchar(15))
	begin
		insert into Identificacao values(cpf, nisPisPasepInss, ctps, serie, dtExpedicaoCtps, rg, cnh, categoriaCnh, dtValidade, tituloEleitor, 
					zona, secao, numReservista, categoriaReservista);
    end
&&

delimiter &&
create procedure inserircContatoInt (fixo varchar(15), movel varchar(16), email1 varchar(45), email2 varchar(45))
	begin
		insert into ContatoInt values(null, fixo, movel, email1, email2);
    end
&&

delimiter &&
create procedure inserirColaborador (nome varchar(55), sexo char(1), dtNasc date, localNasc varchar(45), estdCivil char(1), etinia varchar(15), 
										nomeMae varchar(45), nomePai varchar(45), pais varchar(45), endereco varchar(145), complemento varchar(45), 
                                        resPropria tinyint, resFgts tinyint, escolaridade char(1), contato int, funcao int, defMotor tinyint, 
                                        defVisual tinyint, defAuditiva tinyint, obsDef varchar(150), empresa varchar(50), cnpj varchar(18), 
                                        obsEmpresa varchar(50), remuneracao decimal, sigla varchar(6))
	begin
		insert into funcao values(null, nome, sexo, dtNasc, localNasc, estdCivil, etinia, nomeMae, nomePai, pais, endereco, complemento, resPropria, 
									resFgts, escolaridade, contato, funcao, defMotor, defVisual, defAuditiva, obsDef, empresa, cnpj, obsEmpresa, 
                                    remuneracao, sigla);
    end
&&


delimiter &&
create procedure inserirServico (descricao varchar(150), prazo int)
	begin
		insert into servico values(null, descricao, prazo);
	end
&&


delimiter &&
create procedure gerarDemonstrativo (siglacliente varchar(4), dtBegin date, dtEnd date)
	begin
		select OS.dtPedido, OS.dtEntrega, OS.horas, OS.quantidade, OS.custoKm, Colab.sigla, OS.local, S.descricao, OS.detalhamento, 
        sum(OS.custoKm, OS.horasNoturnas, OS.horasExtras, (OS.quantidade*S.preco)) 
        from os OS inner join colaborador Colab on Colab.id = OS.Colaborador_idColaborador 
        inner join servico S on S.id = OS. Servico_idServico 
        inner join cliente C on C.id = OS.Cliente_idCliente 
        where C.sigla = siglacliente;
	end
&&



