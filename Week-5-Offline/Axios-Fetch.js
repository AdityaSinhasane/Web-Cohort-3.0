//Concept:: axios vs fetch

//1. Fetch ::

/*function main(){
    fetch("https://sum-server.100xdevs.com/todos")
    .then(async (response)=>{
        const json = await response.json();
        console.log(json.todos.length);
    })
};*/
//[OR]
/*async function main(){
    const response = await fetch("https://sum-server.100xdevs.com/todos",{
        method: "POST"
    });
    const json = await response.json();
    console.log(json.todos.length);
};*/

//POST Request
/*async function main(){
    const response = await fetch("https://www.postb.in/1752939319042-3446290714200",{
        method: "POST",
        body:{
            username: "Aditya",
            password: "12345"
        },
        headers: {
            "Authorization":"Bearer 123"
        },
    });
    const textualData = await response.text();
    console.log(textualData);
};
main();*/












//2. Axios ::

const axios = require("axios");

// async function main(){
//     const response = await axios.get("https://sum-server.100xdevs.com/todos");
//     console.log(response.data.todos.length);
// };

//POST Request
/*async function main(){
    const response = await axios.post("https://httpdump.app/dumps/82ef5ad8-2ed1-4f06-9004-c212aa6feb60",
    {
        username: "Aditya",
        password: "12345"
    },
    {
        headers:{
            "Authorization":"Bearer 123"
        }
    });

    console.log(response.data);
};*/
//[OR]
async function main(){
    const response = await axios(
    {
        url: "https://httpdump.app/dumps/82ef5ad8-2ed1-4f06-9004-c212aa6feb60",
        method: "POST",
        headers: {
            "Authorization":"Bearer 123"
        },
        data: {
            username: "Aditya",
            password: "12345"
        }
    },);
    console.log(response.data);
};
main();
