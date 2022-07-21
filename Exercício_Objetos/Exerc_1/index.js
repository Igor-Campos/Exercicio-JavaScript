/*
Crie um objeto com os seus dados pessoais. De possui pelo menos duas propriedades nome e sobrenome.
*/
let pessoa = {
    nome: 'Igor',
    sobrenome: 'Campos',
    idade: 28,
    cargo: 'Estudante',
};

/*
Crie um método no objeto anterior, que mostre o seu nome completo.
*/
pessoa.nomeCompleto = function() {
    return `${this.nome} ${this.sobrenome}`
}

/*
Modifique o valor da propriedade preco para 3000
*/
let carro = {
    preco: 1000,
    portas: 4,
    marca: 'Audi',
};

carro.preco = 3000;

/*
Crie um objeto de um cachorro que represente um labrador, preto com 10 anos, que late ao ver um homem.
*/

let cachorro = {
    raca: 'Labrador',
    cor: 'Preto',
    idade: 10,
    latir(humano){
        if(humano == 'homem'){
            return 'AUAUAUAUAUAUAUA!'
        } else {
            return 'Eu não lato para qualquer um.'
        }
    },
};
