import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

// styles
import "./Navbar.scss";

export default function Navbar() {
  const [isActive, setActive] = useState(false);

  const toggleActive = () => {
    setActive(!isActive);
  };

  return (
    <header>
      <div className='container'>
        <nav className='navbar'>
          <Link to='/'>
            <h2 className='nav-logo'>GamerzShack</h2>
          </Link>
          <div className={`nav-list ${isActive ? "active" : ""}`}>
            <NavLink to='/' className='nav-link' onClick={toggleActive}>
              Home
            </NavLink>
            <NavLink to='about' className='nav-link' onClick={toggleActive}>
              About
            </NavLink>
            <NavLink to='help' className='nav-link' onClick={toggleActive}>
              Help
            </NavLink>

            <div className='nav-branding'>
              <h2 className='nav-branding__logo margin-bot'>
                GamerzShack<span className='tm'>&trade;</span>
              </h2>

              <button className='btn'>SIGN UP</button>
            </div>
          </div>

          <div
            className={`hamburger ${isActive ? "active" : ""}`}
            onClick={toggleActive}>
            <span className='hamburger__bar'></span>
            <span className='hamburger__bar'></span>
            <span className='hamburger__bar'></span>
          </div>
        </nav>
      </div>
    </header>
  );
}
