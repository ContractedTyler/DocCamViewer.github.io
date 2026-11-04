(() => {
  'use strict';
  const button = document.getElementById('freeze');
  if (!button) return;

  function renderFreezeLabel() {
    const frozen = button.getAttribute('aria-pressed') === 'true';
    const icon = document.createElement('span');
    icon.className = 'freeze-icon';
    icon.setAttribute('aria-hidden', 'true');
    icon.textContent = '❄';

    const label = document.createElement('span');
    label.className = 'optional-label';
    label.textContent = frozen ? ' Resume' : ' Freeze';

    button.replaceChildren(icon, label);
    button.title = frozen ? 'Resume live camera' : 'Freeze frame';
  }

  renderFreezeLabel();
  new MutationObserver(renderFreezeLabel).observe(button, {
    attributes: true,
    attributeFilter: ['aria-pressed']
  });
})();
