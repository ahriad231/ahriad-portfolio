import React from "react";
import { Link } from "react-router-dom";
import about from "../img/about.JPG";

const ImageSection = () => {
  return (
    <div className="ImageSection">
      <div className="img">
        <img src={about} alt="" />
      </div>
      <div className="about-info">
        <h4>
          I am<span> AH RIAD</span>
        </h4>
        <p className="about-text">
          A Front-end Web Developer. JavaScript is my crush language. As a
          programmer, I love taking on challenges and love being part of the
          solution. My hobby is keeping myself updated with all the latest
          technologies and tools.
        </p>
        <div className="about-details">
          <div className="left-section">
            <p>Full Name</p>
            <p>Age</p>
            <p>Nationality</p>
            <p>Languages</p>
            <p>Address</p>
            <p>Countries</p>
          </div>
          <div className="right-section">
            <p>: Alamgir Hossain Riad</p>
            <p>: 22</p>
            <p>: Bangladeshi</p>
            <p>: Bangla,Hindi,Urdu,English</p>
            <p>: Gazipur , Dhaka , Bangladesh</p>
            <p>: Bangladesh</p>
          </div>
        </div>
        <button className="btn">
          <Link
            to="https://drive.google.com/file/d/1NpOjV-sbU4vzy-rzbGvi-3H58C4ZuBhN/view?usp=sharing"
            target="_blank"
          >
            Download Cv
          </Link>
        </button>
      </div>
    </div>
  );
};

export default ImageSection;
