
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

  html.setAttribute('data-bs-theme', 'dark');
  html.style.color = 'white';
  if (main) main.style.color = 'white';
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

  html.setAttribute('data-bs-theme', 'light');
  html.style.color = 'black';
  html.style.backgroundColor = 'white';
  if (main) main.style.color = 'black';
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


function syncHelpHeroText() {
  const lang = localStorage.getItem('language') === 'd-none' ? 'en' : 'it';
  const pill = document.querySelector('.help-hero .demo-pill');
  const title = document.querySelector('.help-hero h1');
  const desc = document.querySelector('.help-hero p');
  if (!pill || !title || !desc) return;
  if (lang === 'it') {
    pill.textContent = 'Centro assistenza';
    title.textContent = 'Aiuto, FAQ e supporto rapido';
    desc.textContent = 'Usa le schede di supporto, apri una sezione FAQ specifica o scrivi al bot demo per una risposta veloce.';
  } else {
    pill.textContent = 'Support hub';
    title.textContent = 'Help, FAQs, and quick support';
    desc.textContent = 'Use the support cards, open a specific FAQ section, or chat with the demo bot for a quick answer.';
  }
}

function getBotReply(lang, message) {
  const text = (message || '').toLowerCase();
  if (lang === 'it') {
    if (/checkout|pagamento|ordine|acquisto/.test(text)) return 'Il checkout è solo demo: salva un acquisto locale, aggiorna cronologia e notifiche, ma non esegue pagamenti reali.';
    if (/login|acced|registr|account|email|password/.test(text)) return 'Puoi usare demo@profithub.test / demo1234 oppure creare un account locale nel browser. Nessun dato viene inviato a un server.';
    if (/punti|monete|wallet/.test(text)) return 'I punti demo si aggiornano con creazione account, acquisti e abbonamenti. Apri la cronologia punti dall\'header per vedere i movimenti.';
    if (/mission|tracking|stat|notif/.test(text)) return 'Missioni, tracking e notifiche sono una preview front-end. Se qualcosa non si aggiorna subito, fai un refresh duro per evitare cache vecchia.';
    return 'Sono BotProfit. Posso aiutarti con checkout demo, account, punti, missioni e tracking.';
  }
  if (/checkout|payment|order|purchase/.test(text)) return 'Checkout is visual only: it stores a local demo order, updates history, and creates a notification, but it does not run a real payment.';
  if (/login|sign in|register|account|email|password/.test(text)) return 'You can use demo@profithub.test / demo1234 or create a browser-local account. Nothing is sent to a real backend.';
  if (/points|coins|wallet/.test(text)) return 'Demo points update from account creation, purchases, and subscriptions. Open the points history from the header to see the timeline.';
  if (/mission|tracking|stats|notif/.test(text)) return 'Missions, tracking, and notifications are front-end previews. If something looks stale, do a hard refresh to clear cached files.';
  return 'I am BotProfit. I can help with demo checkout, account access, points, missions, and tracking.';
}

function appendChatMessage({ inputId, chatId, userLabel, lang }) {
  const input = document.getElementById(inputId);
  const chat = document.getElementById(chatId);
  if (!input || !chat) return;
  const message = input.value.trim();
  if (!message) return;

  const user = document.createElement('div');
  user.className = 'help-chat-bubble user';
  user.innerHTML = `${message}<span class="help-chat-meta">${userLabel}</span>`;
  chat.appendChild(user);

  const bot = document.createElement('div');
  bot.className = 'help-chat-bubble';
  bot.innerHTML = `${getBotReply(lang, message)}<span class="help-chat-meta">BotProfit</span>`;
  chat.appendChild(bot);

  input.value = '';
  chat.scrollTop = chat.scrollHeight;
}

function bindChat(inputId, buttonId, chatId, lang, userLabel) {
  const button = document.getElementById(buttonId);
  const input = document.getElementById(inputId);
  if (button) button.addEventListener('click', () => appendChatMessage({ inputId, chatId, lang, userLabel }));
  if (input) {
    input.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        event.preventDefault();
        appendChatMessage({ inputId, chatId, lang, userLabel });
      }
    });
  }
}

function jumpToHelpTopic(topic) {
  const root = getActiveLanguageRoot();
  if (!root || !topic) return;
  root.querySelectorAll('.active-help-topic').forEach((el) => el.classList.remove('active-help-topic'));
  const targets = Array.from(root.querySelectorAll(`[data-help-topic="${topic}"]`));
  targets.forEach((el) => el.classList.add('active-help-topic'));

  const accordionTarget = targets.find((el) => el.classList.contains('accordion-item')) || targets[targets.length - 1] || null;
  if (!accordionTarget) return;

  const collapse = accordionTarget.querySelector('.accordion-collapse');
  if (collapse && window.bootstrap) {
    const parentSelector = collapse.getAttribute('data-bs-parent');
    if (parentSelector) {
      root.querySelectorAll(`${parentSelector} .accordion-collapse.show`).forEach((openEl) => {
        if (openEl !== collapse) {
          window.bootstrap.Collapse.getOrCreateInstance(openEl, { toggle: false }).hide();
        }
      });
    }
    window.bootstrap.Collapse.getOrCreateInstance(collapse, { toggle: false }).show();
  }

  window.setTimeout(() => {
    accordionTarget.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 60);
}

function applyHashTopic() {
  const hash = (window.location.hash || '').replace('#', '').trim();
  const valid = {
    'help-orders': 'orders',
    'help-account': 'account',
    'help-missions': 'missions',
    'help-tracking': 'tracking'
  };
  if (valid[hash]) jumpToHelpTopic(valid[hash]);
}

window.addEventListener('load', function () {
  initPageChrome('it');
  bindChat('my-chat-message', 'btn-add-chat', 'chat-space', 'it', 'Tu');
  bindChat('my-chat-messageEng', 'btn-add-chatEng', 'chat-spaceEng', 'en', 'You');

  document.querySelectorAll('[data-help-suggest]').forEach((button) => {
    button.addEventListener('click', () => {
      const root = button.closest('#primo-div, #secondo-div');
      const input = root?.id === 'primo-div'
        ? document.getElementById('my-chat-message')
        : document.getElementById('my-chat-messageEng');
      if (!input) return;
      input.value = button.dataset.helpSuggest || '';
      input.focus();
    });
  });

  document.querySelectorAll('[data-help-jump]').forEach((button) => {
    button.addEventListener('click', () => jumpToHelpTopic(button.dataset.helpJump));
  });

  syncHelpHeroText();
  applyHashTopic();
  window.addEventListener('hashchange', applyHashTopic);
  window.addEventListener('profithub:helpjump', (event) => {
    if (event?.detail?.topic) jumpToHelpTopic(event.detail.topic);
  });
  window.addEventListener('profithub:languagechange', () => {
    syncHelpHeroText();
    window.setTimeout(applyHashTopic, 50);
  });
});
