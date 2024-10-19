import React, { useState, useRef } from 'react';
import axios from 'axios';
import './ChatBot.css';

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const isTyping = useRef(false); // To track if a request is in progress
  const lastRequestTime = useRef(0); // To track time between requests

  // Retry function with exponential backoff
  const retryRequest = async (input, retries = 5, delay = 1000) => {
    try {
      const apiKey = process.env.REACT_APP_OPENAI_API_KEY; // Get your API key from .env
      const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-3.5-turbo',
          messages: [{ role: 'user', content: input }]
        },
        {
          headers: {
            'Authorization': `Bearer ${apiKey}`,
            'Content-Type': 'application/json'
          }
        }
      );

      const aiResponse = response.data.choices[0].message.content;

      // Add AI response to the chat
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: 'bot', content: aiResponse }
      ]);
    } catch (error) {
      if (error.response && error.response.status === 429 && retries > 0) {
        console.error('Too many requests. Retrying...');
        // Exponential backoff: Increase the delay each time
        setTimeout(() => {
          retryRequest(input, retries - 1, delay * 2); // Retry with a longer delay
        }, delay);
      } else {
        console.error('Error:', error);
      }
    }
  };

  const handleSend = async () => {
    if (!input || isTyping.current) return; // Prevent multiple requests at once

    const currentTime = Date.now();
    const cooldownTime = 5000; // 5 seconds cooldown between requests
    if (currentTime - lastRequestTime.current < cooldownTime) {
      console.log("Please wait before sending another message.");
      return; // Prevent sending too many requests in a short period
    }

    lastRequestTime.current = currentTime; // Update the last request time
    isTyping.current = true; // Lock input while sending request

    // Add user message to the chat
    setMessages((prevMessages) => [
      ...prevMessages,
      { sender: 'user', content: input }
    ]);

    // Call the retryRequest function to send the API request
    await retryRequest(input);

    // Clear the input field and unlock
    setInput('');
    isTyping.current = false;
  };

  return (
    <div className="chatbot">
      <div className="chat-window">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender}`}>
            {msg.content}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Ask me anything..."
      />
      <button onClick={handleSend}>Send</button>
    </div>
  );
};

export default ChatBot;
