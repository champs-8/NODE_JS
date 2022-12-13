//incluindo modulos
const express = require("express");
//instanciando a funcão express
const app = express();


//qual pagina quero abrir
//vou abrir agora um arquivo ao inves de uma frase.
app.get("/", (req, res) => {
    //res.send("Gerenciador de putas");
    //vai pegar o diretório até chegar no app.js
    //depois concatenado com o restante do texto, carrega o arquivo.

    res.sendFile(__dirname + '/src/index.html')
})
app.get("/sobre-empresa", (req, res) => {
    res.send("Página sobre empresa")
})
app.get("/blog", (req, res) => {
    res.send("Página do blog")
})
app.get("/contato", (req, res)=> {
    res.send("Página de contato")
})
//iniciar um servidor
app.listen(8081);
//localhost:8081
//na pasta raiz digita node index.js