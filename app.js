// Main server logic
// app -> routes -> controllers -> model 
const express = require("express");
const cors = require('cors');    
const app = express();
const todosRouter = require("./routes/todos");

app.use(cors())
// parsing the body for the POST and PATCH requests 
app.use(express.json())
// middlewares
app.use("/todos", todosRouter);


module.exports = app;