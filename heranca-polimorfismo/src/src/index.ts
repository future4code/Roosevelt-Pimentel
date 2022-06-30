import { app } from "./app";
import { Customer } from "./data/classes/Customer";

const customer = new Customer(1, "rodol@gmail.com", "rofoldin", "iklol2", "5467", 100)

console.log(customer); 
 
// a) Seria possível imprimir a senha (password) atrelada a essa instância?

// Não pois não está publica para todos

// b) Quantas vezes a mensagem "Chamando o construtor da classe User" foi impressa no terminal?

// Varias

// a) Seria possível imprimir a senha (password) atrelada a essa instância? Por quê?

// seria pois nao está privado

