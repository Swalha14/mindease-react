import React from 'react';
import './styles.css';

function Footer() {
  return (
    <footer>
      <div className="footer-columns">
        <div className="footer-column">
          <h4>Contact Us</h4>
          <p>Email: <a href="mailto:support@mindease.com">support@mindease.com</a></p>
          <p>Phone: +254 765489023</p>
        </div>
        <div className="footer-column">
          <h4>About Us</h4>
          <p>
            MindEase is a mental wellness platform providing tools<br />
            to help people improve emotional wellbeing. We aim to<br />
            provide help for people going through daily struggles in life <br />
            or even those that may have mental disorders.
          </p>
        </div>
      </div>
      <p className="copyright">
        &copy; 2025 MindEase. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
