import React from "react";

const Header = () => {
  return (
    <>
      <section className="head-section">
        <nav>
          <div className="nav-logo">
            <a href="#">
              <img src="images/logo4.png" alt="" />
            </a>
          </div>
          <ul class="nav-links">
            <li class="link">
              <a href="#">Home</a>
            </li>
            <li id="link1" class="link">
              <a href="#">Services</a>
            </li>
            <li id="link2" class="link">
              <a href="#">Affiliation</a>
            </li>
            <li id="link3" class="link">
              <a href="#">Skills</a>
            </li>
            <li id="link3" class="link">
              <a href="#">Services</a>
            </li>
            <li id="link3" class="link">
              <a href="#">Portfolio</a>
            </li>
            <li id="link3" class="link">
              <a href="#">Blog</a>
            </li>
          </ul>
          <button class="btn">Contact Me</button>
        </nav>
        <header class="container">
          <div class="content">
            <span class="blur"></span>
            <span class="blur"></span>
            <h4>EMBARKING ON EXCITING DIGITAL ADVENTURES</h4>
            <h1>
              Hi, I'm <span>Yamraj</span>, Full Stack Developer
            </h1>
            <p>
              In my IT journey, I love turning complex ideas into digital
              success stories. With a proven track record of happy clients and
              outstanding results, I consider myself a distinguished figure of
              the digital realm.
            </p>
            <button class="btn">Get Started</button>
          </div>
          <div class="solar-system">
            <div class="sun"></div>
            <div class="earth">
              <div class="moon"></div>
            </div>
            <div class="image">
              <img src="images/Yamraj.png" />
            </div>
          </div>
        </header>
      </section>
    </>
  );
};

export default Header;
