import React, { useEffect } from 'react'
import { useState} from "react"
function CustomHooks(name) {
    const [data, setData] = useState({})
    useEffect(()=>{setData({data:name})},[])
    
    return data
}

export default CustomHooks