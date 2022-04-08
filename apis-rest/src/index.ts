import express, { Request, response, Response } from "express";
import { AddressInfo } from "net";
import cors from "cors"

const app = express()

app.use(express.json())
app.use(cors())

type BaseUsers = {
    id: number;
    name: string;
    phone: string | number;
    email: string | number;
    website: string | number;
};

app.get("/teste", (req: Request, res: Response) => {

    console.log("ok")
    res.status(200).send("Hello from express")
})



app.get("/name", (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const name: string = req.query.name as string

        const user: BaseUsers | undefined = BaseUsers.find((BaseUsers) => BaseUsers.name === name)

        res.status(200).send(user)
    } catch (error: any) {
        res.status(errorCode).send(error.message)
    }
});

app.get("/type", (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const type: string | number = req.query.type as string | number

        const user: BaseUsers | undefined = BaseUsers.find((BaseUsers) => BaseUsers.type === type)

        res.status(200).send(user)
    } catch (error: any) {
        res.status(errorCode).send(error.message)
    }
});

app.post("/users", (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const { id, name, email, type, age } = req.body

        if(!id || name || email || type || age){
            errorCode = 422
            throw new Error ("One or more fields are empty")
        }


            res.status(200).send("sucesso")
    } catch (error: any) {
        res.status(errorCode).send(error.message)
    }
})


const BaseUsers = [
    {
        id: 1,
        name: "Alice",
        email: "alice@email.com",
        type: "ADMIN",
        age: 12
    },
    {
        id: 2,
        name: "Bob",
        email: "bob@email.com",
        type: "NORMAL",
        age: 36
    },
    {
        id: 3,
        name: "Coragem",
        email: "coragem@email.com",
        type: "NORMAL",
        age: 21
    },
    {
        id: 4,
        name: "Dory",
        email: "dory@email.com",
        type: "NORMAL",
        age: 17
    },
    {
        id: 5,
        name: "Elsa",
        email: "elsa@email.com",
        type: "ADMIN",
        age: 17
    },
    {
        id: 6,
        name: "Fred",
        email: "fred@email.com",
        type: "ADMIN",
        age: 60
    }
]

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});;
