import "../styles/Contact.css";
import React, { useRef, useEffect } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  useEffect(() => {
    document.title = "knowless // contact";
  });

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_w1gxq2g",
        "website-email-template",
        form.current,
        "ADVD-XBmG2DVXJ9lr"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="contact-page-container">
      <div className="contact-form-container">
        <h3>contact me!</h3>
        <form className="contact-form" ref={form} onSubmit={sendEmail}>
          <div className="form-input">
            <label>your name</label>
            <input type="text" name="from_name" placeholder="bob" required
            onInvalid={e => e.target.setCustomValidity('enter your name/alias')}
            onInput={e => e.target.setCustomValidity('')}/>
          </div>
          <div className="form-input">
            <label>your email</label>
            <input type="email" name="from_email" placeholder="bob123@gmail.com"/>
            <p>(optional)</p>
          </div>
          <div className="form-input">
            <label>message</label>
            <textarea name="message" placeholder="hi, i'm bob!" required
              onInvalid={e => e.target.setCustomValidity('enter a message')}
              onInput={e => e.target.setCustomValidity('')}/>
          </div>
          <input className="form-submit-button" type="submit" value="Send" />
        </form>
      </div>
      {/* <div className="more-socials-box">
        <h3>socials</h3>
      </div> */}
    </div>
  );
};

export default Contact;
