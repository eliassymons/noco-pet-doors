import glass from "../images/sliding-glass.jpg";
import entry from "../images/entry-door.webp";
import wall from "../images/in-wall.jpg";
import { HashLink } from "react-router-hash-link";
function Services() {
  return (
    <div className="services" id="services">
      <h2>Services</h2>
      <div className="services-container">
        <HashLink to="/dog-door#glass" smooth>
          <div className="service">
            <img alt="dog-door" src={glass} className="service-img" />
            <h3>Glass</h3>
            <p>
              In-glass is by far the best option for your home. In-glass options
              are sure to make you the envy of the neighborhood with this
              seamless design that allows full function of your patio door
              without sacrificing energy efficiency.
            </p>
          </div>
        </HashLink>
        <HashLink to="/dog-door#wall" smooth>
          <div className="service">
            <img alt="dog-door" src={wall} className="service-img" />
            <h3>Wall</h3>
            <p>
              Our in-wall pet doors include all the features of the in-glass
              model as well as an aluminum tunnel with optional carpet that will
              mitigate mud and other debris from entering the home.
            </p>
          </div>
        </HashLink>
        <HashLink to="/dog-door#entry" smooth>
          <div className="service">
            <img alt="dog-door" src={entry} className="service-img" />
            <h3>Entry</h3>
            <p>
              If you're looking for something cheaper but still great quality
              the entry door will be the perfect solution. They allow your pets
              access to the garage or other areas of the home that you may want
              to give them.
            </p>
          </div>
        </HashLink>
      </div>
    </div>
  );
}

export default Services;
