// Exercícios de interpretação de código

// #####// #####// #####// #####// #####// #####// #####// #####// #####// #####// #####// #####// #####
// 1 - Leia o código abaixo

// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" }
//   ]
  
//   const novoArrayA = usuarios.map((item, index, array) => {
//      console.log(item, index, array)
//   })

//  a) O que vai ser impresso no console?
//  RESPOSTA :  Vai ser impresso no console os nomes e apelidos dentro da array.

// 2 - Leia o código abaixo

// #####// #####// #####// #####// #####// #####// #####// #####// #####// #####// #####// #####

// const usuarios = [
//   { nome: "Amanda Rangel", apelido: "Mandi" },
//   { nome: "Laís Petra", apelido: "Laura" },
//   { nome: "Letícia Chijo", apelido: "Chijo" },
// ]

// const novoArrayB = usuarios.map((item, index, array) => {
//    return item.nome
// })

// console.log(novoArrayB)

// a) O que vai ser impresso no console?
// RESPOSTA : Os nomes e suas posições dentro da array.

// #####// #####// #####// #####// #####// #####// #####// #####// #####// #####// #####// #####

// 3 - Leia o código abaixo

// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
//   ]
  
//   const novoArrayC = usuarios.filter((item, index, array) => {
//      return item.apelido !== "Chijo"
//   })
  
//   console.log(novoArrayC)
  

// a) O que vai ser impresso no console?
// RESPOSTA: Vai ser impresso apelidos que sejam diferente de chijo. 

// #####// #####// #####// #####// #####// #####// #####// #####// #####// #####// #####

// 1 - Dado o seguinte array de cachorrinhos que são clientes de um pet shop, realize a
//     operações pedidas nos itens abaixo utilizando as funções de array map e filter:

//  a) Crie um novo array que contenha apenas o nome dos doguinhos

// const pets = [
//     { nome: "Lupin", raca: "Salsicha"},
//     { nome: "Polly", raca: "Lhasa Apso"},
//     { nome: "Madame", raca: "Poodle"},
//     { nome: "Quentinho", raca: "Salsicha"},
//     { nome: "Fluffy", raca: "Poodle"},
//     { nome: "Caramelo", raca: "Vira-lata"},
//  ]
// constArrayDoguinhos = pets.map((item, index, array) => {
//     return item.nome 
// })

// console.log(constArrayDoguinhos)

// b) Crie um novo array apenas com os cachorros salsicha

// const pets = [
//     { nome: "Lupin", raca: "Salsicha"},
//     { nome: "Polly", raca: "Lhasa Apso"},
//     { nome: "Madame", raca: "Poodle"},
//     { nome: "Quentinho", raca: "Salsicha"},
//     { nome: "Fluffy", raca: "Poodle"},
//     { nome: "Caramelo", raca: "Vira-lata"},
//  ]
// constArrayDog = pets.filter((item, index, array) =>{
//     return item.raca === "Salsicha"
// })
// console.log(constArrayDog)

// c) Crie um novo array que possuirá mensagens para enviar para todos os clientes que
// são poodles. A mensagem deve ser: "Você ganhou um cupom de desconto de 10% 
// para tosar o/a [NOME]!" 

// const pets = [
//     { nome: "Lupin", raca: "Salsicha"},
//     { nome: "Polly", raca: "Lhasa Apso"},
//     { nome: "Madame", raca: "Poodle"},
//     { nome: "Quentinho", raca: "Salsicha"},
//     { nome: "Fluffy", raca: "Poodle"},
//     { nome: "Caramelo", raca: "Vira-lata"},
//  ]

// let arrayDog = pets.filter((item, index) =>{
//     return pets.raca === "Poodle"
// })
// let dogDesconto = pets.map((Poodle)=>{
// return 'Você ganhou um cupom de desconto de 10% para tosar o/a' + Poodle.nome
// })

// console.log(dogDesconto)

// ##### // #####// #####// #####// #####// #####// #####// #####// #####// #####// #####

// 2 - Dado o seguinte array de produtos, realize as operações pedidas nos itens abaixo
//     utilizando as funções de array map e filter:

// a) Crie um novo array que contenha apenas o nome de cada item

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

//      const arrayNomeDoProduto = produtos.map((item, index, array) => {
//      return item.nome 
//     })
//     console.log(arrayNomeDoProduto)

// b) Crie um novo array que contenha um objeto com o nome e o preço de cada item
// aplicando 5% de desconto em todos eles

// const arrayDesconto = produtos.map((item, index, array) => {
// return item.preco - 0.5
// }) 

// console.log(produtos)
// console.log(arrayDesconto)

// c) Crie um novo array que contenha apenas os objetos da categoria Bebidas

// const arrayBebidas = produtos.filter((item, index, array)=>{
//     return item.categoria === "Bebidas"
// })
// console.log(arrayBebidas)

// d) Crie um novo array que contenha apenas os objetos cujo
//  nome contenha a palavra "Ypê"

// const arrayFiltro = produtos.filter((item, index , array) => {
//     return item.nome.includes("Ypê") === true
// })
// console.log(arrayFiltro)

// e) Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]". Esse
//    array deve conter frases apenas dos itens cujo nome contenha a palavra "Ypê"

let arrayFiltro = produtos.filter((item, index , array) => {
    return item.nome.includes("Ypê") === true
})

let arrayValores = produtos.map((arrayFiltro) => {
    return "Compre" + produtos.nome + "por" + produtos.preco
})
console.log(arrayValores)