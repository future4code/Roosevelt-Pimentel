export const isEvent = (n: number) => {
    return n % 2 === 0;
}

const LoginUseCase = () => {
    //obter usuário
    //comparar senha
    //produzir um jwt token

    
}

const tests = () => {
    const casosDeTeste = [
        { input: 7, output: false },
        { input: 8, output: true },
        { input: 4.5, output: false },
    ]

    casosDeTeste.forEach(casosDeTeste => {
        const result = isEvent(casosDeTeste.input)
        console.log(`Entrada ${casosDeTeste.input} espera saída ${casosDeTeste.output} e a saída foi ${result}. Passou? ${casosDeTeste.output === result}`)
    });
}

tests();