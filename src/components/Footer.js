import React from "react";
import "./Footer.css"; // Make sure to import your Footer styling

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        {/* Footer Content */}
        <div className="footer-content">
          <p>&copy; 2023 WECOOK Website. All rights reserved.</p>
          <p>Designed by Insat Students:👨🏼‍🍳Ahmed Hnana - 👩‍🍳Chayma Nouri</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
