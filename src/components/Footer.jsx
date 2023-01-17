// styles
import "./Footer.scss";
import RAWG1 from "../assets/img/rawg logo2.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer>
      <div className='container'>
        <div className='footer'>
          <h2 className='footer-logo'>GamerzShack </h2>

          <div className='social-icons'>
            <a href='#' className='icon'>
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href='#' className='icon'>
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href='#' className='icon'>
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </div>
        </div>
        <div className='rawg-logo'>
          <sup>Data provider</sup>
          <a href='https://rawg.io/' target='_blank'>
            <img src={RAWG1} alt='' />
          </a>
        </div>
      </div>
    </footer>
  );
}
