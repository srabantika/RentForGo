import React from "react";
import "./Footer.css";
import { HiLocationMarker } from "react-icons/hi";
const Footer = () => {
  return (
    <div className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* left side */}
        <div className="flexColStart f-left">
          <img src="./logo.png" alt="" width={150} style={{ borderRadius: '50%'  }}/>
          <span className="secondaryText">
            Our vision is to make all people <br />
            Rent the best place  for them.
          </span>
        </div>

        <div className="flexColStart f-right">
          <span className="primaryText">Headquarters<HiLocationMarker color="var(--blue)" size={25} /></span>
          <span className="secondaryText">Agartala, Tripura(W), India</span>
          <div className="flexCenter f-menu">
            <span>Property</span>
            <span>Services</span>
            <span>Product</span>
            <span>About Us</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
