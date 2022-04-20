import express, { Express } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import conection from "./conection"

dotenv.config();



const app: Express = express();
app.use(express.json());
app.use(cors());



app.post("/actor", async (req: Request, res: Response): Promise<void> => {
    try {
        const id = Date.now().toString() 

        await conection.raw(`
         INSERT INTO actor
         (id, name, salry, birth_date, gender)
        VALUES
        (
        ${id},
        '${req.body.name}',
        ${req.body.salary},
        '${req.body.birthDate}',
        '${req.body.gender}'
         );
        `) 

        res.status(201).send({ message: "Ator Criado"})
    }catch (error: any) {
        res.status(500).send(error.sqlMessage || error.message);
    }

});






















const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});