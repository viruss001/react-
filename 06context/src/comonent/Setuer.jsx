import React, { useContext, useState } from 'react'
import UserContext from '../context/usercontext'

function Setuer() {
    const[name,setname]=useState('')
    const {setuser} = useContext(UserContext)
    const handle=(e)=>{
        e.preventDefault()
        setuser(name)
    }
  return (
    <>
    <input type="text"value={name} onChange={(e)=>setname(e.target.value)}/>
    <button type="submit" onClick={handle}>click</button>
    </>
  )
}

export default Setuer