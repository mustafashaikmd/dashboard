import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {currentYear} All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;