import { Request, Response } from "express";
import { users } from "../data"
import connection from "../data/connection";
import { user } from "../type";

export default async function getAllUsers(
    req: Request,
    res: Response
): Promise<void> { 
    const name = req.query

    const users: user[] = await connection("user")

    res.send( users )
}