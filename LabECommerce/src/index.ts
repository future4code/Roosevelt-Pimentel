import { app } from "./app";
import createUser from "./endpoints/createUsers";
import getAllUsers from "./endpoints/getAllUsers"

app.post("/users", createUser )
app.get("/users", getAllUsers)
