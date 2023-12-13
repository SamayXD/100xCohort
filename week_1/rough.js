// const fs = require("fs");
// // filesystem module

const { resolve } = require("path");


// function readTheFile()
// {
//     return new Promise(function(resolve){
//         fs.readFile("/Users/samayn/Desktop/Git-CO/100xCohort/week_1/a.txt", "utf-8", function(err, data){
//             resolve(data);
//         });  
//     });
// }

// function onDone(data){
//     console.log("Called Done on : " + data);
// }

// readTheFile().then(onDone);

// let ans = 3;
function letsWait(){
    var a= 0;
    return new Promise(function(resolve){
        for(var i = 1; i<=10; i++){
            a = a+i;
        }
        resolve(a);
    });
}

 function main(){
    var a = letsWait();
    a.then(function(data){
        console.log(data);
    });
}

main();
console.log("After main");