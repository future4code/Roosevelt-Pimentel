//EXERCICIO 1

//const nome = prompt("Qual é seu nome?")
//const email = prompt("Qual é seu e-mail?")

//console.log(nome)
//console.log(email)

//const mensagemDeBoasVindas = ("O e-mail"  + email +  "foi cadastrado com sucesso.  Seja bem vindo(a),"  + nome) 
//console.log(mensagemDeBoasVindas)

//EXERCICIO 2

const comidasFavoritas = ["Lasanha Bolonhesa" , "Escondidinho de carne maluca" , "Strogonoff de frango" ,
"pizza" , "Hamburguer artesanal"]
const mensagem = "essas são minhas comidas favoritas:"

console.log(mensagem)
console.log(comidasFavoritas)

const pergunta = prompt("Qual a sua comida favorita?")
comidasFavoritas.replaceAll("Escondidinho de carne maluca" , pergunta)

console.log(comidasFavoritas)
