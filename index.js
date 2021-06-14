const express = require("express"); 
const app = express(); //inciando express
const bodyParser = require ('body-parser')

app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static(__dirname + '/public'))

app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/public/");
});

app.post('/teste',(req,resp) =>{
    console.log(req.body)
    resp.send('Teste Feito')
})

app.listen(8080,function(erro){ //iniciando servidor
    if (erro){
        console.log("erro");
    }
    else{
        console.log("servidor iniciado")
    }
}) 
