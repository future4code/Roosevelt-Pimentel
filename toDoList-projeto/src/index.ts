import { AddressInfo } from "net";
import express, { Request, Response } from 'express'
import cors from 'cors'
import connection from "./connection"

// dotenv.config(

// );

const app = express();

app.use(express.json());
app.use(cors());





app.post("/user", async (req: Request, res: Response): Promise<void> => {
    try {
        const id = Date.now().toString()

        await connection.raw(`
        INSERT INTO User
        (id, name, nickname, email)
        VALUES
        (
        ${id},
        '${req.body.name}',
        '${req.body.nickname}',
        '${req.body.email}'
        );
        `);

        res.status(201).send({ message: "usuario criado" });
    } catch (error: any) {
        res.status(500).send(error.sqlMessage || error.message);
    }
});

app.get("/user/:id", async (req: Request, res: Response): Promise<void> => {
    try {
        const id = req.params.id

        const result = await connection.raw(`
           SELECT * FROM User
           WHERE id = '${id}';
        `);

        res.status(200).send(result[0]);
    } catch (error: any) {
        res.status(500).send(error.sqlMessage || error.message);
    }
});

app.put("/user/:id ", async (req: Request, res: Response): Promise<void> => {
    try {

        await connection("User")
            .update({
                name: req.body.name,
                nickname: req.body.nickname
            })
            .where({
             id: req.params.id
            })

        res.status(200).send({ message: "User editado" });
    } catch (error: any) {
        res.status(500).send(error.sqlMessage || error.message);
    }
});



app.post("/tarefa", async (req: Request, res: Response): Promise<void> => {
    try {
        // const id = Date.now().toString()

        await connection.raw(`
        INSERT INTO Tarefa
        (title, description, limitDate, creatorUserId)
        VALUES
        (
        '${req.body.title}',
        '${req.body.description}',
        '${req.body.limitDate}',
        '${req.body.creatorUserId}'
        );
        `);

        res.status(201).send({ message: "tarefa criada" });
    } catch (error: any) {
        res.status(500).send(error.sqlMessage || error.message);
    }
});




app.get("/tarefa/:id", async (req: Request, res: Response): Promise<void> => {
    try {
        const id = req.params.creatorUserId

        const result = await connection.raw(`
           SELECT * FROM Tarefa
           WHERE id = '${id}';
        `);

        res.status(200).send(result);
    } catch (error: any) {
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