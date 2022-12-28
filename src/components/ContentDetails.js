import React from "react";
import BenifitDetailCard from "./BenificDetailCard";
import BootcampCard from "./BootcampCard";

const data = [
  {
    src: "./icons8-personal-computer-24.png",
    title: "Intensive Interview Workshop",
    con: "2Hrs Of LIVE Workshop Which Will Cover Interview Preparation Strategy, Technique To Ace Any Interviews And Much More…",
  },
  {
    src: "./icons8-lecture-64.png",
    title: "Public Speaking Workshop",
    con: "Idea + Confidence + Content \n Deliver,Make YOU \n Stand Out The Crowd \n And Be A Great Public Speaker",
  },
  {
    src: "./icons8-conference.gif",
    title: "Human Resource Workshop",
    con: "Do You Want To Make \n Your Career In HR But \n Don’t Know From Where To Start,\n What Should Be The Right Pathway, Is This The Right Career For You?",
  },
  {
    src: "./icons8-literature.gif",
    title: "Résumé Building Workshop",
    con: "3 Hrs Of LIVE Session\nWith One-To-One Mentorship\nTo Prepare Your \nVideo And Written Resume \nFor All Your Upcoming Interviews",
  },
];

const bootcampData = [
  {
    src: "./image 2.png",
    title: "Young Leaders Bootcamp",
    con: "Our flagship program which covers each and every aspect of the interview process like Group Discussion, Panel Discussion, Personal Interview, etc.",
  },
  {
    src: "./image 3.png",
    title: "Human Resource Generalist Bootcamp",
    con: "The Bootcamp will cover all aspects which HR dealt with from Talent Acquisition to Payroll and Policy. Learn from the Expert itself how the role evolves in the industry.",
  },
  {
    src: "./image 4.png",
    title: "Intensive Interview Bootcamp",
    con: "Crack your next Interview with 3 days of LIVE intensive preparation with 1:1 mentoring, feedback and mock by industry experts.",
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
            Bored Of Daily Lectures & Bookish Knowledge?
          </p>
          <p className="simple-text">
            We were too back in the days, so we got you covered 😎
            <br /> TBH Circle is a skill development platform imbibing Practical
            knowledge with shared experiential learning with Top Industry
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
          name for yourself, don’t wait till it’s too late, start with any of
          our Master Workshops to hone your skills leading to holistic
          development.
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
        <div className="about-grid">{}</div>
        <div>
          <p className="master-text">About TBH Circle</p>
          <p className="secondary-text">
            Even Superheroes Need A Mentor To Evolve And Grow.
          </p>
          <p className="simple-text">
            TBH Circle is the 1st skill platform imbibing Practical knowledge
            with shared experiential learning with top industry experts to make
            you job & career ready. According to India Skill Report 96% youth
            graduating is not employable & 81% of Hiring experts say that
            students lack the skills required to perform jobs. This creates
            stress for the Youth & their Parents.
          </p>
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
        <div className="mentor-grid">{}</div>
      </div>
      <div className="">
        <div>
          <p className="master-text">FAM-SPAM </p>
          <p className="secondary-text">Sneek peek </p>
          <p className="simple-text">What Our Students Have To Say</p>
          <p className="secondary-text">About Us</p>
        </div>
        <div>
          <img src="#" alt="" />
        </div>
        <div>
          <p className="master-text">
            Learn, Earn And Growth
            <br /> With TBH Circle
          </p>
          <button>JOIN SQUAD!!</button>
        </div>
      </div>
      <div className="about">
        <div>
          We are here to build a strong family of students by skilling them in
          job prepration and honing their talents and empowering them to become
          the leaders of tomorrow.{" "}
        </div>
        <div>
          <p>Quick Links</p>
          <p>HOME</p>
          <p>Master Workshops</p>
          <p>Youth Community</p>
        </div>
        <div>
          <p>Company</p>
          <p>About Us</p>
          <p>Career</p>
        </div>
        <div>
          <p>Help & Support</p>
          <p>info@tbhcircle.com</p>
          <p>+91 9599383624</p>
        </div>
        <div className="about-grid">{}</div>
      </div>
    </div>
  );
};

export default ContentDetails;
