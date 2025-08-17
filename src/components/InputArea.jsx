import React, { useState } from 'react';
import { IoSend } from 'react-icons/io5';

const InputArea = ({ onSendMessage }) => {
  const [input, setInput] = useState('');
  
  const handleSend = () => {
    if (input.trim()) {
      onSendMessage(input);
      setInput('');
    }
  };
  
  return (
    <div className="input-area">
      <div className="input-container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about cybersecurity..."
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
        />
        <button onClick={handleSend}>
          <IoSend />
        </button>
      </div>
    </div>
  );
};

export default InputArea;
