const express = require("express");
const app = express();

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