"use strict";
let num1 = Number(process.argv[2]);
let num2 = Number(process.argv[3]);
function comparaDoisNumeros() {
    let maiorNumero;
    let menorNumero;
    if (num1 > num2) {
        maiorNumero = num1;
        menorNumero = num2;
    }
    else {
        maiorNumero = num2;
        menorNumero = num1;
    }
    const diferenca = maiorNumero - menorNumero;
    return diferenca;
}
console.log(`a diferença entre os numeros ${num1} e ${num2} é: `, comparaDoisNumeros());
//# sourceMappingURL=index4.js.map