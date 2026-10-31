// Révèle les blocs au défilement, une seule fois. Rien ne se passe si le visiteur limite les animations.
(() => {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return;
  const cibles = document.querySelectorAll('.section-tete, .index-ligne, .references li, .chemin li, .routes li, .offre, .contact > *');
  document.documentElement.classList.add('anime');
  const obs = new IntersectionObserver((entrees) => {
    entrees.forEach((e) => {
      if (!e.isIntersecting) return;
      e.target.classList.add('visible');
      obs.unobserve(e.target);
    });
  }, { rootMargin: '0px 0px -8% 0px' });
  cibles.forEach((el, i) => {
    el.setAttribute('data-revele', '');
    el.style.transitionDelay = `${(i % 6) * 60}ms`;
    obs.observe(el);
  });
})();
