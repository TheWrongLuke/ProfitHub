(function () {
  const STORAGE_KEYS = {
    version: 'profithub_demo_version',
    accounts: 'profithub_demo_accounts',
    session: 'profithub_demo_session',
    order: 'profithub_demo_order',
    history: 'profithub_demo_history',
    notificationState: 'profithub_demo_notification_state'
  };

  const CURRENT_VERSION = '6';
  const DEFAULT_ACCOUNT = {
    id: 'demo-default',
    name: 'Demo',
    surname: 'User',
    username: 'demoplayer',
    email: 'demo@profithub.test',
    password: 'demo1234',
    plan: 'Free',
    createdAt: new Date().toISOString()
  };

  const COPY = {
    it: {
      nav: {
        products: 'PRODOTTI',
        games: 'GIOCHI',
        subscription: 'ABBONAMENTI',
        help: 'AIUTO',
        login: 'ACCEDI',
        register: 'REGISTRATI',
        account: 'Account',
        logout: 'Esci',
        productsDropdown: ['PC', 'Console', 'Accessori', 'Gift Card'],
        subscriptionDropdown: ['Gratis', 'Deluxe', 'Premium'],
        helpDropdown: [
          'Problemi di acquisto',
          'Problemi di account',
          'Problemi con le missioni',
          'Problemi con il tracking delle missioni'
        ]
      },
      demoBannerGuest: '<strong>Modalità demo:</strong> front-end soltanto. Usa <strong>demo@profithub.test</strong> / <strong>demo1234</strong> oppure crea un account locale. Nessun pagamento o guadagno reale.',
      demoBannerLogged: '<strong>Modalità demo:</strong> front-end soltanto. Accesso effettuato come <strong>{fullName}</strong> ({username}). Nessun pagamento, payout o elaborazione reale.',
      offcanvas: {
        title: 'Account',
        name: 'Nome',
        email: 'Email',
        password: 'Password',
        username: 'Username',
        plan: 'Piano',
        state: 'Stato',
        loggedIn: 'Accesso locale attivo in questo browser',
        preview: 'Account demo di anteprima'
      },
      loginModal: {
        title: 'ACCEDI A PLAYPROFIT',
        email: 'Email:',
        password: 'Password:',
        submit: 'Accedi',
        noAccount: 'Non hai un account?',
        registerNow: 'Registrati ora!'
      },
      registerModal: {
        title: 'REGISTRATI SU PLAYPROFIT',
        intro: 'Entra a far parte della piattaforma!',
        google: 'Registrati con Google',
        facebook: 'Registrati con Facebook',
        linkedin: 'Registrati con LinkedIn',
        playprofit: 'Registrati con PlayProfit',
        agree: 'Accetta termini e condizioni',
        valid: 'Perfetto!',
        invalid: 'Devi accettare prima di continuare.'
      },
      orderSummary: {
        pill: 'Checkout demo',
        statusLabel: 'Stato',
        status: 'Nessun pagamento reale elaborato',
        cardLabel: 'Carta',
        fallback: 'Flusso di acquisto solo visivo'
      },
      toasts: {
        invalidCredentials: 'Credenziali demo non valide. Usa demo@profithub.test / demo1234 oppure registra un nuovo account.',
        loginSuccess: 'Accesso effettuato come @{username}',
        requiredFields: 'Completa prima i campi obbligatori.',
        emailExists: 'Questa email demo esiste già. Accedi invece.',
        accountCreated: 'Account creato per @{username}',
        paymentCompleted: 'Pagamento demo completato. Nessuna transazione reale è stata elaborata.',
        freePlanEnabled: 'Piano gratuito attivato per @{username}.',
        paidPlanReady: 'Abbonamento {plan} pronto per il checkout demo.'
      },
      subscriptionCtas: {
        freeGuest: 'CREA ACCOUNT',
        paidGuest: 'REGISTRATI',
        freeUser: 'ATTIVA GRATIS',
        paidUser: 'PROCEDI',
        currentPlan: 'PIANO ATTUALE'
      }
    },
    en: {
      nav: {
        products: 'PRODUCTS',
        games: 'GAMES',
        subscription: 'SUBSCRIPTION',
        help: 'HELP',
        login: 'LOGIN',
        register: 'REGISTER',
        account: 'Account',
        logout: 'Logout',
        productsDropdown: ['PC', 'Console', 'Accessories', 'Gift Card'],
        subscriptionDropdown: ['Free', 'Deluxe', 'Premium'],
        helpDropdown: [
          'Purchase issues',
          'Account issues',
          'Mission issues',
          'Mission tracking issues'
        ]
      },
      demoBannerGuest: '<strong>Demo mode:</strong> front-end only. Use <strong>demo@profithub.test</strong> / <strong>demo1234</strong> or create a local account. No real payments or earnings.',
      demoBannerLogged: '<strong>Demo mode:</strong> front-end only. Logged in as <strong>{fullName}</strong> ({username}). No real payments, payouts, or processing.',
      offcanvas: {
        title: 'Account',
        name: 'Name',
        email: 'Email',
        password: 'Password',
        username: 'Username',
        plan: 'Plan',
        state: 'State',
        loggedIn: 'Logged in locally on this browser',
        preview: 'Demo preview account'
      },
      loginModal: {
        title: 'LOGIN TO PLAYPROFIT',
        email: 'Email:',
        password: 'Password:',
        submit: 'Login',
        noAccount: "Don't have an account?",
        registerNow: 'Register now!'
      },
      registerModal: {
        title: 'REGISTER TO PLAYPROFIT',
        intro: 'Become part of our platform!',
        google: 'Register with Google',
        facebook: 'Register with Facebook',
        linkedin: 'Register with LinkedIn',
        playprofit: 'Register with PlayProfit',
        agree: 'Agree to terms and conditions',
        valid: 'Looks good!',
        invalid: 'You must agree before continuing.'
      },
      orderSummary: {
        pill: 'Demo checkout',
        statusLabel: 'Status',
        status: 'No real payment processed',
        cardLabel: 'Card',
        fallback: 'Visual-only purchase flow'
      },
      toasts: {
        invalidCredentials: 'Invalid demo credentials. Use demo@profithub.test / demo1234 or register a new account.',
        loginSuccess: 'Logged in as @{username}',
        requiredFields: 'Complete the required fields first.',
        emailExists: 'This demo email already exists. Log in instead.',
        accountCreated: 'Account created for @{username}',
        paymentCompleted: 'Demo payment completed. No real transaction was processed.',
        freePlanEnabled: 'Free plan enabled for @{username}.',
        paidPlanReady: '{plan} subscription ready for demo checkout.'
      },
      subscriptionCtas: {
        freeGuest: 'CREATE ACCOUNT',
        paidGuest: 'REGISTER',
        freeUser: 'START FREE',
        paidUser: 'PROCEED',
        currentPlan: 'CURRENT PLAN'
      }
    }

};

Object.assign(COPY.it, {
  demoWidgets: {
    points: 'Punti',
    notifications: 'Notifiche',
    missions: 'Missioni',
    history: 'Cronologia acquisti',
    settings: 'Impostazioni',
    level: 'Livello account',
    wallet: 'Portafoglio demo',
    viewAccount: 'Apri pannello account',
    missionStatus: 'Stato missioni',
    noHistory: 'Nessun acquisto demo ancora completato.',
    noNotifications: 'Nessuna notifica nuova.',
    settingsText: 'Profilo, privacy, preferenze email e lingua sono mostrati come anteprima demo.',
    latestActivity: 'Attività recenti',
    complete: 'completata',
    inProgress: 'in corso'
  }
});

Object.assign(COPY.en, {
  demoWidgets: {
    points: 'Points',
    notifications: 'Notifications',
    missions: 'Missions',
    history: 'Purchase history',
    settings: 'Settings',
    level: 'Account level',
    wallet: 'Demo wallet',
    viewAccount: 'Open account panel',
    missionStatus: 'Mission status',
    noHistory: 'No demo purchases completed yet.',
    noNotifications: 'No new notifications.',
    settingsText: 'Profile, privacy, email preferences, and language are shown as a demo preview.',
    latestActivity: 'Recent activity',
    complete: 'completed',
    inProgress: 'in progress'
  }
});

Object.assign(COPY.it, {
  modals: {
    notifications: 'Notifiche',
    points: 'Cronologia punti',
    settings: 'Impostazioni',
    history: 'Cronologia acquisti',
    emptyNotifications: 'Nessuna notifica.',
    noPointEvents: 'Nessun movimento punti disponibile.',
    markAllRead: 'Segna tutte come lette',
    deleteAll: 'Elimina tutto',
    delete: 'Elimina',
    markRead: 'Segna come letta',
    markUnread: 'Segna come non letta',
    profile: 'Profilo',
    preferences: 'Preferenze',
    language: 'Lingua',
    theme: 'Tema',
    purchaseHistory: 'Cronologia acquisti',
    settingsPreview: 'Anteprima impostazioni demo',
    save: 'Salva',
    close: 'Chiudi',
    accountCreated: 'Creazione account',
    basePlan: 'Bonus piano',
    orderReward: 'Acquisto demo',
    subscriptionReward: 'Abbonamento demo',
    pointsEarned: 'punti guadagnati',
    readState: 'Letta',
    unreadState: 'Non letta',
    openHistory: 'Apri cronologia acquisti',
    openSettings: 'Apri impostazioni',
    settingsSaved: 'Impostazioni demo salvate',
    demoOnly: 'Solo anteprima front-end',
    emailPrefs: 'Preferenze email',
    privacyMode: 'Modalità privacy',
    accountPreview: 'Pannello account',
    noOrders: 'Nessun acquisto demo ancora registrato.'
  }
});

Object.assign(COPY.en, {
  modals: {
    notifications: 'Notifications',
    points: 'Points history',
    settings: 'Settings',
    history: 'Purchase history',
    emptyNotifications: 'No notifications.',
    noPointEvents: 'No point events available.',
    markAllRead: 'Mark all as read',
    deleteAll: 'Delete all',
    delete: 'Delete',
    markRead: 'Mark as read',
    markUnread: 'Mark as unread',
    profile: 'Profile',
    preferences: 'Preferences',
    language: 'Language',
    theme: 'Theme',
    purchaseHistory: 'Purchase history',
    settingsPreview: 'Demo settings preview',
    save: 'Save',
    close: 'Close',
    accountCreated: 'Account created',
    basePlan: 'Plan bonus',
    orderReward: 'Demo purchase',
    subscriptionReward: 'Demo subscription',
    pointsEarned: 'points earned',
    readState: 'Read',
    unreadState: 'Unread',
    openHistory: 'Open purchase history',
    openSettings: 'Open settings',
    settingsSaved: 'Demo settings saved',
    demoOnly: 'Front-end preview only',
    emailPrefs: 'Email preferences',
    privacyMode: 'Privacy mode',
    accountPreview: 'Account panel',
    noOrders: 'No demo purchases recorded yet.'
  }
});

function readJson(key, fallback) {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch (_) {
      return fallback;
    }
  }

  function writeJson(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  function getCurrentLanguage() {
    return localStorage.getItem('language') === 'd-none' ? 'en' : 'it';
  }

  function getCopy(lang = getCurrentLanguage()) {
    return COPY[lang] || COPY.it;
  }

  function fillTemplate(template, values) {
    return String(template).replace(/\{(\w+)\}/g, (_, key) => values[key] ?? '');
  }

  function ensureState() {
    const version = localStorage.getItem(STORAGE_KEYS.version);
    let accounts = readJson(STORAGE_KEYS.accounts, null);

    if (!Array.isArray(accounts) || accounts.length === 0) {
      accounts = [DEFAULT_ACCOUNT];
      writeJson(STORAGE_KEYS.accounts, accounts);
    } else {
      accounts = accounts
        .filter((account) => account && account.email)
        .map((account) => ({
          ...account,
          email: String(account.email).trim(),
          username: account.username || String(account.email).split('@')[0],
          plan: account.plan || 'Free',
          createdAt: account.createdAt || new Date().toISOString()
        }));
      if (!accounts.some((account) => account.email.toLowerCase() === DEFAULT_ACCOUNT.email.toLowerCase())) {
        accounts.unshift(DEFAULT_ACCOUNT);
      }
      writeJson(STORAGE_KEYS.accounts, accounts);
    }

    const sessionEmail = getSessionEmail();
    if (sessionEmail && !accounts.some((account) => account.email.toLowerCase() === sessionEmail.toLowerCase())) {
      clearSession();
    }

    localStorage.setItem(STORAGE_KEYS.version, CURRENT_VERSION);
  }

  function getAccounts() {
    return readJson(STORAGE_KEYS.accounts, [DEFAULT_ACCOUNT]);
  }

  function saveAccounts(accounts) {
    writeJson(STORAGE_KEYS.accounts, accounts);
  }

  function getSessionEmail() {
    return localStorage.getItem(STORAGE_KEYS.session);
  }

  function setSessionEmail(email) {
    localStorage.setItem(STORAGE_KEYS.session, email);
  }

  function clearSession() {
    localStorage.removeItem(STORAGE_KEYS.session);
  }


function clearOrder() {
  localStorage.removeItem(STORAGE_KEYS.order);
}

function getHistory() {
  return readJson(STORAGE_KEYS.history, []);
}

function saveHistory(history) {
  writeJson(STORAGE_KEYS.history, history.slice(-40));
}

function pushHistory(entry) {
  const history = getHistory();
  history.push({ id: `hist-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`, ...entry });
  saveHistory(history);
}

function getUserHistory(user = getCurrentUser()) {
  if (!user) return [];
  return getHistory()
    .filter((entry) => (entry.account || '').toLowerCase() === user.email.toLowerCase())
    .sort((a, b) => new Date(b.date || 0) - new Date(a.date || 0));
}

function getPlanBonus(plan) {
  if (plan === 'Premium') return 900;
  if (plan === 'Deluxe') return 450;
  return 120;
}

function computeDemoPoints(user = getCurrentUser()) {
  if (!user) return 0;
  const history = getUserHistory(user);
  const completedPurchases = history.filter((item) => item.kind === 'product' || item.kind === 'subscription').length;
  const accountBonus = history.some((item) => item.kind === 'account') ? 180 : 0;
  return getPlanBonus(user.plan) + accountBonus + (completedPurchases * 140);
}

function getNotificationStorage() {
  return readJson(STORAGE_KEYS.notificationState, {});
}

function saveNotificationStorage(state) {
  writeJson(STORAGE_KEYS.notificationState, state);
}

function getNotificationState(user = getCurrentUser()) {
  if (!user) return { read: [], deleted: [] };
  const store = getNotificationStorage();
  return store[user.email.toLowerCase()] || { read: [], deleted: [] };
}

function setNotificationState(user, nextState) {
  if (!user) return;
  const store = getNotificationStorage();
  store[user.email.toLowerCase()] = {
    read: [...new Set(nextState.read || [])],
    deleted: [...new Set(nextState.deleted || [])]
  };
  saveNotificationStorage(store);
}

function buildNotificationItems(user = getCurrentUser(), lang = getCurrentLanguage()) {
  if (!user) return [];
  const history = getUserHistory(user);
  const state = getNotificationState(user);
  const readSet = new Set(state.read || []);
  const deletedSet = new Set(state.deleted || []);
  const items = [];

  items.push({
    id: `welcome-${user.email.toLowerCase()}`,
    date: user.createdAt || new Date().toISOString(),
    text: lang === 'it'
      ? `Bentornato, @${user.username}. Il tuo account demo è pronto.`
      : `Welcome back, @${user.username}. Your demo account is ready.`
  });

  if (user.plan && user.plan !== 'Free') {
    items.push({
      id: `plan-${user.email.toLowerCase()}-${user.plan}`,
      date: user.createdAt || new Date().toISOString(),
      text: lang === 'it'
        ? `Piano ${user.plan} attivo con vantaggi demo sbloccati.`
        : `${user.plan} plan active with demo perks unlocked.`
    });
  }

  const lastOrder = history.find((item) => item.kind === 'product' || item.kind === 'subscription');
  if (lastOrder) {
    items.push({
      id: `last-order-${lastOrder.id}`,
      date: lastOrder.date,
      text: lang === 'it'
        ? `Ultimo acquisto demo: ${lastOrder.title}.`
        : `Latest demo purchase: ${lastOrder.title}.`
    });
  }

  items.push({
    id: `support-${user.email.toLowerCase()}`,
    date: user.createdAt || '2024-01-01T00:00:00.000Z',
    text: lang === 'it'
      ? 'Centro notifiche e ticket supporto disponibili come anteprima.'
      : 'Notification center and support tickets are available as a preview.'
  });

  return items
    .filter((item) => !deletedSet.has(item.id))
    .map((item) => ({ ...item, read: readSet.has(item.id) }))
    .sort((a, b) => new Date(b.date || 0) - new Date(a.date || 0));
}

function getDemoNotifications(user = getCurrentUser(), lang = getCurrentLanguage()) {
  return buildNotificationItems(user, lang).map((item) => item.text);
}

function markAllNotificationsRead(user = getCurrentUser()) {
  if (!user) return;
  const items = buildNotificationItems(user, getCurrentLanguage());
  const state = getNotificationState(user);
  state.read = [...new Set([...(state.read || []), ...items.map((item) => item.id)])];
  setNotificationState(user, state);
}

function markNotificationRead(notificationId, user = getCurrentUser()) {
  if (!user || !notificationId) return;
  const state = getNotificationState(user);
  state.read = [...new Set([...(state.read || []), notificationId])];
  setNotificationState(user, state);
}

function toggleNotificationRead(notificationId, user = getCurrentUser()) {
  if (!user || !notificationId) return;
  const state = getNotificationState(user);
  const read = new Set(state.read || []);
  if (read.has(notificationId)) read.delete(notificationId);
  else read.add(notificationId);
  state.read = [...read];
  setNotificationState(user, state);
}

function deleteNotification(notificationId, user = getCurrentUser()) {
  if (!user || !notificationId) return;
  const state = getNotificationState(user);
  state.deleted = [...new Set([...(state.deleted || []), notificationId])];
  setNotificationState(user, state);
}

function deleteAllNotifications(user = getCurrentUser()) {
  if (!user) return;
  const items = buildNotificationItems(user, getCurrentLanguage());
  const state = getNotificationState(user);
  state.deleted = [...new Set([...(state.deleted || []), ...items.map((item) => item.id)])];
  setNotificationState(user, state);
}

function getPointsTimeline(user = getCurrentUser(), lang = getCurrentLanguage()) {
  if (!user) return [];
  const copy = getCopy(lang);
  const events = [];
  const planBonus = getPlanBonus(user.plan || 'Free');
  const history = getUserHistory(user);

  events.push({
    id: `points-plan-${user.plan || 'Free'}`,
    date: user.createdAt || new Date().toISOString(),
    label: `${copy.modals.basePlan}: ${user.plan || 'Free'}`,
    amount: planBonus
  });

  const accountCreated = history.find((item) => item.kind === 'account');
  if (accountCreated) {
    events.push({
      id: `points-account-${accountCreated.id}`,
      date: accountCreated.date,
      label: copy.modals.accountCreated,
      amount: 180
    });
  }

  history.filter((item) => item.kind === 'product' || item.kind === 'subscription').forEach((item) => {
    events.push({
      id: `points-${item.id}`,
      date: item.date,
      label: item.kind === 'subscription' ? `${copy.modals.subscriptionReward}: ${item.title}` : `${copy.modals.orderReward}: ${item.title}`,
      amount: 140
    });
  });

  return events.sort((a, b) => new Date(b.date || 0) - new Date(a.date || 0));
}

function getDemoMissions(user = getCurrentUser(), lang = getCurrentLanguage()) {
  if (!user) return [];
  const history = getUserHistory(user);
  const purchases = history.filter((item) => item.kind === 'product').length;
  const subscriptions = history.filter((item) => item.kind === 'subscription').length;
  const hasPaidPlan = user.plan && user.plan !== 'Free';

  return [
    {
      title: lang === 'it' ? 'Completa il tuo primo checkout demo' : 'Complete your first demo checkout',
      progress: Math.min(purchases + subscriptions, 1),
      goal: 1
    },
    {
      title: lang === 'it' ? 'Esplora 3 acquisti demo' : 'Explore 3 demo purchases',
      progress: Math.min(purchases + subscriptions, 3),
      goal: 3
    },
    {
      title: lang === 'it' ? 'Sblocca un piano avanzato' : 'Unlock an advanced plan',
      progress: hasPaidPlan ? 1 : 0,
      goal: 1
    }
  ];
}

function formatHistoryDate(date, lang = getCurrentLanguage()) {
  try {
    return new Date(date).toLocaleString(lang === 'it' ? 'it-IT' : 'en-GB', {
      day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit'
    });
  } catch (_) {
    return date || '';
  }
}

  function getCurrentUser() {
    const email = getSessionEmail();
    if (!email) return null;
    return getAccounts().find((account) => account.email.toLowerCase() === email.toLowerCase()) || null;
  }

  function updateCurrentUserPlan(plan) {
    const user = getCurrentUser();
    if (!user) return;
    const accounts = getAccounts();
    const next = accounts.map((account) => account.email.toLowerCase() === user.email.toLowerCase()
      ? { ...account, plan }
      : account);
    saveAccounts(next);
  }

  function maskEmail(email) {
    if (!email || !email.includes('@')) return email || '';
    const [name, domain] = email.split('@');
    return `${name.slice(0, 2)}${'*'.repeat(Math.max(2, name.length - 2))}@${domain}`;
  }

  function getVisibleText(element) {
    return (element?.textContent || '').replace(/\s+/g, ' ').trim();
  }

  function pathTo(pageName) {
    const inHtmlFolder = window.location.pathname.includes('/html/');
    return inHtmlFolder ? pageName : `html/${pageName}`;
  }

  function publicLandingPath() {
    return window.location.pathname.includes('/html/') ? '../index.html' : 'index.html';
  }

  function resolveLoggedPathFromCurrent() {
    const file = window.location.pathname.split('/').pop() || 'index.html';
    if (file === 'index.html') return pathTo('home.html');
    if (file.endsWith('(noLogin).html')) return file.replace('(noLogin).html', '.html');
    if (file === 'register.html' || file === 'registerP.html') return pathTo('home.html');
    return file;
  }

  function resolvePublicPathFromCurrent() {
    const file = window.location.pathname.split('/').pop() || 'index.html';
    if (file === 'home.html') return publicLandingPath();
    if (file === 'games.html') return 'games(noLogin).html';
    if (file === 'help.html') return 'help(noLogin).html';
    if (file === 'subscription.html') return 'subscription(noLogin).html';
    if (file === 'payment.html') return 'payment(noLogin).html';
    if (file === 'products.html') return publicLandingPath();
    if (file === 'successful.html') return publicLandingPath();
    if (file === 'index.html') return 'index.html';
    return publicLandingPath();
  }

  function enforceProtectedRoutes() {
    const file = (window.location.pathname.split('/').pop() || '').toLowerCase();
    const user = getCurrentUser();
    if (user) return false;

    const protectedRoutes = new Set(['products.html']);
    if (!protectedRoutes.has(file)) return false;

    window.location.replace(pathTo('register.html'));
    return true;
  }

  function showToast(message, type) {
    const toastRoot = document.getElementById('demo-toast-root') || createToastRoot();
    const toast = document.createElement('div');
    toast.className = `toast align-items-center border-0 text-bg-${type || 'dark'} show demo-toast`;
    toast.setAttribute('role', 'alert');
    toast.innerHTML = `
      <div class="d-flex">
        <div class="toast-body">${message}</div>
        <button type="button" class="btn-close btn-close-white me-2 m-auto" aria-label="Close"></button>
      </div>`;
    toast.querySelector('.btn-close').addEventListener('click', () => toast.remove());
    toastRoot.appendChild(toast);
    setTimeout(() => toast.remove(), 3200);
  }

  function createToastRoot() {
    const root = document.createElement('div');
    root.id = 'demo-toast-root';
    root.className = 'toast-container position-fixed top-0 end-0 p-3';
    document.body.appendChild(root);
    return root;
  }

  function setButtonTextPreserveIcon(button, text) {
    if (!button) return;
    const img = button.querySelector('img');
    const classes = button.className;
    const type = button.getAttribute('type');
    const href = button.getAttribute('href');
    button.innerHTML = '';
    if (img) button.appendChild(img);
    if (img) button.append(document.createTextNode(` ${text}`));
    else button.textContent = text;
    button.className = classes;
    if (type) button.setAttribute('type', type);
    if (href) button.setAttribute('href', href);
  }

  function syncHeaderBannerOffsets() {
    const nav = document.querySelector('nav.navbar, nav');
    const banner = document.querySelector('.demo-banner');
    if (!nav || !banner) return;

    const navHeight = Math.max(64, Math.ceil(nav.getBoundingClientRect().height || nav.offsetHeight || 0));
    const bannerHeight = Math.max(0, Math.ceil(banner.getBoundingClientRect().height || banner.offsetHeight || 0));
    document.documentElement.style.setProperty('--ph-nav-height', `${navHeight}px`);
    document.documentElement.style.setProperty('--ph-banner-height', `${bannerHeight}px`);
    banner.style.marginTop = `${navHeight}px`;
  }

  function upsertDemoBanner() {
    const nav = document.querySelector('nav.navbar, nav');
    if (!nav) return;
    const lang = getCurrentLanguage();
    const copy = getCopy(lang);
    const user = getCurrentUser();

    let banner = document.querySelector('.demo-banner');
    if (!banner) {
      banner = document.createElement('div');
      banner.className = 'demo-banner';
      nav.insertAdjacentElement('afterend', banner);
    }

    banner.innerHTML = user
      ? fillTemplate(copy.demoBannerLogged, {
          fullName: `${user.name} ${user.surname}`,
          username: user.username.startsWith('@') ? user.username : `@${user.username}`
        })
      : copy.demoBannerGuest;

    window.requestAnimationFrame(syncHeaderBannerOffsets);
  }


function updateAccountPanel() {
  const offcanvas = document.getElementById('offcanvasAccount');
  if (!offcanvas) return;
  const body = offcanvas.querySelector('.offcanvas-body');
  const copy = getCopy();
  const modals = copy.modals || {};
  const user = getCurrentUser() || DEFAULT_ACCOUNT;

  const title = offcanvas.querySelector('.offcanvas-title, #offcanvasAccountLabel, h5');
  if (title) title.textContent = copy.offcanvas.title;

  const labels = offcanvas.querySelectorAll('label.form-label');
  if (labels[0]) labels[0].textContent = copy.offcanvas.name;
  if (labels[1]) labels[1].textContent = copy.offcanvas.email;
  if (labels[2]) labels[2].textContent = copy.offcanvas.password;

  const inputs = body ? body.querySelectorAll('input.form-control') : [];
  if (inputs[0]) inputs[0].value = `${user.name} ${user.surname}`;
  if (inputs[1]) inputs[1].value = user.email;
  if (inputs[2]) inputs[2].value = '••••••••';

  if (!body) return;

  let meta = body.querySelector('.demo-account-meta');
  if (!meta) {
    meta = document.createElement('div');
    meta.className = 'demo-account-meta';
    body.appendChild(meta);
  }

  meta.innerHTML = `
    <div class="demo-account-card demo-account-card--simple">
      <div><strong>${copy.offcanvas.username}:</strong> @${user.username}</div>
      <div><strong>${copy.offcanvas.plan}:</strong> ${user.plan || 'Free'}</div>
      <div><strong>${copy.offcanvas.state}:</strong> ${getCurrentUser() ? copy.offcanvas.loggedIn : copy.offcanvas.preview}</div>
    </div>
    <div class="demo-account-actions">
      <button type="button" class="btn btn-outline-light demo-open-history" data-bs-dismiss="offcanvas" data-bs-toggle="modal" data-bs-target="#demoHistoryModal">${modals.openHistory}</button>
      <button type="button" class="btn btn-outline-light demo-open-settings" data-bs-dismiss="offcanvas" data-bs-toggle="modal" data-bs-target="#demoSettingsModal">${modals.openSettings}</button>
      ${getCurrentUser() ? `<button type="button" class="btn btn-outline-light demo-logout-btn">${copy.nav.logout}</button>` : ''}
    </div>`;

  const logoutBtn = meta.querySelector('.demo-logout-btn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      clearSession();
      window.location.href = resolvePublicPathFromCurrent();
    });
  }
}

function updateAuthButtons() {
  const user = getCurrentUser();
  const copy = getCopy();
  const offcanvasTarget = '#offcanvasAccount';

  document.querySelectorAll('.btn-log-reg, .nav-link, button').forEach((element) => {
    const text = (element.textContent || '').trim().toLowerCase();
    if (!text) return;

    if (text === 'login' || text === 'accedi') {
      element.classList.toggle('d-none', !!user);
      if (!user) element.textContent = copy.nav.login;
    }

    if (text === 'register' || text === 'registrati') {
      element.classList.toggle('d-none', !!user);
      if (!user) element.textContent = copy.nav.register;
    }
  });

  const navbarCollapse = document.querySelector('.navbar .navbar-collapse, .navbar .collapse');
  if (!navbarCollapse) return;

  let accountButton = navbarCollapse.querySelector(`[data-bs-target="${offcanvasTarget}"]`);
  if (!accountButton) {
    accountButton = Array.from(navbarCollapse.querySelectorAll('button, a')).find((el) => /^account$|^@/i.test(getVisibleText(el)));
  }

  let slot = navbarCollapse.querySelector('.demo-auth-slot');
  if (!slot) {
    slot = document.createElement('div');
    slot.className = 'demo-auth-slot d-flex gap-2 align-items-center flex-wrap';
    navbarCollapse.appendChild(slot);
  }

  if (user) {
    if (!accountButton) {
      accountButton = document.createElement('button');
      accountButton.type = 'button';
      accountButton.className = 'btn btn-primary btn-log-reg';
      accountButton.setAttribute('data-bs-toggle', 'offcanvas');
      accountButton.setAttribute('data-bs-target', offcanvasTarget);
    }

    accountButton.classList.remove('d-none');
    accountButton.classList.add('demo-account-shortcut');
    accountButton.textContent = `@${user.username}`;
    accountButton.setAttribute('data-bs-toggle', 'offcanvas');
    accountButton.setAttribute('data-bs-target', offcanvasTarget);
    if (accountButton.tagName === 'A') {
      accountButton.removeAttribute('href');
      accountButton.setAttribute('role', 'button');
    }

    let settingsButton = slot.querySelector('.demo-settings-shortcut');
    if (!settingsButton) {
      settingsButton = document.createElement('button');
      settingsButton.type = 'button';
      settingsButton.className = 'btn btn-outline-light demo-settings-shortcut';
      settingsButton.setAttribute('data-bs-toggle', 'modal');
      settingsButton.setAttribute('data-bs-target', '#demoSettingsModal');
      settingsButton.innerHTML = '<i class="bi bi-gear"></i>';
    }

    let logoutButton = slot.querySelector('.demo-logout-shortcut');
    if (!logoutButton) {
      logoutButton = document.createElement('button');
      logoutButton.type = 'button';
      logoutButton.className = 'btn btn-outline-light demo-logout-shortcut';
      logoutButton.addEventListener('click', () => {
        clearSession();
        window.location.href = resolvePublicPathFromCurrent();
      });
    }
    logoutButton.textContent = copy.nav.logout;

    slot.innerHTML = '';
    slot.appendChild(settingsButton);
    slot.appendChild(accountButton);
    slot.appendChild(logoutButton);
  } else {
    slot.querySelectorAll('.demo-settings-shortcut, .demo-logout-shortcut').forEach((el) => el.remove());
    if (accountButton) {
      accountButton.classList.remove('demo-account-shortcut');
      accountButton.textContent = copy.nav.account;
    }
    if (!slot.children.length) slot.remove();
  }
}

function renderHeaderStats() {
  const navbarCollapse = document.querySelector('.navbar .navbar-collapse, .navbar .collapse');
  const user = getCurrentUser();
  if (!navbarCollapse) return;

  navbarCollapse.querySelectorAll('.demo-overview-pills').forEach((el) => el.remove());
  if (!user) return;

  const points = computeDemoPoints(user);
  const unreadNotifications = buildNotificationItems(user).filter((item) => !item.read).length;
  const wrap = document.createElement('div');
  wrap.className = 'demo-overview-pills d-flex gap-2 align-items-center flex-wrap';
  wrap.innerHTML = `
    <button type="button" class="btn demo-chip demo-points-chip" data-bs-toggle="modal" data-bs-target="#demoPointsModal" aria-label="Points history">
      <svg class="demo-chip-icon" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
        <ellipse cx="8" cy="8" rx="6.5" ry="5.5"></ellipse>
        <ellipse cx="8" cy="8" rx="3.2" ry="2.7"></ellipse>
      </svg>
      <span>${points}</span>
    </button>
    <button type="button" class="btn demo-icon-chip demo-notification-chip" data-bs-toggle="modal" data-bs-target="#demoNotificationsModal" aria-label="Notifications">
      <i class="bi bi-bell"></i>
      <span class="demo-chip-badge${unreadNotifications ? '' : ' d-none'}">${unreadNotifications}</span>
    </button>`;

  const authSlot = navbarCollapse.querySelector('.demo-auth-slot') || navbarCollapse;
  authSlot.insertAdjacentElement('beforebegin', wrap);
}

function ensureDemoModals() {
  const copy = getCopy();
  const modals = copy.modals || {};
  let root = document.getElementById('demo-modal-root');
  if (!root) {
    root = document.createElement('div');
    root.id = 'demo-modal-root';
    document.body.appendChild(root);
  }

  root.innerHTML = `
    <div class="modal fade" id="demoNotificationsModal" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content demo-center-modal">
          <div class="modal-header">
            <h5 class="modal-title">${modals.notifications}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="demo-modal-toolbar">
              <button type="button" class="btn btn-outline-light btn-sm" data-demo-action="mark-all-read">${modals.markAllRead}</button>
              <button type="button" class="btn btn-outline-light btn-sm" data-demo-action="delete-all-notifications">${modals.deleteAll}</button>
            </div>
            <div class="demo-notification-list"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="modal fade" id="demoPointsModal" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content demo-center-modal">
          <div class="modal-header">
            <h5 class="modal-title">${modals.points}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body"><div class="demo-points-list"></div></div>
        </div>
      </div>
    </div>
    <div class="modal fade" id="demoSettingsModal" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content demo-center-modal">
          <div class="modal-header">
            <h5 class="modal-title">${modals.settings}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="demo-settings-grid">
              <div class="demo-settings-card">
                <h6>${modals.profile}</h6>
                <p class="mb-0 demo-settings-text">${modals.settingsPreview}</p>
              </div>
              <div class="demo-settings-card">
                <h6>${modals.preferences}</h6>
                <div class="form-check form-switch">
                  <input class="form-check-input" type="checkbox" id="demoEmailPrefs" checked>
                  <label class="form-check-label" for="demoEmailPrefs">${modals.emailPrefs}</label>
                </div>
                <div class="form-check form-switch mt-2">
                  <input class="form-check-input" type="checkbox" id="demoPrivacyMode">
                  <label class="form-check-label" for="demoPrivacyMode">${modals.privacyMode}</label>
                </div>
              </div>
            </div>
            <div class="demo-settings-actions">
              <button type="button" class="btn btn-outline-light" data-bs-toggle="modal" data-bs-target="#demoHistoryModal">${modals.openHistory}</button>
              <button type="button" class="btn btn-primary" data-demo-action="save-settings">${modals.save}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="modal fade" id="demoHistoryModal" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content demo-center-modal">
          <div class="modal-header">
            <h5 class="modal-title">${modals.history}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body"><div class="demo-history-modal-list"></div></div>
        </div>
      </div>
    </div>`;

  bindDemoModalActions();
}

function bindDemoModalActions() {
  const root = document.getElementById('demo-modal-root');
  if (!root || root.dataset.bound === '1') return;
  root.dataset.bound = '1';
  root.addEventListener('click', (event) => {
    const action = event.target.closest('[data-demo-action]')?.dataset.demoAction;
    const notificationItem = event.target.closest('[data-notification-id]');
    const user = getCurrentUser();
    if (!action && !notificationItem) return;

    if (notificationItem) {
      const id = notificationItem.dataset.notificationId;
      const button = event.target.closest('button[data-action]');
      if (!button) return;
      if (button.dataset.action === 'read') toggleNotificationRead(id, user);
      if (button.dataset.action === 'delete') deleteNotification(id, user);
      refreshDemoPanels();
      return;
    }

    if (action === 'mark-all-read') markAllNotificationsRead(user);
    if (action === 'delete-all-notifications') deleteAllNotifications(user);
    if (action === 'save-settings') showToast(getCopy().modals.settingsSaved, 'success');
    refreshDemoPanels();
  });
}

function renderNotificationsModal() {
  const container = document.querySelector('#demoNotificationsModal .demo-notification-list');
  if (!container) return;
  const copy = getCopy();
  const modals = copy.modals || {};
  const items = buildNotificationItems(getCurrentUser(), getCurrentLanguage());

  if (!items.length) {
    container.innerHTML = `<div class="demo-empty-state">${modals.emptyNotifications}</div>`;
    return;
  }

  container.innerHTML = items.map((item) => `
    <div class="demo-notification-item${item.read ? ' is-read' : ''}" data-notification-id="${item.id}">
      <div>
        <p class="mb-1">${item.text}</p>
        <small>${formatHistoryDate(item.date)}</small>
      </div>
      <div class="demo-inline-actions">
        <button type="button" class="btn btn-outline-light btn-sm" data-action="read">${item.read ? modals.markUnread : modals.markRead}</button>
        <button type="button" class="btn btn-outline-light btn-sm" data-action="delete">${modals.delete}</button>
      </div>
    </div>`).join('');
}

function renderPointsModal() {
  const container = document.querySelector('#demoPointsModal .demo-points-list');
  if (!container) return;
  const copy = getCopy();
  const modals = copy.modals || {};
  const points = getPointsTimeline(getCurrentUser(), getCurrentLanguage());

  if (!points.length) {
    container.innerHTML = `<div class="demo-empty-state">${modals.noPointEvents}</div>`;
    return;
  }

  container.innerHTML = points.map((item) => `
    <div class="demo-points-item">
      <div>
        <strong>${item.label}</strong>
        <small>${formatHistoryDate(item.date)}</small>
      </div>
      <span class="demo-points-amount">+${item.amount}</span>
    </div>`).join('');
}

function renderHistoryModal() {
  const container = document.querySelector('#demoHistoryModal .demo-history-modal-list');
  if (!container) return;
  const copy = getCopy();
  const modals = copy.modals || {};
  const history = getUserHistory(getCurrentUser());

  if (!history.length) {
    container.innerHTML = `<div class="demo-empty-state">${modals.noOrders}</div>`;
    return;
  }

  container.innerHTML = history.map((item) => `
    <div class="demo-history-item">
      <div>
        <strong>${item.title}</strong>
        <small>${formatHistoryDate(item.date)}</small>
      </div>
      <span>${item.price || '—'}</span>
    </div>`).join('');
}

function refreshDemoPanels() {
  updateAccountPanel();
  renderHeaderStats();
  renderNotificationsModal();
  renderPointsModal();
  renderHistoryModal();
}

function patchNoLoginNavigation() {

    const user = getCurrentUser();
    if (!user) return;

    const links = Array.from(document.querySelectorAll('a, button'));
    links.forEach((element) => {
      const text = (element.textContent || '').trim().toLowerCase();
      if (/^products$|^prodotti$/.test(text)) {
        element.removeAttribute('data-bs-toggle');
        element.removeAttribute('data-bs-target');
        if (element.tagName === 'A') element.setAttribute('href', pathTo('products.html'));
      }
      if (/^games$|^giochi$/.test(text) && element.tagName === 'A') element.setAttribute('href', pathTo('games.html'));
      if (/^subscription$|^abbonamenti$/.test(text) && element.tagName === 'A') element.setAttribute('href', pathTo('subscription.html'));
      if (/^help$|^aiuto$/.test(text) && element.tagName === 'A') element.setAttribute('href', pathTo('help.html'));
    });
  }

function ensurePrimaryNavigationRoutes() {
  const user = getCurrentUser();
  const primaryRoutes = {
    products: user ? pathTo('products.html') : pathTo('register.html'),
    games: user ? pathTo('games.html') : pathTo('games(noLogin).html'),
    subscription: user ? pathTo('subscription.html') : pathTo('subscription(noLogin).html'),
    help: user ? pathTo('help.html') : pathTo('help(noLogin).html')
  };

  document.querySelectorAll('nav a, nav button').forEach((element) => {
    const text = getVisibleText(element).toLowerCase();
    let target = '';
    if (/^products$|^prodotti$/.test(text)) target = primaryRoutes.products;
    if (/^games$|^giochi$/.test(text)) target = primaryRoutes.games;
    if (/^subscription$|^abbonamenti$/.test(text)) target = primaryRoutes.subscription;
    if (/^help$|^aiuto$/.test(text)) target = primaryRoutes.help;
    if (!target) return;

    element.removeAttribute('data-bs-toggle');
    element.removeAttribute('data-bs-target');

    if (element.tagName === 'A') {
      element.setAttribute('href', target);
    } else {
      element.setAttribute('type', 'button');
      element.dataset.demoRoute = target;
      if (element.dataset.demoPrimaryBound !== '1') {
        element.dataset.demoPrimaryBound = '1';
        element.addEventListener('click', () => {
          window.location.href = element.dataset.demoRoute;
        });
      }
    }
  });
}

function positionLanguageMenu(menu, trigger) {
  if (!menu || !trigger) return;
  const previousVisibility = menu.style.visibility;
  const previousDisplay = menu.style.display;
  const wasHidden = !menu.classList.contains('show');

  if (wasHidden) {
    menu.style.visibility = 'hidden';
    menu.style.display = 'block';
  }

  const triggerRect = trigger.getBoundingClientRect();
  const menuRect = menu.getBoundingClientRect();
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
  const gap = 10;

  let left = triggerRect.right - menuRect.width;
  left = Math.max(12, Math.min(left, viewportWidth - menuRect.width - 12));

  let top = triggerRect.top - menuRect.height - gap;
  if (top < 12) top = 12;
  if (top + menuRect.height > viewportHeight - 12) {
    top = Math.max(12, viewportHeight - menuRect.height - 12);
  }

  menu.style.position = 'fixed';
  menu.style.left = `${left}px`;
  menu.style.top = `${top}px`;
  menu.style.right = 'auto';
  menu.style.bottom = 'auto';
  menu.style.inset = 'auto';

  if (wasHidden) {
    menu.style.visibility = previousVisibility;
    menu.style.display = previousDisplay;
  }
}

function setupSmoothDropdowns() {
  const dropdowns = Array.from(document.querySelectorAll('.dropdown'));
  dropdowns.forEach((dropdown) => {
    if (dropdown.dataset.demoDropdownBound === '1') return;
    dropdown.dataset.demoDropdownBound = '1';

    const trigger = dropdown.querySelector('[data-bs-toggle="dropdown"], .dropdown-toggle, #en-it');
    const menu = dropdown.querySelector('.dropdown-menu');
    if (!trigger || !menu) return;

    const isLanguageDropdown = dropdown.id === 'dropdown-language';
    const isHeaderDropdown = !!dropdown.closest('header, nav, .navbar');
    trigger.removeAttribute('data-bs-toggle');
    trigger.removeAttribute('data-bs-display');
    trigger.setAttribute('aria-expanded', 'false');

    if (isLanguageDropdown) {
      trigger.classList.remove('row');
      trigger.classList.add('demo-lang-trigger');
      const caret = trigger.querySelector('.bi-caret-down-fill');
      if (caret) caret.classList.add('demo-lang-caret');
      return;
    }

    if (isHeaderDropdown) return;

    let closeTimer = null;
    const hoverCloseDelay = isHeaderDropdown ? 420 : 220;
    const focusCloseDelay = isHeaderDropdown ? 320 : 180;

    const setOpen = (open) => {
      dropdown.classList.toggle('dropdown-open', open);
      menu.classList.toggle('show', open);
      trigger.setAttribute('aria-expanded', open ? 'true' : 'false');
    };

    const openMenu = () => {
      window.clearTimeout(closeTimer);
      setOpen(true);
      if (isLanguageDropdown) {
        window.requestAnimationFrame(() => positionLanguageMenu(menu, trigger));
      }
    };

    const closeMenu = (delay = hoverCloseDelay) => {
      window.clearTimeout(closeTimer);
      closeTimer = window.setTimeout(() => setOpen(false), delay);
    };

    dropdown.addEventListener('mouseenter', openMenu);
    dropdown.addEventListener('mouseleave', () => closeMenu(hoverCloseDelay));
    trigger.addEventListener('mouseenter', openMenu);
    menu.addEventListener('mouseenter', openMenu);
    menu.addEventListener('mouseleave', () => closeMenu(hoverCloseDelay));
    dropdown.addEventListener('focusin', openMenu);
    dropdown.addEventListener('focusout', (event) => {
      if (!dropdown.contains(event.relatedTarget)) closeMenu(focusCloseDelay);
    });

    if (isLanguageDropdown) {
      trigger.addEventListener('click', (event) => {
        event.preventDefault();
        event.stopPropagation();
        const isOpen = dropdown.classList.contains('dropdown-open');
        if (isOpen) setOpen(false);
        else openMenu();
      });

      menu.addEventListener('click', () => {
        window.setTimeout(() => setOpen(false), 60);
      });
    }

    document.addEventListener('click', (event) => {
      if (!dropdown.contains(event.target)) setOpen(false);
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') setOpen(false);
    });

    if (isLanguageDropdown) {
      const reposition = () => {
        if (dropdown.classList.contains('dropdown-open')) {
          positionLanguageMenu(menu, trigger);
        }
      };
      window.addEventListener('resize', reposition);
      window.addEventListener('scroll', reposition, { passive: true });
    }
  });
}


function setupStandaloneLanguagePopup() {
  const root = document.getElementById('dropdown-language');
  const trigger = root?.querySelector('#en-it, .demo-lang-trigger, .nav-link');
  const originalMenu = root?.querySelector('#dropdown-menu-language, .dropdown-menu');
  if (!root || !trigger) return;

  root.classList.add('demo-language-root');
  trigger.classList.remove('row');
  trigger.classList.add('demo-lang-trigger');
  trigger.setAttribute('aria-expanded', 'false');
  trigger.removeAttribute('data-bs-toggle');
  trigger.removeAttribute('data-bs-display');

  const existing = document.getElementById('demo-language-popup');
  if (existing) existing.remove();

  if (originalMenu) {
    originalMenu.classList.remove('show');
    originalMenu.setAttribute('hidden', 'hidden');
    originalMenu.setAttribute('aria-hidden', 'true');
  }

  const popup = document.createElement('div');
  popup.id = 'demo-language-popup';
  popup.className = 'demo-language-popup';
  popup.setAttribute('hidden', 'hidden');
  popup.innerHTML = `
    <button class="demo-language-option" type="button" data-language-choice="it">ITALIANO • IT</button>
    <button class="demo-language-option" type="button" data-language-choice="en">ENGLISH • EN</button>`;
  document.body.appendChild(popup);

  let closeTimer = null;

  const setOpen = (open) => {
    root.classList.toggle('dropdown-open', open);
    trigger.setAttribute('aria-expanded', open ? 'true' : 'false');
    if (open) {
      popup.removeAttribute('hidden');
      popup.classList.add('show');
      positionStandaloneLanguagePopup(popup, trigger);
    } else {
      popup.classList.remove('show');
      popup.setAttribute('hidden', 'hidden');
    }
  };

  const openMenu = () => {
    window.clearTimeout(closeTimer);
    setOpen(true);
  };

  const closeMenu = (delay = 220) => {
    window.clearTimeout(closeTimer);
    closeTimer = window.setTimeout(() => setOpen(false), delay);
  };

  trigger.onclick = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const open = root.classList.contains('dropdown-open');
    if (open) setOpen(false);
    else openMenu();
  };

  root.onmouseenter = () => openMenu();
  root.onmouseleave = () => closeMenu(240);
  popup.onmouseenter = () => openMenu();
  popup.onmouseleave = () => closeMenu(240);

  popup.querySelectorAll('[data-language-choice]').forEach((button) => {
    button.onclick = () => {
      const choice = button.dataset.languageChoice;
      if (choice === 'it') {
        if (typeof window.italianFunction === 'function') window.italianFunction();
      } else if (typeof window.englishFunction === 'function') {
        window.englishFunction();
      }
      setOpen(false);
    };
  });

  const reposition = () => {
    if (root.classList.contains('dropdown-open')) {
      positionStandaloneLanguagePopup(popup, trigger);
    }
  };

  document.addEventListener('click', (event) => {
    if (!root.contains(event.target) && !popup.contains(event.target)) setOpen(false);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') setOpen(false);
  });

  window.addEventListener('resize', reposition);
  window.addEventListener('scroll', reposition, { passive: true });
}

function positionStandaloneLanguagePopup(popup, trigger) {
  if (!popup || !trigger) return;
  const triggerRect = trigger.getBoundingClientRect();
  const wasHidden = popup.hasAttribute('hidden') || !popup.classList.contains('show');

  if (wasHidden) {
    popup.removeAttribute('hidden');
    popup.style.visibility = 'hidden';
    popup.classList.add('show');
  }

  const popupRect = popup.getBoundingClientRect();
  const gap = 10;
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;

  let left = triggerRect.right - popupRect.width;
  left = Math.max(12, Math.min(left, viewportWidth - popupRect.width - 12));

  let top = triggerRect.top - popupRect.height - gap;
  if (top < 12) top = 12;
  if (top + popupRect.height > viewportHeight - 12) {
    top = Math.max(12, viewportHeight - popupRect.height - 12);
  }

  popup.style.left = `${left}px`;
  popup.style.top = `${top}px`;

  if (wasHidden) {
    popup.classList.remove('show');
    popup.setAttribute('hidden', 'hidden');
    popup.style.visibility = '';
  }
}

function positionStandaloneHeaderPopup(popup, trigger) {
  if (!popup || !trigger) return;
  const triggerRect = trigger.getBoundingClientRect();
  const wasHidden = popup.hasAttribute('hidden') || !popup.classList.contains('show');

  if (wasHidden) {
    popup.removeAttribute('hidden');
    popup.style.visibility = 'hidden';
    popup.classList.add('show');
  }

  const popupRect = popup.getBoundingClientRect();
  const gap = 10;
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;

  let left = triggerRect.left;
  left = Math.max(12, Math.min(left, viewportWidth - popupRect.width - 12));

  let top = triggerRect.bottom + gap;
  if (top + popupRect.height > viewportHeight - 12) {
    top = Math.max(12, triggerRect.top - popupRect.height - gap);
  }

  popup.style.left = `${left}px`;
  popup.style.top = `${top}px`;

  if (wasHidden) {
    popup.classList.remove('show');
    popup.setAttribute('hidden', 'hidden');
    popup.style.visibility = '';
  }
}

function setupStandaloneHeaderDropdowns() {
  const roots = Array.from(document.querySelectorAll('header nav .dropdown, nav.navbar .dropdown, .navbar .dropdown'))
    .filter((dropdown) => dropdown.id !== 'dropdown-language');

  roots.forEach((dropdown, index) => {
    const trigger = dropdown.querySelector('a.nav-link, button.nav-link, [role="button"]');
    const sourceMenu = dropdown.querySelector('.dropdown-menu');
    if (!trigger || !sourceMenu) return;

    dropdown.classList.add('demo-header-dropdown-root');
    sourceMenu.classList.remove('show');
    sourceMenu.classList.add('demo-source-menu');
    sourceMenu.setAttribute('hidden', 'hidden');
    sourceMenu.setAttribute('aria-hidden', 'true');
    trigger.setAttribute('aria-expanded', 'false');

    let popupId = dropdown.dataset.demoHeaderPopupId;
    if (!popupId) {
      popupId = `demo-header-popup-${index + 1}`;
      dropdown.dataset.demoHeaderPopupId = popupId;
    }

    let popup = document.getElementById(popupId);
    if (!popup) {
      popup = document.createElement('div');
      popup.id = popupId;
      popup.className = 'demo-header-popup dropdown-menu';
      popup.setAttribute('hidden', 'hidden');
      document.body.appendChild(popup);
    }

    const syncPopup = () => {
      popup.innerHTML = sourceMenu.innerHTML;
      const sourceItems = Array.from(sourceMenu.querySelectorAll('.dropdown-item'));
      const popupItems = Array.from(popup.querySelectorAll('.dropdown-item'));
      popupItems.forEach((item, idx) => {
        const sourceItem = sourceItems[idx];
        if (!sourceItem) return;
        const route = sourceItem.dataset.demoRoute || sourceItem.getAttribute('href') || '';
        if (route) item.dataset.demoRoute = route;
        if (sourceItem.tagName === 'A' && route) item.setAttribute('href', route);
      });
    };

    if (dropdown.dataset.demoStandaloneHeaderBound === '1') {
      syncPopup();
      return;
    }
    dropdown.dataset.demoStandaloneHeaderBound = '1';

    let closeTimer = null;

    const setOpen = (open) => {
      dropdown.classList.toggle('dropdown-open', open);
      trigger.setAttribute('aria-expanded', open ? 'true' : 'false');
      if (open) {
        syncPopup();
        popup.removeAttribute('hidden');
        popup.classList.add('show');
        positionStandaloneHeaderPopup(popup, trigger);
      } else {
        popup.classList.remove('show');
        popup.setAttribute('hidden', 'hidden');
      }
    };

    const openMenu = () => {
      window.clearTimeout(closeTimer);
      setOpen(true);
    };

    const closeMenu = (delay = 240) => {
      window.clearTimeout(closeTimer);
      closeTimer = window.setTimeout(() => setOpen(false), delay);
    };

    dropdown.onmouseenter = () => openMenu();
    dropdown.onmouseleave = () => closeMenu(260);
    popup.onmouseenter = () => openMenu();
    popup.onmouseleave = () => closeMenu(260);
    dropdown.onfocusin = () => openMenu();
    dropdown.onfocusout = (event) => {
      if (!dropdown.contains(event.relatedTarget) && !popup.contains(event.relatedTarget)) closeMenu(260);
    };

    popup.addEventListener('click', (event) => {
      const target = event.target.closest('.dropdown-item, a[href], button');
      if (!target) return;
      const route = target.dataset.demoRoute || target.getAttribute('href');
      if (!route || route === '#') return;
      event.preventDefault();
      event.stopPropagation();
      window.location.href = route;
    });

    const reposition = () => {
      if (dropdown.classList.contains('dropdown-open')) {
        positionStandaloneHeaderPopup(popup, trigger);
      }
    };

    document.addEventListener('click', (event) => {
      if (!dropdown.contains(event.target) && !popup.contains(event.target)) setOpen(false);
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') setOpen(false);
    });

    window.addEventListener('resize', reposition);
    window.addEventListener('scroll', reposition, { passive: true });
  });
}

function repairLanguageMenus() {
  document.querySelectorAll('#dropdown-menu-language').forEach((menu) => {
    if (!menu) return;
    menu.innerHTML = `
      <li><button class="p dropdown-item" type="button" data-language-choice="it">ITALIANO • IT</button></li>
      <li><button class="p dropdown-item" type="button" data-language-choice="en">ENGLISH • EN</button></li>`;
    menu.querySelectorAll('[data-language-choice]').forEach((button) => {
      button.addEventListener('click', () => {
        if (button.dataset.languageChoice === 'it') {
          if (typeof window.italianFunction === 'function') window.italianFunction();
        } else if (typeof window.englishFunction === 'function') {
          window.englishFunction();
        }
        const dropdown = menu.closest('.dropdown');
        const trigger = dropdown?.querySelector('#en-it, .dropdown-toggle, [aria-expanded]');
        if (dropdown) dropdown.classList.remove('dropdown-open');
        if (menu) menu.classList.remove('show');
        if (trigger) trigger.setAttribute('aria-expanded', 'false');
      });
    });
  });
}

function buildSubmenuRoute(section, key) {
  const user = getCurrentUser();
  const productPage = user ? 'products.html' : 'register.html';
  const subscriptionPage = user ? 'subscription.html' : 'subscription(noLogin).html';
  const helpPage = user ? 'help.html' : 'help(noLogin).html';
  if (section === 'products') return user ? `${pathTo(productPage)}#${key}` : pathTo(productPage);
  if (section === 'subscription') return `${pathTo(subscriptionPage)}#${key}`;
  if (section === 'help') return `${pathTo(helpPage)}#help-${key}`;
  return '#';
}

function configureHeaderSubmenus() {
  const copy = getCopy();
  const config = {
    products: [
      { key: 'pc', label: copy.nav.productsDropdown[0] },
      { key: 'console', label: copy.nav.productsDropdown[1] },
      { key: 'accessories', label: copy.nav.productsDropdown[2] },
      { key: 'gift-card', label: copy.nav.productsDropdown[3] }
    ],
    subscription: [
      { key: 'free', label: copy.nav.subscriptionDropdown[0] },
      { key: 'deluxe', label: copy.nav.subscriptionDropdown[1] },
      { key: 'premium', label: copy.nav.subscriptionDropdown[2] }
    ],
    help: [
      { key: 'orders', label: copy.nav.helpDropdown[0] },
      { key: 'account', label: copy.nav.helpDropdown[1] },
      { key: 'missions', label: copy.nav.helpDropdown[2] },
      { key: 'tracking', label: copy.nav.helpDropdown[3] }
    ]
  };

  document.querySelectorAll('nav .dropdown').forEach((dropdown) => {
    const trigger = dropdown.querySelector('a.nav-link, button.nav-link, [role="button"]');
    const triggerHref = (trigger?.getAttribute('href') || '').toLowerCase();
    const triggerText = getVisibleText(trigger).toLowerCase();
    let section = '';
    if (/products/.test(triggerHref) || triggerText === 'products' || triggerText === 'prodotti') section = 'products';
    if (/subscription/.test(triggerHref) || triggerText === 'subscription' || triggerText === 'abbonamenti') section = 'subscription';
    if (/help/.test(triggerHref) || triggerText === 'help' || triggerText === 'aiuto') section = 'help';
    if (!section) return;

    const items = Array.from(dropdown.querySelectorAll('.dropdown-menu .dropdown-item'));
    config[section].forEach((entry, index) => {
      const item = items[index];
      if (!item) return;
      item.textContent = entry.label;
      item.dataset.demoRoute = buildSubmenuRoute(section, entry.key);
      if (item.tagName === 'A') item.setAttribute('href', item.dataset.demoRoute);
      if (item.dataset.demoRouteBound === '1') return;
      item.dataset.demoRouteBound = '1';
      item.addEventListener('click', (event) => {
        event.preventDefault();
        event.stopPropagation();
        window.location.href = item.dataset.demoRoute;
      });
    });
  });
}

function applyDeepLinkFromHash() {
  const file = (window.location.pathname.split('/').pop() || '').toLowerCase();
  const hash = (window.location.hash || '').replace('#', '').toLowerCase();
  if (!hash) return;

  if (file.includes('products')) {
    const map = {
      'pc': 'PC',
      'console': 'CONSOLE',
      'accessories': 'ACCESSORIES',
      'gift-card': 'GIFTCARD',
      'giftcard': 'GIFTCARD'
    };
    const key = map[hash];
    if (key && typeof window[`${key}Function`] === 'function') {
      window[`${key}Function`]();
      const title = document.querySelector('.title, h1');
      if (title) title.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  if (file.includes('subscription')) {
    const target = document.querySelector(`[data-plan="${CSS.escape(hash)}"]`);
    const card = target?.closest('.card');
    document.querySelectorAll('.card.demo-highlight-card').forEach((el) => el.classList.remove('demo-highlight-card'));
    if (card) {
      card.classList.add('demo-highlight-card');
      card.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }

  if (file.includes('help')) {
    const topic = hash.replace('help-', '');
    const event = new CustomEvent('profithub:helpjump', { detail: { topic } });
    window.dispatchEvent(event);
  }
}

function translateNavAndFooter() {
  const copy = getCopy();

  document.querySelectorAll('nav a[href], nav button').forEach((el) => {
    const href = el.getAttribute('href') || '';
    if (/products/.test(href)) el.textContent = copy.nav.products;
    if (/games/.test(href)) el.textContent = copy.nav.games;
    if (/subscription/.test(href)) el.textContent = copy.nav.subscription;
    if (/help/.test(href)) el.textContent = copy.nav.help;
  });

  configureHeaderSubmenus();

  document.querySelectorAll('footer a').forEach((link) => {
    const href = link.getAttribute('href') || '';
    const text = getVisibleText(link).toLowerCase();
    if (/help/.test(href) || text === 'help' || text === 'aiuto') link.textContent = copy.nav.help;
    if (text === 'login' || text === 'accedi') link.textContent = copy.nav.login;
    if (text === 'register' || text === 'registrati') link.textContent = copy.nav.register;
    if (text === 'account') link.textContent = copy.nav.account;
  });

  const langLabel = document.getElementById('language_p');
  if (langLabel) langLabel.textContent = getCurrentLanguage().toUpperCase();

  const langButtons = document.querySelectorAll('#dropdown-menu-language .dropdown-item, #demo-language-popup [data-language-choice]');
  if (langButtons[0]) langButtons[0].textContent = 'ITALIANO • IT';
  if (langButtons[1]) langButtons[1].textContent = 'ENGLISH • EN';
}

function translateCommonModals() {
    const copy = getCopy();

    const loginModal = document.getElementById('my-modal-login');
    if (loginModal) {
      const title = loginModal.querySelector('.modal-title');
      if (title) title.textContent = copy.loginModal.title;
      const labels = loginModal.querySelectorAll('label.form-label');
      if (labels[0]) labels[0].textContent = copy.loginModal.email;
      if (labels[1]) labels[1].textContent = copy.loginModal.password;
      const submit = loginModal.querySelector('button[type="submit"], input[type="submit"]');
      if (submit) submit.textContent = copy.loginModal.submit;
      const footerP = loginModal.querySelector('.modal-footer p');
      const footerA = loginModal.querySelector('.modal-footer a');
      if (footerP) footerP.textContent = copy.loginModal.noAccount;
      if (footerA) footerA.textContent = copy.loginModal.registerNow;
    }

    const registerModal = document.getElementById('my-modal-register');
    if (registerModal) {
      const title = registerModal.querySelector('.modal-title');
      if (title) title.textContent = copy.registerModal.title;
      const intro = registerModal.querySelector('.modal-body .text-center.mb-3');
      if (intro) intro.textContent = copy.registerModal.intro;

      const actionButtons = registerModal.querySelectorAll('.modal-body .btn');
      if (actionButtons[0]) setButtonTextPreserveIcon(actionButtons[0], copy.registerModal.google);
      if (actionButtons[1]) setButtonTextPreserveIcon(actionButtons[1], copy.registerModal.facebook);
      if (actionButtons[2]) setButtonTextPreserveIcon(actionButtons[2], copy.registerModal.linkedin);
      if (actionButtons[3]) setButtonTextPreserveIcon(actionButtons[3], copy.registerModal.playprofit);

      const agreeLabel = registerModal.querySelector('.form-check-label');
      if (agreeLabel) agreeLabel.textContent = copy.registerModal.agree;

      const feedbacks = registerModal.querySelectorAll('.valid-feedback, .invalid-feedback');
      if (feedbacks[0]) feedbacks[0].textContent = copy.registerModal.valid;
      if (feedbacks[1]) feedbacks[1].textContent = copy.registerModal.invalid;
    }
  }

  function applyChromeLanguage() {
    document.documentElement.lang = getCurrentLanguage();
    repairLanguageMenus();
    ensurePrimaryNavigationRoutes();
    setupSmoothDropdowns();
    setupStandaloneLanguagePopup();
    translateNavAndFooter();
    setupStandaloneHeaderDropdowns();
    translateCommonModals();
    upsertDemoBanner();
    ensureDemoModals();
    updateAccountPanel();
    updateAuthButtons();
    renderHeaderStats();
    renderNotificationsModal();
    renderPointsModal();
    renderHistoryModal();
    renderSubscriptionButtons();
    if (typeof window.localizeGamesPage === 'function') window.localizeGamesPage(getCurrentLanguage());
    window.dispatchEvent(new CustomEvent('profithub:languagechange', { detail: { lang: getCurrentLanguage() } }));
    window.setTimeout(applyDeepLinkFromHash, 40);
  }

  function getInputByLabelText(form, labelMatch) {
    const labels = Array.from(form.querySelectorAll('label'));
    const label = labels.find((item) => labelMatch.test(getVisibleText(item).toLowerCase()));
    if (!label) return null;
    const forId = label.getAttribute('for');
    if (forId) return form.querySelector(`#${CSS.escape(forId)}`) || document.getElementById(forId);
    return label.closest('div')?.querySelector('input, select, textarea') || null;
  }

  function getFormActionSubmitButton(form) {
    return form.querySelector('button[type="submit"], input[type="submit"]');
  }

  function isLoginForm(form) {
    const email = form.querySelector('input[type="email"]');
    const password = form.querySelector('input[type="password"]');
    const btnText = getVisibleText(getFormActionSubmitButton(form)).toLowerCase();
    return !!email && !!password && /login|accedi/.test(btnText);
  }

  function isRegisterForm(form) {
    const email = form.querySelector('input[type="email"]');
    const password = form.querySelector('input[type="password"]');
    const btnText = getVisibleText(getFormActionSubmitButton(form)).toLowerCase();
    return !!email && !!password && /register|registrati/.test(btnText);
  }

  function isPaymentForm(form) {
    const btnText = getVisibleText(getFormActionSubmitButton(form)).toLowerCase();
    return /pay now|paga ora/.test(btnText);
  }

  function getPlanPrice(plan, lang = getCurrentLanguage()) {
    const prices = {
      Free: lang === 'it' ? '0,00 €' : '0.00 €',
      Deluxe: lang === 'it' ? '3,99 € / mese' : '3.99 € / month',
      Premium: lang === 'it' ? '6,99 € / mese' : '6.99 € / month'
    };
    return prices[plan] || prices.Free;
  }

  function getPlanFromQuery() {
    const value = new URLSearchParams(window.location.search).get('plan');
    if (!value) return null;
    const normalized = value.trim().toLowerCase();
    if (normalized === 'free' || normalized === 'gratis') return 'Free';
    if (normalized === 'deluxe' || normalized === 'default' || normalized === 'predefinito') return 'Deluxe';
    if (normalized === 'premium') return 'Premium';
    return null;
  }

  function inferPlanFromPage() {
    const queryPlan = getPlanFromQuery();
    if (queryPlan) return queryPlan;
    const file = window.location.pathname.split('/').pop() || '';
    if (file === 'registerP.html') return 'Premium';
    if (file.includes('subscription')) return 'Deluxe';
    return 'Free';
  }

  function prefillCardFields(form) {
    const currentUser = getCurrentUser() || DEFAULT_ACCOUNT;
    const nameInput = getInputByLabelText(form, /nome sulla carta|name on the card/i);
    const numberInput = getInputByLabelText(form, /numero carta|number on the card/i);
    const expiryInput = getInputByLabelText(form, /scadenza|expiration/i);
    const cvvInput = getInputByLabelText(form, /cvv/i);

    if (nameInput && !nameInput.value) nameInput.value = `${currentUser.name} ${currentUser.surname}`;
    if (numberInput) {
      numberInput.setAttribute('maxlength', '16');
      numberInput.setAttribute('inputmode', 'numeric');
      if (!numberInput.value) numberInput.value = '1234567891234567';
    }
    if (expiryInput && !expiryInput.value) expiryInput.value = '2030-12-31';
    if (cvvInput) {
      cvvInput.setAttribute('inputmode', 'numeric');
      if (!cvvInput.value) cvvInput.value = '123';
    }
  }

  function handleLogin(form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const copy = getCopy();
      const email = form.querySelector('input[type="email"]')?.value.trim().toLowerCase();
      const password = form.querySelector('input[type="password"]')?.value || '';
      const account = getAccounts().find((item) => item.email.toLowerCase() === email);

      if (!account || account.password !== password) {
        showToast(copy.toasts.invalidCredentials, 'danger');
        return;
      }

      setSessionEmail(account.email);
      showToast(fillTemplate(copy.toasts.loginSuccess, { username: account.username }), 'success');
      window.location.href = resolveLoggedPathFromCurrent();
    });
  }

  function readRegisterPayload(form) {
    const email = form.querySelector('input[type="email"]')?.value.trim() || '';
    const password = form.querySelector('input[type="password"]')?.value || '';
    const name = getInputByLabelText(form, /(^| )nome$|^name$/i)?.value?.trim() || 'New';
    const surname = getInputByLabelText(form, /cognome|surname/i)?.value?.trim() || 'User';
    const usernameInput = getInputByLabelText(form, /username|nickname/i) || form.querySelector('input[name*="username"]');
    const username = usernameInput?.value?.trim() || `${name}${surname}`.replace(/\s+/g, '').toLowerCase();
    return { email, password, name, surname, username, plan: inferPlanFromPage() };
  }

  function handleRegister(form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const copy = getCopy();
      const payload = readRegisterPayload(form);
      if (!payload.email || !payload.password) {
        showToast(copy.toasts.requiredFields, 'danger');
        return;
      }

      const accounts = getAccounts();
      if (accounts.some((account) => account.email.toLowerCase() === payload.email.toLowerCase())) {
        showToast(copy.toasts.emailExists, 'warning');
        return;
      }

      const newAccount = {
        id: `acc-${Date.now()}`,
        ...payload,
        createdAt: new Date().toISOString()
      };
      accounts.push(newAccount);
      saveAccounts(accounts);
      setSessionEmail(newAccount.email);
      pushHistory({
        kind: 'account',
        title: getCurrentLanguage() === 'it' ? 'Account creato' : 'Account created',
        price: '',
        date: new Date().toISOString(),
        account: newAccount.email
      });

      if (newAccount.plan !== 'Free') {
        saveOrder({
          type: 'subscription',
          plan: newAccount.plan,
          title: `${newAccount.plan} subscription`,
          price: getPlanPrice(newAccount.plan),
          date: new Date().toISOString(),
          account: newAccount.email
        });
      } else {
        clearOrder();
      }

      showToast(fillTemplate(copy.toasts.accountCreated, { username: newAccount.username }), 'success');
      window.location.href = newAccount.plan === 'Free' ? pathTo('home.html') : pathTo('payment.html');
    });
  }

  function readOrder() {
    return readJson(STORAGE_KEYS.order, null);
  }

  function saveOrder(order) {
    writeJson(STORAGE_KEYS.order, order);
  }

  function getProductCardData(button) {
    const card = button.closest('.card');
    if (!card) return null;
    const title = getVisibleText(card.querySelector('.card-title')) || 'Selected item';
    const price = getVisibleText(card.querySelector('.text-muted')) || 'Demo item';
    const image = card.querySelector('img')?.getAttribute('src') || '';
    return { type: 'product', title, price, image, date: new Date().toISOString() };
  }

  function wireProductButtons() {
    document.querySelectorAll('.card .btn').forEach((button) => {
      if (button.dataset.demoBound === '1') return;
      const text = getVisibleText(button).toLowerCase();
      if (!/acquista|buy/.test(text)) return;
      button.dataset.demoBound = '1';
      button.addEventListener('click', (event) => {
        event.preventDefault();
        const order = getProductCardData(button);
        if (order) saveOrder(order);
        window.location.href = getCurrentUser() ? pathTo('payment.html') : pathTo('payment(noLogin).html');
      });
    });
  }

  function getSubscriptionOffer(button) {
    const datasetPlan = button.getAttribute('data-plan');
    const card = button.closest('.card');
    const titleText = datasetPlan || getVisibleText(card?.querySelector('h5'));
    const normalized = String(titleText).trim().toLowerCase();

    if (/free|gratuito|gratis/.test(normalized)) {
      return { plan: 'Free', price: getPlanPrice('Free'), type: 'subscription' };
    }
    if (/deluxe|default|predefinito/.test(normalized)) {
      return { plan: 'Deluxe', price: getPlanPrice('Deluxe'), type: 'subscription' };
    }
    if (/premium/.test(normalized)) {
      return { plan: 'Premium', price: getPlanPrice('Premium'), type: 'subscription' };
    }
    return null;
  }

  function renderSubscriptionButtons() {
    const file = window.location.pathname.split('/').pop() || '';
    if (!file.includes('subscription')) return;
    const copy = getCopy();
    const user = getCurrentUser();

    document.querySelectorAll('.neon-button[data-offer-type="subscription"], .neon-button').forEach((button) => {
      const offer = getSubscriptionOffer(button);
      if (!offer) return;
      if (user && user.plan === offer.plan) {
        button.textContent = copy.subscriptionCtas.currentPlan;
      } else if (offer.plan === 'Free') {
        button.textContent = user ? copy.subscriptionCtas.freeUser : copy.subscriptionCtas.freeGuest;
      } else {
        button.textContent = user ? copy.subscriptionCtas.paidUser : copy.subscriptionCtas.paidGuest;
      }
    });
  }

  function wireSubscriptionButtons() {
    const file = window.location.pathname.split('/').pop() || '';
    if (!file.includes('subscription')) return;

    document.querySelectorAll('.neon-button[data-offer-type="subscription"], .neon-button').forEach((button) => {
      const offer = getSubscriptionOffer(button);
      if (!offer || button.dataset.subscriptionBound === '1') return;
      button.dataset.subscriptionBound = '1';

      button.addEventListener('click', (event) => {
        event.preventDefault();
        const user = getCurrentUser();
        const copy = getCopy();

        if (user && user.plan === offer.plan) {
          return;
        }

        if (user) {
          if (offer.plan === 'Free') {
            updateCurrentUserPlan('Free');
            clearOrder();
            pushHistory({
              kind: 'subscription',
              title: copy.nav.subscriptionDropdown[0],
              price: getPlanPrice('Free'),
              plan: 'Free',
              date: new Date().toISOString(),
              account: user.email
            });
            showToast(fillTemplate(copy.toasts.freePlanEnabled, { username: user.username }), 'success');
            updateAccountPanel();
            renderHeaderStats();
            renderSubscriptionButtons();
            return;
          }

          saveOrder({
            type: 'subscription',
            plan: offer.plan,
            title: `${offer.plan} subscription`,
            price: offer.price,
            date: new Date().toISOString(),
            account: user.email
          });
          showToast(fillTemplate(copy.toasts.paidPlanReady, { plan: offer.plan }), 'success');
          window.location.href = pathTo('payment.html');
          return;
        }

        clearOrder();
        if (offer.plan === 'Free') {
          window.location.href = 'register.html?plan=free';
        } else {
          window.location.href = `registerP.html?plan=${offer.plan.toLowerCase()}`;
        }
      });
    });
  }

  function enhancePaymentForm() {
    document.querySelectorAll('form').forEach((form) => prefillCardFields(form));
    const forms = Array.from(document.querySelectorAll('form')).filter(isPaymentForm);
    forms.forEach((form) => {
      if (form.dataset.demoBound === '1') return;
      form.dataset.demoBound = '1';

      const numberInput = getInputByLabelText(form, /numero carta|number on the card/i);

      form.addEventListener('submit', (event) => {
        event.preventDefault();
        const copy = getCopy();
        const currentUser = getCurrentUser() || DEFAULT_ACCOUNT;
        const order = readOrder() || {
          type: 'checkout',
          title: 'Demo checkout',
          price: copy.orderSummary.fallback,
          date: new Date().toISOString()
        };

        order.card = numberInput?.value || '1234567891234567';
        order.account = currentUser.email;
        order.date = new Date().toISOString();

        if (order.type === 'subscription' && order.plan && getCurrentUser()) {
          updateCurrentUserPlan(order.plan);
        }

        saveOrder(order);
        pushHistory({
          kind: order.type || 'checkout',
          title: order.title,
          price: order.price,
          plan: order.plan || '',
          date: order.date,
          account: currentUser.email
        });
        showToast(copy.toasts.paymentCompleted, 'success');
        renderHeaderStats();
        window.location.href = 'successful.html';
      });
    });
  }

  function renderOrderSummary() {
    const order = readOrder();
    if (!order) return;

    const roots = [
      document.getElementById('primo-div'),
      document.getElementById('secondo-div-en') || document.getElementById('secondo-div')
    ].filter((root, index, array) => root && array.indexOf(root) === index);

    roots.forEach((root) => {
      const lang = root.id === 'primo-div' ? 'it' : 'en';
      const copy = getCopy(lang);
      const existing = root.querySelector('.demo-order-summary');
      if (existing) existing.remove();

      const anchor = Array.from(root.querySelectorAll('h1, h2')).find((el) => /pagamento|payment|completed|completato/i.test(getVisibleText(el)));
      if (!anchor) return;

      const wrapper = document.createElement('section');
      wrapper.className = 'demo-order-summary';

      const imageHtml = order.image ? `<img src="${order.image}" alt="${order.title}" class="demo-order-image">` : '';
      const maskedCard = order.card
        ? `${String(order.card).slice(0, 4)} •••• •••• ${String(order.card).slice(-4)}`
        : '1234 •••• •••• 4567';

      wrapper.innerHTML = `
        <div class="demo-order-shell">
          <div class="demo-order-copy">
            <span class="demo-pill">${copy.orderSummary.pill}</span>
            <h3>${order.title}</h3>
            <p>${order.price || copy.orderSummary.fallback}.</p>
            <div class="demo-order-meta">
              <div><strong>${copy.orderSummary.cardLabel}:</strong> ${maskedCard}</div>
              <div><strong>${copy.orderSummary.statusLabel}:</strong> ${copy.orderSummary.status}</div>
            </div>
          </div>
          ${imageHtml}
        </div>`;

      anchor.insertAdjacentElement('afterend', wrapper);
    });
  }

  function improveHomeCopy() {
    document.querySelectorAll('.demo-hero-copy').forEach((el) => el.remove());
  }

  function normalizeImages() {
    document.querySelectorAll('img').forEach((img, index) => {
      if (!img.hasAttribute('loading')) img.setAttribute('loading', index < 4 ? 'eager' : 'lazy');
      if (!img.hasAttribute('decoding')) img.setAttribute('decoding', 'async');
      img.setAttribute('referrerpolicy', 'no-referrer');
    });
  }

  function wireForms() {
    document.querySelectorAll('form').forEach((form) => {
      if (isPaymentForm(form)) return;
      if (isLoginForm(form)) {
        handleLogin(form);
        return;
      }
      if (isRegisterForm(form)) handleRegister(form);
    });
  }

  function wrapLanguageSwitchers() {
    const originalItalian = window.italianFunction;
    const originalEnglish = window.englishFunction;

    window.italianFunction = function () {
      if (typeof originalItalian === 'function') originalItalian();
      else localStorage.setItem('language', 'd-block');
      applyChromeLanguage();
    };

    window.englishFunction = function () {
      if (typeof originalEnglish === 'function') originalEnglish();
      else localStorage.setItem('language', 'd-none');
      applyChromeLanguage();
    };
  }

  function init() {
    ensureState();
    if (enforceProtectedRoutes()) return;
    normalizeImages();
    improveHomeCopy();
    wireForms();
    wireProductButtons();
    wireSubscriptionButtons();
    enhancePaymentForm();
    wrapLanguageSwitchers();
    patchNoLoginNavigation();
    ensureDemoModals();
    applyChromeLanguage();
    renderOrderSummary();
    applyDeepLinkFromHash();
    window.addEventListener('hashchange', applyDeepLinkFromHash);
    window.addEventListener('resize', syncHeaderBannerOffsets, { passive: true });
    window.addEventListener('scroll', syncHeaderBannerOffsets, { passive: true });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
