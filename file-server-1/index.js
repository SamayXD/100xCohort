const express = require("express");
const app = express();
app.use(express.json());
const onPort = 3000;
app.listen(onPort, function(){
    console.log(`Opened on ${onPort}`)
});
const fs = require("fs");

app.get("/files/:filename", function(req,res){
    let file = `/Users/samayn/Desktop/Git-CO/100xCohort/file-server-1/files/${req.params.filename}`;
    
    fs.readFile(file,"utf-8",function(err,data){
        if(fs.existsSync(file)){
            console.log("YES SIR");
            res.send(data);
        }else{
            console.log("NO SIR");
            res.send("NO FILE FOUND");

        }
    })
});