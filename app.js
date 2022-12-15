//requerindo o modulo
const Sequelize = require('sequelize');

//
const sequelize = new Sequelize('champs', 'root', '', {
    host : 'localhost',
    dialect : 'mysql'
});

//testando a conexão
//then vai receber a conxão com sucesso,
//catch é quando nao receber
sequelize.authenticate().then(() => {
    console.log('Conexão realizada com sucesso');
}).catch((err) => {
    console.error(`Conexão não realizada. ERRO: ${err} `);
});

//sequelize.model ou define  

const Pagamento = sequelize.define('pagamentos', {
    //atributos
    //criando a tabela pagamentos utilizando define
    nome: {
        type: Sequelize.STRING
    },
    valor: {
        type: Sequelize.DOUBLE
    }
    //criou tambem as colunas ID, createAt e updateAt
});

//para criar a tabela usa sync
//passa obejto force: true como parametro para forçar a criação da tabela.


//criar tabela com sequelize.
//User.sync({force: true});     ****

//criando novos valores na tabela pagamentos.
//mesmo definindo outra coluna no create, nao carrega
//???? siginifica que pegou as informações passadas e as automáticas.
Pagamento.create({
    nome: 'energia',
    valor: 80,
    tipo_Pagamento: 'pix'
});