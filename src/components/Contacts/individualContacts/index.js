import React from 'react';
import "./individual.css"

const IndividualContact = ({img, name, about, onClick}) =>{
    return (
        <div className="individual-contact" onClick= {onClick}>
            <div className="individual-pic-con">
                <img src={img} alt="" className="individual-pic" />
            </div>
            <div className="individual-text">
                <p className="individual-name">{name}</p>
                <p className="individual-about"><em>{about}</em></p>
            </div>
        </div>
    )
}

export default IndividualContact
