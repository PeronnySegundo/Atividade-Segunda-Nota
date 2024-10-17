const lista = [1, 3, 5, 6, 9, 12, 24, 50, 100, 333];
let numerosMultiplosDe3 = lista.filter(numero => numero %3 === 0)
console.log(numerosMultiplosDe3)
let quantidade = numerosMultiplosDe3.length;
console.log(quantidade)