import React from "react";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-section">
        <div className="newsletter">
          <h3>BE THE FIRST TO KNOW</h3>
          <p>Sign up for updates from mettä muse.</p>
          <div className="subscribe">
            <input type="email" placeholder="Enter your email" />
            <button>SUBSCRIBE</button>
          </div>
        </div>

        <div className="contact">
          <h3>CONTACT US</h3>
          <p>Phone: +44 221 133 5360</p>
          <p>Email: customercare@mettamuse.com</p>
        </div>

        <div className="currency">
          <h3>CURRENCY</h3>
          <p>USD</p>
          <p>Transactions will be completed in Euros.</p>
        </div>

        <div className="links">
          <h3>mettä muse</h3>
          <ul>
            <li>About Us</li>
            <li>Stories</li>
            <li>Artisans</li>
            <li>Boutiques</li>
            <li>Contact Us</li>
            <li>EU Compliance Docs</li>
          </ul>
        </div>

        <div className="quick-links">
          <h3>QUICK LINKS</h3>
          <ul>
            <li>Orders & Shipping</li>
            <li>Join/Login as a Seller</li>
            <li>Payment & Pricing</li>
            <li>Return & Refunds</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        <div className="social-media">
          <h3>FOLLOW US</h3>
          <div className="icons">
            <span>📸 Instagram</span>
            <span>🔗 LinkedIn</span>
          </div>
        </div>

        <div className="payments">
          <h3>mettä muse ACCEPTS</h3>
          <div className="payment-icons">
            <span>Google Pay</span>
            <span>PayPal</span>
            <span>American Express</span>
            <span>Mastercard</span>
            <span>Visa</span>
            <span>Apple Pay</span>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2023 mettä muse. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;