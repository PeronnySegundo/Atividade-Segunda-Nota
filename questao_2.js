const somaAteN = (num) => {
    let numSendoSomado = 0;
    for (i = 0; i <= num; i++){
        numSendoSomado += i;
    }
    return numSendoSomado;
}
console.log(somaAteN(20))
console.log(somaAteN(10))
console.log(somaAteN(5))