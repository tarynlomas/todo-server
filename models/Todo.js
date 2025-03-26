const data = require("../data.json");
// Build a Todo class - initialise properties (4) & create methods (3 - show, index, random)

class Todo {
    constructor(todo) {
        this.id = todo.id
        this.todo = todo.todo 
        this.completed = todo.completed 
        this.userId = todo.userId 
    }

    // General functions vs specific to an object functions 
    static showAll() {
        return data.map(todo => new Todo(todo))
    }

    static getRandom() {
        // Data logic for random todo
        const randomID = Math.floor(Math.random() * data.length);
        const randomTodo = data[randomID];
        // {id: , todo: }
        return new Todo(randomTodo);
    }

    static showTodo(id) {
        // Data logic for todo/:id route
        const todo = data.find(t => t.id === id);

        if (!todo) {
            throw "The todo doesn't exist"
        } else {
            return new Todo(todo)
        }
    }

    static create(newTodo) {
        const todo = data.find(t => t.todo.toLowerCase() == newTodo.todo.toLowerCase());
        // Goal in this method 
        if(todo) {
            throw "The todo already exists!"
        } else {
            console.log("hello")
            data.push(newTodo)
            return;
        }
    }

    updateTodo(updatedText) {
        // {todo: "hey"}
        const updatedTodo = data.find(t => t.id === this.id)

        if (updatedTodo) {
            // update todo
            // {todo: "Sleep"} -> {todo: "Eat"}
            updatedTodo.todo = updatedText.todo
            return new Todo(updatedTodo)
        } else {
            // todo not found
            throw "Todo not found"
        }

    }

    deleteTodo() {  
        const todoToDelete = data.findIndex(t => t.id === this.id);
    
        if (todoToDelete !== -1) {
            data.splice(todoToDelete, 1);
        } else {
            throw "The todo doesn't exist";
        }
    }

}

module.exports = Todo;

