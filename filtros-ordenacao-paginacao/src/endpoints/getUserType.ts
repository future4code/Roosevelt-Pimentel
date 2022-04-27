import { Request, Response } from "express";
import { connection } from "../data/connection"

export async function getUserType(
    req: Request,
    res: Response
): Promise<void> {
    try {
        let getType = req.params.type;

        console.log(getType);

        if (!getType) {
            throw new Error("Você precisa informar um tipo válido")
        }
        if (!getType) {
            throw new Error(" Digite um Type - Teacher, CX ou operations")
        }
        const getUserName = await connection("aula48_exercicio")
            .where({ type: getType })


        res.status(200).send(getUserName)
    } catch (error: Any) {
        res.send(error.message) || error.sqlMessage
    }
}