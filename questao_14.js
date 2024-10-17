const inverterString = (palindromo) => {
    palindromoInvertido = Array.from(palindromo).reverse().join('')
    if (palindromo == palindromoInvertido){
        return true;
    }
    else{
        return false;
    }
}
console.log(inverterString("Peronny"))
console.log(inverterString("peep"))