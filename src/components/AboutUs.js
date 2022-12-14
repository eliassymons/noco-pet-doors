import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import family from "../images/noco-family.jpeg";
import dog from "../images/echo-info.jpeg";
import husky from "../images/husky.JPG";

function AboutUs() {
  return (
    <div className="about-us">
      <div className="about-story">
        <img alt="family" src={family} className="family-img" />
        <div className="about-copy">
          <h2>About Us</h2>
          <p>
            Hi! We’re the Weants -- owners of NoCo Pet Doors. We believe every
            pet deserves the opportunity to live a full and engaged life with
            their family. That’s why we offer the most comprehensive pet door
            solutions for your home.
          </p>
          <p>
            With over a decade of experience installing in-wall and in-glass pet
            doors, we’ve labored to create a business that reflects our values:
            Integrity, Passion, and Community Service. We’ve partnered with
            Launch Community Through Skateboarding and a portion of all our
            sales go directly towards helping the kids in our community find a
            culture of creativity and self- expression.
          </p>
        </div>{" "}
      </div>
      <div className="beginnings-story">
        <div className="beginnings-copy">
          <h2>Pawsitive Beginnings</h2>
          <p>
            We started NoCo Pet Doors with a loving connection to our pets, and
            the right mentality to get the hard work done right. We strive to
            offer a seamless and efficient option for humans and pets to spend
            their time together. Ultimately, the work we do helps families
            foster the same comfortable environment we have at home with our
            own.
          </p>
        </div>
        <img alt="dog" src={dog} className="dog-img" />
      </div>
      <div className="testimonial">
        <img alt="family" src={husky} className="testimonial-img" />
        <div className="testimonial-copy">
          <h2>See for Yourself</h2>

          <p>
            <span>" </span>
            This is a great business! They were very thorough in explaining the
            process to install a dog door in glass. They always showed up on
            time and we’re professional in their craftsmanship. I couldn’t ask
            for better customer service and quality of work. <span> "</span>
          </p>
          <h4 className="attribution">Gaylyn W.</h4>
        </div>{" "}
      </div>
      <div className="hours">
        <h2>NoCo Pet Doors:</h2>
        <p>Monday 8-6</p>
        <p>Tuesday 8-6</p>
        <p>Wednesday 8-6</p>
        <p>Thursday 8-6</p>
        <p>Friday 8-6</p>
        <p>Saturday 8-6</p>
        <div className="about-us-contact">
          <a href="mailto: Info@nocopetdoors.com">Info@nocopetdoors.com</a>/
          <a href="tel:970-215-7385">(970) 215-7385</a>
        </div>
      </div>
      <Button variant="primary" className="back-btn">
        <Link to="/" className="about-us-link">
          &#60;
        </Link>
      </Button>
    </div>
  );
}

export default AboutUs;
