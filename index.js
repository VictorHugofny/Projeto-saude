const express = require("express"); 
const app = express(); //inciando express

app.get("/",(req,res)=>{
    res.render("index");
});

app.listen(8080,function(erro){ //iniciando servidor
    if (erro){
        console.log("erro");
    }
    else{
        console.log("servidor iniciado")
    }
}) 
