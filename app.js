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
    }
    console.log(`Conectado no id ${connection.threadId}`);
})

//pegar dados do DB
//mesma query para pegar informações no workbench
connection.query('select * from users', (err, res, fields) => {
    //se nao teve nenhum erro, vai mostrar o resultado
    if(!err) {
        console.log(`RESULTADO: ${res}`);
    }else{
        console.error("ERRO na consulta");
    }

})


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
app.listen(8081);
//localhost:8081
//na pasta raiz digita node index.js