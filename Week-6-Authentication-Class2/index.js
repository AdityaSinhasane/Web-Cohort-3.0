const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();
app.use(express.json());
const JWT_SECRET = "ilovekiara";      // Secret key for signing JWTs.

const users = [];

function logger(req, res, next){
    console.log(`${req.method} request came`);
    next();
}

// Serve the HTML file from the public directory
app.get("/", function(req, res){
    res.sendFile(__dirname + "/public/index.html"); 
});

app.post("/signup", logger, function(req,res){
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
        message:"You have successfully signed up",
    });

});

app.post("/signin", logger, function(req,res){
    const username = req.body.username;
    const password = req.body.password;

    let foundUser = null;
    for(let i=0;i<users.length;i++){
        if(users[i].username === username && users[i].password === password){
            foundUser = users[i];
            break; // Exit loop once user is found
        }
    }
    //[ OR ]
    //const foundUser = users.find((user)=> user.username === username && user.password === password);


    if(!foundUser){
        res.json({
            message: "User not found or incorrect password!"
        });
        return;
    }
    else
    {
        // Generate a JWT token
        const token = jwt.sign({
            username:username
        }, JWT_SECRET);
        
        res.json({
            message: "You are signed in successfully!",
            token: token
        });
    }

});

function auth(req, res, next){
    const token = req.headers.token;

    if(!token){
        return res.json({
            message: "You are not Logged in!"
        });
    }

    const decodedData = jwt.verify(token, JWT_SECRET); 
    if(decodedData.username)
    {
        req.username = decodedData.username; // Store username in request object
        next();
    }
    else
    {
        res.json({
            message: "You are not Logged in!"
        });
    }
}


app.get("/me", logger,  auth, function(req,res){

    let foundUser = null;
    for(let i=0;i<users.length;i++){
        if(users[i].username === req.username){
            foundUser = users[i];
            break; // Exit loop once user is found
        }
    }

    res.json({
        message: "User data retrieved successfully!",
        username: foundUser.username,
        password: foundUser.password
    });
    
});


app.listen(3000, () => {
  console.log('Server is running on port 3000');
});