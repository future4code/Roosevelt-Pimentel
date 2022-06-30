export class User {
    public introduceYourself: string | number;
    private id: string | number;
    private email: string;
    private name: string;
    private password: string;

    constructor(
        id: string | number,
        email: string,
        name: string,
        password: string,
        introduceYourself: string | number
    ) {
        console.log("Chamando o construtor da classe User")
        this.id = id
        this.email = email
        this.name = name
        this.password = password
        this.introduceYourself = introduceYourself
    }

    public getId(): string | number{
        return this.id
    }

    public getEmail(): string {
        return this.email
    }

    public getName(): string {
        return this.name
    }

    public interoduceYourself(): string {
        return `Olá, ${this.name} bom dia!`
    }
}