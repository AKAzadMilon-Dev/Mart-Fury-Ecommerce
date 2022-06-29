import express from "express"
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

const port = process.env.PORT || 8000
  
app.listen(8000, (req,res)=>{
    console.log("8000 port run")
})