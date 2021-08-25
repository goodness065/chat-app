import React, { useState } from "react"
import "../App.css";
import LeftMainPage from "../components/Mainpage/LeftMainPage";
import RightMainPage from "../components/Mainpage/RightMainPage";
const Main = () => {
    const [selectedChat, setSelectedChat] = useState({})
    return (
        <div className="main-con">
            <div className="main-con2">
                <LeftMainPage setSelectedChat={setSelectedChat}/>
                <RightMainPage selectedChat={selectedChat} />
            </div>
        </div>
    )
}

export default Main
