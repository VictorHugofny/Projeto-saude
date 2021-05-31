const express = require("express"); 
const app = express(); //inciando express

app.listen(8080,function(erro){
    if (erro){
        console.log("erro");
    }
    else{
        console.log("servidor iniciado")
    }
}) //iniciando servidor
