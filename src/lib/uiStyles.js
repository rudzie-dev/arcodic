// Shared minimal stylesheet for the SOW tool (admin + client-facing pages).
// Deliberately separate from Home.jsx's marketing CSS so neither bleeds into
// the other; both draw from the same brand tokens.
export const UI_CSS = `
  .sow-ui, .sow-ui * { box-sizing: border-box; }
  .sow-ui {
    --ink: #121009;
    --paper: #F1EDE6;
    --dim: #878075;
    --line: rgba(18,16,9,.12);
    --red: #D63408;
    font-family: 'Syne', system-ui, sans-serif;
    background: var(--paper);
    color: var(--ink);
    min-height: 100vh;
  }
  .sow-shell { max-width: 880px; margin: 0 auto; padding: 40px 24px 100px; }
  .sow-narrow { max-width: 480px; margin: 0 auto; padding: 60px 24px; }
  .sow-h1 { font-size: clamp(28px, 4vw, 40px); font-weight: 700; letter-spacing: -0.02em; margin-bottom: 8px; }
  .sow-sub { color: var(--dim); font-size: 15px; margin-bottom: 32px; }
  .sow-card {
    background: #fff;
    border: 1px solid var(--line);
    border-radius: 14px;
    padding: 28px;
    margin-bottom: 20px;
  }
  .sow-field { margin-bottom: 18px; }
  .sow-field label { display: block; font-size: 13px; font-weight: 600; margin-bottom: 6px; }
  .sow-field .hint { color: var(--dim); font-size: 12px; margin-top: 4px; }
  .sow-ui input[type=text],
  .sow-ui input[type=email],
  .sow-ui input[type=password],
  .sow-ui textarea {
    width: 100%;
    padding: 11px 13px;
    border: 1.5px solid var(--line);
    border-radius: 8px;
    font-family: inherit;
    font-size: 14px;
    background: #fff;
    color: var(--ink);
  }
  .sow-ui input:focus, .sow-ui textarea:focus { outline: none; border-color: var(--red); }
  .sow-ui textarea { resize: vertical; min-height: 90px; line-height: 1.5; }
  .sow-row { display: flex; gap: 14px; flex-wrap: wrap; }
  .sow-row > * { flex: 1; min-width: 200px; }
  .sow-btn {
    display: inline-flex; align-items: center; justify-content: center;
    gap: 8px;
    background: var(--ink); color: var(--paper);
    border: none; border-radius: 999px;
    padding: 12px 24px; font-size: 14px; font-weight: 600;
    cursor: pointer; font-family: inherit;
    transition: opacity .15s ease;
  }
  .sow-btn:hover { opacity: .85; }
  .sow-btn:disabled { opacity: .4; cursor: not-allowed; }
  .sow-btn-ghost {
    background: transparent; color: var(--ink);
    border: 1.5px solid var(--line);
  }
  .sow-btn-red { background: var(--red); color: #fff; }
  .sow-badge {
    display: inline-block; font-size: 11px; font-weight: 700;
    text-transform: uppercase; letter-spacing: .04em;
    padding: 4px 10px; border-radius: 999px;
  }
  .sow-badge.draft   { background: rgba(18,16,9,.08); color: var(--dim); }
  .sow-badge.sent    { background: rgba(18,16,9,.08); color: var(--ink); }
  .sow-badge.viewed  { background: #FFF1D6; color: #8a5a00; }
  .sow-badge.signed  { background: #DFF3E3; color: #1c6b34; }
  .sow-badge.void    { background: #F5D6D0; color: var(--red); }
  .sow-error { color: var(--red); font-size: 13px; margin-top: 8px; }
  .sow-list-item {
    display: flex; align-items: center; justify-content: space-between;
    padding: 16px 4px; border-bottom: 1px solid var(--line); gap: 12px; flex-wrap: wrap;
  }
  .sow-list-item:last-child { border-bottom: none; }
  .sow-nav {
    display: flex; align-items: center; justify-content: space-between;
    padding: 20px 24px; border-bottom: 1px solid var(--line);
  }
  .sow-nav a { color: var(--ink); text-decoration: none; font-weight: 700; }
  .sow-link-box {
    display: flex; align-items: center; gap: 8px; background: rgba(18,16,9,.04);
    border-radius: 8px; padding: 8px 12px; font-size: 13px; overflow: auto;
  }
  .sow-deliverable-row { display: flex; gap: 8px; margin-bottom: 8px; }
  .sow-remove { background: none; border: none; color: var(--dim); cursor: pointer; font-size: 18px; line-height: 1; }
  .sow-doc-block { padding: 18px 0; border-bottom: 1px solid var(--line); }
  .sow-doc-block:last-child { border-bottom: none; }
  .sow-doc-block h3 { font-size: 13px; text-transform: uppercase; letter-spacing: .05em; color: var(--dim); margin-bottom: 8px; }
  .sow-doc-block p, .sow-doc-block li { font-size: 15px; line-height: 1.6; }
  .sow-checkbox-row { display: flex; align-items: flex-start; gap: 10px; margin: 20px 0; }
  .sow-checkbox-row input { margin-top: 3px; width: 16px; height: 16px; }
`;
