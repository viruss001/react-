import React from 'react'
// import Chats from './Component/Chats'
import Contact from './Component/Contact'
import Nav from './Component/Nav'
import './App.css'
import { useState,useEffect } from 'react'
import Home from './Component/Home'


function App() {
  const [User, setUser] = useState(null)
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        // Action to perform when Escape key is pressed
        console.log('Escape key was pressed');
       
        setUser(null)
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []); // Empty dependency array ensures this runs only on mount and unmount
  console.log('App')  
  return (
    <div class="app">
      <div class="sidebar">
       
        <div class="header">
            <span>Chats</span>
            <span>🔍 ⚙️</span>
        </div>
        <Contact setUser={setUser}/>
    </div>
    <Home user = {User}/>
    </div>
  )
}

export default App