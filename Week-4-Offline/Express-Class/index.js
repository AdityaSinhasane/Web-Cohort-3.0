//creating an http server using express
// const express = require('express');
// const app = express();
// function calculateSum(n){
//     let ans = 0;
//     for(let i=1;i<=n;i++)
//     {
//         ans = ans + i;
//     }
//     return ans;
// }
// app.get("/",function(req,res){
//     const n = req.query.n;
//     const sum = calculateSum(n);
//     res.send("The sum from 0 to "+ n +" is " + sum.toString());
// });
// app.listen(3000);



const express = require('express');
const app = express();

var users=[{
    name:"John",
    kidneys:[{
        healthy:false,
    },{
        healthy:true,
    }]
}];

app.use(express.json()); // Middleware to parse JSON bodies


app.get("/",function(req,res){
    //write logic
    const johnKidneys = users[0].kidneys;
    const numberOfKidneys = johnKidneys.length;
    let numberOfHealthyKidneys = 0;
    for(let i=0;i<numberOfKidneys;i++){
        if(johnKidneys[i].healthy){
            numberOfHealthyKidneys++;
        }
    }

    const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;
    res.json({
        numberOfKidneys,
        numberOfHealthyKidneys,
        numberOfUnhealthyKidneys
    });

});

app.post("/",function(req,res){
    //write logic
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy:isHealthy
    });
    res.json({
        msg:"Done!"
    });
});

app.put("/",function(req,res){
    for(let i=0;i<users[0].kidneys.length;i++){
        users[0].kidneys[i].healthy = true;
    }
    res.json({
        msg:"Done!"
    });
});

// Delete all unhealthy kidneys
app.delete("/",function(req,res){

    if(isThereAtleastOneUnhealthyKidney())
    {
        const newKidneys = [];
        for(let i=0;i<users[0].kidneys.length;i++){
            if(users[0].kidneys[i].healthy){
                newKidneys.push(users[0].kidneys[i]);
            }
         }
        users[0].kidneys = newKidneys;
        res.json({
            msg:"Done!"
        });

    }
    else{
        res.status(411).json({
            msg:"You have no Unhealthy Kidneys!"
        });
    }
    
});

function isThereAtleastOneUnhealthyKidney(){
    for(let i=0;i<users[0].kidneys.length;i++){
        if(!users[0].kidneys[i].healthy){
            return true;
        }
    }
    return false;
}

app.listen(3000);


