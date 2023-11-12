import React from "react";

const Header = () => {
  return (
    <div className="header">
      <div className="bg-video">
          <video className="bg-video__content" autoPlay muted loop>
            <source src="HeaderVideo.mp4" type="video/mp4"/>
            <source src="../img/video.webm" type="video/webm"/>
            Your browser is not supported!
          </video>
        </div>
      <div className="header-content">
        <div className="header-heading">
          <h1>INNOVATE SOLAR SOLUTIONS FOR YOUR HOME</h1>

          <p>light up with solar and save natural resources</p>
        </div>
        <div className="header_btn">
          <button>FIND OUT MORE</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
