const jwt = require("jsonwebtoken");

// Concpet :: Generate, Verify, and Decode JWT


// 1. Generate a JWT
const value ={
    name:"Harkirat",
    accountNumber:"123123"
}

//jwt
const token = jwt.sign(value, "secret");
console.log(token);
 
// this token has been genearted using this secret, ans hence this token can only be verified using this secret
// this is your checkbook => eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSGFya2lyYXQiLCJhY2NvdW50TnVtYmVyIjoiMTIzMTIzIiwiaWF0IjoxNzUzMjc2NzgxfQ.nwOPf8igOaP3AGmoiEaNGWWRgIZ25z_o9STf982DfMk


// try-catch

try{
    let a;
    console.log(a.length);
    console.log("hi there from inside")
}catch(e){
    console.log("inside catch statement");
}

console.log("hi there")