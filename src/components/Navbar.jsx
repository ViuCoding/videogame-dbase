import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

// styles
import "./Navbar.scss";
import Searchbar from "./Searchbar";
import AltLogo from "../assets/img/joypad.svg";
import { useAuthContext } from "../hooks/useAuthContext";
import { useLogout } from "../hooks/useLogout";

export default function Navbar() {
  const [isActive, setActive] = useState(false);

  const { user } = useAuthContext();
  const { logout } = useLogout();

  const toggleActive = () => {
    setActive(!isActive);
  };

  return (
    <header>
      <div className='container'>
        <nav className='navbar'>
          <Link to='/'>
            <h2 className='nav-logo'>
              Gamerz<span className='blink-anim color-accent'>Shack</span>
            </h2>
            <div className='nav-logo__alt'>
              <img src={AltLogo} alt='' />
            </div>
          </Link>

          <Searchbar />

          <div className={`nav-list ${isActive ? "active" : ""}`}>
            <NavLink to='/' className='nav-link' onClick={toggleActive}>
              Home
            </NavLink>
            <NavLink to='games' className='nav-link' onClick={toggleActive}>
              Games
            </NavLink>
            <NavLink to='signup' className='nav-link' onClick={toggleActive}>
              <span>Sign up</span>
            </NavLink>
            {user ? (
              <NavLink to='/' className='nav-link' onClick={toggleActive}>
                <span onClick={logout}>Logout</span>
              </NavLink>
            ) : (
              <NavLink to='login' className='nav-link' onClick={toggleActive}>
                Login
              </NavLink>
            )}

            {/* <NavLink to='about' className='nav-link' onClick={toggleActive}>
              About
            </NavLink>
            <NavLink to='help' className='nav-link' onClick={toggleActive}>
              Help
            </NavLink> */}

            <div className='nav-branding'>
              <h2 className='nav-branding__logo margin-bot'>GamerzShack</h2>
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
