import React from "react";

const Footer = () => {
  return (
    <>
      <div>
        <footer className="container">
          <span className="blur" />
          <span className="blur" />
          <div className="column">
            <div className="logo">
              <img src="images/logo4.png" />
            </div>
            <p>
              Creating seamless web experiences with a passion for full stack
              development.
            </p>
            <div className="socials">
              <a href="#">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-github"></i>
              </a>
            </div>
          </div>
          <div className="column">
            <h4>Company</h4>
            <a href="#">Business</a>
            <a href="#">Partnership</a>
            <a href="#">Network</a>
          </div>
          <div className="column">
            <h4>About Us</h4>
            <a href="#">Blogs</a>
            <a href="#">Channels</a>
            <a href="#">Sponsors</a>
          </div>
          <div className="column">
            <h4>Contact</h4>
            <a href="#">Contact Us</a>
            <a href="#">Privicy Policy</a>
            <a href="#">Terms &amp; Conditions</a>
          </div>
        </footer>
        <div className="copyright">
          Copyright © 2023 YamrajShrestha. All Rights Reserved.
        </div>
      </div>
    </>
  );
};

export default Footer;
