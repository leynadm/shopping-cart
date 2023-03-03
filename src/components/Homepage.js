import React from "react";
import "../styles/Homepage.css";
import imgFisherman01 from "../images/fisherman.png";
import imgFisherman02 from "../images/fisherman2.png";
import imgFisherman03 from "../images/fisherman3.png";

function Homepage() {
  return (
    <div className="homepage">
      <div className="homepage-header"></div>
      <div className="homepage-intro-area">
        Located in the heart of a small coastal town, we have become the
        favorite fishing store among fishermen worldwide. Known for its
        exceptional selection of high-quality fishing gear and knowledgeable
        staff, we are a one-stop-shop for all things fishing. Whether you are a
        seasoned angler or just starting out, our friendly and experienced team
        is always willing to share our expertise and provide personalized
        recommendations to ensure you have the best experience possible!
      </div>
      <div className="homepage-boxes">
        <div className="homepage-box-wrap">
          <div className="homepage-box box-one">
            <img src={imgFisherman01} alt="fisherman"></img>
          </div>
          <div className="homepage-box-description">
            Andy says "I would have bought from here even if there were other
            stores around."
          </div>
        </div>
        <div className="homepage-box-wrap">
          <div className="homepage-box box-two">
            <img src={imgFisherman02} alt="another fisherman"></img>
          </div>
          <div className="homepage-box-description">
            Andrew says{" "}
              "Yes, I caught this fish from a lake while it was still alive and
              not frozen and previosuly thrown there from supermarket
            
          </div>
        </div>
        <div className="homepage-box-wrap">
          <div className="homepage-box box-two">
            <img src={imgFisherman03} alt="another fisherman"></img>
          </div>
          <div className="homepage-box-description">
            Andres says "This store has fishing products."
              
          </div>
        </div>

      </div>
      <div className="footer"></div>
    </div>
  );
}

export default Homepage;
