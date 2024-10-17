const listaDeAlunos = [ { nome: 'Ana', nota: 8 },{ nome: 'Carlos', nota: 5 },{nome: 'João', nota: 7 }];
for (i in listaDeAlunos){
    if (listaDeAlunos[i].nota < 7){
        console.log(`${listaDeAlunos[i].nome} reprovado`)
    }
    else{
        console.log(`${listaDeAlunos[i].nome} aprovado`)
    }
}