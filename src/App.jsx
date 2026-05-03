/**
 * ARcodic — Main Site
 * Stack: React 19 + Vite
 * Fonts: Godber (embedded), Fraunces, Syne (Google Fonts)
 * Author: ARcodic Studio
 */

import { useState, useEffect } from "react";

// ─── Godber font embedded as base64 to avoid external font request
// Godber loaded from /public/fonts/godber.ttf


// ─── All CSS lives here — kept in one file intentionally for this
//     single-component site. Sections are clearly labelled.
const CSS = `
  /* Fonts loaded via <link> in index.html for non-blocking render */
  @font-face {
    font-family: 'Godber';
    src: url('/fonts/godber.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  /* ─── RESET ─────────────────────────────── */
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  /* ─── TOKENS ─────────────────────────────── */
  /*
    Dark base by default — site is primarily dark.
    Light mode inverts surface colours only.
    Accent red stays consistent across both modes.
  */
  :root {
    --ink:    #121009;
    --paper:  #F1EDE6;
    --dim:    #878075;
    --line:   rgba(18,16,9,.07);
    --red:    #D63408;
    --serif:  'Fraunces', Georgia, serif;
    --ui:     'Syne', sans-serif;
    --logo:   'Godber', sans-serif;
    --ease-spring: cubic-bezier(.34,1.2,.64,1);
    --ease-out:    cubic-bezier(.22,1,.36,1);

    /* dark mode scrollbar tint (default) */
    --scrollbar-thumb: rgba(241,237,230,.14);
    --scrollbar-thumb-hover: rgba(241,237,230,.32);
  }

  /*
    ─── LIGHT MODE ──────────────────────────────
    Strategy: sections that are dark (#121009) stay
    dark — they're intentional design moments.
    Only the paper sections and dock adapt.
    All hardcoded rgba values are explicitly
    overridden here to guarantee contrast.
  */
  @media (prefers-color-scheme: light) {

    /* scrollbar — dark thumb on light track */
    ::-webkit-scrollbar-thumb {
      background: rgba(18,16,9,.18);
    }
    ::-webkit-scrollbar-thumb:hover {
      background: rgba(18,16,9,.38);
    }
    * { scrollbar-color: rgba(18,16,9,.18) transparent; }

    /* ── dock: light glass pill ── */
    .dock {
      background: rgba(241,237,230,.75);
      border-color: rgba(18,16,9,.12);
      box-shadow: 0 4px 24px rgba(18,16,9,.1), inset 0 1px 0 rgba(255,255,255,.7);
    }
    .dock-spin {
      border-color: rgba(18,16,9,.15);
      border-top-color: #121009;
    }
    .dock-logo { color: #121009; }
    .dock-sep  { background: rgba(18,16,9,.12); }
    .dock-a    { color: rgba(18,16,9,.5); }
    .dock-a:hover { color: #121009; }
    .dock-a::after { background: rgba(18,16,9,.6); }
    .dock-cta  { background: #121009; color: #F1EDE6; }
    .dock-cta:hover { background: var(--red); color: #fff; }

    /* ── statement (paper section) ── */
    /* bg is already #F1EDE6 — just ensure text contrast */
    .statement-h     { color: #121009; }
    .statement-h em  { color: #6B6460; }
    .statement-note  { color: #6B6460; }

    /* ── sprint (paper section) ── */
    .sprint-num      { color: #121009; }
    .sprint-label    { color: #6B6460; }
    .sprint-h        { color: #121009; }
    .sprint-body     { color: #6B6460; }
    /* sprint btn on light bg */
    .sprint-right .btn-dark {
      background: #121009;
      color: #F1EDE6;
    }
    .sprint-right .btn-dark:hover {
      background: var(--red);
      color: #fff;
    }

    /* ── cta (paper section) ── */
    /* cta-section is dark ink — stays dark, no change needed */

    /* ── footer links (dark section) — no change needed ── */
  }

  html { scroll-behavior: smooth; }

  body {
    background: var(--ink);
    color: var(--paper);
    font-family: var(--ui);
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }

  /* ─── SCROLLBAR ─────────────────────────── */
  ::-webkit-scrollbar { width: 4px; }
  ::-webkit-scrollbar-track { background: transparent; }
  ::-webkit-scrollbar-button { display: none; height: 0; }
  ::-webkit-scrollbar-thumb {
    background: rgba(241,237,230,.14);
    border-radius: 999px;
    border: 1px solid transparent;
    background-clip: padding-box;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: rgba(241,237,230,.32);
    background-clip: padding-box;
  }
  * { scrollbar-width: thin; scrollbar-color: rgba(241,237,230,.14) transparent; }

  /* ─── SCROLL PROGRESS BAR ───────────────── */
  .progress {
    position: fixed; top: 0; left: 0;
    height: 2px;
    background: var(--red);
    z-index: 500;
    transition: width .08s linear;
    will-change: width;
  }

  /* ─── DOCK ──────────────────────────────── */
  /*
    Starts as a 52×52 circle with a spinner.
    Width transitions to open state — border-radius
    stays 999px throughout so it morphs as a pill.
    Content fades in after the pill has formed.
  */
  .dock-shell {
    position: fixed;
    bottom: 28px; left: 50%;
    transform: translateX(-50%);
    z-index: 400;
  }

  .dock {
    height: 52px; width: 52px;
    border-radius: 999px;
    background: rgba(18,16,9,.68);
    backdrop-filter: blur(32px) saturate(1.9);
    -webkit-backdrop-filter: blur(32px) saturate(1.9);
    border: 1px solid rgba(255,255,255,.11);
    box-shadow: 0 4px 32px rgba(0,0,0,.38), inset 0 1px 0 rgba(255,255,255,.07);
    display: flex; align-items: center; justify-content: center;
    overflow: hidden;
    transition: width .9s cubic-bezier(.76,0,.18,1);
    will-change: width;
  }

  .dock.open   { width: 468px; }
  .dock.breathe { animation: dockBreathe .6s var(--ease-spring) forwards; }

  .dock-spin {
    width: 18px; height: 18px;
    border: 1.5px solid rgba(255,255,255,.14);
    border-top-color: rgba(255,255,255,.78);
    border-radius: 50%;
    animation: spin .8s linear infinite;
    flex-shrink: 0;
    transition: opacity .15s ease, width .15s ease;
  }
  .dock.open .dock-spin { opacity: 0; width: 0; }

  .dock-row {
    display: flex; align-items: center;
    padding: 0 7px;
    opacity: 0; white-space: nowrap; pointer-events: none;
    transition: opacity .3s ease .68s;
  }
  .dock.open .dock-row { opacity: 1; pointer-events: auto; }

  .dock-logo {
    font-family: var(--logo);
    font-size: 16px; color: #fff;
    padding: 0 14px 0 10px;
    line-height: 1;
  }

  .dock-sep { width: 1px; height: 18px; background: rgba(255,255,255,.1); flex-shrink: 0; }

  .dock-a {
    font-family: var(--ui); font-size: 13px; font-weight: 500;
    color: rgba(255,255,255,.48); text-decoration: none;
    padding: 0 14px; line-height: 52px;
    position: relative;
    transition: color .22s ease;
  }
  /* slide-in underline on hover */
  .dock-a::after {
    content: ''; position: absolute;
    bottom: 10px; left: 14px; right: 14px;
    height: 1px; background: rgba(255,255,255,.5);
    transform: scaleX(0); transform-origin: left;
    transition: transform .28s var(--ease-out);
  }
  .dock-a:hover { color: #fff; }
  .dock-a:hover::after { transform: scaleX(1); }

  .dock-cta {
    font-family: var(--ui); font-size: 13px; font-weight: 600;
    color: var(--ink); background: #fff;
    border-radius: 999px; padding: 9px 20px;
    text-decoration: none; margin-left: 6px; flex-shrink: 0;
    transition: background .22s ease, color .22s ease, transform .15s ease;
  }
  .dock-cta:hover  { background: var(--red); color: #fff; transform: translateY(-1px); }
  .dock-cta:active { transform: scale(.96); }

  /* ─── HERO ──────────────────────────────── */
  .hero {
    min-height: 100svh;
    display: flex; flex-direction: column; justify-content: flex-end;
    padding: 0 64px 80px;
    position: relative; overflow: hidden;
  }
  .hero::before {
    content: ''; position: absolute; inset: 0; pointer-events: none;
    background: radial-gradient(ellipse 60% 48% at 58% 28%, rgba(214,52,8,.055) 0%, transparent 65%);
  }

  .hero-kicker {
    font-family: var(--ui); font-size: 11px; font-weight: 600;
    letter-spacing: .2em; text-transform: uppercase;
    color: rgba(255,255,255,.26); margin-bottom: 28px;
    opacity: 0;
    animation: rise .6s 1.05s var(--ease-out) forwards;
  }
  .hero-wordmark {
    font-family: var(--logo);
    font-size: clamp(68px, 13.5vw, 196px);
    line-height: .9; color: #fff;
    opacity: 0;
    animation: rise 1s 1.2s var(--ease-out) forwards;
  }
  .hero-rule {
    width: 100%; height: 1px;
    background: rgba(255,255,255,.07);
    margin: 52px 0 44px;
    opacity: 0; transform-origin: left;
    animation: expandRule .7s 1.62s var(--ease-out) forwards;
  }
  .hero-foot {
    display: flex; align-items: flex-end; justify-content: space-between;
    opacity: 0;
    animation: rise .7s 1.75s var(--ease-out) forwards;
  }
  .hero-desc {
    font-family: var(--ui); font-size: 17px; font-weight: 400;
    line-height: 1.68; color: rgba(255,255,255,.4); max-width: 400px;
  }
  .hero-desc b { color: rgba(255,255,255,.8); font-weight: 600; }

  /* ─── BUTTONS ───────────────────────────── */
  .btn {
    font-family: var(--ui); font-size: 14px; font-weight: 600;
    padding: 14px 30px; border-radius: 999px;
    text-decoration: none; display: inline-block;
    letter-spacing: -.005em;
    transition: background .22s ease, color .22s ease, transform .22s var(--ease-spring);
    will-change: transform;
  }
  .btn:hover  { transform: translateY(-2px); }
  .btn:active { transform: scale(.96) translateY(0); transition-duration: .1s; }

  .btn-white       { background: #fff; color: var(--ink); }
  .btn-white:hover { background: var(--red); color: #fff; }

  .btn-ghost       { background: rgba(255,255,255,.08); color: rgba(255,255,255,.52); margin-left: 10px; }
  .btn-ghost:hover { background: rgba(255,255,255,.13); color: #fff; }

  .btn-dark        { background: var(--ink); color: var(--paper); }
  .btn-dark:hover  { background: var(--red); color: #fff; }

  /* glow pulses twice after load — draws eye to CTA once */
  .btn-glow { animation: glowPulse 2.8s var(--ease-out) 2.2s 2 forwards; }

  /* ─── STATEMENT ─────────────────────────── */
  .statement {
    background: var(--paper); color: var(--ink);
    padding: 112px 64px;
    border-bottom: 1px solid var(--line);
  }
  .statement-h {
    font-family: var(--serif);
    font-size: clamp(38px, 5.2vw, 76px);
    font-weight: 300; line-height: 1.08; letter-spacing: -.022em;
    max-width: 840px;
  }
  .statement-h em { font-style: italic; color: var(--dim); }
  .statement-foot { display: flex; justify-content: flex-end; margin-top: 52px; }
  .statement-note {
    font-family: var(--ui); font-size: 15px; font-weight: 400;
    line-height: 1.72; color: var(--dim); max-width: 340px; text-align: right;
  }

  /* ─── WORK ──────────────────────────────── */
  .work-section { background: var(--ink); padding: 96px 64px; }

  .section-kicker {
    font-family: var(--ui); font-size: 11px; font-weight: 600;
    letter-spacing: .2em; text-transform: uppercase;
    color: rgba(255,255,255,.22); margin-bottom: 52px;
  }

  /*
    translateX on hover (not padding) = GPU composited,
    zero layout shift, perfectly fluid spring feel.
  */
  .project-row {
    display: flex; align-items: center; justify-content: space-between;
    padding: 30px 0;
    border-top: 1px solid rgba(255,255,255,.055);
    text-decoration: none; color: inherit;
    transform: translateX(0);
    transition: transform .55s var(--ease-spring);
    will-change: transform;
  }
  .project-row:last-child { border-bottom: 1px solid rgba(255,255,255,.055); }
  .project-row:hover  { transform: translateX(10px); }
  .project-row:active { transform: translateX(8px) scale(.99); }

  .project-tag {
    font-family: var(--ui); font-size: 11px; font-weight: 500;
    letter-spacing: .1em; text-transform: uppercase;
    color: rgba(255,255,255,.22); width: 180px; flex-shrink: 0;
    transition: color .3s ease;
  }
  .project-row:hover .project-tag { color: rgba(255,255,255,.4); }

  .project-name {
    font-family: var(--serif);
    font-size: clamp(26px, 3.2vw, 46px);
    font-weight: 300; font-style: italic;
    color: rgba(255,255,255,.78); flex: 1; letter-spacing: -.015em;
    transition: color .3s ease;
  }
  .project-row:hover .project-name { color: #fff; }

  .project-arrow {
    color: rgba(255,255,255,.18); font-size: 18px; flex-shrink: 0;
    transition: color .3s ease, transform .55s var(--ease-spring);
  }
  .project-row:hover .project-arrow { color: var(--red); transform: translateX(5px); }

  /* ─── SPRINT ────────────────────────────── */
  .sprint-section {
    background: var(--paper); color: var(--ink);
    display: grid; grid-template-columns: 1fr 1fr;
    border-bottom: 1px solid var(--line);
  }
  .sprint-left {
    padding: 96px 64px; border-right: 1px solid var(--line);
    display: flex; flex-direction: column; justify-content: space-between; gap: 40px;
  }
  .sprint-num {
    font-family: var(--logo);
    font-size: clamp(88px, 13vw, 172px);
    line-height: .88; color: var(--ink); letter-spacing: -.01em;
  }
  .sprint-num span { color: var(--red); }
  .sprint-label { font-family: var(--ui); font-size: 14px; font-weight: 500; color: var(--dim); }
  .sprint-right { padding: 96px 64px; display: flex; flex-direction: column; justify-content: center; gap: 26px; }
  .sprint-h {
    font-family: var(--serif);
    font-size: clamp(30px, 3.8vw, 50px);
    font-weight: 300; line-height: 1.12; letter-spacing: -.02em; color: var(--ink);
  }
  .sprint-h em { font-style: italic; color: var(--dim); }
  .sprint-body { font-family: var(--ui); font-size: 16px; line-height: 1.72; color: var(--dim); max-width: 400px; }

  /* ─── CONTACT ───────────────────────────── */
  .contact-section { background: var(--ink); padding: 96px 64px; }

  .contact-grid {
    display: grid; grid-template-columns: repeat(3,1fr);
    gap: 1px; background: rgba(255,255,255,.06);
    border-radius: 20px; overflow: hidden; margin-top: 48px;
  }

  .contact-card {
    background: var(--ink); padding: 36px 40px;
    text-decoration: none; color: inherit;
    display: flex; align-items: center; justify-content: space-between;
    position: relative; overflow: hidden;
    transition: transform .2s var(--ease-spring);
  }

  /*
    Whole-card color swipe on hover.
    translateX(-101% → 0) on ::after pseudo element.
    Text sits above via z-index.
  */
  .contact-card::after {
    content: ''; position: absolute; inset: 0;
    background: var(--red);
    transform: translateX(-101%);
    transition: transform .45s cubic-bezier(.76,0,.18,1);
    z-index: 0;
  }
  .contact-card:hover::after { transform: translateX(0); }
  .contact-card:active { transform: scale(.98); }

  .contact-platform {
    font-family: var(--serif);
    font-size: clamp(20px, 2vw, 28px);
    font-weight: 300; font-style: italic;
    color: rgba(255,255,255,.75);
    position: relative; z-index: 1;
    transition: color .3s ease;
  }
  .contact-card:hover .contact-platform { color: #fff; }

  /*
    Arrow: two SVGs stacked in one wrapper, same path.
    Dim at rest → bright on hover via opacity crossfade.
    No positional change — just brightens in place.
  */
  .contact-arrow-wrap {
    position: relative; z-index: 1;
    width: 32px; height: 32px; flex-shrink: 0;
  }
  .ca-rest, .ca-hover {
    position: absolute; inset: 0;
    display: flex; align-items: center; justify-content: center;
    transition: opacity .28s ease;
  }
  .ca-rest  { opacity: 1; }
  .ca-hover { opacity: 0; }
  .contact-card:hover .ca-rest  { opacity: 0; }
  .contact-card:hover .ca-hover { opacity: 1; }

  /* ─── CTA ───────────────────────────────── */
  .cta-section {
    background: var(--ink); padding: 132px 64px;
    text-align: center; position: relative; overflow: hidden;
  }
  /* ambient red glow rising from below — signals action zone */
  .cta-section::before {
    content: ''; position: absolute;
    bottom: -120px; left: 50%; transform: translateX(-50%);
    width: 600px; height: 300px;
    background: radial-gradient(ellipse, rgba(214,52,8,.18) 0%, transparent 70%);
    pointer-events: none;
  }
  .cta-h {
    font-family: var(--serif);
    font-size: clamp(50px, 8vw, 116px);
    font-weight: 300; line-height: .95; letter-spacing: -.03em;
    color: #fff; margin-bottom: 32px; position: relative;
  }
  .cta-h em { font-style: italic; color: rgba(255,255,255,.35); }
  .cta-sub {
    font-family: var(--ui); font-size: 16px; font-weight: 400;
    color: rgba(255,255,255,.38); line-height: 1.65;
    margin-bottom: 48px; max-width: 320px;
    margin-left: auto; margin-right: auto;
    position: relative;
  }
  .cta-row { display: flex; justify-content: center; gap: 12px; position: relative; }

  /* ─── FOOTER ────────────────────────────── */
  footer {
    background: var(--ink);
    border-top: 1px solid rgba(255,255,255,.05);
    padding: 64px 64px 0;
    display: grid; grid-template-columns: 1.6fr 1fr 1fr 1fr; gap: 40px;
  }
  .f-wordmark { font-family: var(--logo); font-size: 20px; color: rgba(255,255,255,.65); margin-bottom: 14px; }
  .f-about    { font-family: var(--ui); font-size: 13px; color: rgba(255,255,255,.26); line-height: 1.65; max-width: 200px; }
  .f-h        { font-family: var(--ui); font-size: 10px; font-weight: 700; letter-spacing: .18em; text-transform: uppercase; color: rgba(255,255,255,.18); margin-bottom: 18px; }
  .f-links    { list-style: none; display: flex; flex-direction: column; gap: 11px; }
  .f-links a  {
    font-family: var(--ui); font-size: 14px; color: rgba(255,255,255,.35);
    text-decoration: none; display: inline-block; position: relative;
    transition: color .22s ease;
  }
  /* slide-in underline — mirrors dock-a behaviour */
  .f-links a::after {
    content: ''; position: absolute; bottom: -2px; left: 0;
    width: 100%; height: 1px;
    background: rgba(255,255,255,.5);
    transform: scaleX(0); transform-origin: left;
    transition: transform .28s var(--ease-out);
  }
  .f-links a:hover { color: #fff; }
  .f-links a:hover::after { transform: scaleX(1); }

  .f-base {
    background: var(--ink);
    border-top: 1px solid rgba(255,255,255,.05);
    padding: 24px 64px;
    display: flex; justify-content: space-between;
  }
  .f-copy { font-family: var(--ui); font-size: 12px; color: rgba(255,255,255,.16); }

  /* ─── SCROLL REVEAL ─────────────────────── */
  .r {
    opacity: 0; transform: translateY(16px);
    transition: opacity .72s var(--ease-out), transform .72s var(--ease-out);
    will-change: opacity, transform;
  }
  .r.on { opacity: 1; transform: translateY(0); }
  .r.d1 { transition-delay: .08s; }
  .r.d2 { transition-delay: .16s; }
  .r.d3 { transition-delay: .24s; }
  /* project rows stagger tighter */
  .project-row.r.d1 { transition-delay: .05s; }
  .project-row.r.d2 { transition-delay: .12s; }
  .project-row.r.d3 { transition-delay: .19s; }

  /* ─── KEYFRAMES ─────────────────────────── */
  @keyframes rise        { from { opacity:0; transform:translateY(22px); } to { opacity:1; transform:translateY(0); } }
  @keyframes expandRule  { from { opacity:0; transform:scaleX(0); }        to { opacity:1; transform:scaleX(1); }    }
  @keyframes spin        { to { transform:rotate(360deg); }                                                           }
  @keyframes dockBreathe { 0%{transform:scale(1)} 45%{transform:scale(1.018)} 100%{transform:scale(1)}               }
  @keyframes glowPulse   { 0%,100%{box-shadow:none} 50%{box-shadow:0 0 28px rgba(214,52,8,.55),0 0 8px rgba(214,52,8,.3)} }

  /* ─── MOBILE ────────────────────────────── */
  @media (max-width: 768px) {

    /* hide scrollbar — OS handles it on touch */
    ::-webkit-scrollbar { display: none; }
    * { scrollbar-width: none; }

    /* dock: hide nav links, pill shrinks to logo + cta only */
    .dock.open { width: 210px; }
    .dock-a, .dock-sep { display: none; }

    /* hero */
    .hero { padding: 0 24px 96px; }
    .hero-wordmark { font-size: clamp(52px, 16vw, 84px); }
    .hero-foot { flex-direction: column; align-items: flex-start; gap: 24px; }
    .hero-desc { font-size: 15px; max-width: 100%; }
    .hero-desc br { display: none; }
    .hero-btns { display: flex; flex-direction: column; gap: 10px; width: 100%; }
    .hero-btns .btn { width: 100%; text-align: center; margin-left: 0; padding: 16px; font-size: 15px; }

    /* statement */
    .statement { padding: 64px 24px; }
    .statement-h { font-size: clamp(30px, 8vw, 44px); }
    .statement-foot { margin-top: 28px; }
    .statement-note { text-align: left; max-width: 100%; }

    /* work */
    .work-section { padding: 56px 24px; }
    .project-row { flex-wrap: wrap; gap: 6px; padding: 22px 0; }
    .project-row:hover { transform: none; }
    .project-row:active { opacity: .75; }
    .project-tag { width: 100%; }
    .project-name { font-size: clamp(24px, 7vw, 34px); }
    .project-arrow { margin-left: auto; }

    /* sprint: stack vertically, 24H number stays large */
    .sprint-section { grid-template-columns: 1fr; }
    .sprint-left {
      padding: 56px 24px 36px;
      border-right: none; border-bottom: 1px solid var(--line);
      flex-direction: row; align-items: flex-end; justify-content: space-between;
    }
    .sprint-num { font-size: clamp(80px, 24vw, 120px); }
    .sprint-right { padding: 36px 24px 56px; }
    .sprint-right .btn { width: 100%; text-align: center; margin-left: 0; }

    /* contact: single column, horizontal card layout */
    .contact-section { padding: 56px 24px; }
    .contact-grid { grid-template-columns: 1fr; border-radius: 16px; }
    .contact-card {
      min-height: 0; padding: 24px 20px;
      border-bottom: 1px solid rgba(255,255,255,.04);
    }
    .contact-card:last-child { border-bottom: none; }
    .contact-card:hover { transform: none; }
    .contact-card:active { background: #1c1916; }

    /* cta */
    .cta-section { padding: 80px 24px 100px; }
    .cta-h { font-size: clamp(42px, 12vw, 68px); }
    .cta-sub { font-size: 14px; margin-bottom: 36px; max-width: 100%; }
    .cta-row { flex-direction: column; align-items: stretch; gap: 10px; }
    .cta-row .btn { text-align: center; margin-left: 0; font-size: 15px; padding: 17px; }

    /* footer: 2 columns instead of 4 */
    footer { grid-template-columns: 1fr 1fr; padding: 48px 24px 0; gap: 28px 16px; }
    /* extra bottom padding so dock doesn't overlap footer */
    .f-base { padding: 20px 24px 100px; flex-direction: column; gap: 4px; }
  }
`;

// ─── DATA ────────────────────────────────────────────────────────
const DEMOS = [
  { tag: "Luxury Hospitality", name: "Noir Atelier",     href: "https://lumiere-salon.arcodic.com" },
  { tag: "Boutique Coffee",    name: "Roast & Ritual",   href: "https://ritual-coffee.arcodic.com" },
  { tag: "Technical Services", name: "MG Installations", href: "https://mg-installations.arcodic.com" },
];

const CONTACTS = [
  { platform: "WhatsApp",  href: "https://wa.me/27676502266" },
  { platform: "Instagram", href: "https://instagram.com/arcodic.studio" },
  { platform: "Email",     href: "mailto:hello@arcodic.com" },
];

// ─── ARROW SVG ───────────────────────────────────────────────────
// Minimal ↗ path — same shape, two opacities for crossfade effect
const Arrow = ({ opacity, weight }) => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path
      d="M3 13L13 3M13 3H6M13 3V10"
      stroke={`rgba(255,255,255,${opacity})`}
      strokeWidth={weight}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// ─── COMPONENT ───────────────────────────────────────────────────
export default function App() {
  const [open,     setOpen]     = useState(false);
  const [breathe,  setBreathe]  = useState(false);
  const [progress, setProgress] = useState(0);

  // Dock: circle → pill → brief breathe pulse
  useEffect(() => {
    const t1 = setTimeout(() => setOpen(true), 950);
    const t2 = setTimeout(() => {
      setBreathe(true);
      setTimeout(() => setBreathe(false), 700);
    }, 1750);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  // Scroll progress bar
  useEffect(() => {
    const onScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      setProgress((scrollTop / (scrollHeight - clientHeight)) * 100);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll reveal — adds .on class when element enters viewport
  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("on"); }),
      { threshold: 0.08 }
    );
    document.querySelectorAll(".r").forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  const dockCls = ["dock", open && "open", breathe && "breathe"]
    .filter(Boolean).join(" ");

  return (
    <>
      <style>{CSS}</style>

      {/* Scroll progress */}
      <div className="progress" style={{ width: `${progress}%` }} />

      {/* ── DOCK ─────────────────────────────── */}
      <div className="dock-shell">
        <nav className={dockCls}>
          {!open && <div className="dock-spin" />}
          <div className="dock-row">
            <span className="dock-logo">ARCODIC</span>
            <div className="dock-sep" />
            <a href="#work"    className="dock-a">Work</a>
            <a href="#sprint"  className="dock-a">24H</a>
            <a href="#contact" className="dock-a">Contact</a>
            <a href="#contact" className="dock-cta">Let&#39;s build</a>
          </div>
        </nav>
      </div>

      {/* ── HERO ─────────────────────────────── */}
      <section className="hero">
        <p className="hero-kicker">Digital Studio — South Africa</p>
        <div className="hero-wordmark">ARCODIC</div>
        <div className="hero-rule" />
        <div className="hero-foot">
          <p className="hero-desc">
            Full-stack builds, motion-first UI,<br />
            and <b>24-hour sprint delivery.</b><br />
            Brief to live — fast, sharp, built to perform.
          </p>
          <div className="hero-btns">
            <a href="#contact" className="btn btn-white">Start a project</a>
            <a href="#work"    className="btn btn-ghost">See our work</a>
          </div>
        </div>
      </section>

      {/* ── STATEMENT ────────────────────────── */}
      <section className="statement">
        <h2 className="statement-h r">
          We close the gap between<br />
          how good your business is<br />
          and how good it <em>looks online.</em>
        </h2>
        <div className="statement-foot">
          <p className="statement-note r d1">
            ARcodic is a digital studio building high-performance websites
            for brands that refuse to blend in. Next.js, TypeScript,
            motion-first — delivered at speed.
          </p>
        </div>
      </section>

      {/* ── WORK ─────────────────────────────── */}
      <section className="work-section" id="work">
        <p className="section-kicker r">Selected work</p>
        {DEMOS.map((d, i) => (
          <a
            key={d.name}
            href={d.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`project-row r d${i + 1}`}
          >
            <span className="project-tag">{d.tag}</span>
            <span className="project-name">{d.name}</span>
            <span className="project-arrow">→</span>
          </a>
        ))}
      </section>

      {/* ── SPRINT ───────────────────────────── */}
      <section className="sprint-section" id="sprint">
        <div className="sprint-left">
          <div className="sprint-num r">24<span>H</span></div>
          <div className="sprint-label r">Sprint delivery</div>
        </div>
        <div className="sprint-right">
          <h2 className="sprint-h r">
            Brief to live site.<br />
            <em>One business day.</em>
          </h2>
          <p className="sprint-body r d1">
            We&#39;ve built the systems, the stack, and the process to move
            at a speed most studios can&#39;t match — without cutting corners
            on quality.
          </p>
          <a
            href="#contact"
            className="btn btn-dark r d2"
            style={{ alignSelf: "flex-start" }}
          >
            Book a sprint
          </a>
        </div>
      </section>

      {/* ── CONTACT ──────────────────────────── */}
      <section className="contact-section" id="contact">
        <p className="section-kicker r">Get in touch</p>
        <div className="contact-grid">
          {CONTACTS.map((c, i) => (
            <a
              key={c.platform}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`contact-card r d${i + 1}`}
            >
              <span className="contact-platform">{c.platform}</span>
              <span className="contact-arrow-wrap">
                <span className="ca-rest">
                  <Arrow opacity=".3" weight="1.4" />
                </span>
                <span className="ca-hover">
                  <Arrow opacity=".95" weight="1.8" />
                </span>
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* ── CTA ──────────────────────────────── */}
      <section className="cta-section">
        <h2 className="cta-h r">
          Ready to build<br />
          <em>something real?</em>
        </h2>
        <p className="cta-sub r d1">
          No agencies. No delays.<br />
          Direct responses within 2 hours.
        </p>
        <div className="cta-row r d2">
          <a href="mailto:hello@arcodic.com" className="btn btn-white btn-glow">
            hello@arcodic.com
          </a>
          <a href="#work" className="btn btn-ghost">
            See our work
          </a>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────── */}
      <footer>
        <div>
          <div className="f-wordmark">ARCODIC</div>
          <p className="f-about">
            Digital studio. South Africa.<br />
            Built fast, built right.
          </p>
        </div>
        <div>
          <div className="f-h">Studio</div>
          <ul className="f-links">
            {["Work", "Process", "About", "24H Sprint"].map(l => (
              <li key={l}><a href="#">{l}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <div className="f-h">Services</div>
          <ul className="f-links">
            {["Full-Stack Dev", "UI Architecture", "SEO Strategy", "Motion Design"].map(l => (
              <li key={l}><a href="#">{l}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <div className="f-h">Contact</div>
          <ul className="f-links">
            {["hello@arcodic.com", "WhatsApp", "Instagram", "Book a call"].map(l => (
              <li key={l}><a href="#">{l}</a></li>
            ))}
          </ul>
        </div>
      </footer>
      <div className="f-base">
        <span className="f-copy">© 2025 ARcodic. All rights reserved.</span>
        <span className="f-copy">Durban, South Africa</span>
      </div>
    </>
  );
}