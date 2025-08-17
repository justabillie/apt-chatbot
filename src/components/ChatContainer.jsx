import React, { useState, useEffect, useRef } from 'react';
import Message from './Message';
import InputArea from './InputArea';
import Header from './Header';
import Footer from './Footer';
import TypingIndicator from './TypingIndicator';
import { sendMessage } from '../api/chatService';
import '../styles/main.css';

const ChatContainer = () => {
  const [messages, setMessages] = useState([
    { 
      content: "Hello! I'm SecuTalk, your cybersecurity assistant. Ask me about phishing, passwords, or online safety.", 
      isBot: true 
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [shouldFocusInput, setShouldFocusInput] = useState(true);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
    // Set focus on initial render
    setShouldFocusInput(true);
  }, [messages]);

  const handleSendMessage = async (message) => {
    // Add user message
    setMessages(prev => [...prev, { content: message, isBot: false }]);
    setIsTyping(true);
    setShouldFocusInput(false);

    // Get response
    const botResponse = await sendMessage(message);
    
    // Add bot response
    setMessages(prev => [...prev, { 
      content: botResponse.response, 
      isBot: true 
    }]);
    setIsTyping(false);
    setShouldFocusInput(true);
  };

  return (
    <div className="chat-container">
      <Header />
      <div className="message-area">
        {messages.map((msg, index) => (
          <Message key={index} content={msg.content} isBot={msg.isBot} />
        ))}
        {isTyping && <TypingIndicator />}
        <div ref={messagesEndRef} />
      </div>
      <InputArea 
        onSendMessage={handleSendMessage} 
        disabled={isTyping}
        autoFocus={shouldFocusInput}
      />
      <Footer />
    </div>
  );
};

export default ChatContainer;
