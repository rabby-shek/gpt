/**
 * navbar component
 * contains brand logo, navbar, login and sign up button
 * @returns {JSX.Element} => ReactJS Component
 */
import React, { useState, useEffect } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/logo.svg";
import "./navbar.css";
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // handling navbar background color on window scroll
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 100;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);
  return (
    <div className={`gpt__navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="gpt__navbar-links">
        <div className="gpt__navbar-links_logo">
          <img src={logo} />
        </div>
        {/* menu on large screen */}
        <div className="gpt__navbar-links_container">
          <p>
            <a href="#home">Home</a>
          </p>
          <p>
            <a href="#wgpt">What is gpt?</a>
          </p>
          <p>
            <a href="#possibility">Open AI</a>
          </p>
          <p>
            <a href="#features">Case Studies</a>
          </p>
          <p>
            <a href="#blog">Library</a>
          </p>
        </div>
      </div>
      <div className="gpt__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className="gpt__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {/* menu on small screen */}
        {toggleMenu && (
          <div className="gpt__navbar-menu_container scale-up-center">
            <div className="gpt__navbar-menu_container-links">
              <p>
                <a href="#home" onClick={() => setToggleMenu(false)}>
                  Home
                </a>
              </p>
              <p>
                <a href="#wgpt" onClick={() => setToggleMenu(false)}>
                  What is gpt?
                </a>
              </p>
              <p>
                <a href="#possibility" onClick={() => setToggleMenu(false)}>
                  Open AI
                </a>
              </p>
              <p>
                <a href="#features" onClick={() => setToggleMenu(false)}>
                  Case Studies
                </a>
              </p>
              <p>
                <a href="#blog" onClick={() => setToggleMenu(false)}>
                  Library
                </a>
              </p>
            </div>
            <div className="gpt__navbar-menu_container-links-sign">
              <p>Sign in</p>
              <button type="button">Sign up</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
