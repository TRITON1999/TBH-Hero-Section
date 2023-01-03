import React from "react";

const MentorCard = (props) => {
  return (
    <div className="mentor-card">
      <img src={props.src} alt="" />
      <div>
        <p className="master-text">
          {props.name}{" "}
          <img
            style={{ height: "3vh" }}
            src={require("./linkedin-gif.gif")}
            alt=""
          />
        </p>
        <p className="simple-text">{props.con}</p>
        <p>
          Ex | <span style={{ fontWeight: "800" }}>Deloitte.</span>
        </p>
      </div>
    </div>
  );
};

export default MentorCard;
