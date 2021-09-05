import React, {useState, useEffect} from "react";
import Carousel, { consts } from "react-elastic-carousel";
import MyPic from "../../assets/images/profile-pic.jpg";
import Notification from "../../assets/icons/notification.png";
import "./leftmain.css";
import uche from "../../assets/images/uche (2).jpg";
import segun from "../../assets/images/segun.jpg";
import favour from "../../assets/images/favour li.jpg";
import belema from "../../assets/images/belema.jpg";
import boma from "../../assets/images/boma.jpg";
import eric from "../../assets/images/eric (2).jpg";
import ogechi from "../../assets/images/img.jpeg";
import rapture from "../../assets/images/rapture.jpg";
import shammah from "../../assets/images/Shammah (2).jpg";
import tari from "../../assets/images/tari.jpg";
import Layout from "../scroll/each-component/Layout";
import Contact from "../Contacts";
// import db from "../../firebase";
const LeftMainPage = ({ setSelectedChat }) => {

  // const [rooms, setRooms] = useState([]);

  // useEffect(() => {
  //   db.collection("rooms").onSnapshot((snapshot) =>
  //       setRooms(
  //         snapshot.docs.map((doc) => ({
  //           id: doc.id,
  //           data: doc.data(),
  //         }))
  //       )
  //     );
  // }, []);

  // const breakpoints = [
  //   { width: 1, itemsToShow: 2 },
  //   { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  //   { width: 768, itemsToShow: 3 },
  //   { width: 1200, itemsToShow: 4 },
  // ];

  // RenderArrowProps = {
  //   type: "PREV" | "NEXT";
  //   onClick: () => void;
  //   isEdge: boolean;
  // };

  function myArrow({ type, onClick, isEdge }) {
    const pointer = type === consts.PREV ? "<" : ">";
    return (
      <button onClick={onClick} disabled={isEdge} className="btn">
        {pointer}
      </button>
    );
  }

  const names = [
    {
      memberNames: "Uche Livingstone",
      memberImg: uche,
      memberTime: "30 secs ago",
      id: 1,
    },
    {
      memberNames: "Segun Ekundayo",
      memberImg: segun,
      memberTime: "5 mins ago",
      id: 2,
    },
    {
      memberNames: "Favour Livingstone",
      memberImg: favour,
      memberTime: "10 mins ago",
      id: 3,
    },
    {
      memberNames: "Tari Akinukawe",
      memberImg: tari,
      memberTime: "24 mins ago",
      id: 4,
    },
    {
      memberNames: "Eric McWinNer",
      memberImg: eric,
      memberTime: "34 mins ago",
      id: 5,
    },
    {
      memberNames: "Godson Chijioke",
      memberImg: rapture,
      memberTime: "40 mins ago",
      id: 6,
    },
    {
      memberNames: "Boma Amakiri",
      memberImg: boma,
      memberTime: "59 mins ago",
      id: 7,
    },
    {
      memberNames: "Ogechi Mazie",
      memberImg: ogechi,
      memberTime: "1 hour ago",
      id: 8,
    },
    {
      memberNames: "Shammah Nei",
      memberImg: shammah,
      memberTime: "1 hour ago",
      id: 9,
    },
    {
      memberNames: "Belema Dick",
      memberImg: belema,
      memberTime: "1 hour ago",
      id: 10,
    },
  ];
  return (
    <div className="left-main">
      <div className="nav">
        <div className="nav-left">
          <div className="nav-left-main">
            <img src={MyPic} alt="" className="profile-pic" />
          </div>
          <div className="nav-left-text">
            <p className="nav-header">Livingstone Goodness</p>
            <p className="about">
              <em>Lover of God</em>
            </p>
          </div>
        </div>
        <div className="nav-right">
          <div className="notify">
            <img src={Notification} alt="" className="notification" />
          </div>
          <div className="notif-dot">
            <div title="Menu">
              <p className="p1">.</p>
              <p className="p2">.</p>
              <p className="p3">.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="recent">
        <p>Recent</p>
      </div>
      <div className="carousel-wrapper">
        <Carousel renderArrow={myArrow} itemsToScroll={1} itemsToShow={2}>
          {names.map((name) => (
            <Layout
              className="carousel-div"
              key={name.id}
              name={name.memberNames}
              img={name.memberImg}
              time={name.memberTime}
            />
          ))}
        </Carousel>
      </div>
      <Contact setSelectedChat={setSelectedChat}  />
    </div>
  );
};

export default LeftMainPage;
