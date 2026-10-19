(() => {
  const weddingDate = new Date('2027-06-12T16:00:00+02:00');
  const $ = (id) => document.getElementById(id);
  const pad = (n) => String(n).padStart(2, '0');
  function updateCountdown() {
    let diff = Math.max(0, weddingDate.getTime() - Date.now());
    const days = Math.floor(diff / 86400000); diff %= 86400000;
    const hours = Math.floor(diff / 3600000); diff %= 3600000;
    const minutes = Math.floor(diff / 60000); diff %= 60000;
    const seconds = Math.floor(diff / 1000);
    $('days').textContent = days; $('hours').textContent = pad(hours);
    $('minutes').textContent = pad(minutes); $('seconds').textContent = pad(seconds);
  }
  updateCountdown(); setInterval(updateCountdown, 1000);

  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('nav');
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
    toggle.textContent = open ? '×' : '☰';
  });
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    nav.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false'); toggle.textContent = '☰';
  }));

  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
    }), { threshold: 0.12 });
    revealEls.forEach(el => observer.observe(el));
  } else revealEls.forEach(el => el.classList.add('visible'));

  const motionToggle = $('motion-toggle');
  motionToggle.addEventListener('click', () => {
    const paused = document.body.classList.toggle('motion-paused');
    motionToggle.textContent = paused ? '▶ Resume animations' : 'Ⅱ Pause animations';
  });

  $('rsvp-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget).entries());
    let saved=true; try { localStorage.setItem('oliveIvoryRsvpPreview', JSON.stringify(data)); } catch (_) { saved=false; }
    $('form-note').textContent = `Thank you, ${data.name}! ${saved ? 'Your preview response is saved on this device only' : 'Browser storage is unavailable; your response was not saved'} — it has not been sent.`;
    $('form-note').setAttribute('role', 'status');
  });
})();
