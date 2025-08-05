const sliders = document.querySelectorAll('[data-slider]');

sliders.forEach(async (el) => {
  const name = el.getAttribute('data-slider');
  try {
    const module = await import(`./${name}.js`);
    module.default(el);
  } catch (err) {
    console.warn(`Could not load slider module "${name}"`, err);
  }
});