const express = require("express");
const zod = require("zod");
const app = express();
const onPort = 3000;
const schema = zod.array(zod.number());
app.use(express.json());

app.listen(onPort, function(){
    console.log(`Opened on port ${onPort}`);
});

app.post("/health-checkup", function(req, res){
    const kidneys = req.body.kidneys;
    const response = schema.safeParse(kidneys)
    if(!response.success){
        res.send({
            response
        })
    }else{
        res.send("DONE DONE");
    }

}); 
//global catches
// app.use(function(err,req,res,next){
//     res.json({
//         msg: "ERROR",
//         error : err
//     });
// });

