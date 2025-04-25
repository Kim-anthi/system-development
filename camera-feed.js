document.addEventListener('DOMContentLoaded', () => {
    // Elements
    const screen = document.getElementById('cameraScreen');
    const frame = document.getElementById('cameraFrame');
    const refreshButton = document.getElementById('refreshFeed');
  
    // Messages for camera screen
    const messages = [
      "🔍 Scanning Zone 1...",
      "✅ No movement detected.",
      "🚨 Motion detected near Waterhole!",
      "🌒 Switching to Night Vision...",
      "🔧 System Diagnostics: OK",
      "📸 Wildlife sighted: Elephant 🐘",
      "🎥 Ranger cam online.",
      "🦁 Possible lion activity nearby!",
    ];
  
    // Array of image URLs for the mock camera feed
    const feedImages = [
      "https://i.pinimg.com/474x/0b/5c/df/0b5cdfd60e9947edb73f7b25e202883d.jpg", // Random image 1
      "https://i.pinimg.com/474x/84/e7/91/84e79181a2aea36e6be4b025b998e524.jpg", // Random image 2
      "https://i.pinimg.com/474x/85/fc/37/85fc37627a6505fd276c99a055288d21.jpg", // Random image 3
      "https://i.pinimg.com/474x/1c/a8/7b/1ca87b8ecc4a4ce94660fceb3dbe8b62.jpg", // Suspicious activity
      "https://i.pinimg.com/474x/7d/fc/e7/7dfce72a279ad1201870b012b0b99051.jpg" // Random wildlife image
    ];
  
    // Cycle through messages
    if (screen) {
      let index = 0;
      setInterval(() => {
        screen.textContent = messages[index];
        index = (index + 1) % messages.length;
      }, 3000);
    } else {
      console.error('Camera screen element not found');
    }
  
    // Refresh feed with a random image
    if (refreshButton && frame) {
      refreshButton.addEventListener('click', () => {
        const randomImage = feedImages[Math.floor(Math.random() * feedImages.length)];
        frame.src = randomImage;
      });
    } else {
      console.error('Refresh button or camera frame element not found');
    }
  });