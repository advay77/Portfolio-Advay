import "./styles/Footer.css";
import { config } from "../config";
import { MdCopyright } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-bottom">
          <div className="footer-copyright">
            <MdCopyright /> {new Date().getFullYear()} {config.developer.name}. All Rights Reserved.
          </div>
          
          <div className="footer-nav-links">
            <a href="#about" data-cursor="disable">About</a>
            <a href="#whatido" data-cursor="disable">What I Do</a>
            <a href="#work" data-cursor="disable">My Work</a>
            <a href="#contact" data-cursor="disable">Contact</a>
          </div>
          
          <div className="footer-credit">
            Designed & Developed by <span>{config.developer.name}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
