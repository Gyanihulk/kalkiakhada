import React from "react";


const Landing = () => {

  return (
    <div className="landing">
      {/* <!-- INtro --> */}
      <div className="intro">
        <h4>
          Kalki<span></span>
        </h4>
        <h4>OPENING SOON in Your Town</h4>
        <h4>HARIDWAR</h4>
        
        <button className="btn btn-two"
          onClick={() => {
            navigate("/contest");
          }}
        >
          
          
            <span>Contest Registration</span>
         
       
        </button>
      </div>
      {/* Social  */}
      <div className="socials">
        <a href="https://www.youtube.com/channel/UCwRs2MJyHPzoCypJf5dqkMQ" target="_blank">
          <i className="uil uil-youtube coloredIcon"></i>
        </a>
        <a href="" target="_blank">
          <i className="uil uil-facebook coloredIcon"></i>
        </a>
        <a href="https://www.instagram.com/kalki.akhada" target="_blank">
          <i className="uil uil-instagram coloredIcon"></i>
        </a>
      </div>

      <div className="scrollDown">
        <div className="scrollDown__wheel">
          <div className="scrollDown__wheel--inner"></div>
        </div>
        <div className="scrollDown__arrow">
          <span className="scrollDown__arrow"></span>
          <span className="scrollDown__arrow"></span>
          <span className="scrollDown__arrow"></span>
        </div>
      </div>
    </div>
  );
};

export default Landing;
