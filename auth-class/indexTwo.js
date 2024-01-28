const express = require("express");

const app = express();
app.use(express.json())
const Port = 3000;

let totalReq = 0;

function addReq(req, res, next){
    totalReq += 1;
    next()
}

function hasMoney(req, res, next){
    const money = req.query.money;

    if(money<1000){
        res.status(400).json({
            msg: "YOU dont have enough money",
            req: totalReq

        })
    }else{
        next()
    }
}

function ageVerify(req, res, next){
    const age = req.query.age;
    if(age>=18){
        next();
    }else{
        res.status(400).json({
            msg: "You are not allowed",
            req: totalReq
        })
    }
}

app.get("/rideOne", addReq, ageVerify, hasMoney, function(req, res){
    res.json({
        msg: "Welcome to ride ONE",
        req: totalReq
    })
})

app.get("/rideTwo",addReq, ageVerify, hasMoney, function(req, res){
    res.json({
        msg: "Welcome to ride TWO",
        req: totalReq

    })
})

app.get("/",addReq, function(req, res){
    res.json({
        msg: "Welcome. Home",
        req: totalReq

    })
})

app.listen(Port, function(){
    console.log(`Started on Port ${Port}`)
})