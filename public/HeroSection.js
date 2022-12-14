import "./HeroSection.css";
import Navigation from "./Navigation";

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div id="space">
        <div class="stars"></div>
        <div class="stars"></div>
        <div class="stars"></div>
        <div class="stars"></div>
        <div class="stars"></div>
      </div>
      <Navigation />
      <div className="hero-container upp ">
        <div className="centering">
          <div className="hero-text">
            <p
              className="text1"
              style={{ color: "#FFFFFF", fontWeight: "bold", fontSize: "44px" }}
            >
              Make Youth
            </p>
            <p className="text2" style={{ color: "#FFD058", fontSize: "60px" }}>
              JOBS & CAREER
            </p>
            <p
              className="text3"
              style={{ color: "#ffffff", fontSize: "104px" }}
            >
              READY
            </p>
            <p
              className="text4"
              style={{ color: "#FFE8AE", fontSize: "30px", fontWeight: "600" }}
            >
              Build Practical Skills with Top Industry Experts
            </p>
            <button>BOOK A FREE CALL</button>
          </div>{" "}
        </div>
        <div className="hero-img">
          <img className="rocket-img" src="./rocketman.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
