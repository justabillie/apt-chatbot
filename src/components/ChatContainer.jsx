import React from 'react';
import Header from './Header';
import InputArea from './InputArea';
import Footer from './Footer';
import '../styles/main.css';

const ChatContainer = () => {
  const [messages, setMessages] = React.useState([]);
  
  const handleSendMessage = (message) => {
    setMessages([...messages, { content: message, isBot: false }]);
    // Simulate bot response after 1 second
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        content: "Thanks for your message! This is a simulated response from SecuTalk.", 
        isBot: true 
      }]);
    }, 1000);
  };
  
  return (
    <div className="chat-container">
      <Header />
      <div className="message-area">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.isBot ? 'bot-message' : 'user-message'}`}>
            <div className="message-content">
              {msg.content}
            </div>
            <div className="message-meta">
              {msg.isBot ? 'SecuTalk' : 'You'}
            </div>
          </div>
        ))}
      </div>
      <InputArea onSendMessage={handleSendMessage} />
      <Footer />
    </div>
  );
};

export default ChatContainer;
