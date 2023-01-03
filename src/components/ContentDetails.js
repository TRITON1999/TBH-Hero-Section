import React from "react";
import AboutDetailCard from "./AboutDetailCard";
import BenifitDetailCard from "./BenificDetailCard";
import BootcampCard from "./BootcampCard";
import MentorCard from "./MentorCard";
import CarouselCard from "./CarouselCard";

const data = [
  {
    src: require("./icons8-personal-computer-24.png"),
    title: "Intensive Interview Workshop",
    con: "2Hrs Of LIVE Workshop Which Will Cover Interview Preparation Strategy, Technique To Ace Any Interviews And Much More…",
  },
  {
    src: require("./icons8-lecture-64.png"),
    title: "Public Speaking Workshop",
    con: "Idea + Confidence + Content \n Deliver,Make YOU \n Stand Out The Crowd \n And Be A Great Public Speaker",
  },
  {
    src: require("./icons8-conference.gif"),
    title: "Human Resource Workshop",
    con: "Do You Want To Make \n Your Career In HR But \n Don’t Know From Where To Start,\n What Should Be The Right Pathway, Is This The Right Career For You?",
  },
  {
    src: require("./icons8-literature.gif"),
    title: "Résumé Building Workshop",
    con: "3 Hrs Of LIVE Session\nWith One-To-One Mentorship\nTo Prepare Your \nVideo And Written Resume \nFor All Your Upcoming Interviews",
  },
];

const bootcampData = [
  {
    src: require("./image2.png"),
    title: "Young Leaders Bootcamp",
    con: "Our flagship program which covers each and every aspect of the interview process like Group Discussion, Panel Discussion, Personal Interview, etc.",
  },
  {
    src: require("./image3.png"),
    title: "Human Resource Generalist Bootcamp",
    con: "The Bootcamp will cover all aspects which HR dealt with from Talent Acquisition to Payroll and Policy. Learn from the Expert itself how the role evolves in the industry.",
  },
  {
    src: require("./image4.png"),
    title: "Intensive Interview Bootcamp",
    con: "Crack your next Interview with 3 days of LIVE intensive preparation with 1:1 mentoring, feedback and mock by industry experts.",
  },
];
const aboutData = [
  { src: require("./icon-about1.png"), val: "30K+", con: "Youth Mentored" },
  { src: require("./icon-about2.png"), val: "150+", con: "College Collab's" },
  {
    src: require("./icon-about3.png"),
    val: "426+",
    con: "Workshops Conducted",
  },
  { src: require("./icon-about4.png"), val: "83%", con: "Alumni Success Rate" },
];
const mentorData = [
  {
    src: require("./vikram.png"),
    name: "Vikram Kukreja",
    con: "Founder & Chief Learner TBH Circle | TEDx Speaker | 9 years of experience in HR, Consulting & Hospitality | Trained 4000+ youth and growing.",
  },
  {
    src: require("./sumit.png"),
    name: "Sumit Chaudhry",
    con: "Mentor at TBH Circle | Senior HR Head of Toyota | 10+ years of Experience in different aspects of Human Resources.",
  },
  {
    src: require("./vijay.png"),
    name: "Vijay Vikram Singh",
    con: "Voice-Over Artist | Narrator's Voice BIGG BOSS since 2010 | Actor of movies like The Family Man, breathe 2| Celebrity Coach to actor like Late Sushant Singh Rajput.",
  },
  {
    src: require("./prachi.png"),
    name: "Prachi Yadav",
    con: "Mentor & Trainer at TBH Circle | Seasoned Learning and Development Expert | 16+ years of Experience in Hospitality, HR and Consulting.",
  },
];
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

const ContentDetails = () => {
  return (
    <div className="content-details upp">
      <div className="detail-1">
        <div>
          <img src={require("./astroParty-.png")} alt="" />
        </div>
        <div>
          <p className="secondary-text-roman">
            Bored Of Daily Lectures <br /> & Bookish Knowledge?
          </p>
          <p className="simple-text">
            We were too back in the days, so we got you covered 😎
            <br /> TBH Circle is a skill development platform imbibing Practical
            knowledge <br />
            with shared experiential learning with Top Industry
            <br />
            Experts to make you job & career ready🚀
            <br />
            <br />
          </p>
          <button className="explore">Explore More</button>
        </div>
      </div>
      <div className="centred">
        <p className="master-text ">Master Workshop</p>
        <p className="secondary-text">
          Skills You Learn Today Will Make Your Tomorrow
        </p>
        <p className="simple-text">
          It’s about time when you outshine in this world of talent and earn a
          name for yourself, don’t wait till it’s too late,
          <br />
          start with any of our Master Workshops to hone your skills leading to
          holistic development.
        </p>
      </div>
      <div className="benefit-cards">
        {data.map((p) => (
          <BenifitDetailCard src={p.src} title={p.title} con={p.con} />
        ))}
      </div>
      <div className="bootcamp-details">
        <div>
          <img src="./icons8-leadership.gif" alt="" />
          <p className="secondary-text">Bootcamp</p>
          <p className="simple-text">
            Long intensive programs to make the youth job and career ready
          </p>
          <button> Register Now </button>
        </div>
        <div className="bootcamp-grid">
          {bootcampData.map((p) => (
            <BootcampCard src={p.src} title={p.title} con={p.con} />
          ))}
        </div>
      </div>
      <div className="about-details">
        <div className="about-grid">
          {aboutData.map((p) => (
            <AboutDetailCard src={p.src} val={p.val} con={p.con} />
          ))}
        </div>
        <div className="centre-v">
          <div>
            <p className="master-text">
              <img src={require("./icon-i.png")} alt="" />
              About TBH Circle
            </p>
            <p className="secondary-text">
              Even Superheroes Need A Mentor To Evolve And Grow.
            </p>
            <p className="simple-text">
              TBH Circle is the 1st skill platform imbibing Practical knowledge
              with shared experiential learning with top industry experts to
              make you job & career ready. According to India Skill Report 96%
              youth graduating is not employable & 81% of Hiring experts say
              that students lack the skills required to perform jobs. This
              creates stress for the Youth & their Parents.
            </p>
          </div>
        </div>
      </div>
      <div className="mentor">
        <p className="master-text">Our Mentors</p>
        <p className="secondary-text">
          Learn From The Top 1% Industry Experts To Be Future Ready.
        </p>
        <p className="simple-text">
          Take your first step towards achieving your goals with our wide
          variety of workshops and grab the opportunity to learn from THE PROs.
        </p>
        <div className="mentor-grid">
          {mentorData.map((p) => (
            <MentorCard src={p.src} name={p.name} con={p.con} />
          ))}
        </div>
      </div>
      <div className="fam">
        <div>
          <p className="m-text">FAM-SPAM </p>
          <p className="s-text">Sneek peek </p>
          <p className="sim-text">What Our Students Have To Say</p>
          <p className="s-text p">About Us</p>
          <CarouselCard />
        </div>
        <img className="at-corner" src={require("./astro-summer.png")} alt="" />
        <div>
          <p className="master-text">
            Learn, Earn And Growth
            <br /> With TBH Circle
          </p>
          <button>JOIN SQUAD!!</button>
          <p className="fa">
            We are here to build a strong family of students by skilling them in
            job prepration and honing their talents and empowering them to
            become the leaders of tomorrow.{" "}
          </p>
        </div>
      </div>
      <div className="about">
        <div>
          <p className="bold">Quick Links</p>
          <p>HOME</p>
          <p>Master Workshops</p>
          <p>Youth Community</p>
        </div>
        <div>
          <p className="bold">Company</p>
          <p>About Us</p>
          <p>Career</p>
        </div>
        <div>
          <p className="bold">Help & Support</p>
          <p>info@tbhcircle.com</p>
          <p>+91 9599383624</p>
        </div>
        <div className="logo-grid">
          <div>
            <img src={require("./logo.png")} alt="" />
          </div>
          <div className="icons">
            <img src={require("./twitter.png")} alt="" />
            <img src={require("./instagram.png")} alt="" />
            <img src={require("./linkedin.png")} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentDetails;
