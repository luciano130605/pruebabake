import anime from 'https://cdn.jsdelivr.net/npm/animejs@3.2.1/lib/anime.es.js';

const titulo = document.querySelector('.titulo');

// Convertimos cada letra en span, pero preservamos espacios
titulo.innerHTML = titulo.textContent
  .split('')
  .map(c => {
    if(c === ' ') {
      return `<span style="display:inline-block; width:0.5em;"></span>`; // espacio visible
    } else {
      return `<span style="display:inline-block;">${c}</span>`;
    }
  })
  .join('');

// Animamos todas las letras
anime({
  targets: '.titulo span',
  translateY: [
    { value: -20, duration: 600, easing: 'easeOutExpo' },
    { value: 0, duration: 800, easing: 'easeOutBounce' }
  ],
  rotate: { value: -360, duration: 1400, easing: 'easeInOutQuad' },
  delay: anime.stagger(50),
  loop: false
});
