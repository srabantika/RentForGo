import React from "react";
import './SocialMedia.css'
const SocialMedia = () => {
  return (
    <section className="c-wrapper">
      <span className="flexColCenter primaryText">Connect Us</span>
      <div className="paddings innerWidth flexCenter c-container">
        <img src="./instagram.png" alt="instagram" />
        <img src="./facebook.png" alt="facebook" />
        <img src="./linkedin.png" alt="linkedin" />
        <img src="./github.png" alt="github" />
         
         
      </div>
    </section>
  );
};

export default SocialMedia;
