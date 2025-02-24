// var a = 1;
// a = "Aditya";
// a = true;
// console.log(a);

// let firstName = "John";
// const age = 30
// var isStudent = true;

// console.log(firstName);
// console.log(age);
// console.log(isStudent);

// let isStudent = "Harkirat";
// console.log(isStudent);
// isStudent = true;
// isStudent = 100;
// console.log(isStudent);

// let, const
// let a = 10;
// const firstName = "Aditya";
// firstName = "Amit";
// console.log(firstName);

// let user1 = "harkirat";
// let user2 = "Aditya";
// let user3 = "Amit";
// let user4 = "Aman";
// console.log(user1);

// let users = ["Harkirat","Aditya","Amit","Aman"];
// console.log(users[0]);

// let sum = 10 + 5;
// console.log(sum);

// let age = 19;
// let canVote = (age > 18);
// console.log(canVote);

// function greet(name){
//   return "Hello, "+ name;
// }

// let message = greet("Aditya");
// console.log(message);
// let message2 = greet("Amit");
// console.log(message2);
// let message3 = greet("Raj");
// console.log(message3);

// function sum(a, b){
//   let totalSum = a + b;
//   return totalSum;
// }

// let message = sum(1,2);
// console.log(message);
// let message2 = sum(9,33);
// console.log(message2);

// function vote(a){
//   if(a > 18){
//     return true;
//   }
//   else{
//     return false;
//   }
// }

// let ans = vote(11);
// if(ans){
//   console.log("Yes, you can vote");
// }
// else{
//   console.log("No, you can't vote");
// }

// let ans2= vote(33);
// if(ans2){
//   console.log("Yes, you can vote");
// }
// else{
//   console.log("No, you can't vote");
// }

// function canVote(age){
//   if(age >= 18){
//     console.log("You are an adult");
//   }else{
//     console.log("You are a minor");
//   }
// }
// canVote(11);

// let users = ["Aditya", "Amit", "Aman", "Raj", "Suhani", "Isha", "Karan"];

// for(let i=0;i<users.length;i++){
//   console.log(users[i]);
// }

// let user1 = {
//   name: "Aditya",
//   age: 21,
//   isStudent: true,
//   gender: "male"
// }

// console.log(user1.name);
// console.log(user1.age);
// [OR]
// console.log(user1["name"]);
//console.log(user1["age"]);

// function greet(user2){
//   console.log("Hello, "+user2.name+ " you age is "+ user2.age);
// }

// let user2 = {
//   name: "Harkirat",
//   age: 30
// }

// greet(user2);

// let arr = [12,"Aditya",{
//   name: "Unmesh",
//   age: 20,
//   cities: ["delhi","Pune","Mumbai",{
//     country: "India",
//     city: "Satara"
//   }]
// }];

// console.log(arr[2]);
// console.log(arr[2].cities);
// console.log(arr[2].cities[3]);
// console.log(arr[2].cities[3].city);


//Create a function that takes an array of objects as input, and return the user whose age > 18 and male

function solve(arr){
    //Method 1 :: Initilize a new array , push to new array
    // let newArray = [];
    // for(let i=0;i<arr.length;i++){
    //   if(arr[i].age > 18 && arr[i].gender === 'male'){
    //     newArray.push(arr[i]);
    //   }
    // }
    // return newArray;
  
    //Method 2 :: you can use the filter function inside the array
    return arr.filter((user) => user.age > 18 && user.gender === 'male');
    
    
  }
  
  let arr = [{
    name: "Aditya",
    age: 21,
    gender: "male"
  },{
    name: "Sonam",
    age: 14,
    gender: "female"
  },{
    name: "Raj",
    age: 29,
    gender: "male"
  },{
    name: "Gayatri",
    age: 19,
    gender: "female"
  },{
    name: "Sagar",
    age: 15,
    gender: "male"
  }];
  
  var answer = solve(arr);
  console.log(answer);
  