const mostrarNumeros = (num1, num2) => {
    if (num1 < num2){
        console.log(`O numero ${num2} é maior que o ${num1}`)
    }
    else{
        console.log(`O numero ${num1} é maior que o ${num2}`)
    }
    console.log(`A soma entre eles é: ${num1 + num2}`)
}
mostrarNumeros(100, 200);
mostrarNumeros(900, 200);
mostrarNumeros(321.32121, 5435.56546);