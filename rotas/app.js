//incluindo modulos
const express = require("express");
//instanciando a funcão express
const app = express();

//criando conexão com DB mysql
const mysql =  require("mysql");
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "champs"
});

//vai mostrar se foi conectado ou não
//exemplo da net
connection.connect((err) => {
    if (err) {
        console.error(`Erro de conexão: ${err.stack}`);
        return
        //quando tiver erro, vai retornar e nao vai prosseguir com o ID;
    }
    console.log(`Conectado no id ${connection.threadId}`);
});

//qual pagina quero abrir
//vou abrir agora um arquivo ao inves de uma frase.
app.get("/", (req, res) => {
    //res.send("Gerenciador de putas");
    //vai pegar o diretório até chegar no app.js
    //depois concatenado com o restante do texto, carrega o arquivo.

    res.sendFile(__dirname + '/src/index.html')
})
app.get("/sobre-empresa", (req, res) => {
    res.sendFile(`${__dirname}/src/sobre-empresa.html`)
})
app.get("/blog", (req, res) => {
    res.send("Página do blog")
})
app.get("/contato", (req, res)=> {
    res.send("Página de contato")
})
//iniciar um servidor
app.listen(8080);
//localhost:8080
//na pasta raiz digita node app.js