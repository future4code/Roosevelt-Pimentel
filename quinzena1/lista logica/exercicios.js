// Exercício 1
function calcularAreaRetangulo(altura, largura) {
  //escreva seu código aqui
  const num1 = (prompt("Qual a altura de um retangulo?"))
  const num2 = (prompt("Qual a largura de um retangulo?"))

  console.log(Number(altura) * Number(largura))
}

// Exercício 2
function imprimeIdade() {
  //escreva seu código aqui
  const num1 = prompt('Digite o primeiro numero')
  const num2 = prompt('Digite o segundo numero')

  console.log(Number(num1) - Number(num2))
}

// Exercício 3
function calculaIMC() {
  // escreva seu código aqui
  const peso = Number(prompt('Digite seu peso em KG'))
  const altura = Number(prompt('Digite sua altura em metros'))
  const imc = peso / (altura * altura)

  console.log(imc)
}

// Exercício 4
function imprimeInformacoesUsuario() {
  // escreva seu código aqui
  const nomeDoUsuario = prompt('Digite o seu nome')
  const idadeDoUsuario = Number(prompt('Digite sua idade'))
  const emailDoUsuario = prompt('Digite o seu email')
  console.log(`Meu nome é ${nomeDoUsuario}, tenho ${idadeDoUsuario} anos, e o meu email é ${emailDoUsuario}.`)
}

// Exercício 5
function imprimeTresCoresFavoritas() {
  // escreva seu código aqui
  const corA = prompt('Digite sua cor favorita')
  const corB = prompt('Digite outra cor favorita')
  const corC = prompt('Digite sua ultima cor favorita')

  const suasCores = [corA, corB, corC]
  console.log(suasCores)
}

// Exercício 6
function retornaStringEmMaiuscula() {
  // escreva seu código aqui
  const frase = prompt('escreva um doce')

  console.log(frase.toUpperCase())
}

// Exercício 7
function calculaIngressosEspetaculo() {
  // escreva seu código aqui
  const num1 = Number(prompt('Digite o custo do espetaculos'))
  const num2 = Number(prompt('Digite o valor do ingresso'))

  console.log(num1 / num2)
}

// Exercício 8
function checaStringsMesmoTamanho() {
  // escreva seu código aqui
  const texto1 = prompt("Digite uma fruta que você goste")
  const texto2 = prompt("Digite outra fruta que você goste")

  console.log(texto1.length === texto2.length)
}

// Exercício 9
function checaIgualdadeDesconsiderandoCase() {
  // escreva seu código aqui
  const texto1 = prompt("insira uma fruta que goste")
  const texto2 = prompt("digite outra fruta que goste")
  console.log(texto1.toUpperCase() === texto2.toUpperCase())
  
}

// Exercício 10
function checaRenovacaoRG() {
  // escreva seu código aqui
  let anoAtual = prompt("qual ano atual")
  let nascimento = prompt("sua data de nascimento")
  let anoEmissao = prompt("ano da emissao da carteira")
  let idade = anoAtual - nascimento
  let anoRG = anoAtual - anoEmissao
  console.log((idade <= 20 && anoRG >= 5) || ((idade > 20 && idade < 50) && anoRG >= 10) || (idade >= 50 && anoRG >= 15))
}

// Exercício 11
function checaAnoBissexto() {
  // escreva seu código aqui
  const checagemAno = prompt("Digite um ano")

  bissexto1 = (checagemAno % 400) == 0
  bissexto2 = ((checagemAno % 4 == 0) && (checagemAno % 100 != 0))
  bissextoNao = checagemAno && bissexto1 && bissexto2

  console.log(bissextoNao || bissexto1 || bissexto2)
}

// Exercício 12
function checaValidadeInscricaoLabenu() {
  // escreva seu código aqui
  let pergunta1 = prompt('Você tem mais de 18 anos?')
  let pergunta2 = prompt('Você possui ensino médio completo?')
  let pergunta3 = prompt('Você possui disponibilidade exclusiva durante os horários do curso?')

  console.log(pergunta1 === "sim" && pergunta2 === 'sim' && pergunta3 === 'sim')
}
