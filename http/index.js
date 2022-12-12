//adicionando a constante
const http = require('http');
//criar servidor http
//listen para indicar a porta
//precisar dar start no servidor
//sempre que tiver alteração no codigo, precisar rodar o servidor de novo
//pausar o servidor é ctrl + c
http.createServer(function(req, res) {
    res.end('Gerenciador Financeiro pika da galaxia');
}).listen(8080)
