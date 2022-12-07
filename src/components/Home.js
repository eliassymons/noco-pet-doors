import Button from "react-bootstrap/Button";
import { Link } from "react-scroll";

function Home() {
  return (
    <div className="home">
      <div className="home-info">
        <h1>Give your best friend the best.</h1>
        <h3>
          We install a seamless pet door that is safe and secure for the entire
          home.
        </h3>
        <h3>
          We are Northern Colorado’s leading pet door experts. With over a
          decade of experience every installation is accompanied by a lifetime
          warranty.
        </h3>
      </div>
      <Button variant="primary">
        <Link to="contact" spy={true} smooth={true} offset={-90} duration={500}>
          Get a free estimate!
        </Link>
      </Button>
    </div>
  );
}

export default Home;
