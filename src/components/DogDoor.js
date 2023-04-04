import { HashLink } from "react-router-hash-link";
import { Button } from "react-bootstrap";
import glass from "../images/french-door.jpg";
import entry from "../images/entry-door.webp";
import wall from "../images/in-wall.jpg";

function DogDoor() {
  return (
    <div className="dog-doors">
      <div className="dog-doors-container">
        <div className="dog-door" id="entry">
          <img alt="entry-door" src={entry} />
          <div className="content">
            <h2>Security Boss Entry Pet Door</h2>
            <p>
              A less expensive solution may be the entry door pet door from
              Security Boss. We typically see these doors leading into the
              garage and then out into the yard or dog run. While these options
              are less common they offer great benefits to you and your pet by
              allowing controlled access in the home while also saving a pretty
              penny!
            </p>
            <HashLink to="/#contact" smooth>
              <Button>Get your free quote!</Button>
            </HashLink>
          </div>
        </div>
        <div className="dog-door" id="glass">
          <img alt="entry-door" src={glass} />
          <div className="content">
            <h2>Security Boss In-glass Pet Door</h2>
            <p>
              Our 10+ yeas of experience has found that Security Boss In-glass
              pet doors are the highest quality and can brave even the most
              extreme Colorado weather. Apart from being the best dog doors near
              you, they come in a variety of sizes, colors, and other
              customizable options. Our team can help you find the perfect in
              glass pet door for your home today!
            </p>
            <HashLink to="/#contact" smooth>
              <Button>Get your free quote!</Button>
            </HashLink>
          </div>
        </div>
        <div className="dog-door" id="wall">
          <img alt="entry-door" src={wall} />
          <div className="content">
            <h2>Security Boss in-wall Pet Door</h2>
            <p>
              For those that don't have the option of an in-glass dog door the
              in-wall dog door from Security Boss may be the best option. With a
              fully enclosed aluminum tunnel and dual flap option it is sure to
              keep your home warm and breeze free. additionally the tunnels can
              be fully carpeted to increase energy efficiency while also
              allowing your pet the ability to wipe their paws as they enter the
              home.
            </p>
            <HashLink to="/#contact" smooth>
              <Button>Get your free quote!</Button>
            </HashLink>
          </div>
        </div>
      </div>
      {/* <Link to="/">
        <Button>back</Button>
      </Link> */}
    </div>
  );
}

export default DogDoor;
