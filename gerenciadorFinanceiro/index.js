console.log("hello World");
const client = 'CHAMPS santos'
console.log(`Cliente : ${client}`);

const valProd = 100;
const valDiscount = 37;

//para incluir o modulo no arquivo utiliza require()
//tambem precisa atribuir a uma variavel
const funcDiscount = require("./modules/calc")
const valFinal = funcDiscount(valProd,valDiscount);

console.log(`O valor final é ${valFinal}`);