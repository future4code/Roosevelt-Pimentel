import { isEvent } from '.'

describe.skip("Testes unitários da função isEvent", () => {

    test("Retorna true para 8", () => {
        const result = isEvent(8);
        expect(result).toEqual(true);
    });

    test("Retorna false para 7", () => {
        const result = isEvent(7)
        expect(result).toBe(false)
    })

    test("Retorna false para 4.5", () => {
        const result = isEvent(4.5)
        expect(result).toBe(false)
    });

    //it()
})

describe("Mostando os Matchers", () => {
    it("toEqual", () => {
        const result = [4,5,6];
        expect(result).toEqual([4,5,6]);
        expect(result).toBe([4,5,6]) 
    })
} )