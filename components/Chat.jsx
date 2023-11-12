import React from 'react'
import {FaWhatsapp} from 'react-icons/fa';

function Chat() {
  return (
    <div className='chat__container'>
       
        <div className="link whatsapp">
            <a href="https://wa.me/923155412740">
                <FaWhatsapp className='whatsapp__icon'/>
                
            </a>
        </div>
       
    </div>
  )
}

export default Chat