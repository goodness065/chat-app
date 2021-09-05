import React, { useState } from "react";
import "./contact.css";
import IndividualContact from "./individualContacts";
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
import search from "../../assets/icons/search.png";

const Contact = ({setSelectedChat}) => {
  const information = [
    { img: belema, name: "Belema Dick", about: "Follow @Belz.adorn"},
    { img: boma, name: "Boma Amakiri", about: "Full stack developer" },
    {
      img: eric,
      name: "Eric McWinNer",
      about: "Sleeping. If its's important, call me.",
    },
    {
      img: favour,
      name: "Favour Livingstone",
      about: "Hey there, i am using Stonebot",
    },
    {
      img: rapture,
      name: "Godson Chijioke",
      about: '" Growth and comfort do not coexist " -Ginni Rometty',
    },
    { img: ogechi, name: "Ogechi Mazie", about: "My year of Preparation" },
    {
      img: segun,
      name: "Segun Ekundayo",
      about: "Excellent, Exemplary and Exceptional",
    },
    {
      img: shammah,
      name: "Shammah Nei",
      about: "Doing exploits.Software Engineer.",
    },
    { img: tari, name: "Tari Akinukawe", about: "React developer" },
    { img: uche, name: "Uche Livingstone", about: "Available" },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filterResult = information.filter((value) =>
    value.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div>
        <p>Contact</p>
      </div>
      <div className="input-con">
        <img src={search} alt=" " className="contact-search" />
        <input
          type="search"
          placeholder="Search for contacts"
          value={searchTerm}
          onChange={handleChange}
          className="contact-input"
        />
      </div>
      <div className="contact-con">
        {filterResult.map((item,index) => (
          <IndividualContact
            img={item.img}
            name={item.name}
            about={item.about}
            key={index}
            onClick = {()=>setSelectedChat(item)}
          />
        ))}
        {/* {rooms} */}
      </div>
      {/* {show ? <Belema /> : null } */}
    </div>
  );
};

export default Contact;
