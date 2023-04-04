import Button from "react-bootstrap/Button";
import smallDog from "../images/small-dog.JPG";
import { Link as AboutLink } from "react-router-dom";
import { Link } from "react-scroll";

function About() {
  return (
    <div className="about" id="about">
      <img alt="small-dog" className="about-img" src={smallDog} />
      <div className="about-info">
        <h2>About Us</h2>
        <p>
          We believe every pet deserves the opportunity to live a full and
          engaged life with their family. That’s why we offer the most
          comprehensive pet door solutions for your home. With over ten years of
          experience installing in-wall and in-glass pet doors, we’ve labored to
          create a business that reflects our values: Integrity, Passion, and
          Community. We’ve facilitated 600+ pet doors.
        </p>

        <Button variant="primary">
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-90}
            duration={500}
          >
            Get a free estimate!
          </Link>
        </Button>
      </div>
    </div>
  );
}

export default About;
