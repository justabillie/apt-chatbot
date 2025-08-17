import React from 'react';
import ReactMarkdown from 'react-markdown';

const Message = ({ content, isBot }) => {
  return (
    <div className={`message ${isBot ? 'bot-message' : 'user-message'}`}>
      <div className="message-content">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
      <div className="message-meta">
        {isBot ? 'SecuTalk' : 'You'} • {new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
      </div>
    </div>
  );
};

export default Message;
