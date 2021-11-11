import React from "react";

const ContactUsForm = (props) => {
  return (
    <div className="contact-us-form">
      <form>
        <div className="form-input">
          <label htmlFor="subject">Subject</label>
          <input type="text" name="subject" />
        </div>

        <div className="form-input">
          <label htmlFor="name">Name</label>
          <input type="text" name="user_name" />
        </div>

        <div className="form-input">
          <label htmlFor="email">Email</label>
          <input type="email" name="user_email" />
        </div>

        <div className="form-input">
          <label htmlFor="message">Message</label>
          <textarea name="message" />
        </div>

        <input className="button" type="submit" value="Send" />
      </form>
    </div>
  );
};

export default ContactUsForm;
