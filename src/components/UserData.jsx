import { useParams } from "react-router-dom";
import { useUsers } from "../services/hooks/useUsers";
import { InfoUser } from "./InfoUser";


export function UserData(){
    const userId= useParams().id-1
    console.log(useParams());   
    console.log(userId);
    const {users}= useUsers()
    return(
        <>
        <div>
            {
                users  && <InfoUser user={users[userId]}/>
            }
        </div>
        </>
    )
}