// Links work without JavaScript; this highlights the current section.
(() => {
  const links = [...document.querySelectorAll('.section-nav a')];
  const sections = links.map(link => document.querySelector(link.getAttribute('href'))).filter(Boolean);
  let scheduled = false;
  function update() {
    let current = sections[0];
    for (const section of sections) {
      if (section.getBoundingClientRect().top <= 140) current = section;
    }
    if (window.scrollY > 0 && Math.ceil(window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 4) current = sections[sections.length - 1];
    for (const link of links) {
      const active = link.getAttribute('href') === `#${current.id}`;
      link.classList.toggle('active', active);
      if (active) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    }
    scheduled = false;
  }
  function schedule() {
    if (!scheduled) { scheduled = true; window.requestAnimationFrame(update); }
  }
  window.addEventListener('scroll', schedule, { passive: true });
  window.addEventListener('resize', schedule, { passive: true });
  update();
})();
