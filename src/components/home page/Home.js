import React from "react";
import "./Home.css";
import homeLogo from "../../assets/icons/logo2.png";

const Home = () => {
  return (
    <div className="home-main">
      <div className="home-con">
        <div className="homelogo-con">
          <img src={homeLogo} alt="" className="homelogo" />
        </div>
      </div>
      <div className="hometext">
        <p>Stay connected to family and friends</p>
      </div>
    </div>
  );
};

export default Home;
