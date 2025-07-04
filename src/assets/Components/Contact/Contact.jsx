import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";
import maps from "../../assets/images/maps.png";

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_u2bnf0v", // Replace with your EmailJS Service ID
        "template_f4yc1m4", // Replace with your EmailJS Template ID
        form.current,
        "ixKUwbvpKrAS3R4KO" // Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          alert("Message sent successfully!");
          form.current.reset(); // Reset the form after successful submission
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <main className="contact-container">
      <div className="contact-content">
        {/* Contact Form */}
        <div className="contact-form">
          <h2>Contact Us</h2>
          <form ref={form} onSubmit={sendEmail}>
            <label htmlFor="user_name">Name</label>
            <input type="text" id="user_name" name="user_name" required />

            <label htmlFor="user_email">Email</label>
            <input type="email" id="user_email" name="user_email" required />

            <label htmlFor="user_phone">Phone</label>
            <input type="tel" id="user_phone" name="user_phone" required />

            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" required></textarea>

            {/* Hidden field for the destination email */}
            <input
              type="hidden"
              name="to_email"
              value="bethelgelan16@gmail.com"
            />

            <button type="submit">Send Message</button>
          </form>
        </div>

        {/* Map Section */}
        <div className="contact-map">
          <img src={maps} alt="Map" />
        </div>
      </div>

      {/* Get in Touch Section */}
      <div className="get-in-touch">
        <h3>Get in Touch</h3>
        <p>
          <strong>Address:</strong> Bedria City Mall 6th floor office No. 608 <br />
          <strong>E-mail:</strong> hafimports294@gmail.com /  henokimport2011@gmail.com <br />
        </p>
        <p>
          <strong>Phone:</strong> +251 929425601, <strong>Office:</strong> +251116662226
        </p>
        <p> Addis Ababa, Ethiopia</p>
      </div>
    </main>
  );
};

export default ContactUs;
