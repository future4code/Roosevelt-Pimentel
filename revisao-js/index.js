// ####                               EXERCICIO 1                                           #####

function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
    const baseSalario = 2000 ;
    const valorComissao = 100;
    let porcentagem = 0.05 ;
    return baseSalario + qtdeCarrosVendidos * valorComissao +
    valorTotalVendas * porcentagem;
    } 

    console.log(calculaSalario(3,130000))

// ####                               EXERCICIO 2                                           #####

function calculaPrecoTotal(quantidade) {
  let resultado

  if (quantidade < 12) {
    resultado = quantidade * 1.3
  }
  if (quantidade >= 12) {
    resultado = quantidade * 1.0
  }
  return resultado
}


// ####                               EXERCICIO 3                                           #####

function calculaNota(ex, p1, p2) {
  const media = (ex * 1 + p1 * 2 + p2 * 3) / 6
  let resultado

  if (media >= 9) {
    resultado = "A"
  } else if (media < 9 && media >= 7.5) {
    resultado = "B"
  } else if (media < 7.5 && media >= 6) {
    resultado = "C"
  } else {
    resultado = "D"
  }

  return resultado
}


// ####                               EXERCICIO 4                                           #####

let array = [1, 4, 8, 2, 5, 4, 10, 1, 2, 4, 7, 5]

function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  let contador = 0
  for (let item of arrayDeNumeros) {
    if (item === numeroEscolhido) {
      contador++
    }
  }
  let resposta
  if (contador !== 0) {
    resposta = `O número ${numeroEscolhido} aparece ${contador}x`
  } else {
    resposta = "Número não encontrado"
  }

  return resposta
}


// ####                               EXERCICIO 5                                           #####

function criarArrayNomesAnimais() {
  const animais = [
    { nome: "Cachorro", classificacao: "mamífero" },
    { nome: "Papagaio", classificacao: "ave" },
    { nome: "Gato", classificacao: "mamífero" },
    { nome: "Carpa", classificacao: "peixe" },
    { nome: "Pomba", classificacao: "ave" }
  ]

}
function retornaNome(animal) {
  return animais[0].nome
}

const nomesDosAnimais = animais.map(retornaNome)





function filtraTarefas() {
  const tarefas = [
    { titulo: "Fazer Remember", status: "done", tempo: 30 },
    { titulo: "Fazer Challange", status: "todo", tempo: 30 },
    { titulo: "Assistir Aula", status: "done", tempo: 120 },
    { titulo: "Fazer almoço nutritivo", status: "done", tempo: 60 },
    { titulo: "Ler atentamente exercícios do dia", status: "doing", tempo: 20 },
    { titulo: "Fazer exercício do dia", status: "doing", tempo: 180 },
    { titulo: "Fazer desafio", status: "doing", tempo: 60 },
    { titulo: "Ir para o Stand Up", status: "todo", tempo: 30 },
    { titulo: "Enviar Feedback", status: "todo", tempo: 15 },
    { titulo: "Enviar Exercício", status: "todo", tempo: 15 },
    { titulo: "Jogar Videogame", status: "todo", tempo: 120 },
    { titulo: "Assistir Novela", status: "todo", tempo: 90 },
  ]


  const filtraTarefa = (titulo, index) => {
    return titulo.status === "done"
  }

  const tarefasTerminadas = tarefas.filter(filtraTarefa)

  return tarefasTerminadas
}