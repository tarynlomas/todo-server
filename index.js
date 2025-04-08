// Launching the server

// every file that will need to consume any key value pairs from .env file will need dotenv
require("dotenv").config()
const port = process.env.PORT || 3000;
const app = require("./app")

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
