import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { ChatEngine } from "react-chat-engine";
import { auth } from "../../firebase";
import { signOut } from "firebase/auth";
import { useAuth } from "../../contexts/AuthContext";
import logoTab from "../../assets/icons/stone.png";
import "./chat.css";
import axios from "axios";

const Chat = () => {
  const history = useHistory();
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);

  const handleLogout = async () => {
    await signOut(auth);

    history.push("/");
  };

  // console.log(user)

  // if(user){ history.push("/")};

  // const getFile = async (url) => {
  //   const response = await fetch(url);
  //   const data = await response.blob();

  //   return new File([data], "userPhoto.jpg", { type: "image/jpeg" });
  // };

  useEffect(() => {
    if (!user) {
      history.push("/");

      return;
  }

    axios.get('https://api.chatengine.io/users/me/', {
        headers: {
          "Project-ID": process.env.REACT_APP_CHAT_ENGINE_ID,
          "User-Name": user.email,
          "User-Secret": user.uid,
        },
      })
      .then(() => {
        setLoading(false);
      })
      .catch(() => {
        let formdata = new FormData();
        formdata.append('email', user.email);
        formdata.append('username', user.email);
        formdata.append('secret', user.uid);

        // getFile(user.photoURL)
          // .then((avatar) => {
          // formdata.append("avatar", avatar, avatar.name);

          axios.post('https://api.chatengine.io/users/', 
            formdata, 
            {headers: {
                "private-key": process.env.REACT_APP_CHAT_ENGINE_KEY,
              },
            })
            .then(() => setLoading(false))
            .catch((error) => {
              alert(error);
            });
        // });
      });
  }, [user, history]);

  if(!user || loading) return 'Loading ...'

  // if(!user || loading) return 'Loading ...';

  return (
    <div className="chats-page">
      <div className="nav-bar">
        <div className="logo-tab-con">
          <img src={logoTab} alt="" className="logo-tab" />
        </div>
        <div onClick={handleLogout} className="logout-tab">
          Logout
        </div>
      </div>

      <ChatEngine
        height="calc(100vh - 66px)"
        projectID= {process.env.REACT_APP_CHAT_ENGINE_ID}
        userName = {user.email}
        userSecret= {user.uid}
      />

      {/* <ChatEngine
			projectID='
      71159bc2-bf06-4ecf-a677-ccf110e936c6'
			userName='adam'
			userSecret='pass1234'
		/> */}
      {/* <ChatEngine
        height="calc(100vh - 66px)"
        projectID=
        '71159bc2-bf06-4ecf-a677-ccf110e936c6'
        userName={user.email}
        userSecret={user.uid}
  
      /> */}
      {/* <ChatEngine
        projectID={"f3b1547f-69ea-406f-a940-aaaddff6a13c"}
        userName={"john_smith"}
        userSecret={"secret_1234"}
      /> */}
    </div>
  );
};

export default Chat;
