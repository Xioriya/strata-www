const tabs = Array.from(document.querySelectorAll('[role="tab"]'));
const panels = Array.from(document.querySelectorAll('[role="tabpanel"]'));

function activate(id, moveFocus) {
  const tab = tabs.find((item) => item.dataset.tab === id) || tabs[0];
  tabs.forEach((item) => {
    const selected = item === tab;
    item.setAttribute('aria-selected', String(selected));
    item.tabIndex = selected ? 0 : -1;
  });
  panels.forEach((panel) => {
    panel.hidden = panel.id !== `panel-${tab.dataset.tab}`;
  });
  if (moveFocus) tab.focus();
  if (location.hash.slice(1) !== tab.dataset.tab) {
    history.replaceState(null, '', `#${tab.dataset.tab}`);
  }
  window.scrollTo({ top: 0, behavior: 'auto' });
}

tabs.forEach((tab) => {
  tab.addEventListener('click', () => activate(tab.dataset.tab, false));
  tab.addEventListener('keydown', (event) => {
    const index = tabs.indexOf(tab);
    let next = null;
    if (event.key === 'ArrowRight') next = tabs[(index + 1) % tabs.length];
    if (event.key === 'ArrowLeft') next = tabs[(index - 1 + tabs.length) % tabs.length];
    if (event.key === 'Home') next = tabs[0];
    if (event.key === 'End') next = tabs[tabs.length - 1];
    if (next) {
      event.preventDefault();
      activate(next.dataset.tab, true);
    }
  });
});

window.addEventListener('hashchange', () => {
  activate(location.hash.slice(1) || 'home', false);
});

activate(location.hash.slice(1) || 'home', false);
