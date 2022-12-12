//para trabalhar com funções em node precisa atribuir a uma variavel
const calcDiscount = function(valProd, valDiscount) {
    return valProd - valDiscount;
}
//para utilizar o modulo, precisa criar ele
module.exports = calcDiscount;