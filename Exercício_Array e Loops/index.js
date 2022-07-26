/*
    Crie uma array com os anos que o Brasil ganhou a copa: 1959, 1962, 1970, 1994, 2002.
    Interaja com a array utilizando um loop, para mostrar no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`

*/
let copasGanhas = [1959, 1962, 1970, 1994, 2002];
for(let i = 0; i < copasGanhas.length; i++) {
    console.log(`O brasil ganhou a copa de ${copasGanhas[i]}.`);
}

/*
    Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
*/
let frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância'];
for (let i = 0; i < frutas.length; i++) {
    console.log(`Frutas: ${frutas[i]}.`);

    if(frutas[i] === 'Pera') {
        console.log(`Para em ${frutas[i]}.`);
        break;
    }
}

/*
    Coloque a última fruta da array acima em uma variável, sem remover a mesma da array.
*/
let ultimaFruta = frutas[frutas.length - 1];

// ultimaFruta retorna 'Melância'
// frutas retorna ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância'];