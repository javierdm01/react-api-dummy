import { useEffect, useState } from "react";
import { getUsers } from "../getUsers";


export function useUsers(){
    const [users,setUsers] = useState()

    const getUsersData=()=>{
        getUsers().then((res)=> setUsers(res))
    }

    useEffect(()=>{
        getUsersData()
    },[])

    return {users}
}