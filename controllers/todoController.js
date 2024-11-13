let data = [{ item: 'Get Milk' }, { item: 'Walk Dog' }, { item: 'Learn Node' }]

export const todoController = (app) =>{

    app.get("/todo", (req, res) =>{

        res.render("todo.ejs", { todos: data })

    })


    app.post("/todo", (req, res) =>{

        data.push(req.body)

        res.status(200).json({ success: true, message: 'Todo added successfully' })

    })


    app.delete("/todo/:item", (req, res) =>{

        const itemToDelete = { item: decodeURIComponent(req.params.item) }

        console.log(itemToDelete)

        data = data.filter(todo => todo.item !== itemToDelete.item)

        console.log('Data after deletion:', data)

        res.json(data)

        res.status(200).json({ success: true, message: 'Todo deleted successfully' })
        
    })

}