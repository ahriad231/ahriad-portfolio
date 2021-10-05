import React from "react";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import("../Styles/_typography.scss");

const HomePage = () => {
  return (
    <div>
      <div className="HomePage">
        <header className="hero">
          <h1 className="hero-text">
            Hi, I am
            <span> AH RIAD.</span>
          </h1>
          <p className="h-sub-text">
          A Front-end Web Developer. JavaScript is my crush language. As a programmer, I love taking on challenges and love being part of the solution.
          My hobby is keeping myself updated with all the latest technologies and tools.
          </p>
          <div className="icons">
            <Link to="ahriad23" className="icon-holder">
              <FontAwesomeIcon icon={faFacebook} className="icon fb" />
            </Link>
            <Link to="test" className="icon-holder">
              <FontAwesomeIcon icon={faGithub} className="icon gh" />
            </Link>
            <Link to="test" className="icon-holder">
              <FontAwesomeIcon icon={faYoutube} className="icon yt" />
            </Link>
          </div>
        </header>
      </div>
    </div>
  );
};

export default HomePage;
