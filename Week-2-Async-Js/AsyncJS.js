// function sum(a,b){
//     return parseInt(a) + parseInt(b);
// }
// let ans = sum("20",30);
// console.log(ans)




// function sum(n){
//     let ans = 0;
//     for(let i=1;i<=n;i++)
//     {
//         ans = ans + i;
//     }
//     return ans;
// }
// let ans = sum(10);
// console.log(ans)





// function sum(n) {
// 	let ans = 0;
// 	for (let i = 1; i <= n; i++) {
// 		ans = ans + i
// 	}
// 	return ans;
// }
// const ans1 = sum(100);
// console.log(ans1);
// const ans2 = sum(1000);
// console.log(ans2);
// const ans3 = sum(10000);
// console.log(ans3);



// var user = {
//     name: "Aditya",
//     age: 21,
//     calculateAge: function(){
//         return 99;
//     }
// }
// console.log(user.calculateAge());





// const fs = require("fs");
// const contents = fs.readFile("a.txt","utf-8");  // asynchronously
// console.log(contents);

// const contents2 = fs.readFileSync("b.txt","utf-8");  // synchronously
// console.log(contents2);




// function sum(a, b) {
//   return a + b;
// }

// function multiply(a, b) {
//   return a * b;
// }

// function subtract(a, b) {
//   return a - b;
// }

// function divide(a, b) {
//   return a / b;
// }
// console.log(sum(1, 2));




// function sum(a, b) {
//     return a + b;
//   }
  
//   function multiply(a, b) {
//     return a * b;
//   }
  
//   function subtract(a, b) {
//     return a - b;
//   }
  
//   function divide(a, b) {
//     return a / b;
//   }
  
//   function doOperation(a, b, op) {
//     return op(a, b)
//   }
  
//   console.log(doOperation(1, 2, sum))








// const fs = require("fs");

// function print(err, data){
//     if(err){
//         console.log(err);
//     }else{
//         console.log(data);
//     }
// }

// fs.readFile("a.txt", "utf-8", print);  // asynchronously

// fs.readFile("b.txt", "utf-8", print);  // asynchronously

// setTimeout(()=>{
//     console.log("Hello Baby")
// },0);

// console.log("Done!")







// function timeout(){
//     console.log("Click the button!");
// }

// console.log("Hi!");

// setTimeout(timeout, 3000);

// console.log("Welcome to Loupe.");




function timeout(){
    console.log("Click the button!");
}

console.log("Hi!");

setTimeout(timeout, 1000);

console.log("Welcome to Loupe.");

let c = 0;
for(let i=0;i<1000000000;i++){
    c = c + 1;
}

console.log("Expensive Operation Done.");













