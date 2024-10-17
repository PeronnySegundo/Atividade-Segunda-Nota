const verificadorDeIdade = (idade) => {
    if (idade < 18){
        return "menor de idade"
    }
    else {
        return "maior de idade"
    }
}
console.log(verificadorDeIdade(19))
console.log(verificadorDeIdade(18))
console.log(verificadorDeIdade(17))