import { app } from "./app";
import { getUserType } from "./endpoints/getUserType";
import { getAllUsers } from "./endpoints/getAllUsers";
import { getAllRecipes } from "./endpoints/getAllRecipes";

app.get("/recipes", getAllRecipes)
app.get("/users", getAllUsers)
app.get("/type/:type", getUserType)