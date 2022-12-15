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
})


//query para inserir dados no DB champs; pois a credencial connection
//acessa ele.

// connection.query("insert into users values (default,'Ana','ana@email.com'),(default,'Irineu','irineu@emial.com');", (err, res) => {
//     //nao teve erro.
//     //nessa conexão, o comando sql funcionou
//     if(!err) {
//         console.log('Usuário Cadastrado com sucesso!');
//     }else{
//         console.log('Erro ao cadastrar usuário.');
//     }
// })

// =====================================
    
//fazer alterações no DB
//modo de inserção correta
// connection.query("update users set nome = 'Oswanildo', email = 'oswanildo@email.com' where id = 7;", (err, res) => {
//     if(!err) {
//         console.log('Usuario editado com sucesso');
//     }else{
//         console.error('Erro: o usuário nao foi editado com sucesso.');
//     }
// });

// =====================================

//deletar dados do DB
//sintaxe correta
connection.query("delete from users where id = 6;", (err, res) => {
    if (!err) {
        console.log('Linha de informação removida.');
    }else{
        console.error('Erro ao remover linha de informação.');
    }
})


//pegar dados do DB
//mesma query para pegar informações no workbench
connection.query('SELECT * FROM users', (err, rows, fields) => {
    //se nao teve nenhum erro, vai mostrar o resultado
    if(!err) {
        console.log(`RESULTADO: `, rows);
        //(`REsultado: ${rows}`) dá errado.
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
app.listen(8080);
//localhost:8080
//na pasta raiz digita node index.js