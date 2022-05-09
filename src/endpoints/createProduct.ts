import { Request, Response } from "express"
import { products } from "../data"

export default function createUser(
    req: Request,
    res: Response
): void {

    const { name, price, image_url} = req.body
    
    products.push({
        id: Date.now(),
        name,
        price,
        image_url
    })

    res.status(201).end()
}