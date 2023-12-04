/* 
let people = [{
    firstName: "Samay",
    gender: "Male",
}, {
    firstName: "Rohit",
    gender: "Male",
}, {
    firstName: "Gayatri",
    gender: "Female",
}, {
    firstName: "Prathamesh",
    gender: "Male",
}]


numberOfUsers = people.length
console.log(numberOfUsers)

for (let i = 0; i < numberOfUsers; i++) {
    user = people[i];
    // console.log(user["firstName"])
    if (user["gender"] == "Male") {
        console.log(user["firstName"]);
    }
}
*/

// function doSum(a , b, show){
//     show(a+b);
// }

// function show(data){
//     console.log(data)
// }

// function show2(data){
//     console.log(data + " 2")
// }

// doSum(5,7,show2)

// function calc(a,b, toCall){
//     toCall(a,b)
// }

// function doSum(a , b){
//     console.log(a+b);
// }
// function doSub(a , b){
//     console.log(a-b);
// }

function hello()
{
    console.log("Virus Found...")
}

setInterval(hello, 1*200)