const express  = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.get("/",function(request,response){
 // response.send("hello world")
 response.sendFile(path.join(__dirname, 'views', 'gym.html'))
});
app.post("/",function(request,response){
   response.send("allldone!")
});
app.listen(3000,function(){
    console.log("server is running at 3000 port")
});
