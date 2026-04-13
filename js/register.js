
function getLanguageRoots() {
  return {
    it: document.getElementById('primo-div'),
    en: document.getElementById('secondo-div-en') || document.getElementById('secondo-div')
  };
}

function getActiveLanguageRoot() {
  const roots = getLanguageRoots();
  if (roots.en && roots.en.classList.contains('d-block')) return roots.en;
  return roots.it || document;
}

function setLanguage(mode) {
  const roots = getLanguageRoots();
  const languageLabel = document.getElementById('language_p');
  if (roots.it) {
    roots.it.classList.toggle('d-none', mode !== 'it');
    roots.it.classList.toggle('d-block', mode === 'it');
  }
  if (roots.en) {
    roots.en.classList.toggle('d-none', mode !== 'en');
    roots.en.classList.toggle('d-block', mode === 'en');
  }
  if (languageLabel) languageLabel.innerText = mode === 'it' ? 'IT' : 'EN';
  localStorage.setItem('language', mode === 'it' ? 'd-block' : 'd-none');
}

function italianFunction() { setLanguage('it'); }
function englishFunction() {
  const roots = getLanguageRoots();
  if (roots.en) setLanguage('en');
}

function checkHtmlMode() {
  const html = document.documentElement;
  if (html.getAttribute('data-bs-theme') === 'light') enableDarkMode();
  else enableLightMode();
}

function enableDarkMode() {
  const html = document.documentElement;
  const main = document.querySelector('main');
  const nav = document.querySelector('nav');
  const footer = document.querySelector('footer');
  const body = document.body;
  const sun = document.getElementById('sun');
  const moon = document.getElementById('moon');
  const title = document.querySelector('h1');

  html.setAttribute('data-bs-theme', 'dark');
  html.style.color = 'white';
  if (main) main.style.color = 'white';
  if (title) title.style.color = 'white';
  if (footer) {
    footer.style.color = 'white';
    footer.style.backgroundColor = '#101a27';
  }
  if (nav) nav.style.backgroundColor = '#101a27';
  if (body) body.style.backgroundColor = '#000415';
  html.style.backgroundColor = '#000415';
  if (sun) { sun.classList.add('d-none'); sun.classList.remove('d-block'); }
  if (moon) { moon.classList.add('d-block'); moon.classList.remove('d-none'); }

  localStorage.setItem('mode_theme', 'dark');
}

function enableLightMode() {
  const html = document.documentElement;
  const main = document.querySelector('main');
  const nav = document.querySelector('nav');
  const footer = document.querySelector('footer');
  const body = document.body;
  const sun = document.getElementById('sun');
  const moon = document.getElementById('moon');
  const title = document.querySelector('h1');

  html.setAttribute('data-bs-theme', 'light');
  html.style.color = 'black';
  html.style.backgroundColor = 'white';
  if (main) main.style.color = 'black';
  if (title) title.style.color = 'black';
  if (footer) {
    footer.style.color = 'black';
    footer.style.backgroundColor = 'white';
  }
  if (nav) nav.style.backgroundColor = 'white';
  if (body) body.style.backgroundColor = 'white';
  if (sun) { sun.classList.add('d-block'); sun.classList.remove('d-none'); }
  if (moon) { moon.classList.add('d-none'); moon.classList.remove('d-block'); }

  localStorage.setItem('mode_theme', 'light');
}

function initPageChrome(defaultLanguage = 'it') {
  const btn = document.getElementById('themeToggler');
  const html = document.documentElement;
  const roots = getLanguageRoots();
  const savedLanguage = localStorage.getItem('language');
  const targetLanguage = roots.en ? (savedLanguage === 'd-none' ? 'en' : 'it') : defaultLanguage;
  setLanguage(targetLanguage);

  const modeTheme = localStorage.getItem('mode_theme') || html.getAttribute('data-bs-theme') || 'light';
  if (modeTheme === 'dark') enableDarkMode();
  else enableLightMode();

  if (btn) btn.addEventListener('click', checkHtmlMode);
  if (window.ProfitHubPolish && window.ProfitHubPolish.navigateWithHrefButtons) {
    window.ProfitHubPolish.navigateWithHrefButtons();
  }
}

function byIdVariants(root, baseId) {
  return root.querySelector(`[id="${baseId}"]`) || root.querySelector(`[id="${baseId}-en"]`) || root.querySelector(`[id^="${baseId}-"]`);
}

window.addEventListener('load', function () {
  initPageChrome('it');
});
