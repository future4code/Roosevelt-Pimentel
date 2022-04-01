import express, { Request, Response } from "express"
import cors from "cors"
import { tasks } from "./data"



const app = express()

app.use(express.json())
app.use(cors())

app.get("/ping", (request: Request, response: Response) => {
    response.send("Pong!")
})

app.get("/todos/:tasksolved", (req: Request, res: Response) => {
    const taskSolved = req.params.tasksolved

    if (taskSolved.toLowerCase() !== "true" && taskSolved.toLowerCase() !== "false") {
        res.status(400).send("Digite um parâmetro válido")
    } else {
        const selectedTasks = tasks.filter((task) => {
            if (taskSolved.toLowerCase() === "true") {
                return task.completed === true
            } else {
                taskSolved.toLowerCase() === "false"
            }
            return task.completed === false
        })
        res.status(200).send(selectedTasks)
    }
})

app.listen(3002, () => {
    console.log("server rodando...")
})
