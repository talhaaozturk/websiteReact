import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import "./Navbar.css";
import "./Button.css";
import HeroSection from "./HeroSection";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  const handleClick = () => {
    setClick(!click);
  };
  const closeMobilMenu = () => {
    setClick(false);
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link className="navbar-logo " onClick={closeMobilMenu} to="/">
            TRAVEL
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars "}></i>
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item" onClick={closeMobilMenu}>
              <Link className="nav-links" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item" onClick={closeMobilMenu}>
              <Link className="nav-links" to="/services">
                Services
              </Link>
            </li>
            <li className="nav-item" onClick={closeMobilMenu}>
              <Link className="nav-links" to="/products">
                Products
              </Link>
            </li>
            <li className="nav-item" onClick={closeMobilMenu}>
              {button === true ? (
                " "
              ) : (
                <Link className="nav-links" to="/sign-up">
                  Sıgn up{" "}
                </Link>
              )}
            </li>
          </ul>
          <div className="navbar-button">
            {button && <Button buttonStyle={"btn--outline"}>SIGN UP</Button>}
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
