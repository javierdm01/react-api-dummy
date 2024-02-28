/* eslint-disable react/prop-types */


export function InfoUser({user}){
    return (
        <>
            <div className="card p-4 m-2">
            <p>Edad: {user.age}</p>
            <p>Address: {user.address['address']}</p>
            <p>Gender: {user.gender}</p>
            <p>Birth date: {user.birthDate}</p>
            <p>MaidenName: {user.maidenName}</p>
            </div>
        </>
    )
}