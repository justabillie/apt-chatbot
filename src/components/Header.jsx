import React from 'react';

const Header = () => {
  return (
    <header className="chat-header">
      <h1>SecuTalk</h1>
      <p>Your Cybersecurity Education Assistant</p>
      <div className="status-indicator">
        <span className="online-dot"></span>
        Online
      </div>
    </header>
  );
};

export default Header;
