numerosPrimo = (numero) => {
    for (i = 2; i <= Math.sqrt(numero); i++){
        if (numero % i == 0){
            return false
        }
    }
    return true
}
console.log(numerosPrimo(2))
console.log(numerosPrimo(10))
console.log(numerosPrimo(17))
console.log(numerosPrimo(100))