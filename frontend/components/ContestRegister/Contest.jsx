import React from "react";
import "./Contest.scss";
const Contest = () => {
  return (
    <section className="section contest">
      <div className="contest__wrapper">
        <div className="contest__header">
          <div className="section__header-title">Register for</div>
          <div className="section__header-subtitle">
            First FreeStyle Fitness Contest In Haridwar
          </div>
          <div className="section__header-subtitle">
            Organised By / At Kalki Akhada
          </div>
          <div className="section__header-subtitle">
            Register For Regular Updates
          </div>
        </div>
        <div className="contest__form">
          <form
            action="https://formspree.io/f/xrgdqkwe"
            method="POST"
            className="form"
          >
            <div className="form__flex">
              <div className="form__info">
                <label> Hey,I am</label>
                <input type="text" name="name" required placeholder="Your Name"></input>.
              </div>
              <div className="form__info">
                <label>Get in touch with me</label>
                <input type="tel" name="Contact" required placeholder="Your Contact number" />.
              </div>
            </div>
            <div className="form__flex">
              <div className="form__info">
                <label>Send me updates on </label>
                <input type="email" name="email" required placeholder="Your email"></input>
              </div>
            </div>
            <div className="form__flex">
              <div className="form__info">
                <textarea type="text" name="query" placeholder="Any Query"></textarea>
              </div>
            </div>
            <div className="form__flex">
              <button className="coolButton">
                <span>Register</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contest;
