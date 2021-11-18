const express = require("express")
const bodyParser = require("body-parser")
const app = express()

app.set("views",__dirname+"/views")
app.engine("html", require("ejs").renderFile)
app.use(express.static("assets"))
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
const port = 5000 

app.get('/', (req,res)=>{
    res.render("index.html")
  })

  app.get('/food',(req,res)=>{
    res.send("<h1>Hello World from food.js</h1>")
  })
    
  app.get('/profile/:id', (req,res)=>{
    const param = req.params
    const profile1 ={
      id : 1,
      username : "Abbas",   
      fullname : "Badboythings"
  }
  
    const profile2 = {
      id : 2,
      username : "Ironheight",
      fullname : "Badboythings"
  }

    if(param.id == 1){
      res.render("admin.html", profile1)
  }
    if(param.id == 2){
    res.render("user.html", profile2)
  }
    else{
        res.send(param.id)
  }
  
})

app.get("/signup",(req,res)=>{
  res.render("signup.html")
})
app.get("/login",(req,res)=>{
  res.render("login.html")
  
})
app.post("/login",(req,res)=>{
  const pword = "1234"
  const username = "ironhide"
  const data = req.body
  if (data.username == username){
    if (data.password == pword){
         res.send("welcome" + data.username)
    }
    else{
      res.send("Invalid password")
    }
  }else{
    res.send("Invalid username")
  }

})
app.get("/api",(req,res) => {
  res.json({
    fullname: "Jimoh Enesi Abbas",  username: "wagzyG",  lastname: "irontop"
  },
  {
    fullname: "Jimoh Enesi Abbas",  username: "wagzyG",  lastname: "irontop"
  },
  {
    fullname: "Jimoh Enesi Abbas",  username: "wagzyG",  lastname: "ikn knkjk"
  }
  );
})
app.get("/api",(req,res) => {
  
})





// app.post("/signup",(req,res)=>{
//   res.send("<h1>signup complete</h1>")
//   console.log(req.body);
// })


app.listen(port, () => {
  console.log("Server listening on port " +port);
})


