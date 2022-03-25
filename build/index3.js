"use strict";
const AlvoDumbledore = {
    Autor: "Alvo Dumbledore",
    Postagem: "Não vale a pena viver sonhando e se esquecer de viver"
};
const SeveroSnape = {
    Autor: "Severo Snape",
    Postagem: "Menos 10 pontos para Grifinória!"
};
const HermioneGranger = {
    Autor: "Hermion Granger",
    Postagem: "É levi-ô-sa, não levio-sá!"
};
const Dobby = {
    Autor: "Dobby",
    Postagem: "Dobby é um elfo livre!"
};
const LordVoldemort = {
    Autor: "Lord Voldemort",
    Postagem: "Avada Kedavra!"
};
function buscarPostsPorAutor(Posts, autorInformado) {
    return Posts.filter((Postagem) => {
        return Postagem.autor === autorInformado;
    });
}
console.log(buscarPostsPorAutor);
//# sourceMappingURL=index3.js.map