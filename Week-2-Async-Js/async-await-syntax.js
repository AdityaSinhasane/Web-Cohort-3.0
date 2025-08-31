
const fs = require("fs");

// function setTimeoutPromisified(ms){
//     return new Promise(resolve => setTimeout(resolve, ms));
// }

// async function solve(){
//     await setTimeoutPromisified(1000);  // wait for 1 seconds
//     console.log("Hi")
//     await setTimeoutPromisified(3000);  // wait for 3 seconds
//     console.log("Hello")
//     await setTimeoutPromisified(5000);  // wait for 5 seconds
//     console.log("Hello there")
// }

// solve();









//err first callback vs rejects in promises
function readFileSync(){
    return new Promise(function (resolve, reject){
        fs.readFile("a.txt", "utf-8", function(err, data){
            if(err){
                reject(err);
            }else{
                resolve(data);
            }
        })
    })
}

readFileSync().then(function(data){
    console.log(data);
}).catch(function(err){
    console.log(err);
});