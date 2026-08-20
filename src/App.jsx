/**
 * ARCODIC — Main Site
 * Stack: React 19 + Vite
 * Fonts: Cal Sans + Inter (both self-hosted, OFL-licensed)
 * Author: ARCODIC
 */

import { useState, useEffect, useRef } from "react";

// ─── Cal Sans (logo/display) + Inter (UI/body) loaded from /public/fonts
//     — both self-hosted to avoid an external font request

// ─── All CSS lives here — kept in one file intentionally for this
//     single-component site. Sections are clearly labelled.
const CSS = `
  /* Fonts loaded via <link> in index.html — preloaded in parallel */
  @font-face {
    font-family: 'Cal Sans';
    src: url('/fonts/cal-sans.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
    font-display: swap; /* show fallback immediately on slow nets, swap in when ready */
  }
  @font-face {
    font-family: 'Inter';
    src: url('/fonts/inter-var.woff2') format('woff2-variations');
    font-weight: 100 900;
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
    --ink:    #101010;
    --paper:  #F1EDE6;
    --dim:    #878075;
    --dim-on-paper: #6B6460; /* --dim only hits 3.35:1 on --paper — fails AA (4.5:1) for
                                 normal-size body text. Use this on paper-bg sections instead;
                                 it's the same colour the light-mode override already proved
                                 works (4.97:1), just applied unconditionally. */
    --line:   rgba(16,16,16,.07);
    --red:    #D63408;
    --ui:     'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
    --logo:   'Cal Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
    --ease-spring: cubic-bezier(.34,1.2,.64,1);
    --ease-out:    cubic-bezier(.22,1,.36,1);

    /* dark mode scrollbar tint (default) */
    --scrollbar-thumb: rgba(241,237,230,.14);
    --scrollbar-thumb-hover: rgba(241,237,230,.32);
  }

  html { scroll-behavior: smooth; }

  body {
    background: var(--ink);
    color: var(--paper);
    font-family: var(--ui);
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }

  /* ─── SELECTION ─────────────────────────── */
  /* brand red instead of the browser's default blue highlight */
  ::selection   { background: var(--red); color: #fff; }
  ::-moz-selection { background: var(--red); color: #fff; }

  /* ─── FOCUS RING ────────────────────────── */
  /* keyboard-nav outline in the brand accent instead of default blue —
     still a real, visible outline (never suppressed) for accessibility */
  :focus-visible { outline: 2px solid var(--red); outline-offset: 3px; }

  /* ─── SCROLLBAR ─────────────────────────── */
  /* neutral at rest, brand red on hover — same "quiet until you touch
     it" pattern as the rest of the site's interactive elements */
  ::-webkit-scrollbar { width: 4px; }
  ::-webkit-scrollbar-track { background: transparent; }
  ::-webkit-scrollbar-button { display: none; height: 0; }
  ::-webkit-scrollbar-thumb {
    background: rgba(241,237,230,.14);
    border-radius: 999px;
    border: 1px solid transparent;
    background-clip: padding-box;
    transition: background .2s ease;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: var(--red);
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
    Hidden while the hero is on screen — the hero already has its own
    CTAs, and popping this up on load just sits on top of the wordmark.
    Fades/slides in once the hero has been scrolled past (state driven
    from JS scroll position), and hides again if scrolled back to top.
    Always a fully-formed pill — no circle/spinner load-in morph, since
    that read as a "connecting" cue and doesn't make sense fired mid-scroll.
  */
  .dock-shell {
    position: fixed;
    bottom: 28px; left: 50%;
    transform: translateX(-50%) translateY(10px);
    z-index: 400;
    opacity: 0; pointer-events: none;
    transition: opacity .5s var(--ease-out), transform .5s var(--ease-out);
  }
  .dock-shell.visible {
    opacity: 1; pointer-events: auto;
    transform: translateX(-50%) translateY(0);
  }

  .dock {
    height: 52px; width: 482px;
    border-radius: 999px;
    background: rgba(16,16,16,.68);
    backdrop-filter: blur(32px) saturate(1.9);
    -webkit-backdrop-filter: blur(32px) saturate(1.9);
    border: 1px solid rgba(255,255,255,.11);
    box-shadow: 0 4px 32px rgba(0,0,0,.38), inset 0 1px 0 rgba(255,255,255,.07);
    display: flex; align-items: center; justify-content: center;
    overflow: hidden;
  }
  .dock.breathe { animation: dockBreathe .6s var(--ease-spring) forwards; }

  .dock-row {
    display: flex; align-items: center;
    padding: 0 7px;
    white-space: nowrap;
  }

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

  /* ─── CONTEXT MENU ──────────────────────── */
  /* replaces the browser's default right-click menu with a glass
     card in the dock's own visual language — same blur/border/shadow
     recipe, so it reads as part of the same UI instead of a bolt-on */
  .ctx-menu {
    position: fixed; z-index: 900;
    min-width: 200px; padding: 6px;
    border-radius: 14px;
    background: rgba(16,16,16,.82);
    backdrop-filter: blur(28px) saturate(1.8);
    -webkit-backdrop-filter: blur(28px) saturate(1.8);
    border: 1px solid rgba(255,255,255,.11);
    box-shadow: 0 12px 40px rgba(0,0,0,.45), inset 0 1px 0 rgba(255,255,255,.06);
    opacity: 0; transform: scale(.96);
    transform-origin: top left;
    pointer-events: none;
    transition: opacity .15s ease, transform .15s var(--ease-spring);
  }
  .ctx-menu.ready { opacity: 1; transform: scale(1); pointer-events: auto; }
  .ctx-item {
    display: block; width: 100%;
    padding: 9px 12px; border-radius: 9px;
    font-family: var(--ui); font-size: 13px; font-weight: 500;
    color: rgba(255,255,255,.75);
    text-decoration: none; background: none; border: none; cursor: pointer;
    text-align: left;
    transition: background .15s ease, color .15s ease;
  }
  .ctx-item:hover { background: rgba(214,52,8,.16); color: #fff; }
  .ctx-sep { height: 1px; background: rgba(255,255,255,.08); margin: 5px 8px; }
  .ctx-foot {
    display: block; padding: 8px 12px 4px;
    font-family: var(--ui); font-size: 10px; font-weight: 600;
    letter-spacing: .1em; text-transform: uppercase;
    color: rgba(255,255,255,.28);
  }

  /* ─── HERO ──────────────────────────────── */
  .hero {
    min-height: 100svh;
    display: flex; flex-direction: column; justify-content: flex-end;
    padding: 0 64px 80px;
    position: relative; overflow: hidden;
  }
  /* ambient glow — a blurred blob drifting slowly behind the copy,
     instead of a static gradient wash */
  .hero::before {
    content: ''; position: absolute; pointer-events: none;
    top: -10%; left: 38%;
    width: 55vw; height: 55vw; max-width: 640px; max-height: 640px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(214,52,8,.4) 0%, transparent 70%);
    filter: blur(90px);
    will-change: transform;
    animation: heroGlowDrift 22s var(--ease-spring) infinite alternate;
  }
  @media (prefers-reduced-motion: reduce) {
    .hero::before { animation: none; }
  }

  .hero-kicker {
    font-family: var(--ui); font-size: 11px; font-weight: 600;
    letter-spacing: .2em; text-transform: uppercase;
    color: rgba(255,255,255,.55); margin-bottom: 28px;
    opacity: 1;
    animation: wordmarkIn .6s var(--ease-out) forwards;
  }
  .hero-wordmark {
    font-family: var(--logo);
    font-size: clamp(68px, 13.5vw, 196px);
    line-height: .9; color: #fff;
    /* opacity:1 immediately so browser registers LCP at paint time */
    opacity: 1;
    animation: wordmarkIn .9s var(--ease-out) forwards;
  }
  .hero-rule {
    width: 100%; height: 1px;
    background: rgba(255,255,255,.07);
    margin: 52px 0 44px;
    opacity: 1; transform-origin: left;
    animation: expandRule .7s var(--ease-out) forwards;
  }
  .hero-foot {
    display: flex; align-items: flex-end; justify-content: space-between;
    opacity: 1;
    animation: wordmarkIn .7s var(--ease-out) forwards;
  }
  .hero-desc {
    font-family: var(--ui); font-size: 17px; font-weight: 400;
    line-height: 1.68; color: rgba(255,255,255,.6); max-width: 400px;
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

  /* ─── STATEMENT ─────────────────────────── */
  .statement {
    background: var(--paper); color: var(--ink);
    padding: 112px 64px;
    border-bottom: 1px solid var(--line);
  }
  .statement-h {
    font-family: var(--ui);
    font-size: clamp(38px, 5.2vw, 76px);
    font-weight: 500; line-height: 1.08; letter-spacing: -.022em;
    max-width: 840px;
  }
  .statement-h em { font-style: normal; font-weight: 400; color: var(--dim-on-paper); }
  .statement-foot { display: flex; justify-content: flex-end; margin-top: 52px; }
  .statement-note {
    font-family: var(--ui); font-size: 15px; font-weight: 400;
    line-height: 1.72; color: var(--dim-on-paper); max-width: 340px; text-align: right;
  }

  /* ─── WORK ──────────────────────────────── */
  .work-section { background: var(--ink); padding: 96px 64px; }

  .section-kicker {
    font-family: var(--ui); font-size: 11px; font-weight: 600;
    letter-spacing: .2em; text-transform: uppercase;
    color: rgba(255,255,255,.5); margin-bottom: 52px;
  }

  /*
    translateX on hover (not padding) = GPU composited,
    zero layout shift, perfectly fluid spring feel.
  */
  .project-row {
    display: flex; align-items: center; justify-content: space-between;
    gap: 24px;
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

  /* colour-coded tile standing in for a screenshot/thumbnail */
  .project-thumb {
    width: 56px; height: 56px; flex-shrink: 0;
    border-radius: 14px;
    display: flex; align-items: center; justify-content: center;
    font-family: var(--logo); font-size: 15px; color: rgba(255,255,255,.92);
    letter-spacing: -.01em;
    box-shadow: inset 0 1px 0 rgba(255,255,255,.14), 0 6px 18px rgba(0,0,0,.28);
    transition: transform .55s var(--ease-spring);
  }
  .project-row:hover .project-thumb { transform: scale(1.05); }

  .project-tag {
    font-family: var(--ui); font-size: 11px; font-weight: 500;
    letter-spacing: .1em; text-transform: uppercase;
    color: rgba(255,255,255,.5); width: 180px; flex-shrink: 0;
    transition: color .3s ease;
  }
  .project-row:hover .project-tag { color: rgba(255,255,255,.4); }

  .project-body { flex: 1; }

  .project-name {
    font-family: var(--ui);
    font-size: clamp(26px, 3.2vw, 46px);
    font-weight: 500; font-style: italic;
    color: rgba(255,255,255,.88); flex: 1; letter-spacing: -.015em;
    transition: color .3s ease;
  }
  .project-row:hover .project-name { color: #fff; }

  .project-arrow {
    color: rgba(255,255,255,.45); font-size: 18px; flex-shrink: 0;
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
    display: flex; flex-direction: column; justify-content: flex-end; gap: 16px;
  }
  .sprint-num {
    font-family: var(--logo);
    font-size: clamp(88px, 13vw, 172px);
    line-height: .88; color: var(--ink); letter-spacing: -.01em;
  }
  .sprint-num span { color: var(--red); }
  .sprint-meta { display: flex; flex-direction: column; gap: 10px; }
  .sprint-label { font-family: var(--ui); font-size: 14px; font-weight: 500; color: var(--dim-on-paper); }
  .sprint-steps {
    display: flex; align-items: center; gap: 8px;
    font-family: var(--ui); font-size: 11px; font-weight: 600;
    letter-spacing: .12em; text-transform: uppercase;
    color: var(--dim-on-paper);
  }
  .sprint-steps-sep { color: rgba(16,16,16,.35); font-size: 10px; }
  .sprint-steps-live { color: var(--red); }
  .sprint-right { padding: 96px 64px; display: flex; flex-direction: column; justify-content: center; gap: 26px; }
  .sprint-h {
    font-family: var(--ui);
    font-size: clamp(30px, 3.8vw, 50px);
    font-weight: 500; line-height: 1.12; letter-spacing: -.02em; color: var(--ink);
  }
  .sprint-h em { font-style: normal; font-weight: 400; color: var(--dim-on-paper); }
  .sprint-body { font-family: var(--ui); font-size: 16px; line-height: 1.72; color: var(--dim-on-paper); max-width: 400px; }

  /*
    ─── CONTACT (closes out the CTA section, not standalone) ──
    Was a 3-column grid with equal-width cells — forced "Email"
    into the same width as "Instagram" and left it looking hollow.
    Pills that size to their own content instead: every card reads
    at the same visual density regardless of label length.
  */
  .contact-grid {
    display: flex; flex-wrap: wrap; justify-content: center;
    gap: 14px; margin-top: 48px;
  }

  .contact-card {
    background: rgba(255,255,255,.04);
    border: 1px solid rgba(255,255,255,.09);
    border-radius: 999px;
    padding: 18px 28px 18px 22px;
    text-decoration: none; color: inherit;
    display: flex; align-items: center; gap: 24px;
    position: relative; overflow: hidden;
    transition: transform .2s var(--ease-spring), border-color .3s ease;
  }
  .contact-card:hover { border-color: transparent; }

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

  .contact-lead {
    display: flex; align-items: center; gap: 13px;
    position: relative; z-index: 1;
  }
  .contact-icon {
    color: rgba(255,255,255,.32); flex-shrink: 0;
    transition: color .3s ease;
  }
  .contact-card:hover .contact-icon { color: rgba(255,255,255,.85); }

  .contact-platform {
    font-family: var(--ui);
    font-size: clamp(20px, 2vw, 28px);
    font-weight: 300; font-style: italic;
    color: rgba(255,255,255,.9);
    transition: color .3s ease;
  }
  .contact-card:hover .contact-platform { color: #fff; }

  /* single arrow, brightens on hover — was a two-SVG crossfade, cut for less noise */
  .contact-arrow {
    position: relative; z-index: 1; flex-shrink: 0;
    color: rgba(255,255,255,.3);
    transition: color .28s ease, transform .3s var(--ease-spring);
  }
  .contact-card:hover .contact-arrow { color: #fff; transform: translate(2px, -2px); }


  /*
    ─── PRICING ───────────────────────────────
    Was paper/light — same tone as Sprint right above it, so the two
    sections ran together as one long light block with nothing but a
    1px line between them, breaking the dark/light alternation every
    other section pair follows. Flipped to dark (ink) to restore that
    rhythm: hero(dark) statement(light) work(dark) sprint(light)
    pricing(dark) cta(dark). Card colours below are the light/dark
    pair from before, just applied to the opposite card — the
    "featured" tier now pops as the light card against a dark
    section instead of a dark card against a light one.
  */
  .pricing-section {
    background: var(--ink);
    color: var(--paper);
    padding: 96px 64px;
    border-bottom: 1px solid rgba(255,255,255,.06);
  }
  .pricing-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0;
    background: transparent;
    border-radius: 16px;
    overflow: hidden;
    margin-top: 52px;
    border: 1px solid rgba(255,255,255,.09);
  }
  .pricing-card {
    background: rgba(255,255,255,.03);
    padding: 48px 40px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    transition: background .25s ease;
    position: relative;
    border: 1px solid rgba(255,255,255,.09);
    margin: -1px;
  }
  .pricing-card:hover { background: rgba(255,255,255,.06); }
  .pricing-card.featured {
    background: var(--paper);
    border-color: var(--paper);
  }
  .pricing-card.featured:hover { background: #E8E3DA; }
  .pricing-tag {
    font-family: var(--ui);
    font-size: 10px;
    font-weight: 700;
    letter-spacing: .18em;
    text-transform: uppercase;
    color: rgba(255,255,255,.55);
  }
  .pricing-card.featured .pricing-tag { color: var(--dim-on-paper); }
  .pricing-tag-pill {
    display: inline-block;
    background: var(--red);
    color: #fff;
    font-family: var(--ui);
    font-size: 10px;
    font-weight: 700;
    letter-spacing: .12em;
    text-transform: uppercase;
    padding: 3px 10px;
    border-radius: 999px;
    margin-left: 8px;
  }
  .pricing-name {
    font-family: var(--ui);
    font-size: clamp(22px, 2.5vw, 32px);
    font-weight: 600;
    line-height: 1.1;
    color: #fff;
  }
  .pricing-card.featured .pricing-name { color: var(--ink); }
  .pricing-price {
    font-family: var(--ui);
    font-size: clamp(28px, 3.5vw, 44px);
    font-weight: 700;
    line-height: 1;
    color: #fff;
    letter-spacing: -.02em;
  }
  .pricing-card.featured .pricing-price { color: var(--ink); }
  .pricing-price span {
    font-family: var(--ui);
    font-size: 13px;
    font-weight: 400;
    color: rgba(255,255,255,.55);
    letter-spacing: 0;
  }
  .pricing-card.featured .pricing-price span { color: var(--dim-on-paper); }
  .pricing-divider {
    height: 1px;
    background: rgba(255,255,255,.1);
  }
  .pricing-card.featured .pricing-divider { background: var(--line); }
  .pricing-desc {
    font-family: var(--ui);
    font-size: 13px;
    font-weight: 400;
    line-height: 1.7;
    color: rgba(255,255,255,.5);
    flex: 1;
  }
  .pricing-card.featured .pricing-desc { color: var(--dim-on-paper); }
  .pricing-meta {
    font-family: var(--ui);
    font-size: 11px;
    font-weight: 500;
    letter-spacing: .08em;
    color: rgba(255,255,255,.55);
    text-transform: uppercase;
  }
  .pricing-card.featured .pricing-meta { color: var(--dim-on-paper); }

  @media (max-width: 768px) {
    .pricing-section { padding: 56px 24px; }
    .pricing-grid { grid-template-columns: 1fr; border-radius: 14px; }
    .pricing-card { padding: 36px 28px; }
    .pricing-card.featured { order: -1; }
  }

  /*
    ─── CTA ───────────────────────────────────
    Sits right after Pricing, and both were plain var(--ink) — same
    problem as the Sprint/Pricing seam, just one section later: only
    Pricing's faint border-bottom stood between two identical dark
    fills. Flipping CTA to paper (matching the alternation everywhere
    else) would undercut the whole point of a bold, dark closing
    moment, so instead it gets a genuinely deeper black than the
    content sections (a "spotlight" shade, not just var(--ink) again)
    plus a visible red glow bleeding down from the top edge — using
    the actual brand accent to mark the seam deliberately, rather
    than another near-black tint that risks the same muddy/brown
    read the base ink colour just got fixed for.
  */
  .cta-section {
    background:
      linear-gradient(180deg, rgba(214,52,8,.07) 0%, transparent 22%),
      #0A0A0A;
    padding: 132px 64px;
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
    font-family: var(--ui);
    font-size: clamp(50px, 8vw, 116px);
    font-weight: 600; line-height: 1.04; letter-spacing: -.03em;
    color: #fff; margin-bottom: 32px; position: relative;
  }
  .cta-h em { font-style: normal; font-weight: 400; color: rgba(255,255,255,.35); }
  .cta-sub {
    font-family: var(--ui); font-size: 16px; font-weight: 400;
    color: rgba(255,255,255,.6); line-height: 1.65;
    margin-bottom: 48px; max-width: 320px;
    margin-left: auto; margin-right: auto;
    position: relative;
  }
  /* contact grid, reused here to close the CTA section — tighter
     top margin than its original standalone use since cta-sub
     already carries margin-bottom */
  .cta-section .contact-grid { margin-top: 8px; max-width: 720px; margin-left: auto; margin-right: auto; }

  /* ─── FOOTER ────────────────────────────── */
  footer {
    background: var(--ink);
    border-top: 1px solid rgba(255,255,255,.05);
    padding: 64px 64px 0;
    display: grid; grid-template-columns: 1.6fr 1fr 1fr 1fr; gap: 40px;
  }
  .f-wordmark { font-family: var(--logo); font-size: 20px; color: rgba(255,255,255,.65); margin-bottom: 14px; }
  .f-about    { font-family: var(--ui); font-size: 13px; color: rgba(255,255,255,.55); line-height: 1.65; max-width: 200px; }
  .f-h        { font-family: var(--ui); font-size: 10px; font-weight: 700; letter-spacing: .18em; text-transform: uppercase; color: rgba(255,255,255,.5); margin-bottom: 18px; }
  .f-links    { list-style: none; display: flex; flex-direction: column; gap: 11px; }
  .f-links a  {
    font-family: var(--ui); font-size: 14px; color: rgba(255,255,255,.6);
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
  .f-copy { font-family: var(--ui); font-size: 12px; color: rgba(255,255,255,.5); }

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

  /*
    Mask-line reveal — for the page's big single-statement headlines
    (Statement / Pricing / CTA), distinct from the generic fade used
    on lists (Work rows, Pricing cards, Contact cards). Each line sits
    in an overflow-hidden mask and slides up from below into view,
    staggered per line, mirroring the hero wordmark's arrival.
  */
  .mask-line { display: block; overflow: hidden; padding-bottom: .08em; margin-bottom: -.08em; }
  .mask-line > span {
    display: block;
    transform: translateY(115%);
    transition: transform .85s var(--ease-out);
  }
  .r.on .mask-line > span { transform: translateY(0); }
  .mask-line:nth-child(2) > span { transition-delay: .09s; }
  .mask-line:nth-child(3) > span { transition-delay: .18s; }

  /* ─── KEYFRAMES ─────────────────────────── */
  @keyframes rise        { from { opacity:0; transform:translateY(22px); } to { opacity:1; transform:translateY(0); } }
  @keyframes wordmarkIn  { from { transform:translateY(16px); } to { transform:translateY(0); } }
  @keyframes expandRule  { from { transform:scaleX(0); } to { transform:scaleX(1); } }
  @keyframes dockBreathe { 0%{transform:scale(1)} 45%{transform:scale(1.018)} 100%{transform:scale(1)}               }
  @keyframes heroGlowDrift {
    0%   { transform: translate(0, 0) scale(1); }
    33%  { transform: translate(-12%, 10%) scale(1.12); }
    66%  { transform: translate(8%, -8%) scale(0.9); }
    100% { transform: translate(-6%, 14%) scale(1.05); }
  }

  /* ─── MOBILE ────────────────────────────── */
  @media (max-width: 768px) {

    /* hide scrollbar — OS handles it on touch */
    ::-webkit-scrollbar { display: none; }
    * { scrollbar-width: none; }

    /* dock: hide nav links, pill shrinks to logo + cta only */
    .dock { width: 224px; } /* same +14px padding fix as desktop */
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
    .project-row { flex-wrap: wrap; gap: 10px 8px; padding: 22px 0; }
    .project-row:hover { transform: none; }
    .project-row:active { opacity: .75; }
    .project-thumb { width: 40px; height: 40px; border-radius: 10px; font-size: 12px; }
    .project-tag { width: auto; flex: 1; }
    .project-body { flex-basis: 100%; order: 5; }
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

    /* contact: full-width stacked rows instead of inline pills */
    .contact-grid { flex-direction: column; gap: 10px; }
    .contact-card {
      border-radius: 14px;
      padding: 20px 22px;
      justify-content: space-between;
    }
    .contact-card:hover { transform: none; }
    .contact-card:active { background: #1c1c1c; }

    /* cta */
    .cta-section { padding: 80px 24px 100px; }
    .cta-h { font-size: clamp(42px, 12vw, 68px); }
    .cta-sub { font-size: 14px; margin-bottom: 36px; max-width: 100%; }

    /* footer: 2 columns instead of 4 */
    footer { grid-template-columns: 1fr 1fr; padding: 48px 24px 0; gap: 28px 16px; }
    /* extra bottom padding so dock doesn't overlap footer */
    .f-base { padding: 20px 24px 100px; flex-direction: column; gap: 4px; }
  }

  /* ─── SMALL LANDSCAPE (phones rotated sideways) ──────────
     .cta-h's font-size clamp scales off vw, which stays large even
     when height is short — on a squat viewport that pushed the two
     headline lines, sub-copy, and contact grid into a tight vertical
     space with barely any breathing room. Cut the heading size and
     section padding specifically for short+wide viewports. */
  @media (max-height: 480px) and (orientation: landscape) {
    .cta-section { padding: 48px 24px 64px; }
    .cta-h { font-size: clamp(34px, 7vw, 52px); margin-bottom: 20px; }
    .cta-sub { margin-bottom: 28px; }
  }

  /*
    ─── LIGHT MODE ──────────────────────────────
    Strategy: sections that are dark (#101010) stay
    dark — they're intentional design moments.
    Only the paper sections, dock, and context menu adapt.
    All hardcoded rgba values are explicitly
    overridden here to guarantee contrast.

    Deliberately the LAST block in this stylesheet. Every rule below
    matches a selector that already has an unconditional (dark-mode)
    declaration earlier in the file, at equal specificity — a single
    class or pseudo-element, same as its dark counterpart. CSS gives
    the later same-specificity rule the win regardless of which one
    sits inside a media query, so if this block lived any earlier
    (it used to sit right after :root), every one of those matching
    dark declarations further down the file would silently override
    it whenever the media query actually matched, leaving light mode
    partially dead — which is exactly what was happening: the dock,
    the scrollbar thumb, and the context menu never actually adapted.
    Keeping this block last is what makes it reliably win instead of
    relying on ad hoc specificity bumps (like the .statement-scoped
    and .sprint-right-scoped rules below still use, since scoping was
    already needed there for a different reason — .statement-h and
    .btn-dark are each reused by more than one section).
  */
  @media (prefers-color-scheme: light) {

    /* scrollbar — dark thumb on light track, red on hover */
    ::-webkit-scrollbar-thumb {
      background: rgba(16,16,16,.18);
    }
    ::-webkit-scrollbar-thumb:hover {
      background: var(--red);
    }
    * { scrollbar-color: rgba(16,16,16,.18) transparent; }

    /* ── dock: light glass pill ── */
    .dock {
      background: rgba(241,237,230,.75);
      border-color: rgba(16,16,16,.12);
      box-shadow: 0 4px 24px rgba(16,16,16,.1), inset 0 1px 0 rgba(255,255,255,.7);
    }
    .dock-logo { color: #101010; }
    .dock-sep  { background: rgba(16,16,16,.12); }
    .dock-a    { color: rgba(16,16,16,.5); }
    .dock-a:hover { color: #101010; }
    .dock-a::after { background: rgba(16,16,16,.6); }
    .dock-cta  { background: #101010; color: #F1EDE6; }
    .dock-cta:hover { background: var(--red); color: #fff; }

    /* ── context menu: light glass card ── */
    .ctx-menu {
      background: rgba(241,237,230,.92);
      border-color: rgba(16,16,16,.12);
      box-shadow: 0 12px 40px rgba(16,16,16,.14), inset 0 1px 0 rgba(255,255,255,.7);
    }
    .ctx-item { color: rgba(16,16,16,.65); }
    .ctx-item:hover { background: rgba(214,52,8,.12); color: #101010; }
    .ctx-sep { background: rgba(16,16,16,.1); }
    .ctx-foot { color: rgba(16,16,16,.35); }

    /* ── statement (paper section) ── */
    /* bg is already #F1EDE6 — just ensure text contrast.
       Scoped to .statement — .statement-h is also reused by
       Pricing's dark headline, and an unscoped rule here was
       forcing ink-black text onto that ink-black background,
       making "Transparent." render invisible for anyone with
       an OS light-mode preference. */
    .statement .statement-h     { color: #101010; }
    .statement .statement-h em  { color: #6B6460; }
    .statement-note  { color: #6B6460; }

    /* ── sprint (paper section) ── */
    .sprint-num      { color: #101010; }
    .sprint-label    { color: #6B6460; }
    .sprint-steps    { color: #6B6460; }
    .sprint-steps-sep { color: rgba(16,16,16,.25); }
    .sprint-h        { color: #101010; }
    .sprint-body     { color: #6B6460; }
    /* sprint btn on light bg */
    .sprint-right .btn-dark {
      background: #101010;
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
`;

// ─── DATA ────────────────────────────────────────────────────────
// mono/grad: per-project visual identity for the work-section thumbnail —
// no screenshots on file, so each project gets a colour-coded tile instead
// of a bare text row.
const DEMOS = [
  { tag: "Technical Services", name: "MG Installations", href: "https://mginstallations.co.za", result: "#1 name search · #3 near me · AI Overview · 5.0★ · 17 reviews", mono: "MG", grad: ["#2E5BFF", "#12295E"] },
  { tag: "Home Bakery",        name: "Kind Crumb",        href: "https://kindcrumbtreats.co.za",  result: "Live · WhatsApp ordering · Local SEO active", mono: "KC", grad: ["#E8875A", "#7A3B22"] },
  { tag: "UI Concept",         name: "Noir Atelier",      href: "https://lumiere-salon.arcodic.com", result: "UI concept · Hospitality booking flow", mono: "NA", grad: ["#D63408", "#2A0E04"] },
];

const CONTACTS = [
  { platform: "WhatsApp",  href: "https://wa.me/27676502266" },
  { platform: "Instagram", href: "https://instagram.com/arcodic.studio" },
  { platform: "Email",     href: "mailto:hello@arcodic.com" },
];

// ─── ARROW SVG ───────────────────────────────────────────────────
// Minimal ↗ path, currentColor — a single instance whose colour is
// driven by CSS on hover (was a dual-SVG crossfade, simplified down).
const Arrow = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="contact-arrow" aria-hidden="true">
    <path
      d="M3 13L13 3M13 3H6M13 3V10"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// ─── PLATFORM ICONS ────────────────────────────────────────────────
// Real brand marks (WhatsApp/Instagram glyphs, CC0 — simple-icons) and
// a plain envelope for Email — not hand-drawn approximations.
const PLATFORM_ICONS = {
  WhatsApp: {
    viewBox: "0 0 24 24", fill: "currentColor", stroke: "none",
    d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z",
  },
  Instagram: {
    viewBox: "0 0 24 24", fill: "currentColor", stroke: "none",
    d: "M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077",
  },
  // Mail — Lucide, ISC license: envelope outline, no equivalent "brand" mark for email
  Email: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" },
};
const PlatformIcon = ({ platform }) => {
  const icon = PLATFORM_ICONS[platform];
  return (
    <svg width="18" height="18" viewBox={icon.viewBox} fill={icon.fill} className="contact-icon" aria-hidden="true">
      {platform === "Email" ? (
        <>
          <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" stroke={icon.stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="2" y="4" width="20" height="16" rx="2" stroke={icon.stroke} strokeWidth="2" />
        </>
      ) : (
        <path d={icon.d} />
      )}
    </svg>
  );
};

// ─── COMPONENT ───────────────────────────────────────────────────
export default function App() {
  const [dockVisible, setDockVisible] = useState(false);
  const [breathe,     setBreathe]     = useState(false);
  const [progress,    setProgress]    = useState(0);
  const [ctxMenu,     setCtxMenu]     = useState({ visible: false, ready: false, x: 0, y: 0 });
  const [linkCopied,  setLinkCopied]  = useState(false);
  const hasBreathed = useRef(false);
  const ctxMenuRef = useRef(null);

  // Dock: hidden over the hero, fades in once scrolled past it (and
  // back out if scrolled back to the top) — plus a one-time "breathe"
  // pulse the first time it appears. Also drives the scroll progress bar
  // and tints the mobile browser chrome (theme-color) to match whichever
  // section is currently behind the top of the viewport.
  useEffect(() => {
    const hero = document.querySelector(".hero");
    const sections = [...document.querySelectorAll("[data-theme]")];
    const themeMeta = document.querySelector('meta[name="theme-color"]');
    const THEME_COLOR = { dark: "#101010", light: "#F1EDE6" };
    let currentTheme = null;

    const onScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      setProgress((scrollTop / (scrollHeight - clientHeight)) * 100);

      const threshold = hero ? hero.offsetHeight * 0.7 : window.innerHeight * 0.7;
      const past = scrollTop > threshold;
      // also hide near the very bottom — fixed-position dock otherwise
      // sits on top of the footer's last lines with nothing to yield to
      const nearBottom = scrollHeight - (scrollTop + clientHeight) < 160;
      setDockVisible(past && !nearBottom);
      if (past && !hasBreathed.current) {
        hasBreathed.current = true;
        setTimeout(() => {
          setBreathe(true);
          setTimeout(() => setBreathe(false), 700);
        }, 250);
      }

      // whichever section currently spans a reference line near the top
      // of the viewport is "current" for theme-color purposes
      const refY = 90;
      const active = sections.find(el => {
        const r = el.getBoundingClientRect();
        return r.top <= refY && r.bottom > refY;
      });
      const theme = active?.dataset.theme;
      if (theme && theme !== currentTheme && themeMeta) {
        currentTheme = theme;
        themeMeta.setAttribute("content", THEME_COLOR[theme]);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
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

  // Custom right-click menu — replaces the browser default everywhere
  // on the page. Opens at the cursor, closes on an outside click,
  // Escape, scroll, or resize; right-clicking elsewhere while it's
  // open just relocates it instead of requiring a second dismiss.
  useEffect(() => {
    const closeMenu = () => setCtxMenu(m => (m.visible ? { ...m, visible: false, ready: false } : m));
    const onContextMenu = (e) => {
      e.preventDefault();
      setCtxMenu({ visible: true, ready: false, x: e.clientX, y: e.clientY });
    };
    const onMouseDown = (e) => {
      if (ctxMenuRef.current && !ctxMenuRef.current.contains(e.target)) closeMenu();
    };
    const onKeyDown = (e) => { if (e.key === "Escape") closeMenu(); };

    document.addEventListener("contextmenu", onContextMenu);
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("scroll", closeMenu, { passive: true, capture: true });
    window.addEventListener("resize", closeMenu);
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("contextmenu", onContextMenu);
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("scroll", closeMenu, true);
      window.removeEventListener("resize", closeMenu);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  // Clamp the menu into the viewport once its real size is known —
  // it first mounts at the raw cursor position (invisible via
  // opacity:0), gets measured, then fades in at the corrected spot.
  useEffect(() => {
    if (!ctxMenu.visible || ctxMenu.ready) return;
    const el = ctxMenuRef.current;
    if (!el) return;
    // offsetWidth/Height, not getBoundingClientRect — the menu is
    // still mid-scale-in (transform: scale(.96)) at measurement time,
    // and a bounding rect would report the shrunk, transformed size
    const x = Math.max(8, Math.min(ctxMenu.x, window.innerWidth - el.offsetWidth - 8));
    const y = Math.max(8, Math.min(ctxMenu.y, window.innerHeight - el.offsetHeight - 8));
    setCtxMenu(m => ({ ...m, x, y, ready: true }));
  }, [ctxMenu.visible, ctxMenu.ready, ctxMenu.x, ctxMenu.y]);

  const closeCtxMenu = () => setCtxMenu(m => ({ ...m, visible: false, ready: false }));
  const copyPageLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setLinkCopied(true);
      setTimeout(() => { setLinkCopied(false); closeCtxMenu(); }, 900);
    } catch {
      closeCtxMenu();
    }
  };

  return (
    <>
      <style>{CSS}</style>

      {/* Scroll progress */}
      <div className="progress" style={{ width: `${progress}%` }} />

      {/* ── DOCK ─────────────────────────────── */}
      <div className={`dock-shell${dockVisible ? " visible" : ""}`}>
        <nav className={`dock${breathe ? " breathe" : ""}`}>
          <div className="dock-row">
            <span className="dock-logo">ARCODIC</span>
            <div className="dock-sep" />
            <a href="#work"    className="dock-a">Work</a>
            <a href="#sprint"  className="dock-a">24H</a>
            <a href="#pricing" className="dock-a">Pricing</a>
            <a href="#contact" className="dock-a">Contact</a>
            <a href="#contact" className="dock-cta">Let&#39;s build</a>
          </div>
        </nav>
      </div>

      <main>{/* ── HERO ─────────────────────────────── */}
      <section className="hero" data-theme="dark">
        <p className="hero-kicker">Est. 2025</p>
        <div className="hero-wordmark">ARCODIC</div>
        <div className="hero-rule" />
        <div className="hero-foot">
          <p className="hero-desc">
            I build fast, motion-driven websites that make<br />
            people stop scrolling and start clicking.<br />
            <b>Live in 24 hours.</b> Brief to launch.
          </p>
          <div className="hero-btns">
            <a href="#contact" className="btn btn-white">Start a project</a>
            <a href="#work"    className="btn btn-ghost">See my work</a>
          </div>
        </div>
      </section>

      {/* ── STATEMENT ────────────────────────── */}
      <section className="statement" id="statement" data-theme="light">
        <h2 className="statement-h r">
          <span className="mask-line"><span>I close the gap between</span></span>
          <span className="mask-line"><span>how good your business is</span></span>
          <span className="mask-line"><span>and how good it <em>looks online.</em></span></span>
        </h2>
        <div className="statement-foot">
          <p className="statement-note r d1">
            ARCODIC builds high-performance websites for brands that
            refuse to blend in. Next.js, TypeScript,
            motion-first — delivered at speed.
          </p>
        </div>
      </section>

      {/* ── WORK ─────────────────────────────── */}
      <section className="work-section" id="work" data-theme="dark">
        <p className="section-kicker r">Selected work</p>
        {DEMOS.map((d, i) => (
          <a
            key={d.name}
            href={d.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`project-row r d${i + 1}`}
          >
            <span
              className="project-thumb"
              style={{ background: `linear-gradient(135deg, ${d.grad[0]}, ${d.grad[1]})` }}
              aria-hidden="true"
            >
              {d.mono}
            </span>
            <span className="project-tag">{d.tag}</span>
            <div className="project-body">
              <span className="project-name">{d.name}</span>
              {d.result && <p style={{fontFamily:'var(--ui)',fontSize:'11px',color:'rgba(255,255,255,.35)',marginTop:'4px',letterSpacing:'.04em'}}>{d.result}</p>}
            </div>
            <span className="project-arrow">→</span>
          </a>
        ))}
      </section>

      {/* ── SPRINT ───────────────────────────── */}
      <section className="sprint-section" id="sprint" data-theme="light">
        <div className="sprint-left">
          <div className="sprint-num r">24<span>H</span></div>
          <div className="sprint-meta">
            <div className="sprint-label r">Landing page sprint</div>
            <div className="sprint-steps r d1">
              <span>Brief</span>
              <span className="sprint-steps-sep">→</span>
              <span>Build</span>
              <span className="sprint-steps-sep">→</span>
              <span className="sprint-steps-live">Live</span>
            </div>
          </div>
        </div>
        <div className="sprint-right">
          <h2 className="sprint-h r">
            Brief to live landing page.<br />
            <em>One business day.</em>
          </h2>
          <p className="sprint-body r d1">
            For landing pages, I&#39;ve built the systems, the stack, and
            the process to move at a speed most studios can&#39;t match —
            without cutting corners on quality. Bigger multi-page builds
            take longer — see pricing below for exact turnaround.
          </p>
          <a
            href="#contact"
            className="btn btn-dark r d2"
            style={{ alignSelf: "flex-start" }}
          >
            Book a landing page sprint
          </a>
        </div>
      </section>


      {/* ── PRICING ─────────────────────────── */}
      <section className="pricing-section" id="pricing" data-theme="dark">
        <p className="section-kicker r">What it costs</p>
        <h2 className="statement-h r">
          <span className="mask-line"><span>Transparent.</span></span>
          <span className="mask-line"><span><em>No surprises.</em></span></span>
        </h2>
        <div className="pricing-grid r d1">
          {[
            {
              tag: "Entry", name: "Landing Page", price: "R1,500", priceEnd: "– R2,500",
              desc: "One page. One goal. Built around a single conversion — a call, a WhatsApp, a booking.",
              meta: "24-hour turnaround", featured: false,
            },
            {
              tag: "Standard", name: "Starter Site", price: "R3,500", priceEnd: "– R5,500",
              desc: "A proper multi-page site with navigation. Everything a local business needs to be taken seriously online.",
              meta: "3–5 day turnaround", featured: true,
            },
            {
              tag: "Full Build", name: "Business Site", price: "R6,000", priceEnd: "– R10,000",
              desc: "Built for growth. Bookings, galleries, animations, analytics — a real competitive advantage.",
              meta: "1–2 week turnaround", featured: false,
            },
          ].map((p, i) => (
            <div key={i} className={`pricing-card${p.featured ? " featured" : ""}`}>
              <div className="pricing-tag">
                {p.tag}
                {p.featured && <span className="pricing-tag-pill">Popular</span>}
              </div>
              <div className="pricing-name">{p.name}</div>
              <div className="pricing-price">
                {p.price}<span>{p.priceEnd}</span>
              </div>
              <div className="pricing-divider" />
              <p className="pricing-desc">{p.desc}</p>
              <p className="pricing-meta">{p.meta}</p>
            </div>
          ))}
        </div>
        <p className="r d2" style={{fontFamily:'var(--ui)',fontSize:'13px',color:'rgba(255,255,255,.5)',marginTop:'32px',textAlign:'center'}}>
          Need something bigger? <a href="#contact" style={{color:'#fff',textDecoration:'none',borderBottom:'1px solid rgba(255,255,255,.3)'}}>Let's talk custom.</a>
        </p>
      </section>

      {/* ── CTA / CONTACT ────────────────────── */}
      {/* Merged: was two back-to-back dark sections both asking for
          contact — now one close, ending in the actual contact grid
          instead of a redundant email button. */}
      <section className="cta-section" id="contact" data-theme="dark">
        <h2 className="cta-h r">
          <span className="mask-line"><span>Ready to build</span></span>
          <span className="mask-line"><span><em>something real?</em></span></span>
        </h2>
        <p className="cta-sub r d1">
          No agencies. No delays.<br />
          Direct responses within 2 hours.
        </p>
        <div className="contact-grid r d2">
          {CONTACTS.map((c, i) => (
            <a
              key={c.platform}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card"
            >
              <span className="contact-lead">
                <PlatformIcon platform={c.platform} />
                <span className="contact-platform">{c.platform}</span>
              </span>
              <Arrow />
            </a>
          ))}
        </div>
      </section>

      </main>

      {/* ── FOOTER ───────────────────────────── */}
      <footer data-theme="dark">
        <div>
          <div className="f-wordmark">ARCODIC</div>
          <p className="f-about">
            Global reach.<br />
            Built fast, built right.
          </p>
        </div>
        <div>
          <div className="f-h">Site</div>
          <ul className="f-links">
            {[["Work","#work"],["Process","#sprint"],["Pricing","#pricing"],["Statement","#statement"]].map(([l,h]) => (
              <li key={l}><a href={h}>{l}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <div className="f-h">Services</div>
          <ul className="f-links">
            {["Full-Stack Dev", "UI Architecture", "SEO Strategy", "Motion Design"].map(l => (
              <li key={l}><a href="#contact">{l}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <div className="f-h">Contact</div>
          <ul className="f-links">
            {[["hello@arcodic.com","mailto:hello@arcodic.com"],["WhatsApp","https://wa.me/27676502266"],["Instagram","https://instagram.com/arcodic.studio"]].map(([l,h]) => (
              <li key={l}><a href={h}>{l}</a></li>
            ))}
          </ul>
        </div>
      </footer>
      <div className="f-base">
        <span className="f-copy">© {new Date().getFullYear()} ARCODIC. All rights reserved.</span>
      </div>

      {/* ── CONTEXT MENU ─────────────────────── */}
      {ctxMenu.visible && (
        <div
          ref={ctxMenuRef}
          className={`ctx-menu${ctxMenu.ready ? " ready" : ""}`}
          style={{ left: ctxMenu.x, top: ctxMenu.y }}
          role="menu"
        >
          <a href="#contact" className="ctx-item" role="menuitem" onClick={closeCtxMenu}>Start a project</a>
          <a href="#work"    className="ctx-item" role="menuitem" onClick={closeCtxMenu}>See my work</a>
          <a href="mailto:hello@arcodic.com" className="ctx-item" role="menuitem" onClick={closeCtxMenu}>Email me</a>
          <button type="button" className="ctx-item" role="menuitem" onClick={copyPageLink}>
            {linkCopied ? "Copied!" : "Copy link"}
          </button>
          <div className="ctx-sep" />
          <span className="ctx-foot">ARCODIC · Est. 2025</span>
        </div>
      )}
    </>
  );
}