export const todoController = (app) =>{

    app.get("/todo", (req, res) =>{

        res.render("todo.ejs")

    })


    app.post("/todo", (req, res) =>{})


    app.delete("/todo/:id", (req, res) =>{})

}