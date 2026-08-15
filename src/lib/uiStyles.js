// Shared stylesheet for the SOW tool (admin + client-facing pages).
// Pulls the same tokens, fonts, and component language as the marketing
// site (src/pages/Home.jsx) so the tool doesn't feel like a bolted-on
// third-party app.
export const UI_CSS = `
  @font-face {
    font-family: 'Godber';
    src: url('/fonts/godber.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
    font-display: block;
  }

  .sow-ui, .sow-ui *, .sow-ui *::before, .sow-ui *::after { box-sizing: border-box; }
  .sow-ui {
    --ink:    #121009;
    --paper:  #F1EDE6;
    --dim:    #878075;
    --line:   rgba(18,16,9,.07);
    --red:    #D63408;
    --ui:     -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
    --logo:   'Godber', sans-serif;
    --ease-spring: cubic-bezier(.34,1.2,.64,1);
    --ease-out:    cubic-bezier(.22,1,.36,1);

    font-family: var(--ui);
    background: var(--paper);
    color: var(--ink);
    min-height: 100vh;
    -webkit-font-smoothing: antialiased;
  }

  .sow-shell { max-width: 900px; margin: 0 auto; padding: 48px 32px 120px; }
  .sow-narrow { max-width: 460px; margin: 0 auto; padding: 72px 32px; }

  .sow-kicker {
    font-size: 11px; font-weight: 600; letter-spacing: .2em;
    text-transform: uppercase; color: var(--dim); margin-bottom: 14px;
  }
  .sow-h1 {
    font-size: clamp(30px, 4vw, 42px); font-weight: 500;
    letter-spacing: -.02em; line-height: 1.1; margin-bottom: 10px;
  }
  .sow-sub { color: var(--dim); font-size: 15px; line-height: 1.6; margin-bottom: 36px; }

  .sow-card {
    background: #fff;
    border: 1px solid var(--line);
    border-radius: 16px;
    padding: 32px;
    margin-bottom: 20px;
  }

  .sow-section-label {
    font-size: 11px; font-weight: 600; letter-spacing: .14em;
    text-transform: uppercase; color: var(--dim); margin-bottom: 18px;
  }

  .sow-field { margin-bottom: 20px; }
  .sow-field label { display: block; font-size: 13px; font-weight: 600; margin-bottom: 7px; }
  .sow-field .hint { color: var(--dim); font-size: 12px; margin-top: 5px; }

  .sow-ui input[type=text],
  .sow-ui input[type=email],
  .sow-ui input[type=password],
  .sow-ui textarea {
    width: 100%;
    padding: 12px 14px;
    border: 1.5px solid var(--line);
    border-radius: 8px;
    font-family: var(--ui);
    font-size: 14px;
    background: #fff;
    color: var(--ink);
    transition: border-color .18s ease;
  }
  .sow-ui input:focus, .sow-ui textarea:focus { outline: none; border-color: var(--red); }
  .sow-ui textarea { resize: vertical; min-height: 96px; line-height: 1.55; }

  .sow-row { display: flex; gap: 16px; flex-wrap: wrap; }
  .sow-row > * { flex: 1; min-width: 200px; }

  /* ─── BUTTONS — mirrors .btn / .btn-dark / .btn-white / .btn-ghost ── */
  .sow-btn {
    display: inline-flex; align-items: center; justify-content: center;
    gap: 8px;
    font-family: var(--ui); font-size: 14px; font-weight: 600;
    letter-spacing: -.005em;
    padding: 13px 26px; border-radius: 999px;
    border: none; cursor: pointer;
    background: var(--ink); color: var(--paper);
    transition: background .22s ease, color .22s ease, transform .22s var(--ease-spring);
  }
  .sow-btn:hover:not(:disabled)  { background: var(--red); color: #fff; transform: translateY(-2px); }
  .sow-btn:active:not(:disabled) { transform: scale(.96) translateY(0); transition-duration: .1s; }
  .sow-btn:disabled { opacity: .4; cursor: not-allowed; }

  .sow-btn-ghost {
    background: rgba(18,16,9,.05); color: var(--ink);
    border: 1.5px solid var(--line);
  }
  .sow-btn-ghost:hover:not(:disabled) { background: rgba(18,16,9,.09); color: var(--ink); transform: none; }

  .sow-btn-red { background: var(--red); color: #fff; }
  .sow-btn-red:hover:not(:disabled) { background: var(--ink); color: var(--paper); }

  /* ─── BADGES — same uppercase/letter-spaced language as kickers ── */
  .sow-badge {
    display: inline-block; font-size: 10px; font-weight: 700;
    text-transform: uppercase; letter-spacing: .12em;
    padding: 5px 11px; border-radius: 999px;
  }
  .sow-badge.draft   { background: rgba(18,16,9,.07); color: var(--dim); }
  .sow-badge.sent    { background: rgba(18,16,9,.07); color: var(--ink); }
  .sow-badge.viewed  { background: #FFF1D6; color: #8a5a00; }
  .sow-badge.signed  { background: #DFF3E3; color: #1c6b34; }
  .sow-badge.void    { background: #F5D6D0; color: var(--red); }

  .sow-error { color: var(--red); font-size: 13px; margin-top: 10px; }

  .sow-list-item {
    display: flex; align-items: center; justify-content: space-between;
    padding: 20px 4px; border-top: 1px solid var(--line); gap: 14px; flex-wrap: wrap;
  }
  .sow-list-item:first-child { border-top: none; }

  /* ─── NAV — dark ink bar, Godber wordmark, dock-style link treatment ── */
  .sow-nav {
    display: flex; align-items: center; justify-content: space-between;
    padding: 18px 32px;
    background: var(--ink);
  }
  .sow-nav-logo {
    font-family: var(--logo); font-size: 18px; color: #fff;
    text-decoration: none; line-height: 1;
  }
  .sow-nav-links { display: flex; align-items: center; gap: 4px; }
  .sow-nav a.sow-nav-link {
    font-family: var(--ui); font-size: 13px; font-weight: 500;
    color: rgba(255,255,255,.55); text-decoration: none;
    padding: 8px 12px; border-radius: 999px;
    transition: color .2s ease, background .2s ease;
  }
  .sow-nav a.sow-nav-link:hover { color: #fff; background: rgba(255,255,255,.08); }
  .sow-nav-cta {
    font-family: var(--ui); font-size: 13px; font-weight: 600;
    color: var(--ink); background: #fff;
    border-radius: 999px; padding: 10px 20px;
    text-decoration: none; border: none; cursor: pointer;
    transition: background .22s ease, color .22s ease, transform .15s ease;
  }
  .sow-nav-cta:hover  { background: var(--red); color: #fff; transform: translateY(-1px); }
  .sow-nav-ghost {
    font-family: var(--ui); font-size: 13px; font-weight: 600;
    color: rgba(255,255,255,.55); background: transparent;
    border: 1.5px solid rgba(255,255,255,.16); border-radius: 999px;
    padding: 9px 18px; cursor: pointer;
    transition: color .2s ease, border-color .2s ease;
  }
  .sow-nav-ghost:hover { color: #fff; border-color: rgba(255,255,255,.4); }

  .sow-link-box {
    display: flex; align-items: center; gap: 8px;
    background: rgba(18,16,9,.04); border: 1px solid var(--line);
    border-radius: 8px; padding: 10px 14px; font-size: 13px; overflow: auto;
  }

  .sow-deliverable-row { display: flex; gap: 8px; margin-bottom: 10px; }
  .sow-remove { background: none; border: none; color: var(--dim); cursor: pointer; font-size: 20px; line-height: 1; }
  .sow-remove:hover { color: var(--red); }

  .sow-doc-block { padding: 22px 0; border-top: 1px solid var(--line); }
  .sow-doc-block:first-child { border-top: none; padding-top: 0; }
  .sow-doc-block h3 {
    font-size: 11px; text-transform: uppercase; letter-spacing: .14em;
    font-weight: 600; color: var(--dim); margin-bottom: 10px;
  }
  .sow-doc-block p, .sow-doc-block li { font-size: 15px; line-height: 1.68; color: var(--ink); }

  .sow-checkbox-row { display: flex; align-items: flex-start; gap: 10px; margin: 22px 0; }
  .sow-checkbox-row input { margin-top: 3px; width: 16px; height: 16px; accent-color: var(--red); }
`;
