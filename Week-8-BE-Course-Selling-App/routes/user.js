
const { Router } = require('express');
const userRouter = Router();
const { userModel, purchaseModel, courseModel } = require('../db.js');
const jwt = require('jsonwebtoken');
const { JWT_USER_PASSWORD } = require('../config.js');

const { userMiddleware } = require('../middleware/user.js');


userRouter.post("/signup", async (req, res)=>{
    const { email, password, firstName, lastName } = req.body; // Todo:: Add zod validation 
    // Todo : hash the password so planetext password is not stored in the DB   

    // Todo: put inside a try catch
    await userModel.create({
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName

    });

    res.json({
        message: "You have successfully sign up"
    });
});

userRouter.post("/signin", async (req, res)=>{
    const { email, password } = req.body;

    //Todo: ideally password should be hashed, and hence you cant compare the user provided password and the database password
    const user = await userModel.findOne({
        email: email,
        password: password
    });

    if(user)
    {
        const token = jwt.sign({
            id: user._id
        }, JWT_USER_PASSWORD);

        res.json({
            message: "You have successfully sign in",
            token: token
           
        });
    }
    else{
        res.status(403).json({
            message: "Incorrect credentials"
        });
    }

});

// It will show you the users purchased courses
userRouter.get("/purchases", userMiddleware, async (req, res)=>{
    const userId = req.userId;
    const purchases = await purchaseModel.find({
        userId
    });

    let purchasedCourseIds = [];
    for(let i=0;i<purchases.length;i++)
    {
        purchasedCourseIds.push(purchases[i].courseId);
    }
    const courseData = await courseModel.find({
        _id: { $in: purchasedCourseIds}
    });

    res.json({
        purchases,
        courseData
    });
});


module.exports = {
    userRouter: userRouter
}