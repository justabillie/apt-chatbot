import React from 'react';

const Header = () => {
  return (
    <header className="chat-header">
      <div className="header-grid">
        <div className="window-controls">
          <div className="control-btn close"></div>
          <div className="control-btn minimize"></div>
          <div className="control-btn maximize"></div>
        </div>
        <div className="logo-spacer"></div>
        <div className="logo">ST</div>
        <div className="header-text">
          <h1>SecuTalk</h1>
          <p>Your Cybersecurity Education Assistant</p>
        </div>
        <div className="status-indicator">
          <span className="online-dot"></span>
          Online
        </div>
      </div>
    </header>
  );
};

export default Header;
