import React from 'react'
import './Footer.css'; 
const Footer = () => {
  return (
    <div><footer className="ecommerce-footer"  id='contact'>
    <div className="container_footer">
      <div className="footer-sections">
        <div className="footer-section">
          <h4>Shop</h4>
          <ul>
            <li><a href="#">Products</a></li>
            <li><a href="#">Categories</a></li>
            <li><a href="#">Deals</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Customer Service</h4>
          <ul>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Shipping</a></li>
            <li><a href="#">Returns</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Connect</h4>
          <ul>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Instagram</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-payment">
        <h4>Payment Methods</h4>
        <p>We accept:</p>
        <img src="/visa.png" alt="Visa" />
        <img src="/mastercard.png" alt="MasterCard" />
        <img src="/paypal.png" alt="PayPal" />
      </div>
    </div>
  </footer></div>
  )
}

export default Footer;