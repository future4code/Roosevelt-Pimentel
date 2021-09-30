// Exercícios de interpretação de código

// 1-O que o código abaixo está fazendo? Qual o resultado impresso no console?

// let valor = 0
// for(let i = 0; i < 5; i++) {
//   valor += i
// }
// console.log(valor)

// RESPOSTA: Vai imprimir o valor 10. Pois no final está pedindo o valor +=  

// 2 - Leia o código abaixo:
// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for (let numero of lista) {
//   if (numero > 18) {
// 		console.log(numero)
// 	}
// }

// a) O que vai ser impresso no console?

// RESPOSTA: Os números que são maiores que 18

// b) Se eu quisesse acessar o índice de cada elemento dessa lista,
//  o for...of... é suficiente? Se não, o que poderia ser usado para fazer isso?

// RESPOSTA: for...of... é o suficiente, ele só permite percorrer os 
// elementos da array de uma maneira simplificada.

// 3 - Qual seria o resultado impresso no console, se o usuário digitasse o número 4 ?

// const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))

// let quantidadeAtual = 0
// while(quantidadeAtual < quantidadeTotal){
//   let linha = "*"
//   for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
//     linha += "4"
//   }
//   console.log(linha)
//   quantidadeAtual++
// }

// daria varios nuemros 4 como resposta. 
// 4
// 44
// 444
// 4444

// EXERCICIO DE ESCRITA DE CÓDGIO

// 1 -a) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"

// b) Se a quantidade for maior que 0, 
// solicite que o usuário digite os nomes deles, um por um, e guarde esses nomes em um array   
    
// c) Por fim, imprima o array com os nomes dos bichinhos no console

// let petDoUsuario = prompt ("Quantos bichinhos de estimação você tem?") 
// console.log(petDoUsuario)

// if(petDoUsuario === 0) {
//     console.log("Que pena! você pode adotar um pet!")
// }
//  while (petDoUsuario > 0 ) 
//     {
//      const seusPets = prompt("DIGITE O NOME") 
//     } 
//     const seusPets = []

// a) Escreva um programa que *imprime* cada um dos valores do array original.

// let arrayOriginal = [10, 15, 20, 25, 30, 35, 40, 45, 50]
// while ( arrayOriginal.length > 0) 
// {
// console.log(arrayOriginal);
// ++arrayOriginal;
// } 

// b) Escreva um programa que *imprime* cada um dos valores do array original divididos por 10

// let arrayOriginal = [10, 15, 20, 25, 30, 35, 40, 45, 50]
// for(let base of arrayOriginal) {
// console.log(base / 10)
// }

// c) Escreva um programa que *crie* um novo array contendo, somente,
//    os números pares do array original e *imprima* esse novo array


// let arrayOriginal = [10, 20, 30, 40 ,50]
// let arrayPares = []
// for(let base of arrayOriginal) {
//     if (base % 2 === 0){
//         arrayPares.push(base)
//     }
// console.log(base)
// }
// console.log(arrayPares)

// d) Escreva um programa que *crie* um novo array contendo strings,
//    da seguinte forma: "O elemento do índex `i` é: `numero`". 
//    Depois, *imprima* este novo array.

let arrayNum = [10, 15, 20, 25, 30, 35, 40, 45, 50]
for(let num of arrayNum) {}
let arrayOriginal = ["o", "elemento" , "do", "index" , "base" , "é" , arrayNum]
for(let base of arrayOriginal) {
console.log(base)
}

// e) Escreva um programa que imprima no console o maior
//    e o menor números contidos no array original

// let arrayOriginal = [10, 15, 20, 25, 30, 35, 40, 45, 50]
// for(let base of arrayOriginal) {
// console.log(base)
// }
