const data = [{ item: 'Get Milk' }, { item: 'Walk Dog' }, { item: 'Learn Node' }]

export const todoController = (app) =>{

    app.get("/todo", (req, res) =>{

        console.log('current data:', data)

        res.render("todo.ejs", { todos: data })

    })


    app.post("/todo", (req, res) =>{

        console.log('Received POST request:', req.body)

        data.push(req.body)

        console.log('Updated data:', data)

        res.status(200).json({ success: true, message: 'Todo added successfully' })

    })


    app.delete("/todo/:id", (req, res) =>{})

}