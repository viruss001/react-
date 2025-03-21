import React from 'react'

function Teamp({name,setfirst}) {
  return (
    <div><input type="text" value={name} onChange={(e)=>(setfirst(e.target.value))}/></div>
  )
}

export default Teamp