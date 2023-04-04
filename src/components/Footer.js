import facebook from "../images/socials/facebook.svg";
import instagram from "../images/socials/instagram.svg";

function Footer() {
  return (
    <div className="footer">
      <p className="footer-text">&copy; Copyright 2022 NoCo Pet Doors</p>
      <a
        href="https://www.facebook.com/profile.php?id=100083529694359"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="facebook" src={facebook} className="social-icon" />
      </a>
      <a
        href="https://www.instagram.com/nocopetdoors/"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="instagram" src={instagram} className="social-icon" />
      </a>
    </div>
  );
}

export default Footer;
