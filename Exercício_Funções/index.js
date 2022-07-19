/*
Crie uma função para verificar se um valor é Truthy
*/
function verifica(valor) {
    return !!valor;
}

/*
Crie uma função matemática que retorne o perímetro de um quadrado
Lembrando: perímetro é a soma dos quatro lados do quadrado
*/
function perimetroQuadrado(lado) {
    return lado * 4;
}

/*
Crie uma função que retorne o seu nome completo
Ela deve possuir os parâmetros: nome e sobrenome
*/
function nomeCompleto(nome, sobrenome) {
    return `${nome} ${sobrenome}`;
}

/*
Crie uma função que verifica se um número é par
*/
function ePar(numero) {
    let modulo = numero % 2;
    if(modulo === 0){
        return 'Esse número é par.'
    } else {
        return 'Esse número é ímpar.'
    }
}

/*
Crie uma função que retorne o tipo de dado do argumento passado nela (typeof)
*/
function tipoDeDado(dado) {
    return typeof dado;
}

/*
addEventListener é uma função nativa do JavaScript, o primeiro parâmetro é o evento que ocorre e o segundo o Callback.
Utilize essa função para mostrar no console o seu nome completo quando o evento 'click' ocorrer.
*/
addEventListener('click', function() {
    console.log('Igor Campos');
});

/*
Corrija o erro abaixo


function precisoVisitar(paisesVisitados) {
    let totalPaises = 193;
    return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar.`;
}
function jaVisitei(paisesVisitados) {
    return `Já visitei ${paisesVisitados} do total de  ${totalPaises} países.`;
}

precisoVisitar();
jaVisitei();

*/
let totalPaises = 193;

function precisoVisitar(paisesVisitados) {
    return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar.`;
}
function jaVisitei(paisesVisitados) {
    return `Já visitei ${paisesVisitados} do total de  ${totalPaises} países.`;
}

precisoVisitar();
jaVisitei();