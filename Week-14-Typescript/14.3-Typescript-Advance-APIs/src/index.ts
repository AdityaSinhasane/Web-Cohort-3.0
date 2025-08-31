
/*interface User {
    name: string,
    age: number
}

function sumOfAge(user1: User, user2: User)
{
    return user1.age + user2.age;
}

let ans = sumOfAge(
    {
        name:"Aditya",
        age: 21
    },
    {
        name: "Sumant",
        age:22
    }
);
console.log(ans);*/






// CONCEPT :: Pick
/*interface User {
    id: number,
    name: string,
    age: number,
    email: string,
    password: string
}

type UpdateProps = Pick < User, 'name' | 'age' | 'password' >


function updateUser(updatedProps: UpdateProps){
    // hit the database to update the user
    
}*/







// CONCEPT :: Partial
/*interface User {
    id: number,
    name: string,
    age: number,
    email: string,
    password: string
}

type UpdateProps = Pick < User, 'name' | 'age' | 'password' >

type UpdatePropsOptional = Partial<UpdateProps>

function updateUser(updatedProps: UpdatePropsOptional){
    // hit the database to update the user
    
}

updateUser({name: "asdf"});*/








// CONCEPT :: Readonly part 2
/*type User = {
    readonly name: string,
    readonly age: number
}

const user: User ={
    name: "Aditya",
    age: 21
}

user.age = 22;
user.name = 22;*/


// CONCEPT :: Readonly part 2
/*interface Config{
    endpoint: string,
    apiKey: string
}

const config: Readonly<Config> = {
    endpoint: 'https://api.example.com',
    apiKey: 'abcefeh123'
}

config.apiKey = "";
// config.apiKey = "newApi"; // Error: Cannot assign to 'apiKey' because it is a read-only property.*/










// CONCEPT :: Record and Map

/*type User = {
    id: string,
    username: string
}

type Users = {
    [key: string] : User;
}

const user: Users = { 
    "ras@123":{
        id: "ras@123",
        username: "Aditya"
    },
    "pay@123":{
        id: "pay@123",
        username: "Sonia"
    },

}*/





/* type UsersAge = {
    [key: string] : number;
}

const user: UsersAge = { 
    "ras@123":  23,
    "har@7898": 34
}*/



// 1. Record
/*type Users = Record<string, number>;

const users: Users ={
    "asdf122": 12,
    "klfhgsd": 33
}

console.log(users['asdf122']);
    
*/



/*type Users = Record<string, {age: number, name: string}>;

const users: Users = {
    "asdf122": {age: 12, name: "Aditya"},
    "klfhgsd": {age: 33, name: "Soham"}
}

console.log(users['asdf122'])*/



// 2. Map
/*type User = {
    name: string,
    age: number,
    email: string
}

const users = new Map<string, User>();

users.set("rasdasd",{name: "Aditya", age:22 , email: "asdh@123"});
users.set("fhjdgf",{name: "Raj", age: 23, email: "raj@123"});

const user = users.get("rasdasd");
console.log(user)*/










// CONCEPT :: Exclude
/*type EventType = 'click' | 'scroll' | 'mousemove';

type ExcludeEvent = Exclude<EventType, 'scroll'>;

const handleEvent = (event: ExcludeEvent) => {
    console.log("Handling Event " + event);
}

handleEvent('click');*/








// CONCEPT:: Type inference in Zod Part 1
// Zod :: It is used to doing runtime validation.

/*import { z } from "zod";

const StringZodSchema = z.string();
type StringZodSchema = z.infer<typeof StringZodSchema>; // string*/





// CONCEPT:: Type inference in Zod Part 2
/*import { z } from 'zod';
import express from "express";

const app = express();

// Define the schema for profile update
const userProfileSchema = z.object({
  name: z.string().min(1, { message: "Name cannot be empty" }),
  email: z.string().email({ message: "Invalid email format" }),
  age: z.number().min(18, { message: "You must be at least 18 years old" }).optional(),
});

export type FinalUserSchema = z.infer<typeof userProfileSchema>;

app.put("/user", (req, res) => {
  const { success } = userProfileSchema.safeParse(req.body);
  const updateBody: FinalUserSchema = req.body; // how to assign a type to updateBody?

  if (!success) {
    res.status(411).json({});
    return
  }
  // update database here
  res.json({
    message: "User updated"
  })
});

app.listen(3000);*/










