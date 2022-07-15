/*
1)Verifique se a sua idade é a maior do que a de algum parente.
  Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'.
*/
let minhaIdade = 27; 
    idadeParente = 12;

if(minhaIdade > idadeParente) {
    console.log('É maior.')
} else if (minhaIdade === idadeParente) {
    console.log('É igual.');
} else {
    console.log('É menor.');
}

/*
2)Qual valor é retornado da seguinte expressão?
  let expressao = (5 - 2) && (5 - ' ') && (5 - 2);
*/

let expressao = (5 - 2) && (5 - ' ') && (5 - 2);
console.log(expressao);

/*
3)Verifique se as seguintes variáveis são Truthy ou Falsy
*/

let nome = 'Igor'; // true
let idade = 28; // true
let possuiDoutorado = false; // false
let empregoFuturo; // false
let dinheiroNaConta = 0; //false

console.log(!!nome, !!idade, !!possuiDoutorado, !!empregoFuturo, !!dinheiroNaConta);

/*
4)Compare o total de habitantes do Brasil com China (valor em milhões);
*/

let brasil = 207e10; // e10 retorna 10 digitos 0
let china = 1340e10;

if(brasil > china) {
    console.log('Brasil é maior');
} else {
    console.log('China é maior.');
}

/*
5)O que irá aparecer no console?
*/
if(('Gato' === 'gato') && (5 > 2)) {
    console.log('Verdadeiro');
} else {
    console.log('Falso');
}
//Vai aparecer falso.

/*
6)O que irá aparecer no console?
*/
if(('Gato' === 'gato') || (5 > 2)) {
    console.log('Gato' && 'Cão'); // Tudo verdadeiro no && vai ser a última expressão
} else {
    console.log('Falso');
}