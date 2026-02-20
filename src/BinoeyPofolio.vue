<template>
  <div class="bp-root" @mousemove="onMouseMove">
    <!-- Custom Cursor -->
    <div class="bp-cursor" :style="{ left: cursor.x + 'px', top: cursor.y + 'px' }"></div>
    <div class="bp-cursor-dot" :style="{ left: cursor.x + 'px', top: cursor.y + 'px' }"></div>

    <!-- Navigation -->
    <nav class="bp-nav" :class="{ 'bp-nav--scrolled': scrolled }">
      <div class="bp-nav__logo" @click="scrollTo('hero')">BINOY</div>
      <ul class="bp-nav__links">
        <li><a @click.prevent="scrollTo('work')">Work</a></li>
        <li><a @click.prevent="scrollTo('about')">About</a></li>
        <li><a @click.prevent="scrollTo('contact')">Contact</a></li>
      </ul>
    </nav>

    <!-- Hero Section -->
    <section id="hero" class="bp-hero">
      <div class="bp-hero__bg">
        <img src="./assets/binoey/hero.png" alt="hero" class="bp-hero__img" />
        <div class="bp-hero__overlay"></div>
      </div>
      <div class="bp-hero__content">
        <p class="bp-hero__eyebrow">Creative Designer &amp; Visual Storyteller</p>
        <h1 class="bp-hero__name">
          <span class="bp-hero__name-line">BINOY P BENNY</span>
        </h1>
        <p class="bp-hero__subtitle">Branding · Advertising · Photography</p>
        <button class="bp-hero__cta" @click="scrollTo('work')">
          <span>View Work</span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 5v14M5 12l7 7 7-7"/></svg>
        </button>
      </div>
      <div class="bp-hero__scroll-hint">
        <div class="bp-hero__scroll-line"></div>
        <span>Scroll</span>
      </div>
    </section>

    <!-- Work / Series Section -->
    <section id="work" class="bp-work">
      <div class="bp-section-header">
        <span class="bp-section-header__label">Selected Work</span>
        <h2 class="bp-section-header__title">Series</h2>
      </div>

      <div class="bp-work__grid">
        <div
          v-for="(series, i) in workSeries"
          :key="i"
          class="bp-work__card"
          :class="{ 'bp-work__card--wide': series.wide }"
          @mouseenter="hoveredCard = i"
          @mouseleave="hoveredCard = null"
        >
          <div class="bp-work__card-img-wrap">
            <img :src="series.img" :alt="series.title" class="bp-work__card-img" />
            <div class="bp-work__card-overlay" :class="{ 'bp-work__card-overlay--active': hoveredCard === i }"></div>
          </div>
          <div class="bp-work__card-info">
            <span class="bp-work__card-index">{{ String(i + 1).padStart(2, '0') }}</span>
            <h3 class="bp-work__card-title">{{ series.title }}</h3>
            <p class="bp-work__card-sub">{{ series.sub }}</p>
            <span class="bp-work__card-arrow">→</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Experience Section -->
    <section id="experience" class="bp-experience">
      <div class="bp-section-header">
        <span class="bp-section-header__label">Career</span>
        <h2 class="bp-section-header__title">Experience</h2>
      </div>
      <div class="bp-exp__list">
        <div v-for="(exp, i) in experiences" :key="i" class="bp-exp__item">
          <div class="bp-exp__left">
            <span class="bp-exp__index">{{ String(i + 1).padStart(2, '0') }}</span>
            <span class="bp-exp__company">{{ exp.company }}</span>
          </div>
          <div class="bp-exp__right">
            <h3 class="bp-exp__role">{{ exp.role }}</h3>
            <ul class="bp-exp__tags">
              <li v-for="tag in exp.tags" :key="tag" class="bp-exp__tag">{{ tag }}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Marquee Strip -->
    <div class="bp-marquee" aria-hidden="true">
      <div class="bp-marquee__track">
        <span v-for="n in 10" :key="n">PHOTOGRAPHY &nbsp;&nbsp;·&nbsp;&nbsp; VISUAL ART &nbsp;&nbsp;·&nbsp;&nbsp; STREET &nbsp;&nbsp;·&nbsp;&nbsp; PORTRAIT &nbsp;&nbsp;·&nbsp;&nbsp; URBAN &nbsp;&nbsp;·&nbsp;&nbsp;</span>
      </div>
    </div>

    <!-- About Section -->
    <section id="about" class="bp-about">
      <div class="bp-about__left">
        <div class="bp-about__img-wrap">
          <img src="./assets/binoey/portrait.png" alt="Binoey" class="bp-about__img" />
          <div class="bp-about__img-border"></div>
        </div>
      </div>
      <div class="bp-about__right">
        <span class="bp-section-header__label">About Me</span>
        <h2 class="bp-about__title">The Creative Behind The Brand</h2>
        <p class="bp-about__bio">
          I'm Binoy P Benny — a Creative Designer with a passion for building bold visual identities. From branding
          campaigns to social media storytelling, I bring ideas to life with precision and intention.
        </p>
        <p class="bp-about__bio">
          Born on 30 March 1999, I hold a BBA from Mar Augustine College, Ramapuram. Music, movies, and photography
          fuel my creative perspective — and the ability to stay calm under pressure keeps my work sharp.
        </p>
        <div class="bp-about__meta">
          <div class="bp-about__meta-row"><span>DOB</span><span>30th March 1999</span></div>
          <div class="bp-about__meta-row"><span>Location</span><span>Kerala, India</span></div>
          <div class="bp-about__meta-row"><span>Phone</span><span>+91 79946 67034</span></div>
          <div class="bp-about__meta-row"><span>Education</span><span>BBA — Mar Augustine College</span></div>
        </div>
        <div class="bp-about__stats">
          <div class="bp-about__stat">
            <span class="bp-about__stat-num">03</span>
            <span class="bp-about__stat-label">Companies</span>
          </div>
          <div class="bp-about__stat">
            <span class="bp-about__stat-num">5+</span>
            <span class="bp-about__stat-label">Years Experience</span>
          </div>
          <div class="bp-about__stat">
            <span class="bp-about__stat-num">∞</span>
            <span class="bp-about__stat-label">Ideas Created</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured / Full-Bleed Image -->
    <section class="bp-feature">
      <img src="./assets/binoey/night.png" alt="Feature" class="bp-feature__img" />
      <div class="bp-feature__caption">
        <span class="bp-feature__caption-text">Photography — one of my passions.</span>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="bp-contact">
      <div class="bp-contact__inner">
        <span class="bp-section-header__label">Get In Touch</span>
        <h2 class="bp-contact__title">Let's Create<br /><em>Something Together</em></h2>
        <p class="bp-contact__sub">Open for branding, design work &amp; collaborations. Based in Kerala, India.</p>
        <a href="mailto:binoypbenny8@gmail.com" class="bp-contact__email">binoypbenny8@gmail.com</a>
        <a href="tel:+917994667034" class="bp-contact__phone">+91 79946 67034</a>
        <div class="bp-contact__socials">
          <a href="#" class="bp-contact__social">Instagram</a>
          <span class="bp-contact__social-sep">·</span>
          <a href="#" class="bp-contact__social">Behance</a>
          <span class="bp-contact__social-sep">·</span>
          <a href="#" class="bp-contact__social">LinkedIn</a>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bp-footer">
      <span class="bp-footer__copy">© 2025 Binoy P Benny. All Rights Reserved.</span>
      <span class="bp-footer__made">Creative Designer · Kerala, India</span>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import heroImg   from './assets/binoey/hero.png'
import portraitImg from './assets/binoey/portrait.png'
import urbanImg  from './assets/binoey/urban.png'
import nightImg  from './assets/binoey/night.png'

const cursor    = ref({ x: -100, y: -100 })
const scrolled  = ref(false)
const hoveredCard = ref(null)

const workSeries = [
  { title: 'Branding',       sub: 'Identity & Logo Design',     img: portraitImg, wide: false },
  { title: 'Advertising',    sub: 'Campaign Visuals & Posters', img: urbanImg,    wide: true  },
  { title: 'Social Media',   sub: 'Digital Content Design',     img: nightImg,    wide: false },
  { title: 'Photography',    sub: 'Visual Storytelling',        img: heroImg,     wide: false },
]

const experiences = [
  {
    company: 'T S K Design Hub',
    role: 'Graphic Designer',
    tags: ['Branding', 'Advertising']
  },
  {
    company: 'M I C E',
    role: 'Graphic Designer',
    tags: ['Branding', 'Advertising']
  },
  {
    company: 'Koolath Ads',
    role: 'Graphic Designer',
    tags: ['Social Media Poster Design', 'Logo Design', 'Company Branding']
  },
]

function onMouseMove(e) {
  cursor.value = { x: e.clientX, y: e.clientY }
}

function scrollTo(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

function onScroll() {
  scrolled.value = window.scrollY > 60
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
})
onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<style scoped>
/* ─── Reset & Root ─────────────────────────────────────── */
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@200;300;400;600;700;900&family=EB+Garamond:ital,wght@0,400;0,600;1,400&display=swap');

.bp-root {
  --black: #000000;
  --white: #ffffff;
  --gray:  #888888;
  --light-gray: #cccccc;
  --accent: #e8e0d0;
  background: var(--black);
  color: var(--white);
  font-family: 'Outfit', sans-serif;
  cursor: none;
  overflow-x: hidden;
}

/* ─── Custom Cursor ────────────────────────────────────── */
.bp-cursor {
  position: fixed;
  width: 36px;
  height: 36px;
  border: 1px solid rgba(255,255,255,0.5);
  border-radius: 50%;
  pointer-events: none;
  transform: translate(-50%, -50%);
  transition: transform 0.12s ease, width 0.2s ease, height 0.2s ease, opacity 0.2s ease;
  z-index: 9998;
  mix-blend-mode: difference;
}
.bp-cursor-dot {
  position: fixed;
  width: 5px;
  height: 5px;
  background: var(--white);
  border-radius: 50%;
  pointer-events: none;
  transform: translate(-50%, -50%);
  z-index: 9999;
  transition: transform 0.04s linear;
  mix-blend-mode: difference;
}

/* ─── NAV ──────────────────────────────────────────────── */
.bp-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 28px 48px;
  transition: padding 0.4s ease, background 0.4s ease;
}
.bp-nav--scrolled {
  padding: 18px 48px;
  background: rgba(0,0,0,0.85);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(255,255,255,0.06);
}
.bp-nav__logo {
  font-family: 'Outfit', sans-serif;
  font-weight: 700;
  font-size: 1.05rem;
  letter-spacing: 0.35em;
  cursor: none;
  color: var(--white);
  text-transform: uppercase;
  transition: opacity 0.2s;
}
.bp-nav__logo:hover { opacity: 0.6; }
.bp-nav__links {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 36px;
}
.bp-nav__links li a {
  font-size: 0.72rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--light-gray);
  text-decoration: none;
  cursor: none;
  transition: color 0.25s;
  position: relative;
}
.bp-nav__links li a::after {
  content: '';
  position: absolute;
  bottom: -3px;
  left: 0;
  width: 0;
  height: 1px;
  background: var(--white);
  transition: width 0.3s ease;
}
.bp-nav__links li a:hover { color: var(--white); }
.bp-nav__links li a:hover::after { width: 100%; }

/* ─── HERO ─────────────────────────────────────────────── */
.bp-hero {
  position: relative;
  width: 100%;
  height: 100vh;
  min-height: 600px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  overflow: hidden;
}
.bp-hero__bg {
  position: absolute;
  inset: 0;
  overflow: hidden;
}
.bp-hero__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  filter: brightness(0.55);
  transform: scale(1.04);
  animation: heroZoom 18s ease-in-out infinite alternate;
}
@keyframes heroZoom {
  from { transform: scale(1.04); }
  to   { transform: scale(1.12); }
}
.bp-hero__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(0,0,0,0.92) 0%,
    rgba(0,0,0,0.4) 50%,
    rgba(0,0,0,0.15) 100%
  );
}
.bp-hero__content {
  position: relative;
  z-index: 2;
  padding: 0 60px 100px;
  max-width: 800px;
}
.bp-hero__eyebrow {
  font-size: 0.72rem;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: var(--accent);
  margin: 0 0 20px;
  opacity: 0;
  animation: fadeUp 1s 0.4s forwards;
}
.bp-hero__name {
  margin: 0 0 16px;
  overflow: hidden;
}
.bp-hero__name-line {
  display: block;
  font-family: 'Outfit', sans-serif;
  font-weight: 900;
  font-size: clamp(5rem, 14vw, 13rem);
  line-height: 0.88;
  letter-spacing: -0.02em;
  color: var(--white);
  opacity: 0;
  transform: translateY(60px);
  animation: slideUp 1s 0.2s cubic-bezier(0.16,1,0.3,1) forwards;
}
.bp-hero__subtitle {
  font-size: 0.78rem;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: var(--gray);
  margin: 0 0 40px;
  opacity: 0;
  animation: fadeUp 1s 0.7s forwards;
}
.bp-hero__cta {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  border: 1px solid rgba(255,255,255,0.3);
  background: transparent;
  color: var(--white);
  font-family: 'Outfit', sans-serif;
  font-size: 0.72rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  padding: 14px 28px;
  cursor: none;
  opacity: 0;
  transition: background 0.3s ease, border-color 0.3s ease;
  animation: fadeUp 1s 0.9s forwards;
}
.bp-hero__cta:hover {
  background: rgba(255,255,255,0.08);
  border-color: rgba(255,255,255,0.6);
}
.bp-hero__scroll-hint {
  position: absolute;
  bottom: 40px;
  right: 48px;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  opacity: 0.5;
  animation: fadeUp 1.5s 1.5s forwards;
}
.bp-hero__scroll-line {
  width: 1px;
  height: 64px;
  background: linear-gradient(to bottom, var(--white) 0%, transparent 100%);
  animation: scrollPulse 2s ease-in-out infinite;
}
@keyframes scrollPulse {
  0%   { opacity: 1; transform: scaleY(1); transform-origin: top; }
  50%  { opacity: 0.4; }
  100% { opacity: 1; transform: scaleY(1); transform-origin: top; }
}
.bp-hero__scroll-hint span {
  font-size: 0.6rem;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  writing-mode: vertical-rl;
  color: var(--light-gray);
}

/* ─── WORK / SERIES ────────────────────────────────────── */
.bp-work {
  padding: 120px 48px;
}
.bp-section-header {
  margin-bottom: 64px;
}
.bp-section-header__label {
  display: block;
  font-size: 0.65rem;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: var(--gray);
  margin-bottom: 14px;
}
.bp-section-header__title {
  font-family: 'EB Garamond', serif;
  font-size: clamp(2.5rem, 5vw, 4.5rem);
  font-weight: 400;
  margin: 0;
  color: var(--white);
  line-height: 1.1;
}
.bp-work__grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto auto;
  gap: 20px;
}
.bp-work__card {
  position: relative;
  overflow: hidden;
  cursor: none;
  grid-column: span 4;
}
.bp-work__card--wide {
  grid-column: span 8;
}
.bp-work__card-img-wrap {
  position: relative;
  width: 100%;
  padding-top: 126%;
  overflow: hidden;
}
.bp-work__card--wide .bp-work__card-img-wrap {
  padding-top: 62%;
}
.bp-work__card-img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(100%) brightness(0.75);
  transition: transform 0.8s cubic-bezier(0.16,1,0.3,1), filter 0.6s ease;
}
.bp-work__card:hover .bp-work__card-img {
  transform: scale(1.06);
  filter: grayscale(60%) brightness(0.65);
}
.bp-work__card-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 60%);
  opacity: 0.6;
  transition: opacity 0.5s ease;
}
.bp-work__card-overlay--active {
  opacity: 1;
}
.bp-work__card-info {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 28px 24px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.bp-work__card-index {
  font-size: 0.6rem;
  letter-spacing: 0.25em;
  color: var(--gray);
}
.bp-work__card-title {
  font-family: 'Outfit', sans-serif;
  font-weight: 600;
  font-size: clamp(1.1rem, 2vw, 1.5rem);
  margin: 0;
  color: var(--white);
  letter-spacing: 0.03em;
}
.bp-work__card-sub {
  font-size: 0.72rem;
  color: var(--light-gray);
  margin: 0;
  letter-spacing: 0.1em;
}
.bp-work__card-arrow {
  display: block;
  font-size: 1.2rem;
  color: var(--white);
  margin-top: 6px;
  transform: translateX(-8px);
  opacity: 0;
  transition: transform 0.35s ease, opacity 0.35s ease;
}
.bp-work__card:hover .bp-work__card-arrow {
  transform: translateX(0);
  opacity: 1;
}

/* ─── MARQUEE ──────────────────────────────────────────── */
.bp-marquee {
  overflow: hidden;
  border-top: 1px solid rgba(255,255,255,0.08);
  border-bottom: 1px solid rgba(255,255,255,0.08);
  padding: 18px 0;
  white-space: nowrap;
}
.bp-marquee__track {
  display: inline-block;
  animation: marquee 28s linear infinite;
  font-size: 0.65rem;
  letter-spacing: 0.25em;
  color: var(--gray);
  text-transform: uppercase;
}
@keyframes marquee {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}

/* ─── ABOUT ────────────────────────────────────────────── */
.bp-about {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  padding: 120px 48px;
  align-items: center;
}
.bp-about__img-wrap {
  position: relative;
  display: inline-block;
}
.bp-about__img {
  width: 100%;
  display: block;
  filter: grayscale(100%) brightness(0.8);
}
.bp-about__img-border {
  position: absolute;
  inset: -14px -14px;
  border: 1px solid rgba(255,255,255,0.12);
  pointer-events: none;
}
.bp-about__title {
  font-family: 'EB Garamond', serif;
  font-size: clamp(2rem, 3.5vw, 3.2rem);
  font-weight: 400;
  margin: 16px 0 28px;
  line-height: 1.2;
}
.bp-about__bio {
  font-size: 0.95rem;
  color: var(--light-gray);
  line-height: 1.85;
  margin: 0 0 18px;
  font-weight: 300;
}
.bp-about__stats {
  display: flex;
  gap: 40px;
  margin-top: 48px;
  padding-top: 40px;
  border-top: 1px solid rgba(255,255,255,0.1);
}
.bp-about__stat {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.bp-about__stat-num {
  font-size: 2.2rem;
  font-weight: 700;
  letter-spacing: -0.02em;
}
.bp-about__stat-label {
  font-size: 0.65rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--gray);
}

/* ─── FEATURE ──────────────────────────────────────────── */
.bp-feature {
  position: relative;
  width: 100%;
  height: 70vh;
  overflow: hidden;
}
.bp-feature__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.5) grayscale(20%);
  transform: scale(1.02);
}
.bp-feature__caption {
  position: absolute;
  bottom: 36px;
  right: 48px;
}
.bp-feature__caption-text {
  font-size: 0.65rem;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: var(--light-gray);
}

/* ─── CONTACT ──────────────────────────────────────────── */
.bp-contact {
  padding: 140px 48px;
  text-align: center;
  position: relative;
  overflow: hidden;
}
.bp-contact::before {
  content: 'BINOY';
  position: absolute;
  font-size: clamp(100px, 22vw, 280px);
  font-weight: 900;
  color: rgba(255,255,255,0.025);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  white-space: nowrap;
  pointer-events: none;
  letter-spacing: -0.02em;
  user-select: none;
}
.bp-contact__inner {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.bp-contact__title {
  font-family: 'EB Garamond', serif;
  font-size: clamp(2.5rem, 5.5vw, 5.5rem);
  font-weight: 400;
  margin: 18px 0 24px;
  line-height: 1.15;
}
.bp-contact__title em {
  font-style: italic;
  color: var(--accent);
}
.bp-contact__sub {
  font-size: 0.85rem;
  color: var(--gray);
  letter-spacing: 0.08em;
  margin: 0 0 48px;
}
.bp-contact__email {
  display: inline-block;
  font-family: 'Outfit', sans-serif;
  font-size: clamp(1.1rem, 2.5vw, 2rem);
  font-weight: 300;
  color: var(--white);
  text-decoration: none;
  letter-spacing: 0.05em;
  border-bottom: 1px solid rgba(255,255,255,0.25);
  padding-bottom: 6px;
  transition: border-color 0.3s, color 0.3s;
  cursor: none;
}
.bp-contact__email:hover {
  color: var(--accent);
  border-color: var(--accent);
}
.bp-contact__socials {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-top: 52px;
}
.bp-contact__social {
  font-size: 0.65rem;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: var(--gray);
  text-decoration: none;
  cursor: none;
  transition: color 0.25s;
}
.bp-contact__social:hover { color: var(--white); }
.bp-contact__social-sep {
  color: rgba(255,255,255,0.2);
}

/* ─── FOOTER ───────────────────────────────────────────── */
.bp-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 48px;
  border-top: 1px solid rgba(255,255,255,0.07);
}
.bp-footer__copy,
.bp-footer__made {
  font-size: 0.65rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--gray);
}

/* ─── Keyframe Animations ──────────────────────────────── */
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
}
@keyframes slideUp {
  from { opacity: 0; transform: translateY(60px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* ─── Responsive ───────────────────────────────────────── */
@media (max-width: 900px) {
  .bp-nav { padding: 20px 24px; }
  .bp-nav--scrolled { padding: 14px 24px; }
  .bp-hero__content { padding: 0 24px 80px; }
  .bp-work { padding: 80px 24px; }
  .bp-work__grid { grid-template-columns: 1fr 1fr; }
  .bp-work__card { grid-column: span 1 !important; }
  .bp-about { grid-template-columns: 1fr; padding: 80px 24px; }
  .bp-contact { padding: 100px 24px; }
  .bp-footer { flex-direction: column; gap: 8px; padding: 20px 24px; }
}

@media (max-width: 600px) {
  .bp-work__grid { grid-template-columns: 1fr; }
  .bp-about__stats { flex-wrap: wrap; gap: 24px; }
  .bp-nav__links { gap: 20px; }
}

/* ─── Experience Section ───────────────────────────────── */
.bp-experience {
  padding: 100px 48px;
  border-top: 1px solid rgba(255,255,255,0.07);
}
.bp-exp__list {
  display: flex;
  flex-direction: column;
  gap: 0;
}
.bp-exp__item {
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 40px;
  padding: 36px 0;
  border-bottom: 1px solid rgba(255,255,255,0.07);
  align-items: center;
  transition: background 0.3s;
}
.bp-exp__item:hover {
  background: rgba(255,255,255,0.02);
  padding-left: 12px;
  padding-right: 12px;
  margin-left: -12px;
  margin-right: -12px;
  border-radius: 4px;
}
.bp-exp__left {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.bp-exp__index {
  font-size: 0.6rem;
  letter-spacing: 0.25em;
  color: var(--gray);
}
.bp-exp__company {
  font-size: 0.75rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--light-gray);
}
.bp-exp__right {
  display: flex;
  align-items: center;
  gap: 32px;
  flex-wrap: wrap;
}
.bp-exp__role {
  font-family: 'EB Garamond', serif;
  font-size: clamp(1.3rem, 2.5vw, 2rem);
  font-weight: 400;
  margin: 0;
  color: var(--white);
  flex-shrink: 0;
}
.bp-exp__tags {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}
.bp-exp__tag {
  font-size: 0.6rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--gray);
  border: 1px solid rgba(255,255,255,0.12);
  padding: 5px 12px;
}

/* ─── About Meta ───────────────────────────────────────── */
.bp-about__meta {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin: 28px 0;
  padding: 28px 0;
  border-top: 1px solid rgba(255,255,255,0.08);
  border-bottom: 1px solid rgba(255,255,255,0.08);
}
.bp-about__meta-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.bp-about__meta-row span:first-child {
  font-size: 0.63rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--gray);
}
.bp-about__meta-row span:last-child {
  font-size: 0.85rem;
  color: var(--light-gray);
  letter-spacing: 0.05em;
}

/* ─── Contact Phone ────────────────────────────────────── */
.bp-contact__phone {
  display: block;
  font-size: 0.85rem;
  color: var(--gray);
  text-decoration: none;
  letter-spacing: 0.15em;
  margin-top: 14px;
  cursor: none;
  transition: color 0.25s;
}
.bp-contact__phone:hover { color: var(--white); }

@media (max-width: 900px) {
  .bp-experience { padding: 80px 24px; }
  .bp-exp__item { grid-template-columns: 1fr; gap: 12px; }
}
</style>
