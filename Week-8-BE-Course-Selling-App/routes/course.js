const { Router } = require('express');
const { userMiddleware } = require('../middleware/user');
const { purchaseModel, courseModel } = require('../db');
const courseRouter = Router();


// If user wants to purchase any course it will hit this endpoint.
courseRouter.post("/purchase", userMiddleware, async (req, res)=>{
    // In real world you would expect the user to pay you money.
    const userId = req.userId;
    const courseId = req.body.courseId;

    await purchaseModel.create({
        userId,
        courseId
    })

    res.json({
        message: "You have successfully bought the course"
    });
});

// It will show you all courses that website has
courseRouter.get("/preview", async (req, res)=>{
    const courses = await courseModel.find({}); //It will return the all courses to the user.
    res.json({
        courses
    });
});


module.exports = {
    courseRouter: courseRouter
}