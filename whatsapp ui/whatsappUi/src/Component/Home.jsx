import React from 'react'
import Chats from './Chats'

function Home({user}) {
    console.log(user)
   if(user!=null){   
        return(
            <>
            <div class="main-content">
                 <Chats user={user}/>
                 </div>
            </>        )
   }else{return(
    <>
    <div class="main-content">
         <img src="src/assets/Homelaptop.png" alt="Laptop" width="300"/>
         <h2>Download WhatsApp for Windows</h2>
         <p>Make calls, share your screen and get a faster experience when you download the Windows app.</p>
         <button class="download-btn">Download</button>
         </div>
    </>
  )}

}

export default Home