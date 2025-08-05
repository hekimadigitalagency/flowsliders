// Auto-discover and load slider modules
const sliders = document.querySelectorAll('[data-slider]');

sliders.forEach(async (el) => {
  const name = el.getAttribute('data-slider');
  
  try {
    // Try to import the slider module dynamically
    const module = await import(`./sliders/${name}.js`);
    module.default(el);
  } catch (err) {
    console.warn(`Slider "${name}" not found. Available sliders:`, err);
  }
});