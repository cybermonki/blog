document.addEventListener('DOMContentLoaded', () => {
    const fullText = "I am a CEng MICE Senior engineer with a passion for engineering and technology, welcome to my personal site for anything and everything I find interesting.";
    const element = document.getElementsById('typewriter-text');
    const typingSpeed = 50; // milliseconds per character
    const pauseAtEnd = 2000; // pause at end in ms
    
    let i = 0;
    
    function typeWriter() {
      if (i < fullText.length) {
        element.textContent = fullText.substring(0, i + 1);
        i++;
        setTimeout(typeWriter, typingSpeed);
      } else {
        // Keep blinking cursor after typing completes
        setTimeout(() => {
          element.style.animation = "none"; // Stop blinking if desired
        }, pauseAtEnd);
      }
    }
    
    // Start typing after a brief delay
    setTimeout(typeWriter, 500);
  });