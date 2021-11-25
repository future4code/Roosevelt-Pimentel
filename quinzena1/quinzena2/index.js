// exercicio 1
//Crie um objeto que represente um filme. Ele deve ter
//dados da direção, o nome, o ano de lançamento, uma
//lista com o elenco e uma propriedade que diga se você já
//viu ou não

//const filme = {
//    direção: 'jamesWan',
//    nome: 'maligno',
//    anoDelançamento: 2021,
//    elenco: {"Annabelle Wallis" , "Ingrid Bisu" , "Mckenna Grace" , "Marina Mazepa" , "Maddie Hasson"} ,
//    jaAssistiu? : true 
//}
//console.log(filme.direção, filme.nome, filme.anoDelançamento, filme{"elenco"}, filme{"jaAssistiu"})

// exercicio 2

//const pessoa = {
//    nome: "roosevelt" , 
//    idade: 19 ,
//    genero: "pagode"
//}

//console.log(" o nome da pessoa é "  +  pessoa.nome , " ela tem "  +  pessoa.idade , " e gosta muito de " + pessoa.genero) 

const pessoa = {
    nome: "Matheus",
    idade: 26,
    generoMusical: "Eletrônico"
}

let recebePessoa = (pessoa) => {
    const novaPessoa = {
        ...pessoa,
        comidasFavoritas: ["Arroz", "Feijao", "Strogonoff"],
        melhorAmigo: {
            nome: "Beatriz",
            idade: 24
        }
    }
    const imprime = console.log(`O nome da pessoa é ${novaPessoa.nome} e suas comidas preferidas são ${novaPessoa.comidasFavoritas[0]}, ${novaPessoa.comidasFavoritas[1]} e ${novaPessoa.comidasFavoritas[2]}. Seu melhor amigo se chama ${novaPessoa.melhorAmigo.nome} e tem ${novaPessoa.melhorAmigo.idade} anos`)
    return imprime  
}
recebePessoa(pessoa)