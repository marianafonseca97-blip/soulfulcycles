// Soulful Cycles: behaviour shared by every page.
// Each page defines its English text first, in `var EN = {...}`; Portuguese lives in the HTML itself.

// mobile menu (only on pages that have one)
(function () {
  var nav = document.querySelector('nav'), btn = nav && nav.querySelector('.menu-btn');
  if (!btn) return;
  function setOpen(o) { nav.classList.toggle('open', o); btn.setAttribute('aria-expanded', o); }
  btn.addEventListener('click', function () { setOpen(!nav.classList.contains('open')); });
  nav.querySelectorAll('ul a').forEach(function (a) { a.addEventListener('click', function () { setOpen(false); }); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setOpen(false); });
})();

// language switch
function setLang(lang) {
  document.querySelectorAll('[data-i]').forEach(function (el) {
    if (el.dataset.pt === undefined) el.dataset.pt = el.innerHTML;
    var en = EN[el.dataset.i];
    el.innerHTML = (lang === 'en' && en !== undefined) ? en : el.dataset.pt;
  });
  document.documentElement.lang = lang === 'pt' ? 'pt-PT' : 'en';
  document.querySelectorAll('.cv-link').forEach(function (a) { a.setAttribute('href', lang === 'pt' ? 'cv.pdf' : 'cv-en.pdf'); });
  document.querySelectorAll('.lang button').forEach(function (b) {
    b.setAttribute('aria-pressed', String(b.dataset.lang === lang));
  });
  try { localStorage.setItem('lang', lang); } catch (e) {}
}

document.querySelectorAll('.lang button').forEach(function (b) {
  b.addEventListener('click', function () { setLang(b.dataset.lang); });
});

var saved = null;
try { saved = localStorage.getItem('lang'); } catch (e) {}
setLang(saved === 'en' ? 'en' : 'pt');

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
