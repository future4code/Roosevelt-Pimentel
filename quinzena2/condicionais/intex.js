// # Exercícios de interpretação de código
// 1. Leia o código abaixo:

//     // jsx

//     const respostaDoUsuario = prompt("Digite o número que você quer testar")
//     const numero = Number(respostaDoUsuario)

//     if (numero % 2 === 0) {
//       console.log("Passou no teste.")
//     } else {
//       console.log("Não passou no teste.")
//     }
    
//     

//     a) Explique o que o código faz. Qual o teste que ele realiza? 

//     Ele verifica se é igual, informando se o usuario passou no teste ou não. 

//     b) Para que tipos de números ele imprime no console "Passou no teste"? 

//     Se for igual

//     c) Para que tipos de números a mensagem é "Não passou no teste"?
    
//     Se não for igual. 

// O código abaixo foi feito por uma pessoa desenvolvedora,
// contratada para automatizar algumas tarefas de um supermercado:

// let fruta = prompt("Escolha uma fruta")
// let preco
// switch (fruta) {
//   case "Laranja":
//     preco = 3.5
//     break;
//   case "Maçã":
//     preco = 2.25
//     break;
//   case "Uva":
//     preco = 0.30
//     break;
//   case "Pêra":
//     preco = 5.5
//   default:
//     preco = 5
//     break;
// }
// console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)
// // 
// a) Para que serve o código acima? 

//  Para indicar os valores das frutas que o Usuario selecionar.


//  b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?

//  O preço da fruta maçã é 2.25

//  c) Considere que um usuário queira comprar uma Pêra, qual seria a mensagem 
//  impressa no console se retirássemos o break que está logo acima do default (o
// break indicado pelo comentário "BREAK PARA O ITEM c.")?

// o preco da fruta pera é 5


// Leia o código abaixo:

// const numero = Number(prompt("Digite o primeiro número."))

// if(numero > 0) {
//   console.log("Esse número passou no teste")
// 	let mensagem = "Essa mensagem é secreta!!!"
// }

// console.log(mensagem)

// a) O que a primeira linha está fazendo?
// Pedindo um prompt ao usuário. 

// b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
// Se fosse o numero 10, mensagem seria : "Esse número passou no teste". Se fosse - 10 seria "mensagem is not defined"


// c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
// Sim, pos não teve um else para identificar se o numero fosse menor que 0.

// # Exercícios de escrita de código

// 1)

// a) Faça um prompt para receber a idade do usuário e guarde em uma variável.
// b) Garanta que essa variável é do tipo `Number`, você deve usar o cast para number para isso.
// c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir.
//  Se sim, imprima no console "Você pode dirigir", caso contrário, imprima "Você não pode dirigir."

let idadeDoUsuario = prompt("Qual a sua idade?")
if (idadeDoUsuario >= 18) {
    console.log("Você pode dirigir") 
} else{ (idadeDoUsuario < 18) 
console.log("Você não pode dirigir")
}

console.log(idadeDoUsuario)

// 2)

// 2) Agora faça um programa que verifica que turno do dia um aluno estuda.
// Peça para digitar M (matutino) ou V (Vespertino) ou N (Noturno). 
// Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". 
// Utilize o bloco if/else  
// JÁ TINHA FEITO COM SWITCH CASE ENTÃO O 2 E O 3 ESTÃO NESSA QUESTÃO.
// let turnoDoAluno = prompt("Em qual TURNO você estuda?")

switch (turnoDoAluno) {
    case "M" :
        console.log("Bom dia!")
        break;
    
    case "V" :
        console.log("Boa tarde!")
        break;

    case "N" :
        console.log("Boa noite!")
        break;
        default:
        console.log("turno não encontrado. Digite apenas a letra inicial do seu turno, exemplo: M, V ou N")}

//  4) Considere a situação: você vai ao cinema com um amigo ou amiga,
//  porém ele/ela só assistirá a um filme com você se ele for do gênero fantasia
//  e se o ingresso está abaixo de 15 reais. Faça um código que pergunta ao usuário qual
//  o gênero de filme que vão assistir e outra pergunta sobre o preço do ingresso,
//  então verifique se seu amigo ou amiga vai topar assistir o filme. Caso positivo,
//  imprima no console a mensagem: "Bom filme!", caso contrário, imprima "Escolha outro filme :("

let generoDoFilme = prompt("Qual o gênero do filque que pretende assistir?")
let valorDoIngresso = prompt("Qual o valor do ingresso do cinema?")
let lanchinho = prompt("Qual lanchinho você vai comprar?")

if(generoDoFilme === "fantasia"){
    console.log("Bom filme!")
} else { (generoDoFilme !== "fantasia")
    console.log("Escolha outro filme")
}

if(valorDoIngresso <= 15) {
    console.log("Bom filme!")
} else { (valorDoIngresso > 15)
    console.log("Escolha outro filme")

}
console.log("valor aceito: 15 reais ou menos")
console.log(generoDoFilme, valorDoIngresso)
console.log("aproveite a(o)"  +  lanchinho)

// DESAFIOS

// 1) FEITO NO EXERCICIO 4

// 2) Você foi contratado para criar um sistema de vendas de ingressos de jogos de um estádio de futebol. 
//  Para esta compra, o usuário deve fornecer algumas informações:

// TENTEI FAZER O EXERCÍCIO 2 E NÃO CONSEGUI