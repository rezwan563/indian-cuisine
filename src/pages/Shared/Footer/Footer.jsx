import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-base-200 text-base-content">
        <div>
          <span className="footer-title">Newsletter</span>
          <p className="text-left">Interested to hear latest news from Indian cuisine</p>
          {/* <a className="link link-hover">Advertisement</a> */}
        </div>
        <div>
          <span className="footer-title">Private events</span>
          <p className="text-left">(212) 401-7900 event@indiancuisine.com</p>
          <a className="link link-hover">Press kit</a>
        </div>
        <div>
          <span className="footer-title">Hours</span>
          <p className="text-left">
            Seating From: 5:00 – 11:00 PM Daily Boucherie To- GO: 5:00 – 9:00 PM
            Daily
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
