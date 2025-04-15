import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="links">
        <a href="/store">Store</a>
        <a href="/services">Buy Our Services</a>
        <a href="/privacy-policy">Privacy Policy</a>
        <a href="/terms">Terms and Conditions</a>
        <a href="/cancellation">Cancellation</a>
        <a href="/blogs">Blogs</a>
      </div>
      <div className="companyInfo">
        <p>Microhub Technologies Pvt. Ltd.</p>
        <p>
          CIN: U72900DL2015PTC289065, GST No.: 09AAKCM0929P1ZT, ISO 27001:2022
          ISMS-MT-24082201WMM5Y24
        </p>
        <p>
          C/O.: 25th Floor, Tower – C, Bhutani Alphathum, Sector – 90, Noida -
          201305, INDIA
        </p>
        <p>Email: <a href="mailto:sales@microhub.co.in">sales@microhub.co.in</a></p>
      </div>
      <div className="socialMedia">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">YouTube</a>
      </div>
      <div className="copyright">
        <p>Copyright © 2015 - 2025 Microhub - All Rights Reserved.</p>
        <p>Powered by Microhub</p>
      </div>
    </footer>
  );
};

export default Footer;