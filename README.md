# Node JS Todo App

This is a simple todo app that uses Node JS and Express JS.

# Steps to develop the app

    1. Create package.json file and install dependencies
        a. Express
        b. EJS
        c. Body-Parser
        d. Set up a script to run the server. We will use node-dev for this.
    
    2. Create a script.js file and create a server
        a. Create an express instance and assign it to a constant called app
        b. Set up EJS as the view engine
        c. Serve the static files
        d. Listen to a port

    3. Create a controller for our todo app(todoController.js)
        a. Create a function to get all the todos (todoController())
        b. Import todoController function into script.js and pass app instance as an argument
        c. Create a route to get all the todos

    4. Create a view for our todo app(views/todo.ejs)
    
    5. Create dummy data for our todo app on the server
        a. Parse the dummy data to the view
    
    6. Create a POST request to add a new todo