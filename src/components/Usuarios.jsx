import { useUsers } from "../services/hooks/useUsers"
import './Usuario.css'

export function Usuarios(){
    const {users} = useUsers()
    return (
        <>
            <h1>Usuarios</h1>
            <div className="user_container">
                {
                    users ? users.map((user, index)=>(
                        <div className="user_card" key={index}>
                            <img className="user_img" src={user.image} alt="" />
                            <div className="user_names">
                                <h3>{user.firstName} {user.lastNmae}</h3>
                                <p>{user.maidenName}</p>
                            </div>
                        </div>
                    )): ''
                }
            </div>
        </>
        
        
    )
}