// const express = require("express");
// const jwt = require("jsonwebtoken");
// const jwtPassword = "123456";
// const Port = 3000;
// const app = express();
// app.use(express.json());

// mongoose.connect(
//   "<Connection link>/",
// );

// const User = mongoose.model("User", {
//   name: String,
//   username: String,
//   pasword: String,
// });



// function userExists(username, password) { 
//   // write logic to return true or false if this user exists
//   // in ALL_USERS array
//   let userExists = false;

//   for(let i = 0; i<ALL_USERS.length; i++){
//     if(ALL_USERS[i].username==username && ALL_USERS[i].password == password){
//       userExists = true;
//     }
//   }
//   return userExists;
// }

// app.post("/signin", function (req, res) {
//   const username = req.body.username;
//   const password = req.body.password;

//   if (!userExists(username, password)) {
//     return res.status(403).json({
//       msg: "User doesnt exist in our in  memory db",
//     });
//   }

//   var token = jwt.sign({ username: username }, jwtPassword);
//   return res.json({
//     token,
//   });
// });

// app.get("/users", function (req, res) {
//   const token = req.headers.authorization;
//   try {
//     const decoded = jwt.verify(token, jwtPassword);
//     const username = decoded.username;

//     res.json({
//       users: ALL_USERS.filter((value)=>{
//         if(value.username==username){
//           return false
//         }else{
//           return true
//         }
//       })
//     })
//   } catch (err) {
//     return res.status(403).json({
//       msg: "Invalid token",
//     });
//   }
// });

// app.listen(Port,function() {
//   console.log(`Opened on Post: ${Port}`)
// })

// //    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImhhcmtpcmF0QGdtYWlsLmNvbSIsImlhdCI6MTcwNjMwMjM1M30.yPk7tvzDDjn0rwXxbAMVryziRigAYa-oJ3QxU6N5MsM"


// const mongoose = require("mongoose");
// const express = require("express");
// const jwt = require("jsonwebtoken");
// const jwtPassword = "123456";

// const app = express();
// app.use(express.json());
// mongoose.connect("Connection link>");

// const user = mongoose.model("Users", {
//   name: String,
//   username: String,
//   password: String,
//   token:String
// });


// async function userExists(username) {
//   const isThere = await user.findOne({ username: username });
//   return isThere
// }


// app.post("/signup", async function (req, res) {

//   const username = req.body.username;
//   const password = req.body.password;
//   const name = req.body.name;
//   var token = jwt.sign({ username: username }, jwtPassword);

//   const isThere = await user.findOne({ username: username });

//   if (isThere) {
//     res.status(400).json({
//       msg: "Username already exists",
//     });
//   } else {
//     const me = new user({
//       name: name,
//       username: username,
//       password: password,
//       token: token
//     });

//     me.save();
//     res.status(200).json({
//       msg: "User created",
//     });
//   }
// });

// app.listen(3000);

const express = require("express")

const app = express();
const jwt = require('jsonwebtoken');
const jwtPassword = 'secret';
const zod = require("zod")
const Port = 3000;
const emailSchema = zod.string().email();
const passwordSchema = zod.string().min(6);


function signJwt(username, password) {
    const usernameRes = emailSchema.safeParse(username)
    const passwordRes = passwordSchema.safeParse(password)


    if(!usernameRes.success || !passwordRes.success){
        return null;
    }

    const signature  = jwt.sign(username, jwtPassword)
    return signature
}


app.get("/singup", function(req, res){
    const newUN = req.query.user;
    const newPass = req.query.pass;
    const token = signJwt(newUN, newPass);
    const decode = jwt.decode(token)
    res.json({
        msg :  token,
        data: decode
    })
})

function verifyUser(token){
    try{
        const signal = jwt.verify(token, jwtPassword)
        return signal
    }

    catch(error){
        return error.msg
    }
}

app.post("/verifyUser", function(req, res){
    const vToken = req.headers.token;
    res.send(verifyUser(vToken))
})



app.listen(Port)

