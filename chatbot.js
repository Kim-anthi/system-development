// chatbot visibility
document.getElementById('talkToUsBtn').addEventListener('click', () => {
    const chatbot = document.getElementById('chatbotWidget');
    chatbot.style.display = 'block';  // Show the chatbot when the button is clicked
  });
  
  // Hide the chatbot 
  document.getElementById('closeChatbox').addEventListener('click', () => {
    const chatbot = document.getElementById('chatbotWidget');
    chatbot.style.display = 'none';  // Hide the chatbot
  });
  
  // Handle sending messages
  document.getElementById('sendMessage').addEventListener('click', () => {
    const input = document.getElementById('chatbotInput');
    const msg = input.value.trim();
  
    if (msg !== '') {
      appendMessage('You', msg);
      respondToMessage(msg);
      input.value = '';  // Clear input field after sending
    }
  });
  
  // Append messages to the chatbot window
  function appendMessage(sender, message) {
    const messages = document.getElementById('chatbotMessages');
    const bubble = document.createElement('div');
    bubble.style.marginBottom = '10px';
    bubble.innerHTML = `<strong>${sender}:</strong> ${message}`;
    messages.appendChild(bubble);
    messages.scrollTop = messages.scrollHeight;  // Scroll to bottom of the chat
  }
  
  // Respond to user messages with variety of responses
  function respondToMessage(msg) {
    // Default response if no match is found
    let response = "I'm still learning. Try asking something else!";
  
    // Responses for different keywords
    const helloResponses = [
      "Hello! How can I assist you with wildlife monitoring today?",
      "Hi there! How can I help you today?",
      "Greetings! What can I do for you?"
    ];
  
    const poachingResponses = [
      "Poaching alerts are displayed in the Alerts section. Stay vigilant!",
      "Keep an eye on the Alerts section for poaching updates!",
      "If you're worried about poaching, check the Alerts section for updates."
    ];
  
    const analyticsResponses = [
      "You can check the population trends and alert charts under Analytics.",
      "All the detailed analytics are available in the Analytics section.",
      "Check out the Analytics section for wildlife population trends and alerts."
    ];
  
    const thankYouResponses = [
      "You're welcome! 🐾",
      "Glad I could help! Feel free to ask more.",
      "You're very welcome! 😊"
    ];
  
    const sorryResponses = [
      "I'm sorry if I upset you. Please let me know how I can assist you better.",
      "I didn't mean to offend you! How can I help today?",
      "Apologies if I said something wrong. I'm here to help!"
    ];
  
    const howAreYouResponses = [
      "I'm doing well, thank you for asking! How about you?",
      "I'm here and ready to assist you! How's everything?",
      "I'm doing great, just here to help with wildlife monitoring!"
    ];
  
    const abuseResponses = [
      "I'm sorry, but why that name? I’m just here to help with wildlife monitoring.",
      "I’m sorry if I did something wrong. Please be respectful, and I’ll help you to the best of my abilities.",
      "I don't quite understand why you're saying that. I’m here to assist you, let’s keep it respectful!"
    ];
  
    // Simple keyword-based responses
    if (msg.toLowerCase().includes('hello') || msg.toLowerCase().includes('hi')) {
      response = helloResponses[Math.floor(Math.random() * helloResponses.length)];
    } else if (msg.toLowerCase().includes('poaching || poach || poachers ')) {
      response = poachingResponses[Math.floor(Math.random() * poachingResponses.length)];
    } else if (msg.toLowerCase().includes('analytics')) {
      response = analyticsResponses[Math.floor(Math.random() * analyticsResponses.length)];
    } else if (msg.toLowerCase().includes('thank you')) {
      response = thankYouResponses[Math.floor(Math.random() * thankYouResponses.length)];
    } else if (msg.toLowerCase().includes('how are you') || msg.toLowerCase().includes('how are you doing')) {
      response = howAreYouResponses[Math.floor(Math.random() * howAreYouResponses.length)];
    } else if (msg.toLowerCase().includes('sorry')) {
      response = sorryResponses[Math.floor(Math.random() * sorryResponses.length)];
    } else if (msg.toLowerCase().includes('fuck you || fucker ') || msg.toLowerCase().includes('stupid') || msg.toLowerCase().includes('idiot')) {
      response = abuseResponses[Math.floor(Math.random() * abuseResponses.length)];
    }
  
    // If no keywords match, return the default response
    setTimeout(() => {
      appendMessage('AI Ranger Bot', response);
    }, 600);  //  delay
  }
  