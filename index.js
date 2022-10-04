const bodyParser = require("body-parser")
const express = require("express")
const app = express()

app.use(bodyParser.urlencoded({extended: true}) )
app.use(express.static("portfolio-frontend/build"))
app.listen(3000, () => {
    console.log("listening on port 3000")
})
