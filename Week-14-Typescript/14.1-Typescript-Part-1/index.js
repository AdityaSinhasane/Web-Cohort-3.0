"use strict";
// let x: number = 1; // type inferencing
// console.log(x);
Object.defineProperty(exports, "__esModule", { value: true });
//Question 1 :: Write a function that greets a user given their first name. Argument - firstNameLogs - Hello {firstName} Doesn’t return anything
/*function greet(firstName: string){
    console.log("Hello " + firstName + " sir jee")
}
greet("Harkirat");*/
//Question 2 :: Write a function that calculates the sum of two numbers
/*function sum(a: number, b: number): number{
    return a + b;
}
let ans = sum(1,2);
console.log(ans);*/
//Question 3 - Return true or false based on if a user is 18+
/*function isLegal(age: number){
    if(age >= 18)
    {
        return true;
    }
    else{
        return false;
    }
}
console.log(isLegal(18));*/
//Question 4 :: Create a function that takes another function as input, and runs it after 1 second.
/*function delayedCall(fn:(()=>void) | ((a: number)=> number)) {
    setTimeout(fn, 1000);
}

function log(){
    console.log("Hi there");
}

delayedCall(log);*/
// Extra solved problem
/*function delayedCall(fn: (a: string) => void) {
    setTimeout(()=> fn("Aditya"), 1000);
}
function greet(name: string) {
    console.log("Hi " + name);
}
delayedCall(greet);*/
let greet = () => {
    console.log("Hi there");
};
greet();
//# sourceMappingURL=index.js.map