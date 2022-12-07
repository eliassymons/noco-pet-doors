import guarantee from "../images/guarantee.png";
import Button from "react-bootstrap/Button";
import { Link } from "react-scroll";

function PetDoors() {
  return (
    <div className="pet-doors" id="pet-doors">
      <div className="pet-info">
        <h2>We offer custom pet doors tailored to your needs.</h2>
        <p>
          <strong>
            You want to give your pet more freedom, but finding the right pet
            door solution can be difficult.
          </strong>{" "}
          Trying to find the right product at an affordable price can be
          overwhelming and not every solution will fit your individual needs. We
          will free up your time and give your pet the independence they deserve
          with a secure, energy-efficient pet door that fits your home
          perfectly.
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
      <img alt="quality-guarantee" src={guarantee} className="pet-doors-img" />
    </div>
  );
}

export default PetDoors;
