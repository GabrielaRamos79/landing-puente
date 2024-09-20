import React from "react";
import "./ContactForm.css";
import estrella from "../../images/details/estrella.png";
// import textura2 from "../../images/details/textura2.png";
import flecha from "../../images/details/Flecha.png";

function ContactForm() {
  return (
    <div id="contactForm" className="container contact-form my-5">
      <h1 className="form-title">VAMOS AL LÍO!</h1>
      <form>
        <div className="form-group">
          <label htmlFor="name">Nombre</label>
          <div className="input-wrapper">
            <input type="text" id="name" className="form-input" />
            {/* <img src={estrella} alt="star icon" className="star-icon" /> */}
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="email">Mail</label>
          <div className="input-wrapper">
            <input type="email" id="email" className="form-input" />
            <img src={estrella} alt="star icon" className="star-icon" />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="phone">Teléfono</label>
          <div className="input-wrapper">
            <input type="tel" id="phone" className="form-input" />
            {/* <img src={estrella} alt="star icon" className="star-icon" /> */}
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="message">Haznos un teaser sobre qué necesitas</label>
          <textarea id="message" rows="4" className="form-input"></textarea>
        </div>
        <div className="form-group">
          <h2>Ready para que tu marca empiece a petarlo?</h2>
          <div className="send-wrapper">
            <button type="submit" className="send-button">
              YASSSSSS!
            </button>
            <img src={flecha} alt="arrow icon" className="arrow-icon" />
            <span className="arrow-text">DALE PARA ENVIAR</span>
          </div>
        </div>
        <div className="terms-wrapper">
          <input type="checkbox" id="terms" />
          <label htmlFor="terms">
            He leído y acepto la{" "}
            <a href="https://www.elpuentepublicidad.com/politica-de-privacidad">
              política de privacidad
            </a>
          </label>
        </div>
      </form>
    </div>
  );
}
export default ContactForm;
