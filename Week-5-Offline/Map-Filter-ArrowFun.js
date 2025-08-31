//Concepts= map, filter, arrow functions


//1. Arrow function::
/*function sum(a,b){
    return a+b;
}

const sum = (a,b)=>{
    return a+b;
}

const ans= sum(1,2);
console.log(ans);*/







//2. map
//given an array , give me back a new array in which every value is multiplied by 2
//i/p->[1,2,3,4,5] o/p->[2,4,6,8,10]
/*const arr = [1,2,3,4,5];
const newArray=[];
for(let i=0;i<arr.length;i++)
{
    newArray.push(arr[i]*2);
}
console.log(newArray);*/

/*const arr = [1,2,3,4,5];
const ans = arr.map((i)=>{
    return i*2;
});
console.log(ans);*/









//3. filter
//what if I tell you, given an input array, give me back all the even values from it.
/*const arr=[1,2,3,4,5];
const newArray=[];

for(let i=0;i<arr.length;i++){
    if(arr[i]%2===0){
        newArray.push(arr[i]);
    }
}
console.log(newArray);*/
const arr=[1,2,3,4,5];

const ans = arr.filter((n)=>{
    if(n%2==0){
        return true;
    }
    else{
        return false;
    }
});
console.log(ans);






