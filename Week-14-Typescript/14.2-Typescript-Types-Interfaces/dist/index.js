"use strict";
/*function sum(a: number, b: number): number{
    return a + b;

}

let ans = sum(22,3);
console.log(ans);*/
Object.defineProperty(exports, "__esModule", { value: true });
function filteredUser(users) {
    return users.filter((user) => user.age > 18);
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
//# sourceMappingURL=index.js.map