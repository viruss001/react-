import React, { useState } from 'react'

import UserContext from './usercontext'
const UserContextProvider =({children})=>
{
    const [user,setuser]=useState("suraj")
    return(
        <UserContext.Provider value={{user,setuser}}>
            {children}
        </UserContext.Provider>
    )
}
export default UserContextProvider