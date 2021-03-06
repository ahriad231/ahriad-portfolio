import React from "react";
import("../Styles/_services.scss");

const ServicesSection = ({ image, title, text }) => {
  return (
    <div className="ServicesSection">
      <div className="service">
        <div className="service-content">
          <img src={image} alt="" />
          <h5 className="s-title">{title}</h5>
          <p className="s-text">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
