import React from "react";
import Carousel from "react-material-ui-carousel";
// import { Paper, Button } from '@mui/material'

function CarouselCard(props) {
  const carouselData = [
    {
      name: "Pratishtha Kiran \n IHM Bhopal",
      con: "TBH Circle has helped me tremendously to enhance my confidence, communication skills, team management and also helped me to build a strong network with people coming from diverse fields. ",
    },
    {
      name: "Neelam Bisht\nAIHM chandigarh",
      con: "It has been an amazing journey. I learned many new things and explored my talents. TBH Circle is a very good platform for people who want to grow in their life and discover all the surprises waiting for them. ",
    },
    {
      name: "Rishika Khosla\nIHM Bhopal",
      con: "If you want to get your career in right track, TBH circle is there for you. And i meant it. From endless discussion on interviews, body language, negotiation, choose the right brand , CV writing, buisness tips To making you the best version of yourself . ",
    },
    {
      name: "Rushikesh Banait\nIHM Bhopal",
      con: "Before joining TBH CIRCLE I was a introvert kind Person during professional discussion, but now because of TBH CIRCLE I can easily manage it.When I was doing internship over there TBH family train me in my work they were also analysing me & my problems.",
    },
    {
      name: "Amisha Upreti\nNMIMS Mumbai",
      con: "It was a very beautiful journey with Tbh circle .I came to know lot of new things. lt was not less than an adventure to me.Vikram sir is really a very hardworking and optimistic person.",
    },
    {
      name: "Arikta Wagh\nIHM Mumbai",
      con: "Attending Public Speaking workshop with Vijay Vikram Sir came me more confidence and infact, I over came my stage fear also. Thank you so much for this workshop. I would highly recommend everyone.",
    },
  ];

  return (
    <Carousel height={"60vh"} interval={3000}>
      {carouselData.map((item, i) => (
        <div key={i} className="carousel-card">
          <div className="cc-container">
            <img
              style={{
                height: "10vh",
                borderRadius: "100%",
                alignSelf: "center",
                justifySelf: "center",
              }}
              src={require("./image2.png")}
              alt=""
            />
            <p
              style={{ alignSelf: "center", justifySelf: "center" }}
              className="master-text"
            >
              {item.name}
            </p>
            <img
              style={{
                height: "3vh",
                alignSelf: "center",
                justifySelf: "center",
              }}
              src={require("./linkedin-gif.gif")}
              alt=""
            />
          </div>
          <p className="simple-text">{item.con}</p>
        </div>
      ))}
    </Carousel>
  );
}

export default CarouselCard;

// function Item(props)
// {
//     return (
//         <Paper>
//             <h2>{props.item.name}</h2>
//             <p>{props.item.description}</p>

//             <Button className="CheckButton">
//                 Check it out!
//             </Button>
//         </Paper>
//     )
// }
