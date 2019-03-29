use V1

delimiter &&
create procedure inserirFormulario (nome varchar(45))
	begin
		insert into Formulario values(null, nome);
    end
&&


delimiter &&
create procedure inserirCampo (nome varchar(45), identCod varchar(45), formulario int)
	begin
		insert into Campo values(null, nome, identCod, formulario);
    end
&&