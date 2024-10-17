const selecionarEDobrar = (lista) => {
    let listaNumerosPares = lista.filter(numero => numero %2 == 0)
    let listaNumerosDobrados = listaNumerosPares.map(numero => numero * 2)
    return listaNumerosDobrados
}
let lista = [1,2,3,4,5,6,7,8,9,10]
console.log(selecionarEDobrar(lista))