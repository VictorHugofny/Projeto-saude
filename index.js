const express = require("express"); 
const app = express(); //inciando express

app.use(express.static(__dirname + '/public'))

app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/public/");
});

app.listen(8080,function(erro){ //iniciando servidor
    if (erro){
        console.log("erro");
    }
    else{
        console.log("servidor iniciado")
    }
}) 
