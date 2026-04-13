
function getLanguageRoots() {
  const itRoot = document.getElementById('primo-div');
  const englishRoot = document.getElementById('secondo-div-en') || document.getElementById('secondo-div');
  const sharedRoot = !englishRoot || englishRoot.children.length === 0 ? itRoot : englishRoot;
  return {
    it: itRoot,
    en: sharedRoot
  };
}

function getActiveLanguageRoot() {
  const roots = getLanguageRoots();
  if (roots.en && roots.en.classList.contains('d-block')) return roots.en;
  return roots.it || document;
}


const GAMES_COPY = {
  it: {
    title: 'GIOCHI',
    featured: 'NUOVE USCITE',
    searchPlaceholder: 'Cerca un gioco',
    filters: 'Filtri categoria',
    sortNew: 'NUOVI',
    sortFavorite: 'PREFERITI',
    favorite: 'Preferito',
    comingSoon: 'In arrivo...',
    categories: {
      Action: 'Azione', Adventure: 'Avventura', Arcade: 'Arcade', BattleRoyale: 'Battle Royale',
      'Co-Op': 'Co-op', Competitive: 'Competitivo', Crime: 'Crimine', eSport: 'eSport', Fighting: 'Picchiaduro',
      FPS: 'FPS', Horror: 'Horror', Hunt: 'Caccia', Indie: 'Indie', Moba: 'MOBA', Multiplayer: 'Multigiocatore',
      PvE: 'PvE', PvP: 'PvP', Racing: 'Corse', Race: 'Gare', RPG: 'RPG', SandBox: 'Sandbox',
      'Sci-Fi': 'Sci-fi', Singleplayer: 'Giocatore singolo', Stealth: 'Stealth', Strategy: 'Strategia',
      Team: 'Team', 'Third-Person-Shooter': 'Sparatutto in terza persona', OpenWorld: 'Mondo aperto',
      Shooter: 'Sparatutto', Simulation: 'Simulazione', Simulator: 'Simulatore', Survival: 'Sopravvivenza'
    }
  },
  en: {
    title: 'GAMES',
    featured: 'NEW ARRIVALS',
    searchPlaceholder: 'Search for a game',
    filters: 'Category Filters',
    sortNew: 'NEW',
    sortFavorite: 'FAVORITE',
    favorite: 'Favorite',
    comingSoon: 'Coming soon...',
    categories: {}
  }
};

const GAME_CATEGORY_CANONICAL = {
  Action: 'Action', Azione: 'Action', Adventure: 'Adventure', Avventura: 'Adventure', Arcade: 'Arcade',
  'Battle Royale': 'BattleRoyale', BattleRoyale: 'BattleRoyale', 'Co-op': 'Co-Op', 'Co-Op': 'Co-Op',
  Competitivo: 'Competitive', Competitive: 'Competitive', Crime: 'Crime', Crimine: 'Crime', eSport: 'eSport',
  Fighting: 'Fighting', Picchiaduro: 'Fighting', FPS: 'FPS', Horror: 'Horror', Hunt: 'Hunt', Caccia: 'Hunt',
  Indie: 'Indie', MOBA: 'Moba', Moba: 'Moba', Multigiocatore: 'Multiplayer', Multiplayer: 'Multiplayer',
  PvE: 'PvE', PvP: 'PvP', Corse: 'Racing', Racing: 'Racing', Gare: 'Race', Race: 'Race', RPG: 'RPG',
  Sandbox: 'SandBox', SandBox: 'SandBox', 'Sci-Fi': 'Sci-Fi', 'Sci-fi': 'Sci-Fi', 'Giocatore singolo': 'Singleplayer',
  Singleplayer: 'Singleplayer', Stealth: 'Stealth', Strategia: 'Strategy', Strategy: 'Strategy', Team: 'Team',
  'Sparatutto in terza persona': 'Third-Person-Shooter', 'Third-Person-Shooter': 'Third-Person-Shooter',
  'Mondo aperto': 'OpenWorld', OpenWorld: 'OpenWorld', Sparatutto: 'Shooter', Shooter: 'Shooter',
  Simulazione: 'Simulation', Simulation: 'Simulation', Simulatore: 'Simulator', Simulator: 'Simulator',
  Sopravvivenza: 'Survival', Survival: 'Survival'
};

function getGameCopy(lang) {
  return GAMES_COPY[lang] || GAMES_COPY.it;
}

function localizeGamesPage(lang) {
  const roots = getLanguageRoots();
  const root = lang === 'en' ? roots.en : roots.it;
  if (!root) return;
  const copy = getGameCopy(lang);

  const headings = root.querySelectorAll('h1, .featured');
  if (headings[0]) headings[0].textContent = copy.title;
  if (headings[1]) headings[1].textContent = copy.featured;

  const searchInput = root.querySelector('.input-search');
  if (searchInput) searchInput.setAttribute('placeholder', copy.searchPlaceholder);

  const carouselLabels = root.querySelectorAll('.visually-hidden');
  if (carouselLabels[0]) carouselLabels[0].textContent = lang === 'it' ? 'Precedente' : 'Previous';
  if (carouselLabels[1]) carouselLabels[1].textContent = lang === 'it' ? 'Successivo' : 'Next';

  const filterHeading = root.querySelector('.switches h4');
  if (filterHeading) filterHeading.innerHTML = '<i class="bi bi-cursor"></i> ' + copy.filters;

  root.querySelectorAll('.category p').forEach((pill) => {
    const visible = (pill.textContent || '').trim();
    const canonical = pill.dataset.category || GAME_CATEGORY_CANONICAL[visible] || visible;
    pill.dataset.category = canonical;
    pill.textContent = copy.categories[canonical] || canonical;
  });

  root.querySelectorAll('.form-check-label').forEach((label) => {
    const visible = (label.textContent || '').trim();
    const canonical = GAME_CATEGORY_CANONICAL[visible] || visible;
    label.dataset.category = canonical;
    label.textContent = copy.categories[canonical] || canonical;
  });

  const sortAZ = byIdVariants(root, 'sortAZ');
  const sortZA = byIdVariants(root, 'sortZA');
  const sortNew = byIdVariants(root, 'sortNew');
  const sortFavorite = byIdVariants(root, 'sortFavorite');
  if (sortAZ) sortAZ.textContent = 'A-Z';
  if (sortZA) sortZA.textContent = 'Z-A';
  if (sortNew) sortNew.textContent = copy.sortNew;
  if (sortFavorite) sortFavorite.textContent = copy.sortFavorite;

  root.querySelectorAll('.offcanvas-body p').forEach((el) => {
    if (/in arrivo|coming soon/i.test((el.textContent || '').trim())) {
      el.textContent = copy.comingSoon;
    }
  });

  root.querySelectorAll('.favorite').forEach((badge) => {
    badge.textContent = copy.favorite;
  });
}

function setLanguage(mode) {
  const roots = getLanguageRoots();
  const languageLabel = document.getElementById('language_p');
  const sharedRoot = roots.it && roots.en && roots.it === roots.en;

  if (roots.it) {
    if (sharedRoot) {
      roots.it.classList.remove('d-none');
      roots.it.classList.add('d-block');
    } else {
      roots.it.classList.toggle('d-none', mode !== 'it');
      roots.it.classList.toggle('d-block', mode === 'it');
    }
  }
  if (roots.en && !sharedRoot) {
    roots.en.classList.toggle('d-none', mode !== 'en');
    roots.en.classList.toggle('d-block', mode === 'en');
  }

  if (languageLabel) languageLabel.innerText = mode === 'it' ? 'IT' : 'EN';
  localizeGamesPage(mode);
  localStorage.setItem('language', mode === 'it' ? 'd-block' : 'd-none');
}

function italianFunction() { setLanguage('it'); }
function englishFunction() { setLanguage('en'); }

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

function changeImg(icon) {
  if (!icon) return;
  icon.classList.toggle('bi-chevron-bar-contract');
  icon.classList.toggle('bi-list');
}

function wireGamesSection(root) {
  if (!root) return;
  const gamesContainer = root.querySelector('.games-folder');
  const searchInput = root.querySelector('.input-search');
  const categorySwitches = Array.from(root.querySelectorAll('.category-switch'));
  const sortAZ = byIdVariants(root, 'sortAZ');
  const sortZA = byIdVariants(root, 'sortZA');
  const sortNew = byIdVariants(root, 'sortNew');
  if (!gamesContainer) return;

  const getGames = () => Array.from(gamesContainer.querySelectorAll('.game'));
  const getTitle = (game) => (game.querySelector('h3')?.textContent || '').trim().toLowerCase();

  function render(comparator = null) {
    let games = getGames();
    if (comparator) {
      games.sort(comparator);
      games.forEach((game) => gamesContainer.appendChild(game));
      games = getGames();
    }

    const selectedCategories = categorySwitches
      .filter((checkbox) => checkbox.checked)
      .map((checkbox) => checkbox.id.replace(/-en$/, '').replace(/Switch$/, '').replace(/Switch-\d+$/, ''));

    const searchTerm = (searchInput?.value || '').trim().toLowerCase();

    games.forEach((game) => {
      const categories = Array.from(game.querySelectorAll('.category p')).map((p) => p.dataset.category || p.textContent.trim());
      const titleMatch = !searchTerm || getTitle(game).includes(searchTerm);
      const categoryMatch = selectedCategories.every((category) => categories.includes(category));
      const visible = titleMatch && categoryMatch;
      game.style.display = visible ? 'block' : 'none';
    });
  }

  categorySwitches.forEach((checkbox) => checkbox.addEventListener('change', () => render()));
  if (searchInput) searchInput.addEventListener('input', () => render());
  if (sortAZ) sortAZ.addEventListener('click', () => render((a, b) => getTitle(a).localeCompare(getTitle(b))));
  if (sortZA) sortZA.addEventListener('click', () => render((a, b) => getTitle(b).localeCompare(getTitle(a))));
  if (sortNew) {
    sortNew.addEventListener('click', () => render((a, b) => {
      const aNew = a.querySelector('.new') !== null;
      const bNew = b.querySelector('.new') !== null;
      if (aNew && !bNew) return -1;
      if (!aNew && bNew) return 1;
      return getTitle(a).localeCompare(getTitle(b));
    }));
  }

  render();
}

window.addEventListener('load', function () {
  initPageChrome('it');
  localizeGamesPage(localStorage.getItem('language') === 'd-none' ? 'en' : 'it');
  wireGamesSection(document.getElementById('primo-div') || document);
  wireGamesSection(document.getElementById('secondo-div-en') || document.getElementById('secondo-div'));
});

window.addEventListener('profithub:languagechange', function (event) {
  localizeGamesPage(event.detail?.lang || (localStorage.getItem('language') === 'd-none' ? 'en' : 'it'));
  if (typeof syncFavorites === 'function') syncFavorites();
});

window.addEventListener('profithub:languagechange', (event) => {
  const lang = event?.detail?.lang === 'en' ? 'en' : 'it';
  localizeGamesPage(lang);
});
