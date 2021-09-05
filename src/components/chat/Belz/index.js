import React, { useState } from "react";
import "./belz.css";
import Video from "../../../assets/icons/videocam.png";
import mic from "../../../assets/icons/mic.png";
import send from "../../../assets/icons/send.png";
import emoji from "../../../assets/icons/emoji.png";

const Belema = ({ selectedChat }) => {
  // const [image, setImage] = useState(<img src={mic} alt="" className="mic" />);
  // const [edit, setEdit] = useState(false);
  const [input, setInput] = useState("");

  // const toogleEdit = () => {
  //   setEdit(!edit);
  // };

  const sendMessage = (e) => {
    e.preventDefault();
    console.log("You types >>>, ", input);
    setInput("");
  };

  // useEffect(() => {
  //   sendMessage();
  //   //eslint-disable-next-line
  // }, []);

  // const toogleImage = () => {
  //   setImage(
  //     <button
  //       type="submit"
  //       className="send__message"
  //       onClick={() => {
  //         setImage(<img src={mic} alt="" className="mic" />);
  //         sendMessage();
  //       }}
  //     >
  //       <img src={send} alt="" className="rotate send" />
  //     </button>
  //   );
  // };

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
              {/* <em>{selectedChat.about}</em> */}
              <em>Last seen at...</em>
            </p>
          </div>
        </div>
        <div title="Start video call" className="chat-video">
          <img src={Video} alt=" " />
        </div>
      </div>
      <div className="message-container">
        <p className={`chat__message ${true && "chat__reciever"}`}>
          <span className="chat__name">{selectedChat.name}</span>
          Hey guys
          <span className="chat__timestamp">3:52pm</span>
        </p>
      </div>
      <div className="chat-footer">
        <form className="text-main-con">
          <div className="emoji-con">
            <img src={emoji} alt=" " />
          </div>
          <div className="text-con">
            <input
              type="text"
              className="input-text"
              value={input}
              placeholder="Type a message"
              onChange={(e) => {
                setInput(e.target.value);
              }}
              // onClick={() => {
              //   toogleImage();
              // }}
            />
          </div>
          <div className="mic-send btn">
            <button
              type="submit"
              className="send__message"
              onClick={
                // setImage(<img src={mic} alt="" className="mic" />);
                sendMessage}
            >
              <img src={send} alt="" className="rotate send" />
            </button>
          </div>
          <div className="mic-send ">
            {/* {image} */}
            {/* {image ? <button type="submit" className="send__message"  onClick={()=>{
            setImage(false);
            sendMessage();
          }}> <img src={send} alt="" className="rotate"/> </button>: null} */}
            <img src={mic} alt="" className="mic" />
            {/* <img src={send} alt="" className="rotate send" onClick={sendMessage} /> */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Belema;
