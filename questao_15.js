const somaDeMatrizes = (matriz1, matriz2) => {
    for (i = 0; i < matriz1.length; i++){
        matriz1[i] += matriz2[i]
    }
    return matriz1;
}
lista1 = 
[[1], [2], [3],
 [4], [5], [6],
 [7], [8], [9]];
 lista2 = 
 [[10], [20], [30],
  [40], [50], [60],
  [70], [80], [90]];
console.log(somaDeMatrizes(lista1, lista2))
  