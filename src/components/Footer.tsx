import "./styles/Footer.css";
import { config } from "../config";
import { MdCopyright, MdArrowOutward } from "react-icons/md";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-section" id="contact">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <h2>{config.developer.name}</h2>
            <p>{config.developer.description}</p>
          </div>
          
          <div className="footer-links">
            <div className="footer-link-group">
              <h4>Navigation</h4>
              <ul>
                <li><a href="#about" data-cursor="disable">About</a></li>
                <li><a href="#whatido" data-cursor="disable">What I Do</a></li>
                <li><a href="#work" data-cursor="disable">My Work</a></li>
                <li><a href="#contact" data-cursor="disable">Contact</a></li>
              </ul>
            </div>
            
            <div className="footer-link-group">
              <h4>Social</h4>
              <ul>
                <li>
                  <a href={config.contact.github} target="_blank" rel="noopener noreferrer" data-cursor="disable">
                    Github <MdArrowOutward />
                  </a>
                </li>
                <li>
                  <a href={config.contact.linkedin} target="_blank" rel="noopener noreferrer" data-cursor="disable">
                    LinkedIn <MdArrowOutward />
                  </a>
                </li>
                <li>
                  <a href={config.contact.twitter} target="_blank" rel="noopener noreferrer" data-cursor="disable">
                    Twitter <MdArrowOutward />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-copyright">
            <MdCopyright /> {new Date().getFullYear()} {config.developer.name}. All Rights Reserved.
          </div>
          
          <div className="footer-social-links">
            <a href={config.contact.github} target="_blank" rel="noopener noreferrer" data-cursor="disable">
              <FaGithub />
            </a>
            <a href={config.contact.linkedin} target="_blank" rel="noopener noreferrer" data-cursor="disable">
              <FaLinkedin />
            </a>
            <a href={config.contact.twitter} target="_blank" rel="noopener noreferrer" data-cursor="disable">
              <FaTwitter />
            </a>
            <a href={config.contact.instagram} target="_blank" rel="noopener noreferrer" data-cursor="disable">
              <FaInstagram />
            </a>
          </div>
          
          <div className="footer-credit">
            Designed and Developed by <span>{config.developer.name}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
