

export const getUsers=async()=>{
    const query= await fetch(`https://dummyjson.com/users`)
    const res= await query.json()
    return res.users
}