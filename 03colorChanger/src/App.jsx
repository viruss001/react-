import { useState } from 'react'


function App() {
  document.getElementsByTagName("title")[0].innerText="my firstapp"
  const [color, setcolor] = useState("Black")
  return (
    <>
    <div className='' style={{backgroundColor:color,width:"100vw",height:"100vh"}}>
<button type="button" className="btn" onClick={()=>setcolor("red")} style={{backgroundColor:"Red",borderColor:"white"}}>Red</button>
<button type="button" className="btn"onClick={()=>setcolor("blue")} style= {{backgroundColor:"Blue",borderColor:"white"}}>Blue</button>
<button type="button" className="btn"onClick={()=>setcolor("black")} style={{backgroundColor:"black",color:"white",borderColor:"white"}}>Black</button>
<button type="button" className="btn"onClick={()=>setcolor("pink")} style={{backgroundColor:"pink",borderColor:"white"}}>Pink</button>
<button type="button" className="btn"onClick={()=>setcolor("yellow")} style={{backgroundColor:"yellow",borderColor:"white"}}>yellow</button>
<button type="button" className="btn"onClick={()=>setcolor("green")} style={{backgroundColor:"green",borderColor:"white"}}>gren</button>

    </div>
  
    </>
  )
}

export default App
