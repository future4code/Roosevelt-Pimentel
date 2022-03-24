function checaTriangulo(a: number, b: number, c: number): string {
    if (a !== b && b !== c) {
        return "Escaleno";
    } else if (a === b && b === c) {
        return "Equilátero";
    } else {
        return "Isósceles";
    }
}

console.log("Todos os lados iguais(5, 5, 5)", checaTriangulo(5, 5, 5))

console.log("Todos os lados diferentes(5 , 6 , 7)", checaTriangulo(5 , 6 , 7))

console.log("Dois lados iguais e um diferente(5 , 5 , 6)", checaTriangulo(5 , 5 , 6))