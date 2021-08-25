import React from "react";
import "./belz.css";
import Video from "../../../assets/icons/videocam.png";

const Belema = ({ selectedChat }) => {
  return (
    <div className="chat-con">
      <div className="chat-nav">
        <div className="chat-info-con">
          <div className="chat-img-con">
            <img src={selectedChat.img} alt="" className="chat-img" />
          </div>
          <div className="chat-info">
            <p className="chat-name">{selectedChat.name}</p>
            <p className="chat-about">
              <em>{selectedChat.about}</em>
            </p>
          </div>
        </div>
        <div title="Start video call" className="chat-video">
            <img src={Video} alt=" " />
          </div>
      </div>
    </div>
  );
};

export default Belema;
