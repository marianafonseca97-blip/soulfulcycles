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

// Lightbox: click a gallery photo to see it big, with arrows to move between photos
(function () {
  var SEL = '.gallery figure.ph img, .calls figure.ph img, .duo-photos figure.ph img';
  if (!document.querySelector(SEL)) return;
  var en = document.documentElement.lang === 'en';
  var box = document.createElement('div');
  box.className = 'lb'; box.hidden = true;
  box.setAttribute('role', 'dialog'); box.setAttribute('aria-modal', 'true');
  box.innerHTML = '<div class="lb-panel">' +
    '<button type="button" class="lb-close" aria-label="' + (en ? 'Close' : 'Fechar') + '">×</button>' +
    '<button type="button" class="lb-prev" aria-label="' + (en ? 'Previous photo' : 'Foto anterior') + '">‹</button>' +
    '<figure class="lb-fig"><img alt=""><figcaption></figcaption></figure>' +
    '<button type="button" class="lb-next" aria-label="' + (en ? 'Next photo' : 'Foto seguinte') + '">›</button>' +
    '<p class="lb-count"></p></div>';
  document.body.appendChild(box);
  var big = box.querySelector('img'), cap = box.querySelector('figcaption'), count = box.querySelector('.lb-count');
  var list = [], i = 0, last = null;

  function visible(img) { return !img.closest('figure').hidden; }
  function show() {
    var img = list[i], fc = img.closest('figure').querySelector('figcaption');
    big.src = img.currentSrc || img.src; big.alt = img.alt;
    cap.textContent = fc ? fc.textContent : ''; cap.hidden = !fc;
    count.textContent = (i + 1) + ' / ' + list.length;
    box.classList.toggle('single', list.length < 2);
  }
  function open(img) {
    var group = img.closest('.gallery, .calls, .duo-photos');
    list = [].slice.call(group.querySelectorAll('figure.ph img')).filter(visible);
    i = list.indexOf(img); last = document.activeElement;
    show(); box.hidden = false; document.body.classList.add('lb-on');
    box.querySelector('.lb-close').focus();
  }
  function close() { box.hidden = true; document.body.classList.remove('lb-on'); big.src = ''; if (last) last.focus(); }
  function go(d) { i = (i + d + list.length) % list.length; show(); }

  document.querySelectorAll(SEL).forEach(function (img) {
    var fig = img.closest('figure');
    fig.classList.add('zoomable');
    if (!fig.hasAttribute('tabindex')) fig.setAttribute('tabindex', '0');
    fig.addEventListener('click', function () { open(img); });
    fig.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(img); } });
  });
  box.querySelector('.lb-close').addEventListener('click', close);
  box.querySelector('.lb-prev').addEventListener('click', function () { go(-1); });
  box.querySelector('.lb-next').addEventListener('click', function () { go(1); });
  box.addEventListener('click', function (e) { if (e.target === box) close(); });
  document.addEventListener('keydown', function (e) {
    if (box.hidden) return;
    if (e.key === 'Escape') close();
    else if (e.key === 'ArrowLeft') go(-1);
    else if (e.key === 'ArrowRight') go(1);
  });
  var x0 = null;
  box.addEventListener('touchstart', function (e) { x0 = e.touches[0].clientX; }, { passive: true });
  box.addEventListener('touchend', function (e) {
    if (x0 === null) return;
    var dx = e.changedTouches[0].clientX - x0; x0 = null;
    if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
  });
})();
