<template>
  <div class="aivonix-app" @mousemove="handleMouseMove">
    <!-- Interactive Background -->
    <canvas ref="canvas" class="neural-network-bg"></canvas>
    
    <!-- Gradient Overlay -->
    <div class="bg-overlay"></div>

    <!-- Navigation -->
    <nav class="nav" :class="{ 'scrolled': isScrolled }">
      <div class="container nav-container">
        <a href="#" class="logo" @click.prevent="scrollTo('home')">
          <div class="logo-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
          </div>
          <span class="logo-text">Aivonix<span class="highlight">Tech</span></span>
        </a>
        
        <div class="nav-links">
          <a v-for="item in navItems" 
             :key="item.id" 
             :href="`#${item.id}`"
             class="nav-link"
             :class="{ active: activeSection === item.id }"
             @click.prevent="scrollTo(item.id)">
            {{ item.label }}
          </a>
          <button class="btn btn-primary glow-effect" @click="scrollTo('contact')">
            Get Started
          </button>
        </div>

        <!-- Mobile Menu Toggle -->
        <button class="mobile-toggle" @click="mobileMenuOpen = !mobileMenuOpen">
          <span class="bar" :class="{ open: mobileMenuOpen }"></span>
          <span class="bar" :class="{ open: mobileMenuOpen }"></span>
          <span class="bar" :class="{ open: mobileMenuOpen }"></span>
        </button>
      </div>
    </nav>

    <!-- Hero Section -->
    <section id="home" class="hero">
      <!-- Background Grid -->
      <div class="data-grid"></div>
      
      <div class="container hero-container">
        <div class="hero-content" data-aos="fade-right" data-aos-duration="1000">
          <div class="badge fade-in-up">
            <span class="pulse"></span>
            NEXT-GEN AI RESEARCH
          </div>
          <h1 class="hero-title">
            <span class="gradient-text">{{ typewriterText }}</span>
          </h1>
          <p class="hero-subtitle fade-in-up delay-200">
            We build next-generation digital ecosystems that fuse human creativity with artificial intelligence.
          </p>
          <div class="hero-actions fade-in-up delay-400">
            <button class="btn btn-primary glow-effect" @click="scrollTo('services')">
              Discover Solutions
            </button>
            <button class="btn btn-outline" @click="scrollTo('about')">
              Research Labs
            </button>
          </div>
        </div>
        
        <div class="hero-visual" data-aos="zoom-in" data-aos-duration="1200">
           <div class="cinematic-container">
             <img src="./assets/images/hero_workspace.png" alt="AI Digital Workspace" class="cinematic-img">
             <div class="glow-backdrop"></div>
           </div>
        </div>
      </div>
      
      <div class="scroll-indicator" @click="scrollTo('services')">
        <span class="mouse">
          <span class="wheel"></span>
        </span>
      </div>
    </section>

    <!-- Services Section -->
    <section id="services" class="services">
      <div class="container">
        <div class="section-header" data-aos="fade-up">
          <h2 class="section-title">Intelligent <span class="gradient-text">Solutions</span></h2>
          <p class="section-desc">Empowering businesses with cutting-edge technology</p>
        </div>
        
        <div class="services-grid">
          <div v-for="(service, index) in services" 
               :key="index" 
               class="service-card glass-card"
               data-aos="fade-up"
               :data-aos-delay="index * 100">
            <div class="card-glow"></div>
            <div class="service-icon" v-html="service.icon"></div>
            <h3>{{ service.title }}</h3>
            <p>{{ service.description }}</p>
            <ul class="feature-list">
              <li v-for="(feature, fIndex) in service.features" :key="fIndex">
                <span class="check-icon">✓</span> {{ feature }}
              </li>
            </ul>
            <a href="#" class="learn-more">Learn more →</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Success Stories -->
    <section id="projects" class="success-stories">
      <div class="container">
        <div class="section-header" data-aos="fade-up">
          <h2 class="section-title">Latest <span class="gradient-text">Success Stories</span></h2>
          <p class="section-desc">Real-world impact driven by AI</p>
        </div>
        <div class="projects-grid">
          <div v-for="(project, index) in projects" :key="index" class="project-card" data-aos="fade-up" :data-aos-delay="index * 200">
            <img :src="project.image" :alt="project.title" class="project-image">
            <div class="project-overlay">
              <span class="project-category">{{ project.category }}</span>
              <h3>{{ project.title }}</h3>
              <a href="#" class="project-link">View Case Study →</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Tech Marquee -->
    <div class="tech-marquee">
      <div class="marquee-content">
        <span class="tech-item">TensorFlow</span>
        <span class="tech-item">PyTorch</span>
        <span class="tech-item">Vue.js</span>
        <span class="tech-item">React Native</span>
        <span class="tech-item">Node.js</span>
        <span class="tech-item">AWS AI</span>
        <span class="tech-item">OpenAI API</span>
        <span class="tech-item">Docker</span>
        <span class="tech-item">Kubernetes</span>
        <span class="tech-item">Flutter</span>
        <!-- Repeat for smooth loop -->
        <span class="tech-item">TensorFlow</span>
        <span class="tech-item">PyTorch</span>
        <span class="tech-item">Vue.js</span>
        <span class="tech-item">React Native</span>
        <span class="tech-item">Node.js</span>
      </div>
    </div>

    <!-- About Section -->
    <section id="about" class="about">
      <div class="container">
        <div class="about-grid">
          <div class="about-visual" data-aos="fade-right">
            <div class="visual-card glass-card">
              <div class="stat-item">
                <span class="stat-number">98%</span>
                <span class="stat-label">Client Satisfaction</span>
              </div>
              <div class="stat-item">
                <span class="stat-number">50+</span>
                <span class="stat-label">Enterprise Projects</span>
              </div>
              <div class="stat-item">
                <span class="stat-number">24/7</span>
                <span class="stat-label">AI Support</span>
              </div>
            </div>
            <div class="decoration-circle"></div>
          </div>
          
          <div class="about-content" data-aos="fade-left">
            <h2 class="section-title">Architecting the <span class="gradient-text">Future</span></h2>
            <p class="lead">AivonixTech is not just a software company; we are an innovation laboratory.</p>
            <p>
              Founded with a mission to bridge innovation and real-world impact, we specialize in high-performance web development, mobile ecosystems, and AI-driven automation.
            </p>
            
            <div class="founders-preview">
              <div class="founder-mini">
                <div class="avatar">PT</div>
                <div>
                  <strong>Prejith T S</strong>
                  <span>Tech Lead</span>
                </div>
              </div>
              <div class="founder-mini">
                <div class="avatar">DD</div>
                <div>
                  <strong>Devan Dinesh</strong>
                  <span>Strategy Lead</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Skilled Consultants -->
    <section class="consultants">
      <div class="container">
        <div class="section-header" data-aos="fade-up">
          <h2 class="section-title">Meet Our <span class="gradient-text">Experts</span></h2>
          <p class="section-desc">World-class talent driving innovation</p>
        </div>
        <div class="consultants-grid">
          <div v-for="(person, index) in consultants" :key="index" class="consultant-card" data-aos="fade-up" :data-aos-delay="index * 200">
            <div class="consultant-image-wrapper">
              <img :src="person.image" :alt="person.name" class="consultant-image">
            </div>
            <h3 class="consultant-name">{{ person.name }}</h3>
            <p class="consultant-role">{{ person.role }}</p>
            <p class="consultant-bio">{{ person.bio }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="testimonials">
      <div class="container">
        <div class="section-header" data-aos="fade-up">
          <h2 class="section-title">Client <span class="gradient-text">Feedback</span></h2>
        </div>
        <div class="testimonial-track">
          <div v-for="(review, index) in [...testimonials, ...testimonials]" :key="index" class="testimonial-card">
            <p class="testimonial-text">"{{ review.text }}"</p>
            <div class="testimonial-author">
              <div class="author-avatar">{{ review.author.charAt(0) }}</div>
              <span>{{ review.author }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Us Section -->
    <section id="why-us" class="why-us">
      <div class="container">
        <div class="section-header" data-aos="fade-up">
          <h2 class="section-title">Why <span class="gradient-text">Aivonix</span>?</h2>
        </div>
        
        <div class="features-grid">
          <div v-for="(feature, index) in features" 
               :key="index" 
               class="feature-item"
               data-aos="zoom-in"
               :data-aos-delay="index * 100">
            <span class="feature-emoji">{{ feature.emoji }}</span>
            <h4>{{ feature.title }}</h4>
            <p>{{ feature.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="contact">
      <div class="container contact-container">
        <div class="contact-card glass-card" data-aos="flip-up">
          <div class="contact-header">
            <h2 class="section-title">Start Your <span class="gradient-text">Journey</span></h2>
            <p>Ready to transform your digital presence?</p>
          </div>
          
          <form @submit.prevent="handleSubmit" class="contact-form">
            <div class="form-group">
              <input type="text" v-model="form.name" required placeholder=" " />
              <label>Name</label>
            </div>
            <div class="form-group">
              <input type="email" v-model="form.email" required placeholder=" " />
              <label>Email</label>
            </div>
            <div class="form-group">
              <textarea v-model="form.message" required placeholder=" " rows="4"></textarea>
              <label>Project Vision</label>
            </div>
            <button type="submit" class="btn btn-primary btn-block glow-effect">
              <span>Launch Project</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" width="20" height="20">
                <path d="M5 12h14M12 5l7 7-7 7" stroke-width="2"/>
              </svg>
            </button>
          </form>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-brand">
            <h3>Aivonix<span class="highlight">Tech</span></h3>
            <p>Innovate. Connect. Future-Proof.</p>
          </div>
          <div class="footer-social">
            <a href="#" class="social-link">Ln</a>
            <a href="#" class="social-link">Tw</a>
            <a href="#" class="social-link">Ig</a>
          </div>
        </div>
        <div class="footer-copyright">
          &copy; {{ new Date().getFullYear() }} AivonixTech. All Rights Reserved.
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Navigation Data
const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'services', label: 'Services' },
  { id: 'about', label: 'About' },
  { id: 'why-us', label: 'Why Us' }
];

const mobileMenuOpen = ref(false);
const isScrolled = ref(false);
const activeSection = ref('home');

// Typewriter Effect
const textOptions = ['Advancing Human Intelligence', 'Redefining Digital Reality', 'Engineering the Future'];
const typewriterText = ref('');
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typeWriter = () => {
  const currentText = textOptions[textIndex];
  
  if (isDeleting) {
    typewriterText.value = currentText.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typewriterText.value = currentText.substring(0, charIndex + 1);
    charIndex++;
  }

  let typeSpeed = isDeleting ? 50 : 100;

  if (!isDeleting && charIndex === currentText.length) {
    typeSpeed = 2000; // Pause at end
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    textIndex = (textIndex + 1) % textOptions.length;
    typeSpeed = 500;
  }

  setTimeout(typeWriter, typeSpeed);
};

// Canvas Animation
const canvas = ref(null);
let ctx = null;
let particles = [];
let animationFrameId;

class Particle {
  constructor(w, h) {
    this.x = Math.random() * w;
    this.y = Math.random() * h;
    this.vx = (Math.random() - 0.5) * 0.5;
    this.vy = (Math.random() - 0.5) * 0.5;
    this.size = Math.random() * 2 + 1;
  }

  update(w, h) {
    this.x += this.vx;
    this.y += this.vy;

    if (this.x < 0 || this.x > w) this.vx *= -1;
    if (this.y < 0 || this.y > h) this.vy *= -1;
  }

  draw() {
    ctx.fillStyle = 'rgba(0, 255, 204, 0.5)';
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

const initCanvas = () => {
  if (!canvas.value) return;
  const w = window.innerWidth;
  const h = window.innerHeight;
  canvas.value.width = w;
  canvas.value.height = h;
  ctx = canvas.value.getContext('2d');
  
  particles = Array.from({ length: 100 }, () => new Particle(w, h));
  animateCanvas();
};

const animateCanvas = () => {
  if (!ctx || !canvas.value) return;
  const w = canvas.value.width;
  const h = canvas.value.height;
  
  ctx.clearRect(0, 0, w, h);
  
  particles.forEach(p => {
    p.update(w, h);
    p.draw();
  });

  // Connect particles
  particles.forEach((a, i) => {
    particles.slice(i + 1).forEach(b => {
      const dx = a.x - b.x;
      const dy = a.y - b.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      
      if (dist < 150) {
        ctx.strokeStyle = `rgba(0, 255, 204, ${0.1 * (1 - dist / 150)})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
      }
    });
  });

  animationFrameId = requestAnimationFrame(animateCanvas);
};

// Services Data
const services = [
  {
    title: 'Web Evolution',
    description: 'High-performance, reactive web applications built with modern frameworks.',
    features: ['Next.js & Vue.js', '3D WebGL Interactions', 'PWA Support'],
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18"/><path d="M15 3v18"/><path d="M3 9h18"/><path d="M3 15h18"/></svg>`
  },
  {
    title: 'AI Integration',
    description: 'Smart algorithms that automate workflows and provide predictive analytics.',
    features: ['LLM Integration', 'Computer Vision', 'Predictive Models'],
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"/><path d="M12 6v6l4 2"/></svg>`
  },
  {
    title: 'Mobile Ecosystems',
    description: 'Native and cross-platform mobile experiences that engage users.',
    features: ['Flutter & React Native', 'iOS & Android', 'Real-time Sync'],
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>`
  }
];

// Parallax
const mouseX = ref(0);
const mouseY = ref(0);
const parallaxStyle = ref({});

const handleMouseMove = (e) => {
  mouseX.value = e.clientX;
  mouseY.value = e.clientY;
  
  const x = (window.innerWidth - e.clientX * 2) / 50;
  const y = (window.innerHeight - e.clientY * 2) / 50;
  
  parallaxStyle.value = {
    transform: `translate(${x}px, ${y}px)`
  };
};

// Features Data
const features = [
  { emoji: '🚀', title: 'Future-Proof', desc: 'Built on scalable architectures.' },
  { emoji: '🧠', title: 'AI-Driven', desc: 'Intelligence at the core.' },
  { emoji: '🔒', title: 'Secure', desc: 'Enterprise-grade protection.' },
  { emoji: '⚡', title: 'Fast', desc: 'Optimized for performance.' }
];

// Success Stories
const projects = [
  {
    title: 'Nexus Dashboard Analysis',
    category: 'AI Analytics',
    image: new URL('./assets/images/project1.png', import.meta.url).href
  },
  {
    title: 'Smart Home Hub',
    category: 'Mobile App',
    image: new URL('./assets/images/project2.png', import.meta.url).href
  }
];

// Consultants
const consultants = [
  {
    name: 'Dr. Alex Mercer',
    role: 'Chief AI Architect',
    bio: 'Pioneering generative AI models for enterprise scalability.',
    image: new URL('./assets/images/avatar1.png', import.meta.url).href
  },
  {
    name: 'Sarah Chen',
    role: 'Lead Data Scientist',
    bio: 'Expert in predictive analytics and neural network optimization.',
    image: new URL('./assets/images/avatar2.png', import.meta.url).href
  }
];

// Testimonials
const testimonials = [
  { text: "AivonixTech transformed our workflow with their AI integration. Simply incredible.", author: "James T., CEO" },
  { text: "The future-proof architecture they built allowed us to scale 10x in a year.", author: "Maria R., CTO" },
  { text: "Professional, skilled, and visionary. The best tech partner we've had.", author: "David K., Founder" }
];

// Form
const form = ref({ name: '', email: '', message: '' });

const handleSubmit = () => {
  alert('Thank you for your interest! We will contact you soon.');
  form.value = { name: '', email: '', message: '' };
};

// Scroll Handler
const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
  
  // Active Section Logic
  const sections = navItems.map(item => item.id);
  const scrollPos = window.scrollY + 100;
  
  for (const section of sections) {
    const el = document.getElementById(section);
    if (el && el.offsetTop <= scrollPos && (el.offsetTop + el.offsetHeight) > scrollPos) {
      activeSection.value = section;
    }
  }
};

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
    mobileMenuOpen.value = false;
  }
};

// Lifecycle Hooks
onMounted(() => {
  AOS.init({
    duration: 800,
    once: false,
    mirror: true
  });
  
  initCanvas();
  typeWriter();
  window.addEventListener('resize', initCanvas);
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('resize', initCanvas);
  window.removeEventListener('scroll', handleScroll);
  cancelAnimationFrame(animationFrameId);
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&family=Space+Grotesk:wght@300;400;500;600;700&display=swap');

:root {
  --primary: #00ffcc;
  --secondary: #7000ff;
  --dark-bg: #050510;
  --card-bg: rgba(255, 255, 255, 0.03);
  --text-main: #e0e0e0;
  --text-muted: #a0a0a0;
  --border-color: rgba(255, 255, 255, 0.1);
  --glass-border: 1px solid rgba(255, 255, 255, 0.05);
}

* {
  box-sizing: border-box;
}

.aivonix-app {
  font-family: 'Outfit', sans-serif;
  background-color: #050510;
  color: #e0e0e0;
  min-height: 100vh;
  overflow-x: hidden;
  position: relative;
}

/* Backgrounds */
.neural-network-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  opacity: 0.4;
  pointer-events: none;
}

.bg-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at 50% 50%, rgba(112, 0, 255, 0.1), transparent 70%);
  z-index: 0;
  pointer-events: none;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;
}

/* Typography & Utils */
.gradient-text {
  background: linear-gradient(135deg, #00ffcc, #7000ff);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.highlight {
  color: #00ffcc;
}

.btn {
  padding: 0.8rem 2rem;
  border-radius: 50px;
  border: none;
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 0.9rem;
  position: relative;
  overflow: hidden;
}

.btn-primary {
  background: linear-gradient(90deg, #00ffcc, #00d4aa);
  color: #050510;
}

.btn-outline {
  background: transparent;
  border: 1px solid #00ffcc;
  color: #00ffcc;
  margin-left: 1rem;
}

.btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(0, 255, 204, 0.2);
}

.glow-effect {
  box-shadow: 0 0 15px rgba(0, 255, 204, 0.3);
  animation: glow 3s infinite alternate;
}

@keyframes glow {
  from { box-shadow: 0 0 10px rgba(0, 255, 204, 0.2); }
  to { box-shadow: 0 0 20px rgba(0, 255, 204, 0.6); }
}

/* Navigation */
.nav {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
  padding: 1.5rem 0;
  transition: all 0.3s ease;
}

.nav.scrolled {
  background: rgba(5, 5, 16, 0.8);
  backdrop-filter: blur(10px);
  padding: 1rem 0;
  border-bottom: var(--glass-border);
}

.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  color: #fff;
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 700;
  font-size: 1.5rem;
}

.logo-icon {
  color: #00ffcc;
  width: 32px;
  height: 32px;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.nav-link {
  color: var(--text-muted);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s;
  position: relative;
}

.nav-link:hover, .nav-link.active {
  color: #fff;
}

.nav-link.active::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 100%;
  height: 2px;
  background: #00ffcc;
}

.mobile-toggle {
  display: none;
  /* The following lines are syntactically incorrect for standard CSS nesting.
     If you are using a preprocessor like SCSS/Sass, this might be valid.
     For standard CSS, .cinematic-container should be a top-level rule.
     The 'background' and 'transition' properties are also moved from '.bar'
     to '.mobile-toggle' as per the instruction, which might change intended styling. */
  .cinematic-container {
    width: 300px;
  }background: #fff;
  transition: 0.3s;
}

.bar {
  width: 25px;
  height: 3px;
  background: #fff;
  transition: 0.3s;
}

/* Hero Section */
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  padding-top: 80px;
  overflow: hidden;
}

.hero-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 2rem;
}

.hero-content {
  flex: 1;
  max-width: 600px;
  z-index: 2;
  text-align: left;
  align-items: flex-start;
}

.hero-visual {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
}

.cinematic-container {
  position: relative;
  width: 100%;
  max-width: 600px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 0 50px rgba(0, 255, 204, 0.1);
  transform: perspective(1000px) rotateY(-5deg);
  transition: transform 0.3s ease;
}

.cinematic-container:hover {
  transform: perspective(1000px) rotateY(0deg);
}

.cinematic-img {
  width: 100%;
  height: auto;
  display: block;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.glow-backdrop {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 80%;
  height: 80%;
  transform: translate(-50%, -50%);
  background: radial-gradient(circle, rgba(112, 0, 255, 0.4), transparent 70%);
  z-index: -1;
  filter: blur(50px);
}

.badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 0.5rem 1rem;
  background: rgba(0, 255, 204, 0.1);
  border: 1px solid rgba(0, 255, 204, 0.3);
  border-radius: 20px;
  color: #00ffcc;
  font-size: 0.85rem;
  margin-bottom: 1.5rem;
}

.pulse {
  width: 8px;
  height: 8px;
  background: #00ffcc;
  border-radius: 50%;
  animation: pulse-anim 2s infinite;
}

@keyframes pulse-anim {
  0% { transform: scale(1); opacity: 1; }
  100% { transform: scale(2); opacity: 0; }
}

.hero-title {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 3.5rem;
  line-height: 1.1;
  margin-bottom: 2rem;
  font-weight: 700;
  letter-spacing: -1px;
}

.glitch {
  position: relative;
}

.glitch::before,
.glitch::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.glitch::before {
  left: 2px;
  text-shadow: -1px 0 #ff00c1;
  clip: rect(44px, 450px, 56px, 0);
  animation: glitch-anim 5s infinite linear alternate-reverse;
}

.glitch::after {
  left: -2px;
  text-shadow: -1px 0 #00fff9;
  clip: rect(44px, 450px, 56px, 0);
  animation: glitch-anim-2 5s infinite linear alternate-reverse;
}

@keyframes glitch-anim {
  0% { clip: rect(18px, 9999px, 81px, 0); }
  5% { clip: rect(81px, 9999px, 86px, 0); }
  10% { clip: rect(31px, 9999px, 7px, 0); }
  15% { clip: rect(93px, 9999px, 96px, 0); }
  20% { clip: rect(10px, 9999px, 74px, 0); }
  25% { clip: rect(62px, 9999px, 20px, 0); }
  30% { clip: rect(61px, 9999px, 9px, 0); }
  35% { clip: rect(30px, 9999px, 44px, 0); }
  40% { clip: rect(64px, 9999px, 86px, 0); }
  45% { clip: rect(25px, 9999px, 48px, 0); }
  50% { clip: rect(48px, 9999px, 80px, 0); }
  55% { clip: rect(79px, 9999px, 63px, 0); }
  60% { clip: rect(62px, 9999px, 85px, 0); }
  65% { clip: rect(59px, 9999px, 92px, 0); }
  70% { clip: rect(89px, 9999px, 86px, 0); }
  75% { clip: rect(2px, 9999px, 90px, 0); }
  80% { clip: rect(23px, 9999px, 76px, 0); }
  85% { clip: rect(87px, 9999px, 3px, 0); }
  90% { clip: rect(25px, 9999px, 14px, 0); }
  95% { clip: rect(69px, 9999px, 2px, 0); }
  100% { clip: rect(91px, 9999px, 93px, 0); }
}

@keyframes glitch-anim-2 {
  0% { clip: rect(65px, 9999px, 93px, 0); }
  100% { clip: rect(74px, 9999px, 8px, 0); }
}

.cursor {
  display: inline-block;
  animation: blink 1s infinite;
  color: #00ffcc;
}

@keyframes blink {
  50% { opacity: 0; }
}

.hero-subtitle {
  font-size: 1.25rem;
  color: var(--text-muted);
  max-width: 600px;
  margin-bottom: 2.5rem;
  line-height: 1.6;
}

.fade-in-up {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.8s forwards;
}

.delay-200 { animation-delay: 0.2s; }
.delay-400 { animation-delay: 0.4s; }

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.scroll-indicator {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
}

.mouse {
  width: 26px;
  height: 40px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 20px;
  display: block;
  position: relative;
}

.wheel {
  width: 4px;
  height: 8px;
  background: #fff;
  border-radius: 2px;
  position: absolute;
  top: 8px;
  left: 50%;
  transform: translateX(-50%);
  animation: scroll 2s infinite;
}

@keyframes scroll {
  0% { transform: translate(-50%, 0); opacity: 1; }
  100% { transform: translate(-50%, 15px); opacity: 0; }
}

/* Services */
.services {
  padding: 8rem 0;
  position: relative;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-title {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.section-desc {
  color: var(--text-muted);
  font-size: 1.1rem;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.glass-card {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  padding: 2rem;
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;
}

.card-glow {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, #00ffcc, transparent);
  transform: scaleX(0);
  transition: transform 0.4s ease;
}

.glass-card:hover {
  transform: translateY(-10px);
  background: rgba(255, 255, 255, 0.05);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
}

.glass-card:hover .card-glow {
  transform: scaleX(1);
}

.service-icon {
  width: 50px;
  height: 50px;
  color: #00ffcc;
  margin-bottom: 1.5rem;
  background: rgba(0, 255, 204, 0.1);
  border-radius: 12px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.service-card h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  font-family: 'Space Grotesk', sans-serif;
}

.service-card p {
  color: var(--text-muted);
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.feature-list {
  list-style: none;
  padding: 0;
  margin-bottom: 1.5rem;
}

.feature-list li {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 0.5rem;
  color: #ccc;
  font-size: 0.9rem;
}

.check-icon {
  color: #00ffcc;
  font-weight: bold;
}

.learn-more {
  color: #00ffcc;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
}

/* Success Stories */
.success-stories {
  padding: 8rem 0;
  background-color: var(--dark-bg);
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.project-card {
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  height: 300px;
}

.project-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.2, 1, 0.2, 1);
}

.project-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, transparent 40%, rgba(0,0,0,0.95));
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 2rem;
  opacity: 0;
  transition: opacity 0.4s ease;
}

.project-card:hover .project-image {
  transform: scale(1.1);
}

.project-card:hover .project-overlay {
  opacity: 1;
}

.project-category {
  color: #00ffcc;
  font-size: 0.9rem;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
}

.project-link {
  color: #fff;
  text-decoration: none;
  margin-top: 1rem;
  display: flex;
  align-items: center;
  gap: 5px;
}

/* Consultants */
.consultants {
  padding: 8rem 0;
}

.consultants-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
  margin-top: 3rem;
}

.consultant-card {
  text-align: center;
}

.consultant-image-wrapper {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin: 0 auto 1.5rem;
  padding: 5px;
  background: linear-gradient(135deg, #00ffcc, #7000ff);
  position: relative;
}

.consultant-image {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #050510;
}

.consultant-name {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: #fff;
}

.consultant-role {
  color: #00ffcc;
  margin-bottom: 1rem;
}

.consultant-bio {
  color: var(--text-muted);
  font-size: 0.95rem;
  line-height: 1.6;
}

/* Testimonials */
.testimonials {
  padding: 8rem 0;
  overflow: hidden;
}

.testimonial-track {
  display: flex;
  gap: 2rem;
  animation: scroll-left 30s linear infinite;
  width: max-content;
}

.testimonial-card {
  width: 400px;
  flex-shrink: 0;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 16px;
}

.testimonial-text {
  font-style: italic;
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  color: #e0e0e0;
}

.testimonial-author {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.author-avatar {
  width: 50px;
  height: 50px;
  background: #333;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}

@keyframes scroll-left {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

/* Tech Marquee */
.tech-marquee {
  padding: 2rem 0;
  background: rgba(0, 0, 0, 0.5);
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  overflow: hidden;
}

.marquee-content {
  display: flex;
  gap: 4rem;
  animation: marquee 20s linear infinite;
  white-space: nowrap;
}

.tech-item {
  color: #777;
  font-size: 1.5rem;
  font-weight: 600;
  text-transform: uppercase;
}

@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

/* About Section */
.about {
  padding: 8rem 0;
  background: linear-gradient(180deg, transparent, rgba(0, 255, 204, 0.02), transparent);
}

.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.about-visual {
  position: relative;
}

.visual-card {
  display: grid;
  gap: 2rem;
  position: relative;
  z-index: 2;
}

.decoration-circle {
  position: absolute;
  top: -20%;
  left: -20%;
  width: 140%;
  height: 140%;
  background: radial-gradient(circle, rgba(112, 0, 255, 0.1), transparent 60%);
  z-index: 1;
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.stat-number {
  font-size: 3rem;
  font-weight: 700;
  color: #00ffcc;
  font-family: 'Space Grotesk', sans-serif;
}

.stat-label {
  color: var(--text-muted);
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.founders-preview {
  display: flex;
  gap: 2rem;
  margin-top: 3rem;
}

.founder-mini {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.avatar {
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, #00ffcc, #00aaff);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: #050510;
}

.founder-mini div {
  display: flex;
  flex-direction: column;
}

.founder-mini strong {
  font-size: 0.9rem;
}

.founder-mini span {
  font-size: 0.8rem;
  color: var(--text-muted);
}

/* Why Us */
.why-us {
  padding: 8rem 0;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.feature-item {
  text-align: center;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.02);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: transform 0.3s;
}

.feature-item:hover {
  transform: translateY(-5px);
  background: rgba(255, 255, 255, 0.04);
}

.feature-emoji {
  font-size: 2.5rem;
  display: block;
  margin-bottom: 1rem;
}

.feature-item h4 {
  margin-bottom: 0.5rem;
  color: #fff;
}

.feature-item p {
  color: var(--text-muted);
  font-size: 0.9rem;
}

/* Contact */
.contact {
  padding: 8rem 0;
}

.contact-card {
  max-width: 600px;
  margin: 0 auto;
}

.contact-header {
  text-align: center;
  margin-bottom: 2rem;
}

.form-group {
  position: relative;
  margin-bottom: 1.5rem;
}

input, textarea {
  width: 100%;
  background: rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 1rem;
  color: #fff;
  font-family: 'Outfit', sans-serif;
  font-size: 1rem;
  outline: none;
  transition: all 0.3s;
}

input:focus, textarea:focus {
  border-color: #00ffcc;
  background: rgba(0, 0, 0, 0.4);
}

label {
  position: absolute;
  left: 1rem;
  top: 1rem;
  color: var(--text-muted);
  pointer-events: none;
  transition: all 0.3s;
  background: transparent;
}

input:focus ~ label,
input:not(:placeholder-shown) ~ label,
textarea:focus ~ label,
textarea:not(:placeholder-shown) ~ label {
  top: -0.6rem;
  left: 0.8rem;
  font-size: 0.8rem;
  color: #00ffcc;
  background: #050510;
  padding: 0 4px;
}

.btn-block {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

/* Footer */
.footer {
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  padding: 3rem 0 1rem;
  background: #020205;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

.footer-brand h3 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  font-family: 'Space Grotesk', sans-serif;
}

.footer-brand p {
  color: var(--text-muted);
  font-size: 0.9rem;
}

.footer-social {
  display: flex;
  gap: 1rem;
}

.social-link {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  text-decoration: none;
  transition: all 0.3s;
  font-weight: bold;
  font-size: 0.8rem;
}

.social-link:hover {
  background: #00ffcc;
  color: #050510;
  transform: translateY(-3px);
}

.footer-copyright {
  text-align: center;
  color: #555;
  font-size: 0.8rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.03);
}


/* Scientific Grid Overlay */
.data-grid {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    linear-gradient(rgba(0, 255, 204, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 255, 204, 0.05) 1px, transparent 1px);
  background-size: 60px 60px;
  z-index: 0;
  pointer-events: none;
  mask-image: radial-gradient(circle at 50% 50%, black 0%, transparent 80%);
}

/* Mobile Responsive */
@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }
  
  .nav-links {
    display: none; /* Add mobile menu logic later if needed */
  }

  .mobile-toggle {
    display: flex;
  }
  
  .about-grid {
    grid-template-columns: 1fr;
  }
}

</style>
