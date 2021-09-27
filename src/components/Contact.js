import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";
import "../styles/contact.scss";

const Contact = () => {
  const [messageSent, setMessageSent] = useState(false);
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_pchcnh5",
        "template_unno4hk",
        form.current,
        "user_CTq3plIq60zFI6oX795t6"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    setMessageSent(true);
  };
  return (
    <div className="page contact" id="contact">
      <div className="contact_header">
        <h2>Contact Me</h2>
        <p class="contact_message">
          If you have any oppotunities or questions, don't hesitate to contact
          me!
        </p>
      </div>
      <div className="contact_form">
        <form ref={form} onSubmit={handleSubmit}>
          <input type="text" placeholder="Name" name="name" />
          <input type="text" placeholder="Subject" name="subject" />
          <input type="text" placeholder="Email" name="email" />
          <textarea placeholder="Message" name="message"></textarea>
          <button type="submit" value="Send">
            Send
          </button>
          {messageSent && <span>I'll be in touch shortly!</span>}
        </form>
      </div>
    </div>
  );
};

export default Contact;
