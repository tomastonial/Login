function mostrar(){
    let tipo = document.getElementById("inserirSenha");
    if(tipo.type === "text"){
        tipo.type = "password";
    }else if(tipo.type === "password"){
        tipo.type = "text";
    }
}