import { useState } from 'react'
import Card from './component/Card'



function App() {
  const [count, setCount] = useState(0)
  const a = [1,2,3,4,5,6,7,8,9]

  return (
    <>
    <button type="button" onClick={()=>{setCount( count+1)}}>click me to add 1</button>
    <div>{count}</div>
    <button type="button" onClick={()=>{setCount( count-1)}}>click me to sub 1</button>
    <Card username = "suraj"/>
    <Card username= {a}/>
    </>
  )
}

export default App
