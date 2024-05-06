import React, { useContext } from 'react'
import UserContext from '../context/usercontext'
function Display() {
    const{user}=useContext(UserContext)
    console.log(user)
  return (
    <div>{user}</div>
  )
}

export default Display