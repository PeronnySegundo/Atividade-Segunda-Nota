function ordenarFrutas(frutas) {
    return frutas.sort((a, b) => a > b ? 1 : -1);
}
const frutas = ['maçã', 'laranja', 'banana'];
console.log(ordenarFrutas(frutas));