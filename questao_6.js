const fila = [];
function adicionarNaFila(item) {
  fila.push(item);
}
function removerDaFila() {
  return fila.shift();
}
adicionarNaFila('Item 1');
adicionarNaFila('Item 2');
console.log(removerDaFila());