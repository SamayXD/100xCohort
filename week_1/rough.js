const fs = require("fs");
// filesystem module


function readTheFile(callback)
{
    fs.readFile("/Users/samayn/Desktop/Git-CO/100xCohort/week_1/a.txt", "utf-8", function(err, data){
        callback(data)
    });  
}

function onDone1(data){
    console.log("Called Done ONE on : " + data);
}
function onDone2(data){
    console.log("Called Done TWO on : " + data);
}

readTheFile(onDone2);