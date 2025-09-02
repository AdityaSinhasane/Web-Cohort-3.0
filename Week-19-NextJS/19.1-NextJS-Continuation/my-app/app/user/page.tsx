
import axios from "axios"

export default async function UserPage(){
   
    const response = await axios.get("http://localhost:3000/api/v1/user/details");

    //await new Promise(r => setTimeout(r, 5000));          // here it will wait for 5 seconds

    const data = response.data;
   
    return <div>
        {data.user}
        <br />
        {data.email}
    </div>
};
