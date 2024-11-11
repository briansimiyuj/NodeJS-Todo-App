const data = [{ item: 'Get Milk' }, { item: 'Walk Dog' }, { item: 'Learn Node' }]

export const todoController = (app) =>{

    app.get("/todo", (req, res) =>{

        res.render("todo.ejs", { todos: data })

    })


    app.post("/todo", (req, res) =>{})


    app.delete("/todo/:id", (req, res) =>{})

}