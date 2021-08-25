import React from 'react';
import Belema from '../chat/Belz';
import Home from '../home page/Home';
import { IsEmpty} from "react-lodash"
import './rightmain.css'

const RightMainPage = ({selectedChat}) => {
    console.log(selectedChat)
    return (
        <div className="right-main">
            {
                <IsEmpty
                value={selectedChat}
                yes={()=> (<Home/>)}
                no={()=>(<Belema selectedChat={selectedChat}/>)}
                />
            }
            {/* {selectedChat && <Belema selectedChat={selectedChat}/>} */}
{/* 
            {
                selectedChat.length > 0 ? <Belema selectedChat={selectedChat}/> : <Home />
            } */}
           
           
        </div>
    )
}

export default RightMainPage
