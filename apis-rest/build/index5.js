"use strict";
function checaRenovacaoRG() {
    const anoAtual = Number(process.argv[2]);
    const anoNascimento = Number(process.argv[3]);
    const anoEmissao = Number(process.argv[4]);
    let idade = anoAtual - anoNascimento;
    let tempoCarteira = anoAtual - anoEmissao;
    const cond1 = idade <= 20 && tempoCarteira >= 5;
    const cond2 = idade > 20 && idade <= 50 && tempoCarteira >= 10;
    const cond3 = idade > 50 && tempoCarteira >= 15;
    if (cond1) {
        console.log("Você deve renovar sua carteira de 5 em 5 anos");
    }
    else if (cond2) {
        console.log("Você deve renovar sua carteira de 10 em 10 anos");
    }
    else {
        console.log("Você deve renovar sua carteira de 15 em 15 anos");
    }
    return (cond1 || cond2 || cond3);
}
checaRenovacaoRG();
//# sourceMappingURL=index5.js.map