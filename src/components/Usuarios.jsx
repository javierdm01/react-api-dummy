import { Outlet } from "react-router-dom"
import { useUsers } from "../services/hooks/useUsers"
import { UserCard } from "./UserCard"
import './Usuario.css'

export function Usuarios(){
    const {users} = useUsers()

    return (
        <>
            <h1>Usuarios</h1>
            <div className="user_fullcontainer">
                <div className="user_container">
                    {
                        users && <UserCard users={users} />
                    }
                    
                </div>
                <Outlet/>
            </div>

        </>
        
        
    )
} 