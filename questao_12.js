const somarNumeros = (listaDeNumeros) => {
    return listaDeNumeros.reduce((numerosSomados, numero) => numerosSomados + numero, 0)
}
let lista = [1,2,3,4,5,6,7,8,9,10]
console.log(somarNumeros(lista))