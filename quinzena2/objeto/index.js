// #Exercícios de interpretação de código
// jsx
// const filme = {
// 	nome: "Auto da Compadecida", 
// 	ano: 2000, 
// 	elenco: [
// 		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
// 		"Virginia Cavendish"
// 		], 
// 	transmissoesHoje: [
// 		{canal: "Telecine", horario: "21h"}, 
// 		{canal: "Canal Brasil", horario: "19h"}, 
// 		{canal: "Globo", horario: "14h"}
// 		]
// }

// console.log(filme.elenco[0])
// console.log(filme.elenco[filme.elenco.length - 1])
// console.log(filme.transmissoesHoje[2])
// 
// a) O que vai ser impresso no console?
// Matheus Nachtergaele {canal: "Telecine", horario: "21h"}, // {canal: "Canal Brasil", horario: "19h"}, 
// {canal: "Globo", horario: "14h"}

// jsx
// const cachorro = {
// 	nome: "Juca", 
// 	idade: 3, 
// 	raca: "SRD"
// }

// const gato = {...cachorro, nome: "Juba"}

// const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

// console.log(cachorro)
// console.log(gato)
// console.log(tartaruga)
// 

// a) O que vai ser impresso no console?

// As informações dos 3 animais alterando apenas o que foi acrescentado no objeto de cada um

// b) O que faz a sintaxe dos três pontos antes do nome de um objeto?
// Pega as informações que já tinha no objeto trazendo para o novo objeto.

// function minhaFuncao(objeto, propriedade) {
// 	return objeto[propriedade]
// }

// const pessoa = {
//   nome: "Caio", 
//   idade: 23, 
//   backender: false
// }

// console.log(minhaFuncao(pessoa, "backender"))
// console.log(minhaFuncao(pessoa, "altura"))
// //a) O que vai ser impresso no console? 
// booleano : false
// indicando que ele não e backender

// #Exercícios de escrita de código

// 1) Crie um objeto. Ele deve conter duas propriedades: nome (string) e apelidos (um 
// array que sempre terá exatamente três apelidos). Depois, escreva uma função que 
// recebe como entrada um objeto e imprime uma mensagem no modelo abaixo: 
// A) 
const identificação = {
    nome: "Roosevelt",
    idade: 19,
    apelidos: ["Brilhante", "Roozik18", "Henrique"]
}

console.log(" Eu sou " +  identificação.nome  + " mas pode me chamar de: " +  identificação.apelidos)

// B) Agora, usando o operador spread, crie um novo objeto mantendo o valor da
// propriedade nome, mas com uma nova lista de três apelidos. Depois, chame a função
// propriedade nome, mas com uma nova lista de três apelidos. Depois, chame a função
const identificação = {
         nome: "Roosevelt",
         idade: 19,
         apelidos: ["Brilhante", "Roozik18", "Henrique"], 
}
const identificação2 =  {
...identificação,
 apelidos2 : ["Menor", "Pequeno", "Anão"]
}
console.log(identificação, identificação2)

// 2. Resolva os passos a seguir:
// 
// a) Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão. 
// 
// 
const pessoa1 = {
    nome1: "Carol",
    idade1: 20, 
    profissão1: "Pisicologa"
}
const pessoa2 = {
    nome2: "Vitor",
    idade2: 25,
    profissão2: "Programador"
}

function lista(pessoa1) {
        const array1 = [pessoa1.nome1, pessoa1.nome1.length, pessoa1.idade1,
        pessoa1.profissão1, pessoa1.profissão1.length]
        return array1
}
console.log(lista(pessoa1))

const carrinho = []
const frutaGostosa = {
    nome: "melancia",
    disponibilidade: true
}

const frutaPodre = {
    nome: "maçã",
    disponibilidade:true
}

const frutaAzeda = {
    nome: "laranja",
    disponibilidade: "true"
}

function frutasVariedades(frutaGostosa, frutaPodre, frutaAzeda) {
    carrinho.push(frutaAzeda)
    carrinho.push(frutaGostosa)
    carrinho.push(frutaPodre)
    return carrinho
}
console.log(frutasVariedades(carrinho))
