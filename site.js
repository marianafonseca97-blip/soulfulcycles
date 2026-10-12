// Soulful Cycles: behaviour shared by every page.
// Portuguese pages live at the site root, English pages under /en/.

// mobile menu (only on pages that have one)
(function () {
  var nav = document.querySelector('nav'), btn = nav && nav.querySelector('.menu-btn');
  if (!btn) return;
  function setOpen(o) { nav.classList.toggle('open', o); btn.setAttribute('aria-expanded', o); }
  btn.addEventListener('click', function () { setOpen(!nav.classList.contains('open')); });
  nav.querySelectorAll('ul a').forEach(function (a) { a.addEventListener('click', function () { setOpen(false); }); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setOpen(false); });
})();

// language switch: each page has a Portuguese and an English version (see <link rel="alternate" hreflang>)
(function () {
  var current = document.documentElement.lang === 'en' ? 'en' : 'pt';
  var other = {};
  document.querySelectorAll('link[rel="alternate"][hreflang]').forEach(function (l) {
    var lang = l.getAttribute('hreflang') === 'en' ? 'en' : (l.getAttribute('hreflang') === 'pt-PT' ? 'pt' : null);
    if (lang) other[lang] = new URL(l.getAttribute('href')).pathname;   // same site, any host (also local previews)
  });
  function go(lang) { if (lang !== current && other[lang]) location.href = other[lang] + location.hash; }
  document.querySelectorAll('.lang button').forEach(function (b) {
    b.setAttribute('aria-pressed', String(b.dataset.lang === current));
    b.addEventListener('click', function () {
      try { localStorage.setItem('lang', b.dataset.lang); } catch (e) {}
      go(b.dataset.lang);
    });
  });
  // returning visitors who chose English before land on the English version
  var saved = null;
  try { saved = localStorage.getItem('lang'); } catch (e) {}
  if (saved === 'en' && current === 'pt' && other.en) location.replace(other.en + location.hash);
})();

// service buttons that point to the contact form pre-select its subject
document.querySelectorAll('a[data-topic]').forEach(function (a) {
  a.addEventListener('click', function () { var s = document.querySelector('.contact-form select'); if (s) s.value = a.dataset.topic; });
});

// forms: send to Web3Forms (emails Mariana) without leaving the page
document.querySelectorAll('form[data-web3]').forEach(function (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var en = document.documentElement.lang === 'en';
    var msg = form.querySelector('.form-msg'), btn = form.querySelector('button[type=submit]');
    var ok = form.name === 'contacto'
      ? (en ? 'Thank you! I got your message and will reply soon.' : 'Obrigada! Recebi a tua mensagem e respondo em breve.')
      : (en ? "Thank you! I'll let you know when orders open." : 'Obrigada! Vou avisar-te quando abrirem as encomendas.');
    btn.disabled = true;
    fetch(form.action, { method: 'POST', headers: { 'Accept': 'application/json' }, body: new FormData(form) })
      .then(function (r) { return r.json(); })
      .then(function (r) {
        if (!r.success) throw new Error(r.message);
        form.querySelectorAll('input:not([type=hidden]),select,textarea,button,.wl-row,.form-note,label').forEach(function (el) { el.hidden = true; });
        msg.textContent = ok; msg.hidden = false;
      })
      .catch(function () {
        msg.textContent = en ? 'Something went wrong. Please try again or email marianafonseca.97@gmail.com.'
                             : 'Algo correu mal. Tenta outra vez ou escreve para marianafonseca.97@gmail.com.';
        msg.hidden = false; btn.disabled = false;
      });
  });
});
