import React from "react";

const BenifitDetailCard = (props) => {
  return (
    <div className="benifit-detail-card">
      <img src={require(props.src)} alt="" />
      <p className="master-text">{props.title}</p>
      <p className="simple-text">{props.con}</p>
    </div>
  );
};

export default BenifitDetailCard;
