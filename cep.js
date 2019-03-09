jQuery(function(){


    console.log("init...");

var onlyNumbers=function(e){
    //console.log("onlyNumbers");
    this.value=this.value.replace( /\D/g,"");
    
    
}

var getAddress=function(cep){

    console.log("getAddress");
    $.ajax({
        url:"https://viacep.com.br/ws/"+cep+"/json",
        dataType:"json",
        error:getAddressError,
        success:getAddressSuccess
    });
}

var getAddressError=function(){

    console.log("falhou");
   
}

var getAddressSuccess=function(data){

    console.log(data);
    $("#logradouro").val(data.logradouro);
    $("#bairro").val(data.bairro);
    $("#cidade").val(data.localidade);
    $("#estado").val(data.uf);
  
   
}

var validadeEntry=function(){
    console.log("validadeEntry");
    var cep=this.value;
    console.log(cep);
    if (cep.length===8){
        $(this).removeClass("error");
        getAddress(cep);
    } else {
        $(this).addClass("error");

    }
}

    $("#cep").on("input",onlyNumbers).on("focusout",validadeEntry);
})