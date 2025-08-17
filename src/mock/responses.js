// Mock responses for development
export const getMockResponse = (message) => {
  const lowerMessage = message.toLowerCase();
  
  const responses = {
    'phishing': `Phishing attempts often try to trick you into revealing personal information. 
    **Never** click on suspicious links or provide passwords via email. Check the sender's address carefully - 
    phishing emails often mimic legitimate ones with slight misspellings.`,
    
    'password': `Strong passwords should:
    - Be at least 12 characters long
    - Include uppercase, lowercase, numbers and symbols
    - Not contain personal information
    - Be unique for each account
    Consider using a **password manager** to generate and store secure passwords.`,
    
    'wifi': `To secure your home Wi-Fi:
    1. Change the default router password
    2. Enable WPA3 encryption
    3. Disable WPS
    4. Update router firmware regularly
    5. Hide your SSID if possible`,
    
    'default': `I'm SecuTalk, your cybersecurity assistant. I can help with:
    - Phishing awareness
    - Password security
    - Wi-Fi protection
    - Online privacy tips
    Ask me anything about staying safe online!`
  };

  if (lowerMessage.includes('phish')) return responses.phishing;
  if (lowerMessage.includes('pass')) return responses.password;
  if (lowerMessage.includes('wifi') || lowerMessage.includes('wi-fi')) return responses.wifi;
  
  return responses.default;
};
