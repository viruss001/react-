import { useState } from 'react'
import ContextProvider from './context/ContextProvider'
import Display from './comonent/Display'
import Setuer from './comonent/Setuer'


function App() {


  return (
    <ContextProvider>
      <Setuer/>
      <Display/>

    </ContextProvider>
  )
}

export default App
