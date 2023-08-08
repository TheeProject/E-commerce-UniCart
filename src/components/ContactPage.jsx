import React, { useState } from 'react';
import { FaWhatsapp, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

function ContactPage() {
  const [messageSent, setMessageSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessageSent(true);
  };

  return (
    <div className="contact-page">
      <style>
        {`
          .contact-page {
            text-align: center;
            padding: 20px;
          }

          .contact-form {
            margin-top: 20px;
            padding: 20px;
            background-color: #f5f5f5;
            border-radius: 10px;
          }

          .form-group {
            margin-bottom: 10px;
            text-align: left;
          }

          label {
            display: block;
            font-weight: bold;
            color: orange; /* Orange header color */
          }

          input,
          textarea {
            width: 100%;
            padding: 8px;
            border: 1px solid #ccc;
            border-radius: 5px;
          }

          button {
            background-color: #007bff;
            color: white;
            border: none;
            padding: 10px 20px;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s;
          }

          button:hover {
            background-color: green;
          }

          .connect {
            margin-top: 20px;
          }

          .message-received {
            color: green;
            font-weight: bold;
          }

          .social-icon {
            font-size: 30px;
            margin: 0 10px;
            color: #007bff;
          }
          h4{
            color:orange;
            font-family: Arial, sans-serif;
            font-size:xx-large;
          }
          
          h2 {
            color: orange;
            font-family: Arial, sans-serif;
          }
        `}
      </style>

      <h4>Contact Us</h4>
      <p>If you have any questions or concerns, feel free to get in touch with us!</p>

      <div className="contact-info">
        <h2>Contact Information</h2>
        <p><strong>Email:</strong> <a href="mailto:info@unicart.com">info@unicart.com</a></p>
        <p><strong>Phone:</strong> +254798820548</p>
        <p><strong>Location:</strong> Nairobi, Kenya</p>
        <p><strong>Address:</strong> 123 Main Street, Kimathi</p>
      </div>

      <div className="contact-form">
        <h2>Send Us a Message</h2>
        {messageSent ? (
          <p className="message-received">Message Received! We'll get back to you soon.</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" rows="4" required></textarea>
            </div>
            <button type="submit">Send Message</button>
          </form>
        )}
      </div>

      <div className="connect">
        <h2>Connect with Us</h2>
        <p>Follow us on social media for updates and more!</p>
        <a href="https://wa.me/254715307457" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp className="social-icon" />
        </a>
        <a href="https://facebook.com/yourProfile" target="_blank" rel="noopener noreferrer">
          <FaFacebookF className="social-icon" />
        </a>
        <a href="https://twitter.com/yourProfile" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="social-icon" />
        </a>
        <a href="https://instagram.com/yourProfile" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="social-icon" />
        </a>
       
      </div>
    </div>
  );
}

export default ContactPage;