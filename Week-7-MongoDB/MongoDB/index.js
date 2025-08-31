const express = require('express');
const { UserModel, TodoModel } = require('./db.js');
const jwt = require("jsonwebtoken");
const JWT_SECRET = "asdasd123@123"; 
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { z } = require('zod');

mongoose.connect("");

const app = express();

app.use(express.json());


app.post("/signup", async (req, res)=>{

    // Zod :: input validation
    // req.body
    // {
    //      email: String,
    //      password: String,
    //      name: String
    // }
    const requireBody = z.object({
        email: z.string().min(3).max(100).email(),
        password: z.string().min(8).max(100).regex(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])/,
            "Password must contain at least 1 uppercase letter, 1 lowercase letter, and 1 special character"
        ),
        name: z.string().min(3).max(30)
    });


    //const parsedData = requireBody.parse(req.body);
    const parsedDataWithSucess = requireBody.safeParse(req.body);

    //1. how to show the user the exact error. ex, password = 123(password is not safe, add special character)


    if(!parsedDataWithSucess.success)
    {
        res.json({
            message: "Incorrect format",
            error: parsedDataWithSucess.error
        });
        return;
    }


  
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;

    let errorThrown = false;

    const hasedPassword = await bcrypt.hash(password, 5);
    console.log(hasedPassword);

    await UserModel.create({
        email: email,
        password: hasedPassword,
        name: name
    });
    
    res.json({
        message: "You have successfully sign up"
    });

    
});

app.post("/signin", async (req, res)=>{
    const email = req.body.email;
    const password = req.body.password;

    const user = await UserModel.findOne({
        email:email,
    });
    
    if(!user)
    {
        res.status(403).json({
            message: "User does not exist in our database"
        });
        return;
    }
    //console.log(user);

    const passwordMatch = await bcrypt.compare(password, user.password);

    if(passwordMatch){
        const token = jwt.sign({
            id: user._id.toString()
        }, JWT_SECRET);
        res.json({
            token: token
        });
    }
    else
    {
        res.status(403).json({
            message: "Incorrect credentials"
        });
    }

});


app.post("/todo", auth, (req, res)=>{
    const userId = req.userId;
    const title = req.body.title;
    const done = req.body.done;

    TodoModel.create({
        title,
        userId,
        done
    });


    res.json({
        userId: userId,
        message: "Todo Created"
    });
});


app.get("/todos", auth, async (req, res)=>{
    const userId = req.userId;

    const todos = await TodoModel.find({
        userId: userId
    });

    res.json({
        todos
    });
});


function auth(req, res, next){
    const token = req.headers.token;

    const decodedData = jwt.verify(token, JWT_SECRET);
    if(decodedData)
    {   
        req.userId = decodedData.id;
        next();
    }   
    else
    {
        res.status(403).json({
            message: "Incorrect Credentials"
        });
    }
}


app.listen(3000,()=>{
    console.log("Server has started on port 3000");
});
