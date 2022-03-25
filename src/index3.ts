type Posts = {
    Autor: string,
    Postagem: any
}

const AlvoDumbledore: Posts = {
    Autor: "Alvo Dumbledore",
    Postagem: "Não vale a pena viver sonhando e se esquecer de viver"
}

const SeveroSnape: Posts = {
    Autor: "Severo Snape",
    Postagem: "Menos 10 pontos para Grifinória!"
}

const HermioneGranger: Posts = {
    Autor: "Hermion Granger",
    Postagem: "É levi-ô-sa, não levio-sá!"
}

const Dobby: Posts = {
    Autor: "Dobby",
    Postagem: "Dobby é um elfo livre!"
}

const LordVoldemort: Posts = {
    Autor: "Lord Voldemort",
    Postagem: "Avada Kedavra!"
}

function buscarPostsPorAutor ( Posts: any, autorInformado: string) {
    return Posts.filter(
        (Postagem: any) => {
            return Postagem.autor === autorInformado
        }
    )
}

console.log(buscarPostsPorAutor)