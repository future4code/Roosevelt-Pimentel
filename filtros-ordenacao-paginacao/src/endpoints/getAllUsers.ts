import { Request, Response } from "express";
import { connection } from "../data/connection" 

export async function getUserType(
    req: Request,
    res: Response
): Promise<void> {
    try {
        let name = req.params.name as string;

        if (!name) {
            name = "%"
        }
        
        const getUserName = await connection("aula48_exercicio")
            .where("name", "like", `$%()%` )


        res.status(200).send(getUserName)

    } catch (error: Any) {
        res.send(error.message) || error.sqlMessage
    }
}

