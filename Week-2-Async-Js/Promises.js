/*const rect1 = {
    width:2,
    height:3,
    color:"red"
}

function area(rect1){
    return rect1.width * rect1.height;
}

const ans = area(rect1);
console.log(ans);*/



//[OR]

// Custom Class ::
/*class Rectangle {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color; 
    }
    
    area() {
        const area = this.width * this.height;
        return area;
    }
    
    paint() {
        console.log(`Painting with color ${this.color}`);
    }
    
}
const rect1 = new Rectangle(2, 4,"Red")   //instance of the rectangle class. or object of rectangle class.
const rect2 = new Rectangle(20, 4,"Black")   //instance of the rectangle class. or object of rectangle class.
const area1 = rect1.area();
const area2 = rect2.area();
console.log(area1)
console.log(area2)
rect1.paint();
rect2.paint();*/




// Inbuild Classes

//const now = new Date();  //Created object of the Date class.
//console.log(now)
//console.log(now.getFullYear());   //I called function on the object.



// const map = new Map();
// map.set('name','alice');
// map.set('age',30);
// console.log(map.get('name'))
// console.log(map.get('age'))




// function logName(){
//     console.log("Aditya");
// }

// setTimeout(logName,3000);




// Introduction to Promises :: 
// A Promise in JavaScript is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
//[OR]
// Promises are just a syntactically superior way to write instead of callbacks.

// function main(){
//     console.log()
// }

// setTimeout(main, 3000);      // call back the main function







// return an object of the promise class
/*function setTimeoutPromisified(ms) {
    let obj = new Promise(resolve => setTimeout(resolve, ms));
    return obj;
}

function afterDone() {
    console.log("3 seconds have passed");
}

setTimeoutPromisified(3000).then(afterDone);  // syntactically cleaner than callback functions.*/






// function setTimeoutPromisified(ms) {
//     const p = new Promise(resolve => setTimeout(resolve, ms));
//     return p;
// }


// let p = setTimeoutPromisified(3000);  // Object of Promise class
// console.log(p);






/*function waitFor3S(resolve){
    setTimeout(resolve, 3000);
}

function main(){
    console.log("Main");
}
waitFor3S(main);*/





/*function waitFor3S(resolve){
    setTimeout(resolve, 3000);
}

function setTimeoutPromisified(){
    return new Promise(waitFor3S);
}

function main(){
    console.log("Main is called");
}
setTimeoutPromisified().then(main);*/







/*function random(resolve){  // resolve is also a function.
    setTimeout(resolve, 3000);
}

const p = new Promise(random);  // supposed to return u something eventually

//using the eventual value returned by the promise
function callback(){
    console.log("Promise Succeded");
}
p.then(callback);*/









// create the promisfied version of fs.readFile, fs.writeFile, cleanFile
/*const fs = require("fs");

function readTheFile(sendTheFinalValueHere){
    // do your thing, whenever u have the final value, call sendTheFinalValueHere("finalValue");
    fs.readFile("a.txt","utf-8",function(err,data){
        sendTheFinalValueHere(data);
    });
};


function readFile(fileName){
    // read the file and returns its value
    return new Promise(readTheFile);
};


const p = readFile();


function callback(contents){
    console.log(contents);
};

p.then(callback);*/










/*const fs = require("fs");

console.log("-----top of the file------");

function readTheFile(resolve){
    console.log("redTheFile called");
    setTimeout(function(){
        console.log("called based setTimeout completed");
        resolve();
    },3000);
};


function setTimeoutPromisified(){
    console.log("setTimeoutPromisified called");
    //read the file return its value
    return new Promise(readTheFile);
}

const p = setTimeoutPromisified();


function callback(){
    console.log("timer is done");
};


p.then(callback);

console.log("------end of the file------");*/











// Our own Promise class
/*class Promise{
    constructor(fn){
        this.fn = fn;
        this.fn(()=>{
            this.resolve();
        })
    }

    then(callback){
        this.resolve = callback;
    }
}

function readTheFile(resolve){
    console.log("redTheFile called");
    setTimeout(function(){
        console.log("called based setTimeout completed");
        resolve();
    },3000);
}

function setTimeoutPromisified(){
    return new Promise(readTheFile);
}

let p = setTimeoutPromisified();

function callback(){
    console.log("callback has been called");
}
p.then(callback);*/





// the real operation that we want to promisfy
/*function doAsyncOp(resolve){
    setTimeout(resolve,3000);  // old, callback based, async function
}

const p = new Promise(doAsyncOp);

function callback(){
    console.log("3 seconds have passed");
}

p.then(callback);*/







// create a real time setTimeout() function
/*function setTimeoutPromisified(time){
    function doSomething(resolve){
        setTimeout(resolve, time);
    }
    return new Promise(doSomething);
}

function callback(){
    console.log("Time has Passed");
}

const p = setTimeoutPromisified(5000);
p.then(callback);*/


function promiseFn(resolve){
    let c = 0;
    for(let i=0;i<100000;i++)
    {
        c++;
    }
    resolve("hi there harkirat");
};

const p = new Promise(promiseFn);

function callback(str){
    console.log(str);
}

p.then(callback);       
























