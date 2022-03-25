//                                 exercício 1
// a)

// const minhaString: string = 2
// Aprece que o tipo 'number' não pode ser atribuído ao tipo 'string'.



// b) 

// const meuNumero: number & string = "quatro"
// utilizamos o & para definir que pode ter 2 valores.

// c) 

enum FavouriteColor{
    VERMELHA = "Vermelha",
    LARANJA = "Laranja",
    AMARELA = "Amarela",
    VERDE = "Verde",
    AZUL = "Azul",
    VIOLETA = "Violeta"
}

type Person = {
    name: string
    age: number
    favouriteColor: FavouriteColor
}

const fernando : Person = {
    name: "Fernando",
    age: 18,
    favouriteColor: FavouriteColor.VERDE
}

const Bianca : Person = {
    name: "Bianca",
    age: 22,
    favouriteColor: FavouriteColor.VIOLETA
}

const Rogerio : Person = {
    name: "Rogerio",
    age: 19,
    favouriteColor: FavouriteColor.AMARELA
}

console.log(Rogerio)
