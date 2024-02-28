import { useEffect, useState } from "react";
import { getUsers } from "../getUsers";


export function useUsers(){
    const [users,setUsers] = useState()

    useEffect(()=>{
        getUsers().then((res)=> setUsers(res))
    },[])

    return {users}
}