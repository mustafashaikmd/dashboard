import React from 'react';
import logo from '../images/logo.png';

function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <div className="logo-container">
          <img src={logo} alt="DOQFY Logo" className="logo" />
        </div>
        <nav className="navigation">
          <a href="#">Services</a>
          <a href="#">User Management</a>
          <a href="#">My Orders</a>
          <a href="#">Reports</a>
          <a href="#">Stomp Inventory</a>
          <a href="#">Bar Codes</a>
          <a href="#">Invoice</a>
        </nav>
      </div>
      <div className="header-right">
        <div className="notifications">
          <span className="notification-icon">🔔</span>
        </div>
        <div className="user-profile">
          <span className="user-name">Michael Smith</span>
          <span className="user-icon">M</span>
        </div>
      </div>
    </header>
  );
}

export default Header;