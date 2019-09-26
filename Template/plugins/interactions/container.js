class Container {
    constructor(container, tipo_container) {
      this.container = container; this.tipo_container = tipo_container;
    }
    
    getValoresContainer() {
        return this.navegaContainer()  
    }
    
    navegaContainer() {
        //alert("entrou navega container");
        var valores = 
        {
            inputs : [], 
            selects : [], 
            textareas : [], 
            bTabela : [], 
            textareasTabela : [], 
            inputTabela : [], 
            checks : [], 
            form : $(this.container).closest(this.tipo_container)
        };
        var dados = {};
        var ind;
		//alert("criou");
		// Cria um laço que percorre todos os input do formulário
        //alert("criou obj");
		$('td b', valores.form).each(function(){
            //alert("entrou");
			ind = $(this).attr('id');
			dados[ind] = $(this).text();
			valores.bTabela.push(dados[ind]);
			//alert(ind + " - " + dados[ind]);
		});
		$('td input', valores.form).each(function(){
			//alert('entrou 1');
			ind = $(this).attr('id');
			//alert(ind);
			dados[ind] = $(this).val();
			if($(this).is(":checked")){
				dados[ind] = "checked";
			}
			//alert(dados[ind]);
            if($(this).val() == ''){
                dados[ind] = null;}
			valores.inputsTabela.push(dados[ind]);
			//alert(ind + " - " + dados[ind]);
		});
		$('td textarea', valores.form).each(function(){
			ind = $(this).attr('id');
            dados[ind] = $(this).val();
            if($(this).val() == ''){
                dados[ind] = "NA";}
			valores.textareasTabela.push(dados[ind]);
			//alert(ind + " - " + dados[ind]);
		});
		//alert('criou');
		$('select', valores.form).each(function(){
			//alert('entrou');
			ind = $(this).attr('id');
			dados[ind] = $(this).val();
			valores.selects.push(dados[ind]);
			//alert(ind + " - " + dados[ind]);
		});
		$('textarea', valores.form).each(function(){
			ind = $(this).attr('id');
			dados[ind] = $(this).val();
			valores.textareas.push(dados[ind]);
			//alert(ind + " - " + dados[ind]);
		});
		$('input', valores.form).each(function(){
			// Pega o name do input atual do laço
			ind = $(this).attr('id');
			// Adiciona um objeto com o name do formulário e o seu valor
			dados[ind] = $(this).val();
			if(dados[ind] == ""){
				//alert(dados[ind] == null);
				dados[ind] = 0;
			};
			if($(this).is(":checked")){
				dados[ind] = $(this).val();
				valores.checks.push(dados[ind]);
			}
			valores.inputs.push(dados[ind]);
			//alert(ind + " - " + dados[ind]);
		});
        //alert("percorreu");
        //alert("retornou: " + valores.inputs[0]);
        return valores;
    }
    
    preencheContainerTable(info){
        document.getElementById('cabecalho').innerHTML = "" + dados[0].cliente + " - " + dados[0].contato + " - Tel.:" + dados[0].telefone + " - E-mail:" + dados[0].email;
        document.getElementById('nota').innerHTML = dados[0].nota;
    }
}