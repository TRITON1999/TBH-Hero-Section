import React from "react";

const AboutDetailCard = (props) => {
  return (
    <div className="about-detail-card">
      <img src={props.src} alt="" />
      <p className="master-text">{props.val}</p>
      <p className="simple-text">{props.con}</p>
    </div>
  );
};

export default AboutDetailCard;
