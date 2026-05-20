import {
  FiGithub,
  FiInstagram,
  FiLinkedin,
  FiTwitter
} from "react-icons/fi";
import leaf from "../assets/leaf.png";

export default function Footer() {

  return (

    <footer className="footer">

  <img
    src={leaf}
    alt=""
    className="footer-leaf"
  />

      <div className="container footer-container">

        <div className="footer-left">

          <h2>
            AYAT<span>360</span>
          </h2>

          <p>
            Frontend Web Developer building premium modern digital experiences with scalable frontend technologies.
          </p>

        </div>

        <div className="footer-socials">

          <a href="#">
            <FiGithub />
          </a>

          <a href="#">
            <FiInstagram />
          </a>

          <a href="#">
            <FiLinkedin />
          </a>

          <a href="#">
            <FiTwitter />
          </a>

        </div>

      </div>

      <div className="footer-bottom">

        © 2026 AYAT360. All rights reserved.

      </div>

    </footer>

  );

}