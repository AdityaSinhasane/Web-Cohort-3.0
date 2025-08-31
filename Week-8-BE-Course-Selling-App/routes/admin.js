const { Router } = require('express');
const adminRouter = Router();
const { adminModel, courseModel } = require('../db.js');
const jwt = require('jsonwebtoken');
const { JWT_ADMIN_PASSWORD } = require('../config.js');
const { adminMiddleware } = require('../middleware/admin.js');
const course = require('./course.js');


// bcrypt => convert the plane password into the hashing password, zod => To validate the input data , jsonwebtoken => To generate the token

adminRouter.post("/signup", async (req, res)=>{
    const { email, password, firstName, lastName } = req.body; // Todo:: Add zod validation 
    // Todo : hash the password so planetext password is not stored in the DB   

    // Todo: put inside a try catch
    await adminModel.create({
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName

    });

    res.json({
        message: "You have successfully sign up"
    });
});

adminRouter.post("/signin", async (req, res)=>{
   const { email, password } = req.body;

    //Todo: ideally password should be hashed, and hence you cant compare the user provided password and the database password
    const admin = await adminModel.findOne({
        email: email,
        password: password
    });

    if(admin)
    {
        const token = jwt.sign({
            id: admin._id
        }, JWT_ADMIN_PASSWORD);

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


// This endpoint is to create a course
adminRouter.post("/course", adminMiddleware,async (req, res)=>{
    const adminId = req.userId;
    const { title, description, imageUrl, price } = req.body;

    // Todo: watch this video on YT creating a web3 saas in 6 hours
    const course = await courseModel.create({
        title: title, 
        description: description, 
        imageUrl: imageUrl, 
        price: price,
        creatorId: adminId
    });
    res.json({
        message: "Course created",
        courseId: course._id    
    });
});


// This endpoint is to change/update the course like price, image, name of the course etc.
adminRouter.put("/course", adminMiddleware, async (req, res)=>{
    const adminId = req.userId;
    const { title, description, imageUrl, price, courseId } = req.body;



    // Todo: watch this video on YT creating a web3 saas in 6 hours
    const course = await courseModel.updateOne({
        _id: courseId,
        creatorId: adminId
    },{
        title, 
        description, 
        imageUrl, 
        price,
    });
    res.json({
        message: "Course Updated"
    });
});

// This endpoint is to get all the courses that admin has build.
adminRouter.get("/course/bulk", adminMiddleware, async (req, res)=>{
    const adminId = req.userId;
    const courses = await courseModel.find({
        creatorId: adminId
    });
    res.json({
        message: "Your courses",
        courses
    });
});


module.exports = {
    adminRouter: adminRouter
}

