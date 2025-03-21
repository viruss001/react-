import { useState } from 'react'
import CustomHooks from './component/hook'

function App() {
  

  const cur = CustomHooks("Suraj")
  return (
    <>
      <h1>we are about to create a our own hook</h1>
      <h1>{`this is ${cur.data}`}</h1>
    </>
  )
}

export default App
