const trocarFruta = (listaDeFrutas, fruta) => {
    listaDeFrutas.splice(1, 1, fruta);
    return listaDeFrutas
}
let listaDeFrutas = ["maçã", "banana", "laranja"]
let novaFruta = "uva"
console.log(trocarFruta(listaDeFrutas, novaFruta))