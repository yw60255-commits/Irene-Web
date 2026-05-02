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

  // Simple runtime ARIA audit report (in-page panel) with copy capability
  try {
    const issues = [];
    const iconButtons = document.querySelectorAll('button.icon, button.icon-btn, .icon-button');
    iconButtons.forEach((el) => {
      if (!el.hasAttribute('aria-label')) {
        issues.push('Icon-only button missing aria-label');
      }
    });
    // Gather labeled inputs via explicit label
    inputs.forEach((inp) => {
      const id = inp.id;
      if (id) {
        const hasLabel = document.querySelector('label[for="' + id + '"]');
        if (!hasLabel) {
          // already warned in console, but also mark in report
          issues.push('Form input missing explicit label (for accessibility): ' + id);
        }
      }
      // aria-describedby for errors is harder to compute in runtime without markup; skip for now
    });
    let report = '';
    const mdHeader = '# ARIA Audit Report';
    const mdSections = issues.length
      ? issues.map((i, idx) => (idx + 1) + '. ' + i).join('\n')
      : 'No ARIA issues detected.';
    const mdReport = mdHeader + '\n\n' + (issues.length ? 'Issues:\n' + mdSections : 'No issues detected.');
    const jsonReport = JSON.stringify({ timestamp: new Date().toISOString(), issues: issues }, null, 2);
    if (issues.length) {
      report = 'ARIA Audit Issues:\n' + issues.map((i, idx) => (idx + 1) + '. ' + i).join('\n');
    } else {
      // keep a simple message for non-issues
      report = 'ARIA Audit: No issues detected by basic checks.';
    }
    let panel = document.getElementById('aria-audit-report');
    if (!panel) {
      panel = document.createElement('pre');
      panel.id = 'aria-audit-report';
      panel.style.position = 'fixed';
      panel.style.bottom = '8px';
      panel.style.right = '8px';
      panel.style.maxHeight = '40vh';
      panel.style.overflow = 'auto';
      panel.style.background = 'rgba(255,255,255,0.95)';
      panel.style.border = '1px solid rgba(0,0,0,0.1)';
      panel.style.padding = '12px';
      panel.style.fontFamily = 'monaco, monospace';
      panel.style.fontSize = '12px';
      panel.style.color = '#000';
      document.body.appendChild(panel);
    }
    panel.textContent = mdReport;

    // Add copy button for the acceptance report
    let copyBtn = document.getElementById('aria-copy-btn');
    if (!copyBtn) {
      copyBtn = document.createElement('button');
      copyBtn.id = 'aria-copy-btn';
      copyBtn.textContent = '复制 ARIA 报告';
      copyBtn.style.position = 'fixed';
      copyBtn.style.bottom = '8px';
      copyBtn.style.right = '8px';
      copyBtn.style.marginRight = '8px';
      copyBtn.addEventListener('click', () => {
        const toCopy = mdReport + '\n\nJSON:\n' + jsonReport;
        if (navigator.clipboard && window.isSecureContext) {
          navigator.clipboard.writeText(toCopy).catch(console.error);
        } else {
          // Fallback for insecure contexts
          const ta = document.createElement('textarea');
          ta.value = toCopy;
          document.body.appendChild(ta);
          ta.focus();
          ta.select();
          try { document.execCommand('copy'); } catch(e) { console.error(e); }
          document.body.removeChild(ta);
        }
      });
      document.body.appendChild(copyBtn);
    }
  } catch (e) {
    console.warn('ARIA audit panel failed to render', e);
  }
});
