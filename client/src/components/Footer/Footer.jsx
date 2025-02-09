import React from "react";
import "./Footer.css";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        {/*  Quick Links Section */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Destinations</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Register Now</a>
            </li>
          </ul>
        </div>

        {/*  Contact Info */}
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>
            <FaMapMarkerAlt /> 123 Travel Street, New York, USA
          </p>
          <p>
            <FaPhoneAlt /> +1 234 567 890
          </p>
          <p>
            <FaEnvelope /> support@travel.com
          </p>
        </div>

        {/*  Newsletter Subscription */}
        <div className="footer-section newsletter">
          <h3>Subscribe to Our Newsletter</h3>
          <p>Get the latest travel deals and tips directly in your inbox.</p>
          <form>
            <input type="email" placeholder="Enter your email" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      {/*  Social Media Links */}
      <div className="social-media">
        <a href="#">
          <FaFacebook />
        </a>
        <a href="#">
          <FaInstagram />
        </a>
        <a href="#">
          <FaTwitter />
        </a>
        <a href="#">
          <FaYoutube />
        </a>
      </div>

      {/*  Copyright Section */}
      <div className="copyright">
        <p>© 2025 Travel Buddy. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
