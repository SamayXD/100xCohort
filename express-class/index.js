const express = require("express");
const app = express();
const onPort = 3000;

app.use(express.json());


app.listen(onPort,function(){
    console.log(`Started on ${onPort}`);
});

var users = [{
    name : 'John',
    kidneys:[{
        healthy: false
        },{
            healthy: true
        }]
}]

app.get("/mobile", function(req, res){

    let name = req.query.name
    
    console.log("Mobile Detected");
    res.json({
        "message" : name
    })
});

app.get("/",function(req,res){
    let JohnKidney = users[0].kidneys;
    let numberOfKidneys = JohnKidney.length;
    let numberOfGoodKidneys = 0;
    for(let i = 0;i<numberOfKidneys; i++){
        if(JohnKidney[i].healthy){
            numberOfGoodKidneys = numberOfGoodKidneys + 1;
        }
    }
    let numberOfBadKidneys = numberOfKidneys - numberOfGoodKidneys;
    res.json({
        "Total Kidneys" : numberOfKidneys,
        "Good Kidneys" : numberOfGoodKidneys,
        "Bad Kidneys": numberOfBadKidneys
    });
});

app.post("/",function(req,res){
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy : isHealthy
    });

    res.json({
        msg: "DONE"
    })
});

app.put("/",function(req,res){
    let JohnKidney = users[0].kidneys;

    for(i = 0; i< JohnKidney.length; i++){
        JohnKidney[i].healthy = true;
    }
    res.json({
        msg: "DONE"
    })
});

app.delete("/",function(req,res){
    let JohnKidney = users[0].kidneys;
    // for(let i = 0; i<JohnKidney.length;i++){
    //     if(!JohnKidney[i].healthy){
    //         JohnKidney.splice(i,1);
    //     }
    // }

    let newKidneys = [];

    for(let i = 0;i<JohnKidney.length; i++){
        if(JohnKidney[i].healthy){
            newKidneys.push({
                healthy: true
            })
        }
    }
    users[0].kidneys = newKidneys
    res.json({
        msg: "DONE"
    })
});
