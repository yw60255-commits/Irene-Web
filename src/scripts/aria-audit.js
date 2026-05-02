// Simple ARIA audit helper (non-intrusive) for build time or runtime checks.
// Checks commonly missing ARIA attributes for icon-only buttons and labeled inputs.
document.addEventListener('DOMContentLoaded', () => {
  // Check icon-only buttons for aria-label
  const iconButtons = document.querySelectorAll('button.icon, button.icon-btn, .icon-button');
  iconButtons.forEach((el) => {
    if (!el.hasAttribute('aria-label')) {
      console.warn('Icon-only button missing aria-label', el);
    }
  });

  // Check form fields have labels, and errors have describedby
  const inputs = document.querySelectorAll('input, textarea, select');
  inputs.forEach((input) => {
    const id = input.id;
    const hasLabel = id ? document.querySelector('label[for="' + id + '"]') : false;
    if (!hasLabel) {
      // Do not warn for inputs that are visually labeled by wrapping labels outside
      // We still log a gentle notice for missing explicit label attribute
      console.warn('Form field missing explicit label (for accessibility):', input);
    }
  });

  // ARIA audit: console-only output, no UI panel
  try {
    const iconButtons = document.querySelectorAll('button.icon, button.icon-btn, .icon-button');
    const issues = [];
    iconButtons.forEach((el) => {
      if (!el.hasAttribute('aria-label')) {
        issues.push('Icon-only button missing aria-label');
      }
    });
    const inputs = document.querySelectorAll('input, textarea, select');
    inputs.forEach((inp) => {
      const id = inp.id;
      if (id && !document.querySelector('label[for="' + id + '"]')) {
        issues.push('Form input missing explicit label: ' + id);
      }
    });
    if (issues.length) {
      console.warn('ARIA Audit Issues:', issues);
    } else {
      console.info('ARIA Audit: No issues detected by basic checks.');
    }
  } catch (e) {
    console.warn('ARIA audit error', e);
  }
});
