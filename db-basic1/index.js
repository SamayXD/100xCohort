const express = require("express");
const app = express();
const onPort = 3000;
app.listen(onPort, function(){
    console.log(`Started on port ${onPort}`)
});


app.get("/health-checkup", function(req, res){
    const username = req.headers.username;
    const password = req.headers.password;
    const kidneyId = req.query.kidneyid;
    if(username == "samay" && password == "pass"){
        if(kidneyId == 1 || kidneyId == 2){
            res.json({
                msg: "YOU ARE FINE"
            })
        }else{
            res.json({
                msg: "Wronf"
            })
        }
    }
});



