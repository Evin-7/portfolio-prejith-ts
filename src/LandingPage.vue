<template>
  <div class="womens-forum-page">
    <header />
    <homePage />
  </div>
</template>

<script>
import homePage from "./Appclothshop.vue";
import header from "./HaaderPage.vue";
export default {
  name: 'WomensForumPage',
  data() {
    return {
      scrollY: 0,
      mouseX: 0,
      mouseY: 0,
      leaders: [
        {
          name: 'Grace Mathew',
          position: 'Forum President',
          description: 'Leading with compassion and dedication, Grace brings over 15 years of ministry experience to strengthen our community.'
        },
        {
          name: 'Elizabeth Samuel',
          position: 'Vice President',
          description: 'Supporting our mission with enthusiasm and organizational excellence, ensuring every member feels valued.'
        },
        {
          name: 'Anna George',
          position: 'Secretary',
          description: 'Ensuring smooth communication and coordination of all activities with attention to detail and care.'
        },
        {
          name: 'Rebecca David',
          position: 'Treasurer',
          description: 'Managing resources with transparency and accountability, stewarding our community\'s financial wellbeing.'
        }
      ]
    };
  },
  components: {
    homePage,
    header
  },
  computed: {
    gradientStyle() {
      return {
        background: `radial-gradient(circle 600px at ${this.mouseX}px ${this.mouseY}px, 
          rgba(155, 126, 189, 0.4), 
          rgba(212, 181, 232, 0.3) 40%, 
          transparent 70%)`
      }
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.scrollY = window.scrollY;
    },
    handleMouseMove(event) {
      const rect = this.$refs.heroParallax.getBoundingClientRect();
      this.mouseX = event.clientX - rect.left;
      this.mouseY = event.clientY - rect.top;
    }
  }
};
</script>

<style scoped>
/* ========== FONT IMPORT ========== */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&family=Lora:wght@600;700&display=swap');

/* ========== GLOBAL STYLES ========== */
.womens-forum-page {
  font-family: 'Poppins', sans-serif;
  background: #ffffff;
  overflow-x: hidden;
}

.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* ========== HERO SECTION WITH PARALLAX & INTERACTIVE MOUSE ========== */
.hero-section {
  position: relative;
  height: 100vh;
  min-height: 650px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.hero-background {
  position: absolute;
  top: -50%;
  left: 0;
  right: 0;
  height: 150%;
  background: linear-gradient(135deg,
      #E8DCEE 0%,
      #F5F0FA 25%,
      #D4B5E8 50%,
      #C8A8E0 75%,
      #9B7EBD 100%);
  will-change: transform;
  transition: background 0.3s ease;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 20% 30%, rgba(124, 82, 149, 0.15) 0%, transparent 50%),
    radial-gradient(circle at 80% 70%, rgba(155, 126, 189, 0.2) 0%, transparent 50%);
  pointer-events: none;
}

/* Interactive gradient layer that follows mouse */
.interactive-gradient {
  position: absolute;
  inset: 0;
  pointer-events: none;
  transition: background 0.15s ease-out;
  z-index: 1;
  mix-blend-mode: overlay;
}

.hero-content {
  position: relative;
  z-index: 2;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.7rem 1.8rem;
  background: rgba(255, 255, 255, 0.95);
  border: 2px solid #9B7EBD;
  border-radius: 50px;
  font-size: 0.875rem;
  font-weight: 600;
  color: #7C5295;
  margin-bottom: 2rem;
  box-shadow: 0 4px 20px rgba(155, 126, 189, 0.25);
  transition: all 0.3s ease;
  animation: fadeInDown 0.8s ease-out;
  backdrop-filter: blur(10px);
}

.hero-badge:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 30px rgba(155, 126, 189, 0.4);
}

.hero-title {
  font-family: 'Lora', serif;
  font-size: clamp(2.5rem, 7vw, 5rem);
  font-weight: 700;
  background: linear-gradient(135deg, #3D2C52 0%, #7C5295 50%, #9B7EBD 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1.5rem;
  letter-spacing: -0.02em;
  line-height: 1.2;
  animation: slideUp 0.8s ease-out 0.2s backwards;
}

.hero-subtitle {
  font-size: 1.5rem;
  color: #3D2C52;
  line-height: 1.7;
  animation: fadeUp 0.8s ease-out 0.4s backwards;
  text-shadow: 0 2px 10px rgba(255, 255, 255, 0.5);
}

.scroll-indicator {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  animation: bounce 2s infinite;
  z-index: 3;
  filter: drop-shadow(0 2px 8px rgba(155, 126, 189, 0.5));
}

@keyframes bounce {

  0%,
  100% {
    transform: translateX(-50%) translateY(0);
  }

  50% {
    transform: translateX(-50%) translateY(-10px);
  }
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* ========== SECTION STYLES ========== */
.section-badge {
  display: inline-block;
  padding: 0.5rem 1.5rem;
  background: rgba(155, 126, 189, 0.1);
  border: 2px solid #9B7EBD;
  border-radius: 50px;
  font-size: 0.875rem;
  font-weight: 700;
  color: #9B7EBD;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.section-title {
  font-family: 'Lora', serif;
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  color: #6B4E8C;
  margin-bottom: 1rem;
}

.title-underline {
  width: 100px;
  height: 4px;
  background: linear-gradient(90deg, #9B7EBD, #D4B5E8);
  border-radius: 2px;
  margin-bottom: 2rem;
}

.title-underline.centered {
  margin-left: auto;
  margin-right: auto;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

/* ========== ABOUT SECTION ========== */
.about-section {
  padding: 6rem 0;
  background: white;
}

.about-wrapper {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 4rem;
  align-items: center;
}

.image-frame {
  position: relative;
  border-radius: 24px;
  overflow: hidden;
}

.image-placeholder {
  width: 100%;
  aspect-ratio: 1;
  background: linear-gradient(135deg, #F5EBFF 0%, #E8D5F2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid #9B7EBD;
  border-radius: 24px;
}

.about-paragraph {
  font-size: 1.0625rem;
  color: #4a5568;
  line-height: 1.8;
  margin-bottom: 1.5rem;
}

.quick-stats {
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-top: 3rem;
  padding: 2rem;
  background: linear-gradient(135deg, #F5EBFF 0%, #E8D5F2 100%);
  border-radius: 20px;
  border: 2px solid rgba(155, 126, 189, 0.2);
}

.stat-item {
  flex: 1;
  text-align: center;
}

.stat-number {
  font-family: 'Lora', serif;
  font-size: 2.5rem;
  font-weight: 700;
  color: #9B7EBD;
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 0.875rem;
  color: #7B5FA0;
  font-weight: 600;
}

.stat-divider {
  width: 1px;
  height: 50px;
  background: rgba(155, 126, 189, 0.3);
}

/* ========== PARALLAX DIVIDER ========== */
.parallax-divider {
  position: relative;
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(135deg, #9B7EBD 0%, #7B5FA0 100%);
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  overflow: hidden;
}

.parallax-overlay {
  position: absolute;
  inset: 0;
  background: rgba(107, 78, 140, 0.7);
}

.parallax-content {
  position: relative;
  z-index: 2;
  text-align: center;
  max-width: 800px;
  padding: 0 2rem;
  color: white;
}

.parallax-quote {
  font-family: 'Lora', serif;
  font-size: clamp(1.75rem, 4vw, 2.75rem);
  font-weight: 700;
  line-height: 1.4;
  margin: 2rem 0 1.5rem;
  font-style: italic;
}

.parallax-reference {
  font-size: 1.125rem;
  opacity: 0.9;
  font-weight: 500;
}

/* ========== MISSION SECTION ========== */
.mission-section {
  padding: 6rem 0;
  background: linear-gradient(135deg, #F5EBFF 0%, white 100%);
}

.mission-wrapper {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 4rem;
  max-width: 1100px;
  margin: 0 auto;
}

.mission-block {
  text-align: center;
}

.mission-icon {
  margin-bottom: 1.5rem;
}

.mission-title {
  font-family: 'Lora', serif;
  font-size: 2rem;
  font-weight: 700;
  color: #6B4E8C;
  margin-bottom: 1.5rem;
}

.mission-text {
  font-size: 1.0625rem;
  color: #4a5568;
  line-height: 1.8;
  text-align: left;
}

/* ========== ACTIVITIES SECTION ========== */
.activities-section {
  padding: 6rem 0;
  background: white;
}

.activities-content {
  max-width: 1000px;
  margin: 0 auto;
}

.activity-row {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 2rem;
  margin-bottom: 3rem;
  padding: 2.5rem;
  background: linear-gradient(135deg, #FFFFFF 0%, #F5EBFF 100%);
  border-radius: 20px;
  border: 2px solid rgba(155, 126, 189, 0.15);
  transition: all 0.3s ease;
}

.activity-row:hover {
  transform: translateX(10px);
  box-shadow: 0 10px 40px rgba(155, 126, 189, 0.15);
  border-color: #9B7EBD;
}

.activity-row:last-child {
  margin-bottom: 0;
}

.activity-icon-box {
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  border-radius: 20px;
  border: 2px solid #9B7EBD;
  flex-shrink: 0;
}

.activity-title {
  font-family: 'Lora', serif;
  font-size: 1.5rem;
  font-weight: 700;
  color: #6B4E8C;
  margin-bottom: 1rem;
}

.activity-description {
  font-size: 1.0625rem;
  color: #4a5568;
  line-height: 1.8;
}

/* ========== LEADERSHIP SECTION ========== */
.leadership-section {
  padding: 6rem 0;
  background: linear-gradient(135deg, #F5EBFF 0%, white 100%);
}

.leadership-intro {
  font-size: 1.125rem;
  color: #4a5568;
  line-height: 1.8;
  text-align: center;
  max-width: 800px;
  margin: 0 auto 4rem;
}

.leaders-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2.5rem;
}

.leader-card {
  text-align: center;
  padding: 2.5rem 2rem;
  background: white;
  border-radius: 20px;
  border: 2px solid rgba(155, 126, 189, 0.15);
  transition: all 0.3s ease;
}

.leader-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 15px 40px rgba(155, 126, 189, 0.2);
  border-color: #9B7EBD;
}

.leader-image {
  margin-bottom: 1.5rem;
}

.leader-name {
  font-family: 'Lora', serif;
  font-size: 1.25rem;
  font-weight: 700;
  color: #6B4E8C;
  margin-bottom: 0.5rem;
}

.leader-position {
  font-size: 0.9375rem;
  color: #9B7EBD;
  font-weight: 600;
  margin-bottom: 1rem;
}

.leader-bio {
  font-size: 0.9375rem;
  color: #4a5568;
  line-height: 1.7;
}

/* ========== CONTACT PARALLAX ========== */
.contact-parallax {
  position: relative;
  min-height: 500px;
  display: flex;
  align-items: center;
  background-image: linear-gradient(135deg, #9B7EBD 0%, #6B4E8C 100%);
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  overflow: hidden;
}

.contact-overlay {
  position: absolute;
  inset: 0;
  background: rgba(107, 78, 140, 0.85);
}

.contact-content {
  position: relative;
  z-index: 2;
  text-align: center;
  max-width: 700px;
  margin: 0 auto;
}

.contact-title {
  font-family: 'Lora', serif;
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 700;
  color: white;
  margin: 2rem 0 1.5rem;
}

.contact-text {
  font-size: 1.125rem;
  color: white;
  line-height: 1.8;
  margin-bottom: 3rem;
  opacity: 0.95;
}

.contact-info {
  display: flex;
  gap: 3rem;
  justify-content: center;
  flex-wrap: wrap;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  color: white;
  font-size: 1.125rem;
  font-weight: 500;
}

/* ========== RESPONSIVE DESIGN ========== */
@media (max-width: 1024px) {
  .about-wrapper {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .mission-wrapper {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .leaders-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .container {
    padding: 0 1.5rem;
  }

  .hero-title {
    font-size: 2.5rem;
  }

  .hero-subtitle {
    font-size: 1.125rem;
  }

  .quick-stats {
    flex-direction: column;
    gap: 1.5rem;
  }

  .stat-divider {
    width: 60px;
    height: 1px;
  }

  .activity-row {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .activity-icon-box {
    margin: 0 auto;
  }

  .leaders-grid {
    grid-template-columns: 1fr;
    max-width: 400px;
    margin: 0 auto;
  }

  .contact-info {
    flex-direction: column;
    gap: 1.5rem;
  }
}

@media (max-width: 480px) {

  .about-section,
  .mission-section,
  .activities-section,
  .leadership-section {
    padding: 4rem 0;
  }

  .activity-row {
    padding: 2rem 1.5rem;
  }

  .leader-card {
    padding: 2rem 1.5rem;
  }
}

/* ========== SMOOTH SCROLLING ========== */
html {
  scroll-behavior: smooth;
}

/* ========== SELECTION STYLES ========== */
::selection {
  background: #9B7EBD;
  color: white;
}
</style>