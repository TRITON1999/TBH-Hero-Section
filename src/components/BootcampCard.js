import React from "react";

const BootcampCard = (props) => {
  return (
    <div className="bootcamp-card">
      <img src={require(props.src)} alt="" />
      <div>
        <div className="master-text">{props.title}</div>
        <div className="simple-text">{props.con}</div>
      </div>
    </div>
  );
};

export default BootcampCard;
