/*const express = require("express");

const app = express();

let requestCount = 0; //Global variable to count requests

function requestIncreaser(req, res, next){
    requestCount++;
    req.name = "Aditya"; 
    console.log(`Total Number of Requests: ${requestCount}`);
    next(); // Call next middleware or route handler
}


// better routing, add databases, middleware, etc.
app.get("/sum", requestIncreaser, function(req, res) {
    // main logic
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    console.log(req.name);

    res.json({
        ans: a + b
    })
});

app.get("/multiply", requestIncreaser, function(req, res) {
    requestIncreaser();
    // main logic
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        ans: a * b
    })
});

app.listen(3000);*/










// Assignment:: Add the middleware that logs the method , timestamp, and URL from the request is coming
/*const express = require("express");

const app = express();

function loggerMiddleware(req, res, next){
    console.log("Method is :"+ req.method);
    console.log("Host is :"+ req.hostname);
    console.log("Route is :"+ req.url);
    console.log(new Date());
    next(); // Call next middleware or route handler
}

app.use(loggerMiddleware);


app.get("/sum", function(req, res) {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        ans: a + b
    })
});

app.get("/multiply", function(req, res) {
    const a = req.query.a;
    const b = req.query.b;
    res.json({
        ans: a * b
    })
});

app.get("/divide", function(req, res) {
    const a = req.query.a;
    const b = req.query.b;
    res.json({
        ans: a / b
    })

});

app.get("/subtract", function(req, res) {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    res.json({
        ans: a - b
    })
});

app.listen(3000);*/











// Assignment:: Built-in middleware express.json() to parse JSON request bodies
const express = require("express");

const app = express();

//In express, if you want to send JSON data, you need to first parse the JSON data from the request body.
// This is done using the express.json() middleware.
app.use(express.json());

app.post("/sum", function(req, res) {
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);

    res.json({
        ans: a + b
    })
});

app.listen(3000);



