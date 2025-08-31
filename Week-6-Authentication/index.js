const express = require('express');
const jwt = require('jsonwebtoken'); // Importing the jsonwebtoken library for JWT operations.
const JWT_SECRET = "randomharkiratilovekiara"
const app = express();

app.use(express.json()); // Middleware to parse JSON bodies.

const users = [];


app.post("/signup", function(req, res){
   const username = req.body.username;
   const password = req.body.password;

    if(users.find((user)=> user.username === username)){
    res.json({
        message: "User already exists!"
    });
    return;
   }

   users.push({
        username: username,
        password: password
   });

   res.json({
    message: "You are signed up successfully!"
   });

   console.log(users);

});


app.post("/signin", function(req, res){
    const username = req.body.username;
    const password = req.body.password;

    /*const foundUser = users.find(function(u){
        if(u.username == username && u.passwpord == password){
            return true;
        }
        else
        {
            return false;
        }
    });*/
    // [ OR ]
    let foundUser = null;
    for(let i=0;i<users.length;i++){
        if(users[i].username == username && users[i].password == password){
            foundUser = users[i];
        }
    }

    if(foundUser){
        const token = jwt.sign({
            username:username
        }, JWT_SECRET); // Creating a JWT token with the username as payload and signing it with the secret key.
        
        //foundUser.token = token; // Storing the token in the found user object.
        res.json({
            message: "You are signed in successfully!",
            token: token
        })
    }
    else
    {
        res.status(401).json({
            message: "Invalid username or password!"
        });
    }
    console.log(users);
    
});


app.get("/me", function(req, res){
    const token = req.headers.token; // jwt
    const decodedInformation = jwt.verify(token, JWT_SECRET); // Verifying the token and decoding it to get the username.
    const username = decodedInformation.username; // Extracting the username from the decoded token.



    //const foundUser = users.find((user) => user.token === token);
    //[ OR ]
    let foundUser = null;
    for(let i=0;i<users.length;i++){
        if(users[i].username === username){
            foundUser = users[i];
        }
    }

    if(foundUser){
        res.json({
            username: foundUser.username,
            password: foundUser.password
        });
    }
    else{
        res.json({
            message: "token is invalid!"
        });
    }
    
});

app.listen(3000);// that the http server is listening on port 3000


