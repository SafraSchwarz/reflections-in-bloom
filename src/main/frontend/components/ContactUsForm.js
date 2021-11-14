import React, { useState } from "react";

const ContactUsForm = (props) => {
  const [formPayload, setFormPayload] = useState({
    subject: "",
    user_name: "",
    user_email: "",
    message: "",
  });

  const handleInputChange = (event) => {
    setFormPayload({
      ...formPayload,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  return (
    <div className="contact-us-form">
      <form>
        <div className="form-input">
          <label htmlFor="subject">Subject</label>
          <input onChange={handleInputChange} type="text" name="subject" />
        </div>

        <div className="form-input">
          <label htmlFor="name">Name</label>
          <input onChange={handleInputChange} type="text" name="user_name" />
        </div>

        <div className="form-input">
          <label htmlFor="email">Email</label>
          <input onChange={handleInputChange} type="email" name="user_email" />
        </div>

        <div className="form-input">
          <label htmlFor="message">Message</label>
          <textarea onChange={handleInputChange} name="message" />
        </div>

        <input className="button" type="submit" value="Send" />
      </form>
    </div>
  );
};

export default ContactUsForm;
