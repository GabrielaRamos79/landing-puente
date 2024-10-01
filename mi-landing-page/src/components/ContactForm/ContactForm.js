import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "./ContactForm.css";
import estrella from "../../images/details/estrella.png";
// import textura2 from "../../images/details/textura2.png";
import flecha from "../../images/details/Flecha.png";

function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_usxjseg', 'template_jv0ugsg', form.current, 'eJSf75rO8BXA5nivD')
      .then((result) => {
          console.log(result.text);
          alert('Mensaje enviado con éxito');
      }, (error) => {
          console.log(error.text);
          alert('Hubo un error al enviar el mensaje');
      });
  };
  return (
    <div id="contactForm" className="container custom-container my-5">
      <h1 className="form-title"> <br />VAMOS AL LÍO!</h1>
      <form ref={form} onSubmit={sendEmail}>
        <div className="form-group">
          <label htmlFor="name">Nombre</label>
          <div className="input-wrapper">
            <input type="text" id="name"  name="from_name" className="form-input" />
            {/* <img src={estrella} alt="star icon" className="star-icon" /> */}
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="email">Mail</label>
          <div className="input-wrapper">
            <input type="email" id="email" name="user_email" className="form-input" />
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
        
        <div className="form-group2">
          <label htmlFor="message">Haznos un teaser sobre qué <br/> necesitas</label>
          <textarea id="message" name="message" rows="4" className="form-input"></textarea>
        </div>
        <div className="form-group2">
          <h2>Ready para que tu marca empiece <br/>a petarlo?</h2>
          <div className="send-wrapper">
            <button type="submit" className="send-button">
              YASSSSSS!
            </button>
            <img src={flecha} alt="arrow icon" className="arrow-icon" />
            <span className="arrow-text">DALE<br/> PARA<br/> ENVIAR</span>
          </div>
        </div>
        <div className="terms-wrapper">
          <input type="checkbox" id="terms" />
          <label htmlFor="terms">
            He leído y acepto la
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
