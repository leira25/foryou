// script.js
window.onload = () => {
    const button = document.getElementById('show-flowers');
    const flowers = document.getElementById('flowers');
    const music = document.getElementById('background-music');
    
    // Play background music automatically
    music.play();
  
    // Reveal flowers when button is clicked
    button.addEventListener('click', () => {
      flowers.style.display = 'block';
      button.style.display = 'none'; // Hide button after revealing flowers
    });
  };
  