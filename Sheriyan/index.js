const express = require("express");
const app = express();


app.use(function(req,res,next){
    console.log("Middleware Running!");
    //res.send("Hello From Middleware");//Middleware Running!
    //Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client
    next();
})
//home page(base url routing)
app.get('/',function(req,res,next){
    res.send("Hello World");
})

//dynamic routing
app.get('/profile/:username',function (req,res) {
    res.send("Hello, "+ req.params.username);
})

//app running on port 3000
app.listen(3000);