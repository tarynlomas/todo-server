const Todo = require("../models/Todo.js")


// Try/ catch block 

// Todos route
const index = async (req, res) => {
    try {
        // Anything that you think might throw an error 
        const data = await Todo.showAll();
        res.status(200).send(data)
    } catch(err) {
        res.status(500).send({error: err})
    }
}

// Random route
const random = async (req, res) => {
    // getRandom()
    try {
        const randomQuote = await Todo.getRandom();
        res.status(200).send(randomQuote)
    } catch(err) {
        res.status(500).send({error: err})
    }

}

// Todos id route
const show = async (req, res) => {
    const id = parseInt(req.params.id);
   
    try {
        const todo = await Todo.showTodo(id);
        res.status(200).send(todo);
    } catch(err) {
        res.status(404).send({error: err});
    }
}

const create = async (req, res) => {
    // {body: data}
    // JSON.stringify(data)
    // data ->  {"id": 31,"todo": "Sleep","completed": false,"userId": 153}
    // req.body 
    try {
        console.log("hello", req.body)
        const newTodo = await Todo.create(req.body);
        res.status(201).send(newTodo);
    } catch(err) {
        res.status(409).send({error: err});
    }
}

const update = async (req, res) => {
    // retrieve the correct todo using the id 
    const id = parseInt(req.params.id)

    try {
        const todo = await Todo.showTodo(id)
        // {id: 1, todo: 'hello'}
        // retrieve and store the updated text (come from the client - use req.body)
        // call a model function and pass the req.body 
        const result = await todo.updateTodo(req.body)
        // send back the response 
        res.status(200).send(result)
    } catch(err) {
        res.status(404).send({error: err})

    }
}

// 
// delete something from an array to delete the todo 
// 
const destroy = async (req, res) => {
    const id = parseInt(req.params.id)

    try {
        const todo = await Todo.showTodo(id)
        await todo.deleteTodo();
        // 204 is for successful delete
        // only sending status so use sendStatus -> otherwise it will be hanging as .status would be missing .send aka send ends it
        res.sendStatus(204)
    } catch (err) {
        res.status(404).send({ error: err });
    }
};


module.exports = {
    index,
    random,
    show,
    create, 
    update,
    destroy
}