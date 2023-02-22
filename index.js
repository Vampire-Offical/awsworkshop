const express = require("express")
const app = express()



app.use(express.json())


app.get('/', (req, res) => {
    res.send("Hello")
})

app.listen(80, () => {
    console.log("sever is running on localhost:5000")
})