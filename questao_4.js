const fatorial = (num) => {
    if (num < 0){
        return "não existe fatorial de numeros negativos"
    }
    if (num == 0){
        return 1 //O fatorial de 0 é sempre 1 
    }
    let fatorial = 1;
    for (i = 1; i < num+1; i++){
        fatorial *= i;
    }
    return fatorial
}
console.log(fatorial(-10))
console.log(fatorial(5))
console.log(fatorial(0))