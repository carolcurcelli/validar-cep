// jquery wrapper

$(function(){

    console.log(`
    
    ／l、         Silent Judging Cat
    (°､ 。７                   is    
     l、 ~～ヽ           Silently
     じし _,)√    Judging you....

    
    `);

    // ações
    
    var onlyNumbers = function(e){
        // console.log(e.target.value);
        this.value = this.value.replace(/\D/g,""); // esse g habilita modo global de pesquisa, possibilitando a substituição de TODO NÚMERO pra asterísco
    }

    var validateEntry = function(){
        // console.log(this.value);
        var cep = this.value;
        if(cep.length < 8){
            $(this).addClass("error").focus();
        }else{
            $(this).removeClass("error");
            getAddress(cep);
        }
    }

    var getAddress = function(cep){
        var endpoint = `https://viacep.com.br/ws/${cep}/json/`
    }

    // eventos
    
    $("#cep")
    .on("input",onlyNumbers)
    .on("focusout",validateEntry);
    
});