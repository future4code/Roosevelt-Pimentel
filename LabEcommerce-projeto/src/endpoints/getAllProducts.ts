import { Request, Response } from "express";
import { products } from "../data"

export default function (
    req: Request,
    res: Response
): void { 
    res.send( products )
}