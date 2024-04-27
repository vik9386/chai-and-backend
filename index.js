require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

const githubData = {
  "name":"vikash",
  "location":"IN",
  "pin":800020,
} 

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/twitter",(req,res)=>{
    res.send("vikashdotcom")
})

app.get("/login",(req,res)=>{
    res.send("<h1>please login chai aur code</h1>")
})

app.get("/github",(req,res)=>{
  res.json(githubData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
