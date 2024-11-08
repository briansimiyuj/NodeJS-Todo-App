import express from "express"
import { todoController } from "./controllers/todoController.js"

const app = express()

app.set("view engine", "ejs")

app.use(express.static("public"))

app.listen(3000, () => {

    console.log('Server is running on port 3000')

    todoController(app)

})