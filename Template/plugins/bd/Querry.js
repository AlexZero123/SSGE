'use strict'

class Querry{
    constructor() {
        this._dados = null;
        //this.cont = 0;
        this.url_base = "http://krasengenharia.com.br/server/";    
    }
    /*
    dados() {
        return this._dados;
    }
    dados(d) {
        console.log(d);
        this._dados = d;
    }
    */
    checkStatus(response) {
      if (response.status >= 200 && response.status < 300) {
        return Promise.resolve(response)
      } else {
        return Promise.reject(new Error(response.statusText))
      }
    }

    parseJson(response) {
      return response.json()
    }

    pesquisa(url){
        const t = this;
        alert(url);
        fetch(url)
          .then(this.checkStatus)
          .then(this.parseJson)
          .then(function(data) {
            t.dados = data;
          }).catch(function(error) {
            console.log('Request failed', error);
          });
    }
    
    
    
    /*
    checkStatus(response) {
	  if (response.status >= 200 && response.status < 300) {
	    return Promise.resolve(response);
	  } else {
	    return Promise.reject(new Error(response.statusText));
	  }
	}

	parseJson(response) {
	  return response.json();
	}
    /*
    pesquisa(url)
        {
            fetch(url)
                .then(this.checkStatus)
                .then(this.parseJson)
                .then(function(dados) {
                this.dados = dados;
                //console.log(dados);
                //return true;
                });
        }
    
    isTrue(url){
        fetch(url).then(response =>{
            //console.log(this.cont++);
        this.dados = response.json();
        });
    }
    */
}