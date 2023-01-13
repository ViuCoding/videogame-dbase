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
          <h2 className='footer-logo'>
            Parmigiana<span className='tm'>&trade;</span>
          </h2>

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
      </div>
    </footer>
  );
}
