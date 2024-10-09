// script.js
document.addEventListener('DOMContentLoaded', () => {
  const loveLetter = document.getElementById('love-letter');
  const music = document.getElementById('background-music');
  const flower = document.getElementById('flower');
  const heading = document.querySelector('h1'); // Select the h1 element
  let tapCount = 0;

  // Listen for taps on the container
  document.getElementById('letter-container').addEventListener('click', () => {
    tapCount++;

    // Check if tap count has reached 11
    if (tapCount === 11) {
      heading.textContent = "Flowers for you, love!"; // Change h1 text
      flower.style.display = 'block'; // Show the flower
      createConfetti(); // Show confetti
      
      // Allow flower to be clicked for the love letter
      flower.addEventListener('click', showLoveLetter); // Show love letter on flower click
    }
  });

  // Function to create confetti
  function createConfetti() {
    const end = Date.now() + (2 * 1000); // Confetti for 2 seconds
    const colors = ['#FF0B0B', '#FF7F0B', '#FFBF0B', '#BFFF0B', '#0BFF7F', '#0BBFFF', '#0B7FFF', '#0B0BFF', '#7F0BFF', '#FF0B7F'];
    
    (function frame() {
      // Launch a single confetti
      confetti({
        particleCount: 7,
        angle: 90,
        spread: 90,
        origin: { x: Math.random(), y: Math.random() - 0.2 },
        colors: [colors[Math.floor(Math.random() * colors.length)]],
      });

      // Continue until the end time
      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  }

  // Function to show love letter and play music
  function showLoveLetter() {
    heading.textContent = "Happy 1st Anniversary, Love!"; // Change h1 text to anniversary message
    loveLetter.classList.remove('hidden'); // Show the love letter
    music.play(); // Start playing the music
  }
});
