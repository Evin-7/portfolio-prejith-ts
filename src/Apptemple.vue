<template>
  <div id="app" class="temple-app">
    <!-- Loader -->
    <div v-if="isLoading" class="loader">
      <div class="om-symbol">🕉️</div>
      <div class="loader-text">Loading Divinity...</div>
    </div>

    <!-- Header/Navigation -->
    <header class="header" :class="{ 'scrolled': isScrolled }">
      <div class="container nav-container">
        <div class="logo">
          <div class="logo-text">
            <span class="logo-subtitle">Sree</span>
            <h1>Annapoorneshwary</h1>
          </div>
        </div>

        <nav class="nav-links desktop-nav">
          <a href="#home" @click.prevent="scrollTo('home')">Home</a>
          <a href="#about" @click.prevent="scrollTo('about')">History</a>
          <a href="#poojas" @click.prevent="scrollTo('poojas')">Offerings</a>
          <a href="#gallery" @click.prevent="scrollTo('gallery')">Gallery</a>
          <a href="#contact" @click.prevent="scrollTo('contact')" class="btn-contact">Plan Visit</a>
        </nav>

        <button class="menu-toggle" @click="toggleDrawer" aria-label="Toggle menu">
          <span class="bar"></span>
          <span class="bar"></span>
        </button>
      </div>
    </header>

    <!-- Mobile Drawer -->
    <div class="drawer-overlay" :class="{ 'active': drawerOpen }" @click="closeDrawer"></div>
    <nav class="drawer" :class="{ 'open': drawerOpen }">
      <div class="drawer-header">
        <h2>Menu</h2>
        <button class="drawer-close" @click="closeDrawer">&times;</button>
      </div>
      <div class="drawer-links">
        <a href="#home" @click="handleMobileClick('home')">Home</a>
        <a href="#about" @click="handleMobileClick('about')">History</a>
        <a href="#poojas" @click="handleMobileClick('poojas')">Offerings</a>
        <a href="#gallery" @click="handleMobileClick('gallery')">Gallery</a>
        <a href="#contact" @click="handleMobileClick('contact')">Plan Visit</a>
      </div>
    </nav>

    <!-- Hero Section -->
    <section id="home" class="hero">
      <div class="hero-bg">
        <img src="./assets/images/hero_temple.png" alt="Temple Sanctum" class="hero-image" />
        <div class="hero-overlay"></div>
      </div>
      
      <div class="hero-content">
        <div class="ornament-divider">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9L12 2Z" fill="#D4AF37" stroke="none"/>
          </svg>
        </div>
        
        <h2 class="welcome-text">The Divine Abode of</h2>
        <h1 class="main-title">
          <span>Sree Annapoorneshwary</span>
          <span class="sub-title">Bhadrakali Gurudeva Temple</span>
        </h1>
        
        <div class="sloka-container">
          <p class="sloka-text">
            "Annapoorne Sadapoorne Shankara Prana Vallabhe<br>
            Jnana Vairagya Sidhyartham Bhiksham Dehi Cha Parvati"
          </p>
        </div>
        
        <div class="hero-actions">
          <button class="btn-primary" @click="scrollTo('poojas')">Offer Prayers</button>
          <button class="btn-secondary-hero" @click="scrollTo('about')">Read History</button>
        </div>
      </div>
      
      <div class="scroll-down">
        <span>Scroll</span>
        <div class="line"></div>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="about section-padding">
      <div class="container">
        <div class="section-title">
          <span class="section-subtitle">Sacred Origins</span>
          <h2>A Legacy of Faith</h2>
          <div class="title-separator"></div>
        </div>
        
        <div class="about-grid">
          <div class="about-image-wrapper" data-aos="fade-right">
            <div class="image-frame">
              <img src="./assets/images/deviimage.jpg" alt="Deity" class="deity-img" />
              <div class="frame-border"></div>
            </div>
          </div>
          
          <div class="about-content" data-aos="fade-left">
            <p class="drop-cap">
              Nestled in the serene hills of Vellaramkunnu, Sree Annapoorneshwary Bhadrakali Gurudeva Temple 
              stands as a beacon of spirituality. It is not merely a structure of stone, but a living testament 
              to the Goddess of Nourishment and the Protector Mother.
            </p>
            <p>
              Devotees from across the land journey here to find inner tranquility. The architecture mirrors 
              ancient Vaastu traditions, channeling cosmic energy into a powerful field of peace. Every stone 
              whispers tales of devotion, and every ritual connects the soul to the divine.
            </p>
            
            <div class="features-list">
              <div class="feature-item">
                <span class="feature-icon">✨</span>
                <div class="feature-text">
                  <h3>Ancient Rituals</h3>
                  <p>Preserving Vedic traditions.</p>
                </div>
              </div>
              <div class="feature-item">
                <span class="feature-icon">🕊️</span>
                <div class="feature-text">
                  <h3>Divine Serenity</h3>
                  <p>A sanctuary for meditation.</p>
                </div>
              </div>
            </div>

            <button class="btn-text" @click="scrollTo('gallery')">View Temple Gallery &rarr;</button>
          </div>
        </div>
      </div>
    </section>

    <!-- Poojas Section -->
    <section id="poojas" class="poojas section-padding bg-alt">
      <div class="container">
        <div class="section-title">
          <span class="section-subtitle">Divine Offerings</span>
          <h2>Sacred Sevas</h2>
          <div class="title-separator"></div>
        </div>
        
        <div class="poojas-grid">
          <div v-for="(pooja, index) in poojas" :key="pooja.id" class="pooja-card" data-aos="fade-up" :data-aos-delay="index * 100">
            <div class="card-content">
              <div class="pooja-icon">{{ pooja.icon }}</div>
              <h3>{{ pooja.name }}</h3>
              <p>{{ pooja.description }}</p>
              <button class="btn-card">Book Offering</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Gallery Section -->
    <section id="gallery" class="gallery section-padding">
      <div class="container">
        <div class="section-title">
          <span class="section-subtitle">Visual Journey</span>
          <h2>Sanctum Glimpses</h2>
          <div class="title-separator"></div>
        </div>
        
        <div class="gallery-masonry">
          <div v-for="(image, index) in displayedImages" :key="index" class="gallery-item" @click="openLightbox(index)" data-aos="zoom-in">
             <img :src="image.src" :alt="image.alt" loading="lazy" />
             <div class="overlay">
               <span>{{ image.alt }}</span>
             </div>
          </div>
        </div>
        
        <div class="center-btn">
          <button @click="showAllImages = !showAllImages" class="btn-outline">
            {{ showAllImages ? 'View Less' : 'View Full Gallery' }}
          </button>
        </div>
      </div>
    </section>

    <!-- Events Section -->
    <section id="events" class="events section-padding bg-alt">
      <div class="container">
        <div class="section-title">
          <span class="section-subtitle">Holy Calendar</span>
          <h2>Festivals & Events</h2>
          <div class="title-separator"></div>
        </div>
        
        <div class="timeline">
          <div v-for="(event, index) in events" :key="event.id" class="timeline-item" :class="{ 'right': index % 2 !== 0, 'left': index % 2 === 0 }" data-aos="fade-up">
            <div class="timeline-content">
              <span class="event-date">Upcoming</span>
              <h3>{{ event.name }}</h3>
              <p>{{ event.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="contact section-padding">
      <div class="container">
        <div class="contact-layout">
          <div class="contact-info" data-aos="fade-right">
            <h2>Plan Your Visit</h2>
            <p class="contact-desc">We welcome you to experience the divine grace. Please reach out for pooja bookings or travel assistance.</p>
            
            <div class="info-group">
              <div class="info-row">
                <span class="label">Location</span>
                <p>Vellaramkunnu, Kerala, India</p>
              </div>
              <div class="info-row">
                <span class="label">Phone</span>
                <p>+91 8080808080</p>
              </div>
              <div class="info-row">
                <span class="label">Email</span>
                <p>contact@temple.com</p>
              </div>
            </div>
            
            <div class="temple-timings">
              <h3>Darshan Timings</h3>
              <div class="time-table">
                <div class="time-col">
                  <span>Morning</span>
                  <strong>5:30 AM - 10:30 AM</strong>
                </div>
                <div class="time-col">
                  <span>Evening</span>
                  <strong>5:00 PM - 8:30 PM</strong>
                </div>
              </div>
            </div>
          </div>
          
          <div class="map-wrapper" data-aos="fade-left">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1000!2d77.1056275!3d9.6281446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0:0x0!2z9.6281446,77.1056275!5e0!3m2!1sen!2sin!4v0"
              width="100%" 
              height="100%" 
              style="border:0; filter: grayscale(100%) contrast(1.2);" 
              allowfullscreen="" 
              loading="lazy">
            </iframe>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div class="container footer-container">
        <div class="footer-brand">
          <h2>Sree Annapoorneshwary</h2>
          <p>Bhadrakali Gurudeva Temple</p>
        </div>
        <div class="footer-links">
          <a href="#">Facebook</a>
          <span class="dot">•</span>
          <a href="#">Instagram</a>
          <span class="dot">•</span>
          <a href="#">YouTube</a>
        </div>
        <div class="footer-copyright">
          <p>&copy; 2025 All Rights Reserved. May the blessings be with you.</p>
        </div>
      </div>
    </footer>

    <!-- Lightbox -->
    <transition name="fade">
      <div v-if="lightboxOpen" class="lightbox" @click="closeLightbox">
        <button class="lightbox-close">&times;</button>
        <img :src="currentImageSrc" class="lightbox-img" @click.stop />
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import AOS from 'aos';
import 'aos/dist/aos.css';

// State & Data
const isLoading = ref(true);
const isScrolled = ref(false);
const drawerOpen = ref(false);
const activeSection = ref('home');
const scrollY = ref(0);
const showAllImages = ref(false);
const lightboxOpen = ref(false);
const currentImageSrc = ref('');

const poojas = [
  { id: 1, name: 'Ganapathy Homam', icon: '🕉️', description: 'Removes obstacles and paves the way for success.' },
  { id: 2, name: 'Pushpanjali', icon: '🌺', description: 'A gentle floral offering for mental peace and happiness.' },
  { id: 3, name: 'Bhagavati Seva', icon: '🔥', description: 'Powerful evening ritual to appease the Divine Mother.' },
  { id: 4, name: 'Annadanam', icon: '🍚', description: 'The sacred act of nourishing devotees with prasadam.' },
  { id: 5, name: 'Vidyarambham', icon: '📚', description: 'Initiating young minds into the world of letters.' },
  { id: 6, name: 'Thulabharam', icon: '⚖️', description: 'Offering one\'s weight in items as a surrender to God.' },
];

const galleryImages = [
  { src: new URL('./assets/images/templephotos/img6.jpeg', import.meta.url).href, alt: 'Festival Lights' },
  { src: new URL('./assets/images/templephotos/img2.jpeg', import.meta.url).href, alt: 'Inner Sanctum' },
  { src: new URL('./assets/images/templephotos/img3.jpeg', import.meta.url).href, alt: 'Ritual Fire' },
  { src: new URL('./assets/images/templephotos/img4.jpeg', import.meta.url).href, alt: 'Elephant Procession' },
  { src: new URL('./assets/images/templephotos/img5.jpeg', import.meta.url).href, alt: 'Floral Decoration' },
  { src: new URL('./assets/images/templephotos/img1.jpeg', import.meta.url).href, alt: 'Temple at Night' },
  { src: new URL('./assets/images/templephotos/img7.jpeg', import.meta.url).href, alt: 'Devotee Prayers' },
  { src: new URL('./assets/images/templephotos/img8.jpeg', import.meta.url).href, alt: 'Community Gathering' },
];

const events = [
  { id: 1, name: 'Navarathri Mahotsavam', description: 'Nine nights of devotion, music, and dance honoring the Goddess.' },
  { id: 2, name: 'Annual Utsavam', description: 'The grand annual festival spanning 7 days with traditional pageantry.' },
  { id: 3, name: 'Vishu Kani', description: 'Celebrating the New Year with a golden harvest and divine darshan.' },
  { id: 4, name: 'Mandala Pooja', description: 'A 41-day spiritual pilgrimage season marked by austerity.' },
];

const displayedImages = computed(() => {
  return showAllImages.value ? galleryImages : galleryImages.slice(0, 6);
});

// Logic
const handleScroll = () => {
  scrollY.value = window.scrollY;
  isScrolled.value = window.scrollY > 50;
  
  const sections = ['home', 'about', 'poojas', 'gallery', 'events', 'contact'];
  for (const section of sections) {
    const el = document.getElementById(section);
    if (el) {
      const rect = el.getBoundingClientRect();
      if (rect.top <= 150 && rect.bottom >= 150) {
        activeSection.value = section;
      }
    }
  }
};

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
    closeDrawer();
  }
};

const toggleDrawer = () => drawerOpen.value = !drawerOpen.value;
const closeDrawer = () => drawerOpen.value = false;
const handleMobileClick = (id) => scrollTo(id);

const openLightbox = (index) => {
  currentImageSrc.value = displayedImages.value[index].src;
  lightboxOpen.value = true;
};
const closeLightbox = () => lightboxOpen.value = false;

onMounted(() => {
  AOS.init({ duration: 800, once: true });
  window.addEventListener('scroll', handleScroll);
  setTimeout(() => isLoading.value = false, 1500);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700;800&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Poppins:wght@300;400;500;600&display=swap');

:root {
  --primary: #D4AF37; /* Metallic Gold */
  --secondary: #500000; /* Deep Royal Maroon */
  --text-primary: #1A1A1A;
  --text-secondary: #555555;
  --cream-bg: #FCFBF7; /* Paper/Cream */
  --alt-bg: #F5F2EA; /* Slightly darker cream for sections */
  --white: #FFFFFF;
}

/* Global Reset */
.temple-app {
  font-family: 'Poppins', sans-serif;
  color: var(--text-primary);
  background-color: var(--cream-bg);
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
}

h1, h2, h3, h4 {
  font-family: 'Cinzel', serif;
  color: var(--secondary);
  font-weight: 700;
  line-height: 1.2;
}

p {
  line-height: 1.8;
  color: var(--text-secondary);
}

/* Common Section Styles */
.section-padding { padding: 7rem 0; }
.bg-alt { background-color: var(--alt-bg); }
.container { max-width: 1200px; margin: 0 auto; padding: 0 2rem; }

.section-title {
  text-align: center;
  margin-bottom: 4rem;
}

.section-subtitle {
  display: block;
  font-family: 'Playfair Display', serif;
  font-style: italic;
  font-size: 1.1rem;
  color: var(--primary);
  margin-bottom: 0.5rem;
}

.section-title h2 {
  font-size: 3rem;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.title-separator {
  width: 60px;
  height: 3px;
  background: var(--primary);
  margin: 1.5rem auto 0;
}

/* Hero & Header (Preserved as is primarily) */
.header {
  position: fixed;
  top: 0;
  width: 100%;
  padding: 1.5rem 0;
  z-index: 1000;
  transition: all 0.4s ease;
  background: linear-gradient(to bottom, rgba(0,0,0,0.6), transparent);
}
.header.scrolled {
  background: #FFFFFF; /* Solid white */
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  padding: 0.8rem 0;
}
.header.scrolled .nav-links a { color: #1A1A1A; } /* Dark text on scroll */
.header.scrolled .nav-links a:hover { color: #800000; }
.header.scrolled .btn-contact { 
  border-color: #800000; 
  color: #800000; 
  background: transparent;
}
.header.scrolled .btn-contact:hover { 
  background: #800000; 
  color: white; 
}
.logo-subtitle { 
  font-size: 0.7rem; letter-spacing: 2px; text-transform: uppercase; color: #D4AF37; margin-bottom: 2px; display: block;
}
.nav-links a {
  text-decoration: none; color: white; margin-left: 2rem; font-size: 0.9rem; text-transform: uppercase; letter-spacing: 1px; transition: all 0.3s; opacity: 1; font-weight: 600;
}
.nav-links a:hover { color: #D4AF37; }
.header.scrolled .logo-text h1 { color: #800000; }

.btn-contact {
  padding: 0.6rem 1.8rem; border: 1px solid rgba(255,255,255,0.4); margin-left: 2.5rem; transition: all 0.3s; text-decoration: none; display: inline-block; color: white; text-transform: uppercase; letter-spacing: 1px; font-size: 0.9rem;
}
.btn-contact:hover { background: white; color: var(--secondary); }
.header.scrolled .btn-contact { border-color: var(--secondary); color: var(--secondary); }
.header.scrolled .btn-contact:hover { background: var(--secondary); color: white; }

.hero {
  height: 90vh; /* Premium height */
  position: relative; display: flex; align-items: center; justify-content: center; text-align: center; color: white;
}
.hero-bg { position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: -1; }
.hero-image { width: 100%; height: 100%; object-fit: cover; animation: slowZoom 20s infinite alternate; }
@keyframes slowZoom { from { transform: scale(1); } to { transform: scale(1.1); } }
.hero-overlay { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: radial-gradient(circle at center, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.7) 100%); }
.hero-content { z-index: 2; max-width: 900px; padding: 2rem; opacity: 0; animation: fadeUp 1s ease-out 0.5s forwards; }
@keyframes fadeUp { to { opacity: 1; transform: translateY(0); } }
.ornament-divider { margin-bottom: 2rem; opacity: 0.8; }
.welcome-text { font-family: 'Playfair Display', serif; font-style: italic; font-size: 1.5rem; color: var(--primary); margin-bottom: 1rem; font-weight: 400; }
.main-title { display: flex; flex-direction: column; gap: 0.5rem; margin-bottom: 2.5rem; text-shadow: 0 5px 15px rgba(0,0,0,0.5); }
.main-title span:first-child { font-size: 4rem; font-weight: 700; color: white; letter-spacing: -1px; }
.sub-title { font-size: 1.5rem; font-family: 'Playfair Display', serif; font-weight: 400; color: rgba(255,255,255,0.9); letter-spacing: 2px; text-transform: uppercase; }
.sloka-container { margin-bottom: 3rem; position: relative; display: inline-block; }
.sloka-text { font-family: 'Playfair Display', serif; font-style: italic; font-size: 1.1rem; line-height: 1.8; color: rgba(255,255,255,0.9); padding: 1rem 2rem; border-left: 1px solid var(--primary); border-right: 1px solid var(--primary); }
.hero-actions { display: flex; gap: 1.5rem; justify-content: center; }
.btn-primary { padding: 1rem 2.5rem; background: var(--primary); color: #2C1810; font-family: 'Cinzel', serif; font-weight: 700; border: none; border-radius: 2px; cursor: pointer; transition: all 0.3s; text-transform: uppercase; letter-spacing: 1px; }
.btn-primary:hover { background: white; transform: translateY(-2px); }
.btn-secondary-hero { padding: 1rem 2.5rem; background: transparent; color: white; font-family: 'Cinzel', serif; font-weight: 700; border: 1px solid white; border-radius: 2px; cursor: pointer; transition: all 0.3s; text-transform: uppercase; letter-spacing: 1px; }
.btn-secondary-hero:hover { background: rgba(255,255,255,0.1); border-color: var(--primary); color: var(--primary); }
.scroll-down { position: absolute; bottom: 40px; left: 50%; transform: translateX(-50%); display: flex; flex-direction: column; align-items: center; gap: 10px; opacity: 0.7; }
.scroll-down span { font-size: 0.7rem; text-transform: uppercase; letter-spacing: 2px; }
.scroll-down .line { width: 1px; height: 40px; background: white; animation: growLine 2s infinite; }
@keyframes growLine { 0% { height: 0; opacity: 0; } 50% { height: 40px; opacity: 1; } 100% { height: 0; opacity: 0; transform: translateY(40px); } }

/* About - Premium Magazine Style */
.about-grid {
  display: grid;
  grid-template-columns: 0.8fr 1.2fr;
  gap: 5rem;
  align-items: center;
}
.image-frame {
  position: relative;
  z-index: 1;
}
.deity-img {
  width: 100%;
  display: block;
  box-shadow: 0 20px 50px rgba(0,0,0,0.15);
}
.frame-border {
  position: absolute;
  top: 20px;
  left: -20px;
  width: 100%;
  height: 100%;
  border: 4px solid var(--primary);
  z-index: -1;
  transition: transform 0.3s;
}
.image-frame:hover .frame-border {
  transform: translate(10px, 10px);
}
.drop-cap::first-letter {
  font-family: 'Cinzel', serif; font-size: 3.5rem; float: left; line-height: 0.8; padding-right: 15px; color: var(--secondary); font-weight: 700;
}
.features-list { display: flex; gap: 3rem; margin: 3rem 0; }
.feature-item { display: flex; gap: 1rem; align-items: flex-start; }
.feature-icon { font-size: 2rem; }
.feature-text h3 { font-size: 0.9rem; margin: 0; color: var(--secondary); }
.feature-text p { font-size: 0.8rem; margin: 0; }
.btn-text { background: none; border: none; border-bottom: 2px solid var(--primary); padding-bottom: 5px; cursor: pointer; font-family: 'Cinzel', serif; font-weight: 700; color: var(--secondary); transition: all 0.3s; }
.btn-text:hover { color: var(--primary); padding-bottom: 2px; }

/* Poojas - Elegant Cards */
.poojas-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
}
.pooja-card {
  background: white;
  padding: 3rem 2rem;
  text-align: center;
  border: 1px solid #EAEAEA;
  transition: all 0.4s cubic-bezier(0.25, 1, 0.5, 1);
  box-shadow: 0 5px 15px rgba(0,0,0,0.02);
  position: relative;
  overflow: hidden;
}
.pooja-card::before {
  content: '';
  position: absolute; top: 0; left: 0; width: 100%; height: 4px; background: var(--primary);
  transform: scaleX(0); transition: transform 0.4s;
}
.pooja-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.08);
}
.pooja-card:hover::before { transform: scaleX(1); }
.pooja-icon { font-size: 3rem; margin-bottom: 1.5rem; }
.pooja-card h3 { 
  font-size: 1.3rem; 
  margin-bottom: 1rem; 
  color: #800000; /* Red color for visibility */
  font-weight: 700;
}
.pooja-card p { color: #000; margin-bottom: 1.5rem; font-weight: 500; }
.btn-card {
  margin-top: 1.5rem; 
  padding: 0.8rem 2rem; 
  background: #800000; 
  color: white; 
  border: none; 
  font-family: 'Cinzel', serif; 
  cursor: pointer; 
  transition: 0.3s; 
  opacity: 1; /* Always visible */
  transform: translateY(0); /* No movement */
  border-radius: 4px;
}
.btn-card:hover { 
  background: #D4AF37; 
  color: #000; 
  transform: translateY(-2px);
}

/* Gallery */
.gallery-masonry { column-count: 3; column-gap: 1.5rem; }
.gallery-item { break-inside: avoid; margin-bottom: 1.5rem; position: relative; cursor: pointer; overflow: hidden; }
.gallery-item img { width: 100%; display: block; transition: transform 0.5s; }
.gallery-item:hover img { transform: scale(1.05); }
.overlay {
  position: absolute; inset: 0; background: rgba(80, 0, 0, 0.5); display: flex; align-items: center; justify-content: center; opacity: 0; transition: opacity 0.3s;
}
.gallery-item:hover .overlay { opacity: 1; }
.overlay span { color: white; font-family: 'Playfair Display', serif; font-size: 1.2rem; border-bottom: 1px solid var(--primary); padding-bottom: 5px; }

/* Events - Minimal Timeline */
.timeline { position: relative; max-width: 800px; margin: 0 auto; }
.timeline::before {
  content: ''; position: absolute; left: 50%; top: 0; height: 100%; width: 1px; background: #D4CDBC;
}
.timeline-item { width: 50%; padding: 0 40px; margin-bottom: 3rem; position: relative; }
.timeline-item.right { left: 50%; }
.timeline-item.left { left: 0; text-align: right; }
.timeline-item::after {
  content: ''; position: absolute; top: 15px; right: -6px; width: 12px; height: 12px; background: var(--primary); border-radius: 50%; border: 3px solid var(--white);
}
.timeline-item.right::after { left: -6px; }
.event-date { display: inline-block; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 1px; color: var(--primary); font-weight: 700; margin-bottom: 0.5rem; }

/* Contact - Clean & Functional */
.contact-layout { display: flex; background: white; box-shadow: 0 20px 60px rgba(0,0,0,0.05); }
.contact-info { flex: 1; padding: 4rem; }
.contact-desc { margin-bottom: 3rem; }
.info-row { display: flex; justify-content: space-between; border-bottom: 1px solid #eee; padding: 1rem 0; }
.label { font-family: 'Cinzel', serif; color: var(--secondary); font-weight: 700; }
.map-wrapper { flex: 1; }
.temple-timings { margin-top: 3rem; background: var(--alt-bg); padding: 2rem; border-left: 4px solid var(--primary); }
.time-table { display: flex; justify-content: space-between; margin-top: 1rem; }
.time-col { display: flex; flex-direction: column; }
.time-col span { font-size: 0.8rem; text-transform: uppercase; opacity: 0.7; }
.time-col strong { color: var(--secondary); font-size: 1.1rem; }

/* Footer */
.footer { background: #1A0A05; color: #888; padding: 5rem 0 2rem; border-top: 5px solid var(--primary); }
.footer-brand h2 { color: white; font-size: 2rem; margin-bottom: 0.5rem; }
.footer-container { display: flex; flex-direction: column; align-items: center; text-align: center; gap: 2rem; }
.footer-links { display: flex; gap: 1rem; align-items: center; }
.footer-links a { color: #BBB; text-decoration: none; text-transform: uppercase; font-size: 0.8rem; letter-spacing: 1px; transition: color 0.3s; }
.footer-links a:hover { color: var(--primary); }
.footer-copyright { border-top: 1px solid #333; padding-top: 2rem; width: 100%; }

/* Utils */
.btn-outline { background: transparent; border: 1px solid var(--secondary); color: var(--secondary); padding: 1rem 2rem; font-family: 'Cinzel', serif; cursor: pointer; transition: 0.3s; margin-top: 2rem; }
.btn-outline:hover { background: var(--secondary); color: white; }
.center-btn { text-align: center; }

/* Mobile */
@media (max-width: 768px) {
  .nav-links { display: none; }
  .menu-toggle { display: flex; flex-direction: column; gap: 6px; background: none; border: none; cursor: pointer; z-index: 1001; }
  .bar { width: 30px; height: 2px; background: white; transition: 0.3s; }
  .header.scrolled .bar { background: var(--text-primary); }
  
  .about-grid, .contact-layout { grid-template-columns: 1fr; display: flex; flex-direction: column; }
  .gallery-masonry { column-count: 1; }
  .timeline::before { left: 20px; }
  .timeline-item { width: 100%; padding-left: 50px; text-align: left; }
  .timeline-item.left { text-align: left; }
  .timeline-item::after { left: 14px; }
  .main-title span:first-child { font-size: 2.5rem; }
  .sub-title { font-size: 1rem; }
  .hero { height: 100vh; }
}
</style>