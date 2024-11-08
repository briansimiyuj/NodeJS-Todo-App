export const todoController = (app) =>{

    app.get("/todo", (req, res) =>{

        res.send('This is a todo app')

    })


    app.post("/todo", (req, res) =>{})


    app.delete("/todo/:id", (req, res) =>{})

}