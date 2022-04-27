import { Request, Response } from "express"
import { connection } from "connection"
import { recipe } from "../endpoints/getUserType"

export async function getAllRecipes(
   req: Request,
   res: Response
): Promise<void> {
   try {
      const result = await connection("aula49_recipes")

      const recipe = result.map(toRecipe)

      res.status(200).send(recipes)

   } catch (error) {
      res.status(500).send("Internal server error")
   }
}

const toRecipe = (input: any): recipe => {
   return {
      id: input.id,
      title: input.title,
      description: input.description,
      userId: input.user_id,
      createdAt: input.created_at
   }
}