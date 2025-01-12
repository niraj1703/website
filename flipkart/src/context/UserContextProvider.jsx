import React from "react";
import UserContext from "./UserContext"
const UserContextProvider = ()=>{
    const [user,setUser] = React.useState (null)
    return( 
        <UserContext.Provider value={{ user, setUser }}> </UserContext.Provider>
 
    )
}
export default UserContextProvider