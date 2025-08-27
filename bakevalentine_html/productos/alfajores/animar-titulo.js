import anime from 'https://cdn.jsdelivr.net/npm/animejs@3.2.1/lib/anime.es.js';

const titulo = document.querySelector('.titulo');
const texto = titulo.textContent;

// Convertimos cada letra en span
titulo.innerHTML = texto.split('').map(c => `<span style="display:inline-block;">${c}</span>`).join('');

// Animamos cada letra una sola vez
anime({
  targets: '.titulo span',
  translateY: [
    { value: -20, duration: 600, easing: 'easeOutExpo' }, // sube
    { value: 0, duration: 800, easing: 'easeOutBounce', delay: 100 } // baja con rebote
  ],
  rotate: [
    { value: -360, duration: 1400, easing: 'easeInOutQuad' }
  ],
  delay: anime.stagger(50),
  loop: false // <- esto hace que solo pase una vez
});
