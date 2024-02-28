/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


export function UserCard({users}){
    
    return (
        <>
            {
                users ? users.map((user)=>(
                    <Link to={`/usuarios/${user.id}`} className="user_card" key={user.id}>
                        <img className="user_img" src={user.image} alt="" />
                        <div className="user_names">
                            <h3>{user.firstName} {user.lastNmae}</h3>
                            <p>{user.maidenName}</p>
                        </div>
                    </Link>
                )): ''
            }
        </>
    )
}