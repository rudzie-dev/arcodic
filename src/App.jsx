/**
 * ARCODIC — Main Site
 * Stack: React 19 + Vite
 * Fonts: Cal Sans + Inter (both self-hosted, OFL-licensed)
 * Author: ARCODIC
 */

import { useState, useEffect, useRef } from "react";

import "./App.css";

// ─── Cal Sans (logo/display) + Inter (UI/body) loaded from /public/fonts
//     — both self-hosted to avoid an external font request. All CSS lives
//     in App.css (imported above) — kept in one file intentionally for
//     this single-component site. Sections are clearly labelled there.
// ─── DATA ────────────────────────────────────────────────────────
// mono/grad: per-project visual identity for the work-section thumbnail —
// no screenshots on file, so each project gets a colour-coded tile instead
// of a bare text row.
const DEMOS = [
  { tag: "Technical Services", name: "MG Installations", href: "https://mginstallations.co.za", result: "#1 name search · #3 near me · AI Overview · 5.0★ · 17 reviews", mono: "MG", grad: ["#2E5BFF", "#12295E"], previews: ["/work/mg-hero.jpg", "/work/mg-grid.jpg", "/work/mg-mobile.jpg"] },
  { tag: "Home Bakery",        name: "Kind Crumb",        href: "https://kindcrumbtreats.co.za",  result: "Live · WhatsApp ordering · Local SEO active", mono: "KC", grad: ["#E8875A", "#7A3B22"], previews: ["/work/kc-hero.jpg", "/work/kc-grid.jpg", "/work/kc-mobile.jpg"] },
  { tag: "UI Concept",         name: "Noir Atelier",      href: "https://lumiere-salon.arcodic.com", result: "UI concept · Hospitality booking flow", mono: "NA", grad: ["#D63408", "#2A0E04"], previews: ["/work/na-hero.jpg", "/work/na-grid.jpg", "/work/na-mobile.jpg"] },
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

// ─── PREVIEW MOCK ──────────────────────────────────────────────────
// Stand-in for a real UI screenshot in the Work section's hover
// reveal — no screenshots on file yet (see DEMOS), so this is a
// deliberately-abstract wireframe (browser chrome + placeholder
// blocks) tinted with the project's own gradient, not a fake photo
// of the real site. Swap for an <img src="..."> per project later;
// the slide-open mechanism in the CSS doesn't need to change.
const PreviewMock = ({ variant, grad }) => (
  <div
    className={`preview-mock preview-mock-${variant}`}
    style={{ background: `linear-gradient(135deg, ${grad[0]}, ${grad[1]})` }}
    aria-hidden="true"
  >
    <div className="preview-chrome"><span /><span /><span /></div>
    <div className="preview-body">
      {variant === "hero" && (
        <>
          <div className="preview-block preview-block-hero" />
          <div className="preview-line" style={{ width: "70%" }} />
          <div className="preview-line" style={{ width: "45%" }} />
          <div className="preview-pill" />
        </>
      )}
      {variant === "grid" && (
        <div className="preview-grid"><span /><span /><span /><span /></div>
      )}
      {variant === "mobile" && (
        <div className="preview-mobile-frame">
          <div className="preview-line" style={{ width: "80%" }} />
          <div className="preview-block preview-block-sm" />
          <div className="preview-line" style={{ width: "60%" }} />
        </div>
      )}
    </div>
  </div>
);

// ─── COMPONENT ───────────────────────────────────────────────────
export default function App() {
  const [dockVisible, setDockVisible] = useState(false);
  const [breathe,     setBreathe]     = useState(false);
  const [progress,    setProgress]    = useState(0);
  const [ctxMenu,     setCtxMenu]     = useState({ visible: false, ready: false, x: 0, y: 0 });
  const [linkCopied,  setLinkCopied]  = useState(false);
  const [previewH,    setPreviewH]    = useState(300);
  const [dockRipple,  setDockRipple]  = useState(null); // {x, y, key}
  const [menuOpen,    setMenuOpen]    = useState(false); // mobile burger menu
  const hasBreathed = useRef(false);
  const ctxMenuRef = useRef(null);
  const workSectionRef = useRef(null);
  const dockRef = useRef(null);

  // Dock: hidden over the hero, fades in once scrolled past it (and
  // back out if scrolled back to the top) — plus a one-time "breathe"
  // pulse the first time it appears. Also drives the scroll progress bar
  // and tints the mobile browser chrome (theme-color) to match whichever
  // section is currently behind the top of the viewport.
  useEffect(() => {
    const hero = document.querySelector(".hero");
    const footerEnd = document.querySelector(".f-base");
    const sections = [...document.querySelectorAll("[data-theme]")];
    const themeMeta = document.querySelector('meta[name="theme-color"]');
    const THEME_COLOR = { dark: "#101010", light: "#F1EDE6" };
    let currentTheme = null;

    const onScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      setProgress((scrollTop / (scrollHeight - clientHeight)) * 100);

      const threshold = hero ? hero.offsetHeight * 0.7 : window.innerHeight * 0.7;
      const past = scrollTop > threshold;
      // Hide once .f-base (the copyright bar, not the whole <footer>)
      // is about to enter view. Tried keying this off <footer>'s own
      // top first: on an ordinary desktop viewport, the CTA section
      // is short enough that its footer already sits mostly in view
      // the moment you scroll to the CTA section's top — so the dock
      // (including the "Let's build" link that got someone there)
      // vanished right as they arrived, taking the whole footer's nav
      // grid down with it. Keying off .f-base instead keeps the dock
      // available through the CTA section and the footer's nav links,
      // only stepping aside at the true bottom of the page.
      //
      // The threshold itself: the dock's own bottom edge sits at
      // innerHeight - 28 (its `bottom: 28px` CSS). Getting this wrong
      // the first time (used a flat 90px, meant to approximate dock
      // height + offset but applied from the wrong edge) left the
      // dock reporting "visible" while it was already visually
      // sitting on top of .f-base's text — caught by screenshotting
      // the true-bottom state, not just checking the boolean. 20px
      // buffer past that edge so the .5s fade has room to finish
      // before .f-base would actually reach the dock.
      const DOCK_BOTTOM_OFFSET = 28;
      const nearBottom = footerEnd
        ? footerEnd.getBoundingClientRect().top < window.innerHeight - DOCK_BOTTOM_OFFSET - 20
        : false;
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

  // Work section preview strip: measures the row's real rendered
  // width (via a project-row-top, which already spans the full
  // content width) and computes the one shared height that makes two
  // 16:9 panels + one 9:20 panel fill it exactly, edge to edge, at
  // any viewport size. Re-measures on resize.
  useEffect(() => {
    const SUM_RATIO = (16 / 9) * 2 + 9 / 20;
    const GAP = 14 * 2; // two 14px gaps between three panels
    const measure = () => {
      const rowTop = workSectionRef.current?.querySelector(".project-row-top");
      if (!rowTop) return;
      const w = rowTop.getBoundingClientRect().width - GAP;
      if (w > 0) setPreviewH(w / SUM_RATIO);
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (workSectionRef.current) ro.observe(workSectionRef.current);
    window.addEventListener("resize", measure);
    return () => { ro.disconnect(); window.removeEventListener("resize", measure); };
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

  // Liquid glass: a specular highlight that tracks the cursor across
  // the dock's surface, like light catching a curved sheet of glass.
  // Written straight to the DOM (CSS custom properties) instead of
  // React state — this fires on every pointer move, and re-rendering
  // for that would be wasteful; the highlight itself is pure CSS
  // (a radial-gradient reading those custom properties).
  const dockPointerMove = (e) => {
    const el = dockRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--gx", `${((e.clientX - r.left) / r.width) * 100}%`);
    el.style.setProperty("--gy", `${((e.clientY - r.top) / r.height) * 100}%`);
  };

  // Liquid ripple on press, from the actual click point — one at a
  // time is plenty for a dock this size; the CSS animation cleans
  // itself up via onAnimationEnd.
  const dockPointerDown = (e) => {
    const el = dockRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const r = el.getBoundingClientRect();
    setDockRipple({ x: e.clientX - r.left, y: e.clientY - r.top, key: Date.now() });
  };

  // Mobile burger menu — closes on Escape, an outside click, or any
  // scroll (standard mobile-nav behaviour), and force-closes if the
  // dock itself hides (scrolled back over the hero, or near the very
  // bottom) so it never ends up floating with no dock beneath it.
  useEffect(() => {
    if (!menuOpen) return;
    const close = () => setMenuOpen(false);
    const onKeyDown = (e) => { if (e.key === "Escape") close(); };
    const onClick = (e) => {
      if (dockRef.current && !dockRef.current.parentElement.contains(e.target)) close();
    };
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("mousedown", onClick);
    window.addEventListener("scroll", close, { passive: true });
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", onClick);
      window.removeEventListener("scroll", close);
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!dockVisible) setMenuOpen(false);
  }, [dockVisible]);

  return (
    <>
      {/* Scroll progress */}
      <div className="progress" style={{ width: `${progress}%` }} />

      {/* ── DOCK ─────────────────────────────── */}
      <div className={`dock-shell${dockVisible ? " visible" : ""}`}>
        <nav
          className={`dock${breathe ? " breathe" : ""}`}
          aria-label="Primary"
          ref={dockRef}
          onMouseMove={dockPointerMove}
          onMouseDown={dockPointerDown}
        >
          <div className="dock-glow" aria-hidden="true" />
          {dockRipple && (
            <span
              key={dockRipple.key}
              className="dock-ripple"
              style={{ left: dockRipple.x, top: dockRipple.y }}
              onAnimationEnd={() => setDockRipple(null)}
            />
          )}
          <div className="dock-row">
            <span className="dock-logo">ARCODIC</span>
            <div className="dock-sep" />
            <a href="#work"    className="dock-a">Work</a>
            <a href="#sprint"  className="dock-a">24H</a>
            <a href="#pricing" className="dock-a">Pricing</a>
            <a href="#contact" className="dock-a">Contact</a>
            <button
              type="button"
              className={`dock-burger${menuOpen ? " open" : ""}`}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="dock-mobile-menu"
              onClick={() => setMenuOpen(o => !o)}
            >
              <span /><span /><span />
            </button>
            <a href="#contact" className="dock-cta">Let&#39;s build</a>
          </div>
        </nav>
        <nav
          id="dock-mobile-menu"
          aria-label="Mobile"
          className={`dock-mobile-menu${menuOpen ? " open" : ""}`}
        >
          <a href="#work"    className="dock-mobile-a" onClick={() => setMenuOpen(false)}>Work</a>
          <a href="#sprint"  className="dock-mobile-a" onClick={() => setMenuOpen(false)}>24H</a>
          <a href="#pricing" className="dock-mobile-a" onClick={() => setMenuOpen(false)}>Pricing</a>
          <a href="#contact" className="dock-mobile-a" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>
      </div>

      <main>{/* ── HERO ─────────────────────────────── */}
      <section className="hero" data-theme="dark">
        <p className="hero-kicker">Est. 2025</p>
        <h1 className="hero-wordmark">ARCODIC</h1>
        <div className="hero-rule" />
        <div className="hero-foot">
          <p className="hero-desc">
            I build fast, motion-driven websites that make{" "}
            <br />
            people stop scrolling and start clicking.{" "}
            <br />
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
            motion-first. Delivered at speed.
          </p>
        </div>
      </section>

      {/* ── WORK ─────────────────────────────── */}
      <section
        className="work-section"
        id="work"
        data-theme="dark"
        ref={workSectionRef}
        style={{ "--preview-h": `${previewH}px` }}
      >
        <h2 className="section-kicker r">Selected work</h2>
        {DEMOS.map((d, i) => (
          <a
            key={d.name}
            href={d.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`project-row r d${i + 1}`}
          >
            <div className="project-row-top">
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
                {d.result && <p className="project-result">{d.result}</p>}
              </div>
              <span className="project-arrow" aria-hidden="true">→</span>
              <span className="sr-only">(opens in new tab)</span>
            </div>
            <div className="project-preview-wrap">
              {/* Decorative previews: the row above already names and
                  describes the project, so these are supplementary
                  screenshots, not the link's accessible name — marking
                  them alt="" avoids a screen reader repeating the
                  project name three times inside one link. */}
              <div className="project-preview" aria-hidden="true">
                {["hero", "grid", "mobile"].map((variant, vi) => (
                  d.previews?.[vi] ? (
                    <picture key={variant}>
                      <source srcSet={d.previews[vi].replace(/\.jpg$/, ".webp")} type="image/webp" />
                      <img
                        src={d.previews[vi]}
                        alt=""
                        loading="lazy"
                        className={`preview-mock preview-mock-${variant}`}
                      />
                    </picture>
                  ) : (
                    <PreviewMock key={variant} variant={variant} grad={d.grad} />
                  )
                ))}
              </div>
            </div>
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
            the process to move at a speed most studios can&#39;t match,
            without cutting corners on quality. Bigger multi-page builds
            take longer. See pricing below for exact turnaround.
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
        <h2 className="section-kicker r">What it costs</h2>
        <h2 className="statement-h r">
          <span className="mask-line"><span>Transparent.</span></span>
          <span className="mask-line"><span><em>No surprises.</em></span></span>
        </h2>
        <div className="pricing-grid r d1">
          {[
            {
              tag: "Entry", name: "Landing Page", price: "R1,500", priceEnd: "– R2,500",
              desc: "One page. One goal. Built around a single conversion: a call, a WhatsApp, a booking.",
              meta: "24-hour turnaround", featured: false,
            },
            {
              tag: "Standard", name: "Starter Site", price: "R3,500", priceEnd: "– R5,500",
              desc: "A proper multi-page site with navigation. Everything a local business needs to be taken seriously online.",
              meta: "3–5 day turnaround", featured: true,
            },
            {
              tag: "Full Build", name: "Business Site", price: "R6,000", priceEnd: "– R10,000",
              desc: "Built for growth. Bookings, galleries, animations, analytics: a real competitive advantage.",
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
        <p className="pricing-footnote r d2">
          Need something bigger? <a href="#contact">Let's talk custom.</a>
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
              {c.platform !== "Email" && <span className="sr-only">(opens in new tab)</span>}
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
        <div className="f-base">
          <span className="f-copy">© {new Date().getFullYear()} ARCODIC. All rights reserved.</span>
          <div className="f-legal">
            <a href="/privacy.html">Privacy Policy</a>
            <a href="/terms.html">Terms of Service</a>
          </div>
        </div>
      </footer>

      {/* ── CONTEXT MENU ─────────────────────── */}
      {ctxMenu.visible && (
        <div
          ref={ctxMenuRef}
          className={`ctx-menu${ctxMenu.ready ? " ready" : ""}`}
          style={{ left: ctxMenu.x, top: ctxMenu.y }}
          role="menu"
          aria-label="Quick actions"
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
