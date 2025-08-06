// Import all slider modules directly
import slider001 from './sliders/slider001.js';

const sliders = document.querySelectorAll('[data-slider]');

sliders.forEach((el) => {
  const name = el.getAttribute('data-slider');
  
  switch(name) {
    case 'slider001':
      slider001(el);
      break;
    default:
      console.warn(`Unknown slider: ${name}`);
  }
});