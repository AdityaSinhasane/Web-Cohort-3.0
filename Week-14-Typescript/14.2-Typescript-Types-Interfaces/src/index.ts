/*function sum(a: number, b: number): number{
    return a + b;

}

let ans = sum(22,3);
console.log(ans);*/




/*function greet(name: string): string{
    return "Hello " + name;
}
console.log(greet("Mahadev"));*/




/*function isEven(num: number): boolean{
    if(num % 2 == 0)
    {
        return true;
    }
    else
    {
        return false;
    }
}
console.log(isEven(23));*/








// CONCEPT :: Interfaces Part 1

/*interface Address{
    city: string, 
    country: string, 
    pincode: number,
    houseNumber: string
}

interface User {
    name: string, 
    age: number,
    address: Address
}

interface Office{
    address: Address
}

let user: User = {
    name: "Amit",
    age: 19,
    address: {
        city: "katarkhatav",
        country: "India",
        pincode: 415507,
        houseNumber: "123"
    }

};

function isLegal(user: User): boolean{
    if(user.age > 18)
    {
        return true;
    }
    else{
        return false;
    }
}

let ans = isLegal(user);
if(ans)
{
    console.log("I can vote");
}
else 
{
    console.log("I can not vote");
}*/





// CONCEPT :: Interfaces Part 2

/*interface People{
    name: string, 
    age: number,
    greet: ()=> string,   // [ OR ] greet(): string
};

let person: People = {
    name: "Aditya",
    age: 22,
    greet:()=>{
        return "hi"
    }
};

let greeting = person.greet();
console.log(greeting);*/








/*interface People{
    name: string, 
    age: number,
    isLagal(age: number): boolean
    greet(): string   // [ OR ] greet: ()=> string,
};


class Manager implements People
{
    constructor(public name: string, public age: number)
    {
        this.name = name;
        this.age = age;
    }

    isLagal(age: number){
        if(age >= 18)
        {
            return true;
        }
        else
        {
            return false;
        }
    }

    greet(){
        return "Hi " + this.name; 
    }
};

let user = new Manager("Sumit", 22);
console.log(user.greet());
console.log(user.name);
console.log(user.age);
console.log(user.isLagal(user.age));*/












// CONCEPT :: Types in Typescript


/*type User = {
    name: string,
    age: number
}


function isLegal(user: User){
    return user.age > 18;
}*/



// Unions & Intersections

// 1. Intersection
/*type Employee = {
    name: string,
    startDate: string
}

type Manager = {
    name: string
    department: string
}

type teamLead = Employee & Manager;

let e: Employee={
    name:"Aditya",
    startDate: "01-09-2003"
}

let m: Manager={
    name: "Sarthak",
    department:"Electricity"
}

let t: teamLead ={
    name: "Amit",
    startDate: "02-03-2005",
    department: "Bussiness Insights"
}

console.log(t.name);*/






// 2. Unions
/*type GoodUser = {
    name: string,
    gift: string
}

type BadUser = {
    name: string,
    ip: string
}

type User = GoodUser | BadUser;


const user: User = {
    name: "Aditya",
    gift: "Hii",
    ip: "123456"
}

console.log(user.name);*/












// Interfaces VS Types
// Create two types called  User and Admin,
// Create a function that takes either a user or an admin as an input , and return a string saying "Welcome, [name]"


/*interface User {
    name: string; 
    age: number;
}

interface Admin {
    name: string;
    permissions: string;
}

// Union type
type UserOrAdmin = User | Admin;

let u: User = {
    name: "Aditya",
    age: 21
};

let a: Admin = {
    name: "Akansha",
    permissions: "Can Access Super admin computer"
};

function greet(user: UserOrAdmin) {
    return "Welcome, " + user.name;
}

console.log(greet(u)); 
console.log(greet(a));*/













// CONCEPT :: Arrays in Typescript
/*function getMax(nums: number[]): number {
    if (nums.length === 0) {
        throw new Error("Array is empty");
    }

    let max = nums[0]!; // `!` tells TS: it's not undefined
    for (let i = 1; i < nums.length; i++) {
        if (nums[i]! > max) {
            max = nums[i]!;
        }
    }
    return max;
}

let ans = getMax([1, 2, 3, 4, 5]);
console.log(ans); // 5

let ans2 = getMax([-10, -20, -3, -50]);
console.log(ans2); // -3*/


// [OR] [OR]

/*function getMax(nums: number[]): number {
    if (nums.length === 0) throw new Error("Array is empty");
    return Math.max(...nums);
}

let ans2 = getMax([-10, -20, -3, -50]);
console.log(ans2); */     






// Given a list of users, filter out the users that are legal (greater than 18 years of age)
interface User {
    firstName: string,
    lastName: string,
    age: number
}

function filteredUser(users: User[]){
    return users.filter( (user) => user.age > 18);
}

console.log(filteredUser([{
    firstName: "Aditya",
    lastName: "Sinhasane",
    age: 21
},
{
    firstName: "Mahesh",
    lastName: "Gaikwad",
    age: 11
},
{
    firstName: "Shivaji",
    lastName: "Raut",
    age: 32
}]));


 















