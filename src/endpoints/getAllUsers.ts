import { Request, Response } from "express";
import { users } from "../data"

export default function (
    req: Request,
    res: Response
): void { 
    res.send( users )
}