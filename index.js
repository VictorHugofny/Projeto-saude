const express = require("express"); 
const app = express(); //inciando express

app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/html/index.html");
});

app.listen(8080,function(erro){ //iniciando servidor
    if (erro){
        console.log("erro");
    }
    else{
        console.log("servidor iniciado")
    }
}) 
