import axios from "axios";


export default async function ProfilePage(){
    const res = await axios.get("http://localhost:3000/api/profile",{
        headers:{
            authorization: localStorage.getItem("token"),
        }
    })
    const profilePicture = res.data.avatarUrl;

    return <div>
        {profilePicture}
    </div>
}   