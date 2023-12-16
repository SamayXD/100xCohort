const express = require('express')
const app = express()
const port = 3000
// app.use(express.json());
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.post('/convo', function(req, res){
let toSendMsg = "Hello " + req.body.msg + " with age " +req.body.age; 
console.log("Response Sent: " + toSendMsg);
res.send(toSendMsg);
});

app.get('/mobile', function(req, res){
    let toSendMsgMobile = "HEllo to Mobile Samay"
    res.send(toSendMsgMobile);
    console.log("Response to Mobile: " + toSendMsgMobile)

})

app.listen(port,function(){
    console.log("Open...")
})