const quadradoMaiorQue10 = (listaDeNumeros) => {
    for (i = 0; i < listaDeNumeros.length; i++){
        if (listaDeNumeros[i] > 10){
            numero = listaDeNumeros[i]
            listaDeNumeros[i] = numero *= numero
        }
    }
    return listaDeNumeros
}
let lista = [1,10,20,-9,0,8,30]
console.log(lista)
console.log(quadradoMaiorQue10(lista))