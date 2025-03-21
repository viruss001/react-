import React from 'react'
import data from '../User/Dummy'

function Contact({setUser}) {
    return (
        <>
            <div class="search">Search...</div>
            <div class="chat-list">
                {data.map((item) => { 
                return <div class="chat" onClick={()=>{setUser(item.name)}}><img src={item.profile_img} alt="Profile" />{item.name}</div>
              })}
                
            </div>
        </>
    )
}

export default Contact