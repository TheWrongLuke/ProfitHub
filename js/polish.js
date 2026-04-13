
(function(){
  function ready(fn){
    if(document.readyState === 'loading'){
      document.addEventListener('DOMContentLoaded', fn);
    }else{
      fn();
    }
  }
  function navigateWithHrefButtons(){
    document.querySelectorAll('button[href]').forEach((button) => {
      if (button.dataset.hrefBound === '1') return;
      button.dataset.hrefBound = '1';
      if (!button.getAttribute('type') || button.getAttribute('type') === 'submit') {
        button.setAttribute('type', 'button');
      }
      button.addEventListener('click', () => {
        const href = button.getAttribute('href');
        if (href) window.location.href = href;
      });
    });
  }
  function setCurrentYear(){
    document.querySelectorAll('[data-current-year]').forEach((el) => {
      el.textContent = new Date().getFullYear() + ' © PlayProfit';
    });
  }
  ready(() => {
    navigateWithHrefButtons();
    setCurrentYear();
  });
  window.ProfitHubPolish = { navigateWithHrefButtons };
})();
