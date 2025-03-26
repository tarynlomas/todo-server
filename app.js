// Main server logic
// app -> routes -> controllers -> model 
const express = require("express");
const app = express();
const todosRouter = require("./routes/todos");

app.use(express.json())
// middlewares
app.use("/todos", todosRouter);


module.exports = app;