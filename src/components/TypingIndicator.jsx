import React from 'react';

const TypingIndicator = () => {
  return (
    <div className="typing-indicator">
      <div className="dot"></div>
      <div className="dot"></div>
      <div className="dot"></div>
      <span className="typing-text">SecuTalk is typing...</span>
    </div>
  );
};

export default TypingIndicator;
