import React, { useState, useEffect, useRef } from 'react';
import { IoSend } from 'react-icons/io5';

const InputArea = ({ onSendMessage, disabled, autoFocus = false }) => {
  const [input, setInput] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    // Focus on initial mount and whenever autoFocus changes to true
    if (inputRef.current && (autoFocus || !disabled)) {
      inputRef.current.focus();
    }
  }, [autoFocus, disabled]);

  const handleSend = () => {
    if (input.trim() && !disabled) {
      onSendMessage(input);
      setInput('');
    }
  };

  return (
    <div className="input-area">
      <div className="input-container">
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about cybersecurity..."
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          disabled={disabled}
        />
        <button onClick={handleSend} disabled={disabled}>
          <IoSend />
        </button>
      </div>
    </div>
  );
};

export default InputArea;
