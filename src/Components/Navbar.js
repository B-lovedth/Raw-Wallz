import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [scrolled, setScrolled] = useState(false)
  const checkScrolled = () =>{
    if (window.scrollY > 50) {
      setScrolled(true)
    } else setScrolled(false);
  }
  const handleClick = () => {
    setClick(!click);
  };

  const closeMobileMenu = () => {
    setClick(false);
  };

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  window.addEventListener("resize", showButton);

  useEffect(() => {
    showButton();
    checkScrolled()
    window.addEventListener("scroll", checkScrolled);

    return(()=> window.removeEventListener("scroll" , checkScrolled))

  }, []);

  return (
    <div>
      <nav className={scrolled ? "navbar scrolled" : "navbar"}>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            Project
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars-staggered"}>
              {" "}
            </i>
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/services'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Services
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/products'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Products
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/sign-up'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Sign-Up
              </Link>
            </li>
          </ul>
          {button && (
            <Link to='/sign-up'>
              <button>SIGN UP</button>
            </Link>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
