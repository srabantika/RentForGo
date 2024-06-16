import React from "react";
import data from "../../utils/slider.json";
// to make the slider , we require he swiper.js
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
 
import "swiper/css";
 
import "./Residencies.css";
//noe slider settings have to be imported so that the carousal may contain as the no. of images expected at atime
import { sliderSettings } from "../../utils/common";
const Residencies = () => {
  return (
    <div id="residencies" className="r-wrapper">
      <div className="paddings innerWidth r-container">
        <div className="flexColStart r-head">
          <span className="orangeText">Best Choices</span>
          <span className="primaryText">Popular Residencies</span>
        </div>
        <Swiper {...sliderSettings}>
          <SlideNextButton />
          {/********** slider *****************/}
          {/* here, data.map=>data is taken frrom slidder.jso and then each od the data iss being mapped here,  */}
          {/* card == referring to each object here & i=index of the object */}

          {data.map((card, i) => (
            <SwiperSlide key={i}>
              {/* above written key={i} is basically indiating the ndex of all the objecs */}
              <div className="flexColStart r-card">
              {/* below , as per our requirement tha what we want 1st, we rite the code */}
              {/* 1.photo 2.prie 3.name 4.detail */}
              {/* if we carefully notice, withi the r-card only,and below written all details, it would have bassically looked like a box and thi box an be swipped by hand , just like exmples in documentation, like nested one */}
              {/* make beatiful by using css */}
                <img src={card.image} alt="home" />

                <span className="secondaryText r-price">
                  <span style={{ color: "orange" }}>$</span>
                  <span>{card.price}</span>
                </span>
                <span className="primaryText">{card.name}</span>
                <span className="secondaryText">{card.detail}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Residencies;

const SlideNextButton = () => {
  const swiper = useSwiper();
  return (
    <div className="flexCenter r-buttons">
      <button onClick={() => swiper.slidePrev()} className="r-prevButton">
        &lt;  {/*it is the symbol for less than */}
      </button>
      <button onClick={() => swiper.slideNext()} className="r-nextButton">
        &gt;
      </button>
    </div>
  );
};
