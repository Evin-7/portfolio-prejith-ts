<template>
  <div class="aivonix-site">
    <!-- Navigation -->
    <nav class="nav" :class="{ scrolled: isScrolled }">
      <div class="nav-container">
        <div class="logo-section">
          <div class="logo-icon">
            <svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
              <path d="M25 5 L40 15 L40 35 L25 45 L10 35 L10 15 Z" fill="none" stroke="currentColor" stroke-width="2"/>
              <path d="M25 15 L32 20 L32 30 L25 35 L18 30 L18 20 Z" fill="currentColor" opacity="0.5"/>
              <circle cx="25" cy="25" r="3" fill="currentColor"/>
            </svg>
          </div>
          <div class="logo-text">
            <span class="logo-primary">Aivonix</span>
            <span class="logo-secondary">Tech</span>
          </div>
        </div>
        <div class="nav-links">
          <a href="#home" @click.prevent="scrollTo('home')" :class="{ active: activeSection === 'home' }">Home</a>
          <a href="#services" @click.prevent="scrollTo('services')" :class="{ active: activeSection === 'services' }">Services</a>
          <a href="#about" @click.prevent="scrollTo('about')" :class="{ active: activeSection === 'about' }">About Us</a>
          <a href="#careers" @click.prevent="scrollTo('careers')" :class="{ active: activeSection === 'careers' }">Careers</a>
          <button class="contact-btn" @click="scrollTo('contact')">Contact Us</button>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section id="home" class="hero">
      <div class="hero-bg">
        <div class="hex-pattern"></div>
        <div class="glow-orb glow-1"></div>
        <div class="glow-orb glow-2"></div>
        <div class="glow-orb glow-3"></div>
      </div>
      <div class="hero-content">
        <h1 class="hero-title">
          <span class="title-line">Innovate. Connect.</span>
          <span class="title-line gradient-text">Future-Proof Your World</span>
        </h1>
        <p class="hero-subtitle">Cutting-edge AI and IT solutions for a smarter tomorrow</p>
        <button class="cta-btn" @click="scrollTo('services')">
          Get Started
          <svg class="btn-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </button>
      </div>
      <div class="scroll-indicator" @click="scrollTo('services')">
        <div class="scroll-line"></div>
        <span>Scroll</span>
      </div>
    </section>

    <!-- Services Section -->
    <section id="services" class="services">
      <div class="section-container">
        <div class="section-header">
          <h2 class="section-title">Our Services</h2>
          <p class="section-subtitle">Comprehensive digital solutions powered by innovation</p>
        </div>
        
        <div class="services-grid">
          <div v-for="(service, index) in services" :key="index" 
               class="service-card"
               :style="{ animationDelay: `${index * 0.1}s` }">
            <div class="service-icon" v-html="service.icon"></div>
            <h3 class="service-title">{{ service.title }}</h3>
            <p class="service-desc">{{ service.description }}</p>
            <ul class="service-features">
              <li v-for="(feature, fIndex) in service.features" :key="fIndex">{{ feature }}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="about">
      <div class="section-container">
        <div class="about-grid">
          <div class="about-content">
            <h2 class="section-title">Who We Are</h2>
            <p class="about-text">
              AivonixTech is a <strong>futuristic, research-oriented IT company</strong> founded with a clear mission: 
              to bridge innovation and real-world impact through technology.
            </p>
            <p class="about-text">
              We specialize in web development, mobile applications, AI-powered solutions, SEO, digital marketing, 
              and technology consulting, delivering personalized and scalable products that evolve with the future.
            </p>
            <p class="about-highlight">
              At AivonixTech, we don't just build software — <strong>we engineer digital ecosystems</strong>.
            </p>
            
            <div class="vision-mission">
              <div class="vm-card">
                <h3>Our Vision</h3>
                <p>To become a globally trusted technology partner that leads innovation in AI, automation, 
                   digital transformation, and intelligent software solutions.</p>
              </div>
              <div class="vm-card">
                <h3>Our Mission</h3>
                <ul>
                  <li>Deliver high-quality, future-ready digital solutions</li>
                  <li>Integrate AI and automation into real business use cases</li>
                  <li>Create personalized, scalable, and secure systems</li>
                  <li>Continuously research, innovate, and evolve</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div class="about-visual">
            <div class="stats-grid">
              <div class="stat-card">
                <div class="stat-number">100+</div>
                <div class="stat-label">Projects Delivered</div>
              </div>
              <div class="stat-card">
                <div class="stat-number">50+</div>
                <div class="stat-label">Happy Clients</div>
              </div>
              <div class="stat-card">
                <div class="stat-number">24/7</div>
                <div class="stat-label">Support Available</div>
              </div>
              <div class="stat-card">
                <div class="stat-number">∞</div>
                <div class="stat-label">Innovation Drive</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Founders Section -->
        <div class="founders">
          <h2 class="section-title">Meet The Founders</h2>
          <div class="founders-grid">
            <div class="founder-card">
              <div class="founder-avatar">
                <div class="avatar-bg">PT</div>
              </div>
              <h3>Prejith T S</h3>
              <p class="founder-role">Co-Founder & Technology Lead</p>
              <p class="founder-bio">
                A passionate technologist with expertise in software development, AI systems, and digital innovation. 
                Prejith drives the company's technical vision, research initiatives, and product architecture.
              </p>
            </div>
            <div class="founder-card">
              <div class="founder-avatar">
                <div class="avatar-bg">DD</div>
              </div>
              <h3>Devan Dinesh</h3>
              <p class="founder-role">Co-Founder & Strategy Lead</p>
              <p class="founder-bio">
                A strategic thinker focused on business growth, digital solutions, and client success. 
                Devan leads business strategy, client engagement, and long-term vision planning.
              </p>
            </div>
          </div>
        </div>

        <!-- Industries -->
        <div class="industries">
          <h3 class="industries-title">Industries We Serve</h3>
          <div class="industries-tags">
            <span v-for="(industry, index) in industries" :key="index" class="industry-tag">
              {{ industry }}
            </span>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose Us -->
    <section class="why-choose">
      <div class="section-container">
        <h2 class="section-title">Why Choose AivonixTech?</h2>
        <div class="reasons-grid">
          <div v-for="(reason, index) in reasons" :key="index" class="reason-card">
            <div class="reason-icon">{{ reason.emoji }}</div>
            <h3>{{ reason.title }}</h3>
            <p>{{ reason.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Careers Section -->
    <section id="careers" class="careers">
      <div class="section-container">
        <div class="careers-content">
          <h2 class="section-title">Join Our Team</h2>
          <p class="careers-intro">
            We're always looking for <strong>curious minds and builders</strong>.
          </p>
          <div class="careers-qualities">
            <h3>If you love:</h3>
            <ul>
              <li>Technology & innovation</li>
              <li>AI & automation</li>
              <li>Problem-solving</li>
              <li>Research & experimentation</li>
            </ul>
          </div>
          <p class="careers-cta">Join us and shape the future.</p>
          <button class="cta-btn secondary" @click="scrollTo('contact')">Explore Opportunities</button>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="contact">
      <div class="section-container">
        <h2 class="section-title">Let's Build the Future Together</h2>
        <p class="contact-intro">
          Have an idea? A startup? A business challenge? We'd love to hear from you.
        </p>
        
        <div class="contact-grid">
          <div class="contact-form">
            <form @submit.prevent="handleSubmit">
              <div class="form-group">
                <label for="name">Name</label>
                <input type="text" id="name" v-model="form.name" required placeholder="Your name">
              </div>
              <div class="form-group">
                <label for="email">Email</label>
                <input type="email" id="email" v-model="form.email" required placeholder="your@email.com">
              </div>
              <div class="form-group">
                <label for="subject">Subject</label>
                <input type="text" id="subject" v-model="form.subject" required placeholder="How can we help?">
              </div>
              <div class="form-group">
                <label for="message">Message</label>
                <textarea id="message" v-model="form.message" required rows="5" placeholder="Tell us about your project..."></textarea>
              </div>
              <button type="submit" class="cta-btn">Send Message</button>
            </form>
          </div>
          
          <div class="contact-info">
            <div class="contact-item">
              <div class="contact-item-icon">📧</div>
              <div>
                <h4>Email</h4>
                <p>contact@aivonixtech.com</p>
              </div>
            </div>
            <div class="contact-item">
              <div class="contact-item-icon">🌐</div>
              <div>
                <h4>Location</h4>
                <p>Global • Remote First</p>
              </div>
            </div>
            <div class="contact-item">
              <div class="contact-item-icon">💼</div>
              <div>
                <h4>Business Hours</h4>
                <p>24/7 Support Available</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div class="footer-container">
        <div class="footer-grid">
          <div class="footer-brand">
            <div class="logo-section">
              <div class="logo-icon">
                <svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
                  <path d="M25 5 L40 15 L40 35 L25 45 L10 35 L10 15 Z" fill="none" stroke="currentColor" stroke-width="2"/>
                  <path d="M25 15 L32 20 L32 30 L25 35 L18 30 L18 20 Z" fill="currentColor" opacity="0.5"/>
                  <circle cx="25" cy="25" r="3" fill="currentColor"/>
                </svg>
              </div>
              <div class="logo-text">
                <span class="logo-primary">Aivonix</span>
                <span class="logo-secondary">Tech</span>
              </div>
            </div>
            <p class="footer-tagline">Innovate. Connect. Future-Proof Your World.</p>
            <div class="social-links">
              <a href="#" class="social-link">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" class="social-link">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="#" class="social-link">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div class="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home" @click.prevent="scrollTo('home')">Home</a></li>
              <li><a href="#services" @click.prevent="scrollTo('services')">Services</a></li>
              <li><a href="#about" @click.prevent="scrollTo('about')">About Us</a></li>
              <li><a href="#careers" @click.prevent="scrollTo('careers')">Careers</a></li>
            </ul>
          </div>
          
          <div class="footer-links">
            <h4>Services</h4>
            <ul>
              <li><a href="#services">Web Development</a></li>
              <li><a href="#services">Mobile Apps</a></li>
              <li><a href="#services">AI Solutions</a></li>
              <li><a href="#services">Cloud Services</a></li>
            </ul>
          </div>
          
          <div class="footer-links">
            <h4>Contact</h4>
            <ul>
              <li><a href="mailto:contact@aivonixtech.com">contact@aivonixtech.com</a></li>
              <li><a href="#contact" @click.prevent="scrollTo('contact')">Get in Touch</a></li>
            </ul>
          </div>
        </div>
        
        <div class="footer-bottom">
          <p>&copy; 2025 AivonixTech. All rights reserved.</p>
          <p>Built with innovation and powered by AI</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'AivonixTech',
  data() {
    return {
      isScrolled: false,
      activeSection: 'home',
      form: {
        name: '',
        email: '',
        subject: '',
        message: ''
      },
      services: [
        {
          title: 'Web Development',
          description: 'Modern, high-performance websites that are fast, secure, and scalable',
          icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>`,
          features: ['Responsive Design', 'SEO Optimized', 'Performance Focused', 'Custom Solutions']
        },
        {
          title: 'Mobile Apps',
          description: 'Powerful, intuitive mobile applications for Android and iOS',
          icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/></svg>`,
          features: ['Native & Cross-platform', 'User-Centric Design', 'Scalable Architecture', 'Push Notifications']
        },
        {
          title: 'AI Solutions',
          description: 'AI-driven solutions that automate, predict, and enhance decision-making',
          icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1 2 2 0 0 1-2 2 2 2 0 0 1-2-2 1 1 0 0 1 1-1h-1a7 7 0 0 1-7 7v-1.73c.6-.34 1-.99 1-1.73a2 2 0 0 0-2-2 2 2 0 0 0-2 2c0 .74.4 1.39 1 1.73V21a7 7 0 0 1-7-7H3a1 1 0 0 1-1-1 2 2 0 0 1 2-2 2 2 0 0 1 2 2 1 1 0 0 1-1 1h1a7 7 0 0 1 7-7V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2z"/></svg>`,
          features: ['AI Chatbots', 'Automation', 'ML Models', 'Data Analytics']
        },
        {
          title: 'Cloud Services',
          description: 'Secure, scalable cloud infrastructures for modern businesses',
          icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>`,
          features: ['AWS & Azure', 'Security First', 'Optimization', 'Monitoring']
        },
        {
          title: 'SEO & Marketing',
          description: 'Data-driven strategies to grow your digital presence',
          icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>`,
          features: ['SEO Optimization', 'Content Strategy', 'Analytics', 'Growth Focused']
        },
        {
          title: 'Tech Consulting',
          description: 'Strategic guidance for your technology decisions',
          icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>`,
          features: ['Architecture Planning', 'Tech Stack Selection', 'Scalability', 'Best Practices']
        }
      ],
      reasons: [
        { emoji: '🚀', title: 'Future-Focused', description: 'Innovation-driven approach to every project' },
        { emoji: '🧠', title: 'AI & Research', description: 'Strong foundation in cutting-edge technology' },
        { emoji: '🛠️', title: 'Custom Solutions', description: 'Tailored, scalable products for your needs' },
        { emoji: '🔐', title: 'Security First', description: 'Performance and security at the core' },
        { emoji: '🤝', title: 'Transparent', description: 'Clear communication throughout the journey' },
        { emoji: '🌍', title: 'Global Ready', description: 'Products designed for worldwide scale' }
      ],
      industries: [
        'Startups & Entrepreneurs',
        'IT & SaaS Companies',
        'Real Estate',
        'Healthcare',
        'Education',
        'E-commerce',
        'Logistics',
        'Personal Brands'
      ]
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
    this.observeSections();
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 50;
    },
    scrollTo(sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    },
    observeSections() {
      const options = {
        threshold: 0.3,
        rootMargin: '-100px'
      };
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.activeSection = entry.target.id;
          }
        });
      }, options);
      
      ['home', 'services', 'about', 'careers', 'contact'].forEach(id => {
        const element = document.getElementById(id);
        if (element) observer.observe(element);
      });
    },
    handleSubmit() {
      alert(`Thank you, ${this.form.name}! We'll get back to you soon.`);
      this.form = { name: '', email: '', subject: '', message: '' };
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&family=Space+Mono:wght@400;700&display=swap');

:root {
  --primary: #00ffcc;
  --secondary: #0066ff;
  --dark: #0a0e1a;
  --darker: #050810;
  --light: #e0e8ff;
  --gray: #6b7280;
  --card-bg: rgba(15, 23, 42, 0.8);
  --glow: rgba(0, 255, 204, 0.3);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.aivonix-site {
  font-family: 'Space Mono', monospace;
  background: var(--darker);
  color: var(--light);
  overflow-x: hidden;
}

/* Navigation */
.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(10, 14, 26, 0.8);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(0, 255, 204, 0.1);
  transition: all 0.3s ease;
}

.nav.scrolled {
  background: rgba(10, 14, 26, 0.95);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
}

.nav-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo-section {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.logo-icon {
  width: 40px;
  height: 40px;
  color: var(--primary);
}

.logo-icon svg {
  width: 100%;
  height: 100%;
  filter: drop-shadow(0 0 10px var(--glow));
  animation: pulse 3s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.7; }
}

.logo-text {
  display: flex;
  flex-direction: column;
  line-height: 1.1;
}

.logo-primary {
  font-family: 'Orbitron', sans-serif;
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--primary);
  letter-spacing: 2px;
}

.logo-secondary {
  font-family: 'Orbitron', sans-serif;
  font-size: 0.75rem;
  color: var(--light);
  letter-spacing: 3px;
  opacity: 0.8;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.nav-links a {
  color: var(--light);
  text-decoration: none;
  font-size: 0.9rem;
  transition: all 0.3s;
  position: relative;
  letter-spacing: 1px;
}

.nav-links a::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--primary);
  transition: width 0.3s;
}

.nav-links a:hover::after,
.nav-links a.active::after {
  width: 100%;
}

.nav-links a:hover,
.nav-links a.active {
  color: var(--primary);
}

.contact-btn {
  background: var(--primary);
  color: var(--dark);
  border: none;
  padding: 0.7rem 1.5rem;
  font-family: 'Orbitron', sans-serif;
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s;
  text-transform: uppercase;
  letter-spacing: 1px;
  box-shadow: 0 0 20px var(--glow);
}

.contact-btn:hover {
  background: var(--light);
  transform: translateY(-2px);
  box-shadow: 0 0 30px var(--glow);
}

/* Hero Section */
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  padding: 6rem 2rem 2rem;
}

.hero-bg {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, var(--darker) 0%, #0f1729 50%, var(--darker) 100%);
}

.hex-pattern {
  position: absolute;
  inset: 0;
  background-image: 
    repeating-linear-gradient(0deg, transparent, transparent 50px, rgba(0, 255, 204, 0.03) 50px, rgba(0, 255, 204, 0.03) 52px),
    repeating-linear-gradient(60deg, transparent, transparent 50px, rgba(0, 255, 204, 0.03) 50px, rgba(0, 255, 204, 0.03) 52px),
    repeating-linear-gradient(120deg, transparent, transparent 50px, rgba(0, 255, 204, 0.03) 50px, rgba(0, 255, 204, 0.03) 52px);
  animation: hexMove 20s linear infinite;
}

@keyframes hexMove {
  0% { transform: translateY(0); }
  100% { transform: translateY(50px); }
}

.glow-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.3;
  animation: float 8s ease-in-out infinite;
}

.glow-1 {
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, var(--primary), transparent);
  top: -10%;
  left: -10%;
  animation-delay: 0s;
}

.glow-2 {
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, var(--secondary), transparent);
  bottom: -10%;
  right: -10%;
  animation-delay: 2s;
}

.glow-3 {
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, #ff00ff, transparent);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation-delay: 4s;
}

@keyframes float {
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(50px, 50px); }
}

.hero-content {
  position: relative;
  z-index: 1;
  text-align: center;
  max-width: 1200px;
}

.hero-title {
  font-family: 'Orbitron', sans-serif;
  font-size: clamp(2.5rem, 8vw, 6rem);
  font-weight: 900;
  line-height: 1.1;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.title-line {
  display: block;
  animation: slideIn 1s ease-out;
}

.title-line:nth-child(2) {
  animation-delay: 0.2s;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.gradient-text {
  background: linear-gradient(135deg, var(--primary), var(--secondary), #ff00ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  filter: drop-shadow(0 0 30px var(--glow));
}

.hero-subtitle {
  font-size: clamp(1rem, 3vw, 1.5rem);
  color: var(--light);
  margin-bottom: 3rem;
  opacity: 0.9;
  animation: fadeIn 1s ease-out 0.5s both;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 0.9; }
}

.cta-btn {
  background: var(--primary);
  color: var(--dark);
  border: none;
  padding: 1.2rem 3rem;
  font-family: 'Orbitron', sans-serif;
  font-weight: 700;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s;
  text-transform: uppercase;
  letter-spacing: 2px;
  box-shadow: 0 0 40px var(--glow);
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  animation: fadeIn 1s ease-out 0.7s both;
}

.cta-btn:hover {
  background: var(--light);
  transform: translateY(-5px);
  box-shadow: 0 10px 50px var(--glow);
}

.cta-btn.secondary {
  background: transparent;
  color: var(--primary);
  border: 2px solid var(--primary);
}

.cta-btn.secondary:hover {
  background: var(--primary);
  color: var(--dark);
}

.btn-arrow {
  width: 24px;
  height: 24px;
  transition: transform 0.3s;
}

.cta-btn:hover .btn-arrow {
  transform: translateX(5px);
}

.scroll-indicator {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  opacity: 0.6;
  transition: opacity 0.3s;
  animation: fadeIn 1s ease-out 1s both;
}

.scroll-indicator:hover {
  opacity: 1;
}

.scroll-line {
  width: 2px;
  height: 40px;
  background: linear-gradient(to bottom, var(--primary), transparent);
  animation: scrollAnim 2s ease-in-out infinite;
}

@keyframes scrollAnim {
  0%, 100% { transform: translateY(0); opacity: 0; }
  50% { transform: translateY(20px); opacity: 1; }
}

.scroll-indicator span {
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 2px;
}

/* Sections */
.section-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 6rem 2rem;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-title {
  font-family: 'Orbitron', sans-serif;
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 800;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.section-subtitle {
  font-size: 1.2rem;
  color: var(--gray);
}

/* Services Section */
.services {
  background: var(--dark);
  position: relative;
}

.services::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--primary), transparent);
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.service-card {
  background: var(--card-bg);
  border: 1px solid rgba(0, 255, 204, 0.2);
  padding: 2.5rem;
  border-radius: 10px;
  transition: all 0.3s;
  opacity: 0;
  animation: fadeInUp 0.6s ease-out forwards;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.service-card:hover {
  transform: translateY(-10px);
  border-color: var(--primary);
  box-shadow: 0 20px 60px rgba(0, 255, 204, 0.2);
}

.service-icon {
  width: 60px;
  height: 60px;
  margin-bottom: 1.5rem;
  color: var(--primary);
}

.service-icon svg {
  width: 100%;
  height: 100%;
}

.service-title {
  font-family: 'Orbitron', sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--primary);
}

.service-desc {
  color: var(--light);
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.service-features {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.service-features li {
  color: var(--gray);
  font-size: 0.9rem;
  padding-left: 1.5rem;
  position: relative;
}

.service-features li::before {
  content: '▹';
  position: absolute;
  left: 0;
  color: var(--primary);
  font-weight: bold;
}

/* About Section */
.about {
  background: linear-gradient(135deg, var(--darker), var(--dark));
}

.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin-bottom: 6rem;
}

.about-text {
  color: var(--light);
  line-height: 1.8;
  margin-bottom: 1.5rem;
}

.about-highlight {
  font-size: 1.2rem;
  color: var(--primary);
  font-weight: 600;
  margin-top: 2rem;
}

.vision-mission {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 3rem;
}

.vm-card {
  background: var(--card-bg);
  border: 1px solid rgba(0, 255, 204, 0.2);
  padding: 2rem;
  border-radius: 10px;
}

.vm-card h3 {
  font-family: 'Orbitron', sans-serif;
  font-size: 1.3rem;
  color: var(--primary);
  margin-bottom: 1rem;
}

.vm-card p,
.vm-card ul {
  color: var(--light);
  line-height: 1.8;
}

.vm-card ul {
  list-style: none;
  padding-left: 0;
}

.vm-card li {
  padding-left: 1.5rem;
  position: relative;
  margin-bottom: 0.5rem;
}

.vm-card li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--primary);
  font-weight: bold;
}

.about-visual {
  display: flex;
  align-items: center;
}

.stats-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  width: 100%;
}

.stat-card {
  background: var(--card-bg);
  border: 1px solid rgba(0, 255, 204, 0.2);
  padding: 2rem;
  border-radius: 10px;
  text-align: center;
  transition: all 0.3s;
}

.stat-card:hover {
  transform: scale(1.05);
  border-color: var(--primary);
  box-shadow: 0 10px 40px rgba(0, 255, 204, 0.2);
}

.stat-number {
  font-family: 'Orbitron', sans-serif;
  font-size: 3rem;
  font-weight: 900;
  color: var(--primary);
  margin-bottom: 0.5rem;
}

.stat-label {
  color: var(--light);
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

/* Founders */
.founders {
  margin-bottom: 6rem;
}

.founders-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 3rem;
  margin-top: 3rem;
}

.founder-card {
  background: var(--card-bg);
  border: 1px solid rgba(0, 255, 204, 0.2);
  padding: 3rem;
  border-radius: 10px;
  text-align: center;
  transition: all 0.3s;
}

.founder-card:hover {
  transform: translateY(-10px);
  border-color: var(--primary);
  box-shadow: 0 20px 60px rgba(0, 255, 204, 0.2);
}

.founder-avatar {
  width: 120px;
  height: 120px;
  margin: 0 auto 2rem;
  border-radius: 50%;
  border: 3px solid var(--primary);
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--darker);
}

.avatar-bg {
  font-family: 'Orbitron', sans-serif;
  font-size: 2.5rem;
  font-weight: 900;
  color: var(--primary);
}

.founder-card h3 {
  font-family: 'Orbitron', sans-serif;
  font-size: 1.8rem;
  color: var(--primary);
  margin-bottom: 0.5rem;
}

.founder-role {
  color: var(--gray);
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 1.5rem;
}

.founder-bio {
  color: var(--light);
  line-height: 1.8;
}

/* Industries */
.industries-title {
  font-family: 'Orbitron', sans-serif;
  font-size: 1.8rem;
  color: var(--primary);
  text-align: center;
  margin-bottom: 2rem;
}

.industries-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
}

.industry-tag {
  background: var(--card-bg);
  border: 1px solid rgba(0, 255, 204, 0.2);
  padding: 0.8rem 1.5rem;
  border-radius: 50px;
  color: var(--light);
  font-size: 0.9rem;
  transition: all 0.3s;
  cursor: pointer;
}

.industry-tag:hover {
  background: var(--primary);
  color: var(--dark);
  border-color: var(--primary);
  transform: translateY(-3px);
}

/* Why Choose Us */
.why-choose {
  background: var(--dark);
  position: relative;
}

.why-choose::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--primary), transparent);
}

.reasons-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.reason-card {
  background: var(--card-bg);
  border: 1px solid rgba(0, 255, 204, 0.2);
  padding: 2.5rem;
  border-radius: 10px;
  text-align: center;
  transition: all 0.3s;
}

.reason-card:hover {
  transform: translateY(-10px);
  border-color: var(--primary);
  box-shadow: 0 20px 60px rgba(0, 255, 204, 0.2);
}

.reason-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.reason-card h3 {
  font-family: 'Orbitron', sans-serif;
  font-size: 1.3rem;
  color: var(--primary);
  margin-bottom: 1rem;
}

.reason-card p {
  color: var(--light);
  line-height: 1.6;
}

/* Careers */
.careers {
  background: linear-gradient(135deg, var(--darker), var(--dark));
  text-align: center;
}

.careers-content {
  max-width: 800px;
  margin: 0 auto;
}

.careers-intro {
  font-size: 1.3rem;
  color: var(--light);
  margin-bottom: 2rem;
}

.careers-qualities {
  background: var(--card-bg);
  border: 1px solid rgba(0, 255, 204, 0.2);
  padding: 2.5rem;
  border-radius: 10px;
  margin: 3rem 0;
  text-align: left;
}

.careers-qualities h3 {
  font-family: 'Orbitron', sans-serif;
  font-size: 1.5rem;
  color: var(--primary);
  margin-bottom: 1.5rem;
  text-align: center;
}

.careers-qualities ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.careers-qualities li {
  color: var(--light);
  font-size: 1.1rem;
  padding-left: 2rem;
  position: relative;
}

.careers-qualities li::before {
  content: '→';
  position: absolute;
  left: 0;
  color: var(--primary);
  font-weight: bold;
  font-size: 1.3rem;
}

.careers-cta {
  font-size: 1.5rem;
  color: var(--primary);
  font-weight: 600;
  margin-bottom: 2rem;
}

/* Contact */
.contact {
  background: var(--dark);
  position: relative;
}

.contact::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--primary), transparent);
}

.contact-intro {
  text-align: center;
  font-size: 1.2rem;
  color: var(--light);
  margin-bottom: 4rem;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 4rem;
}

.contact-form {
  background: var(--card-bg);
  border: 1px solid rgba(0, 255, 204, 0.2);
  padding: 3rem;
  border-radius: 10px;
}

.form-group {
  margin-bottom: 2rem;
}

.form-group label {
  display: block;
  font-family: 'Orbitron', sans-serif;
  color: var(--primary);
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.form-group input,
.form-group textarea {
  width: 100%;
  background: var(--darker);
  border: 1px solid rgba(0, 255, 204, 0.3);
  color: var(--light);
  padding: 1rem;
  border-radius: 5px;
  font-family: 'Space Mono', monospace;
  font-size: 1rem;
  transition: all 0.3s;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--primary);
  box-shadow: 0 0 20px rgba(0, 255, 204, 0.2);
}

.form-group textarea {
  resize: vertical;
  min-height: 150px;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.contact-item {
  background: var(--card-bg);
  border: 1px solid rgba(0, 255, 204, 0.2);
  padding: 2rem;
  border-radius: 10px;
  display: flex;
  gap: 1.5rem;
  align-items: flex-start;
  transition: all 0.3s;
}

.contact-item:hover {
  border-color: var(--primary);
  transform: translateX(10px);
}

.contact-item-icon {
  font-size: 2rem;
}

.contact-item h4 {
  font-family: 'Orbitron', sans-serif;
  color: var(--primary);
  margin-bottom: 0.5rem;
}

.contact-item p {
  color: var(--light);
}

/* Footer */
.footer {
  background: var(--darker);
  border-top: 1px solid rgba(0, 255, 204, 0.2);
}

.footer-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 4rem 2rem 2rem;
}

.footer-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 3rem;
  margin-bottom: 3rem;
}

.footer-brand {
  max-width: 350px;
}

.footer-tagline {
  color: var(--gray);
  margin: 1.5rem 0;
  line-height: 1.6;
}

.social-links {
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
}

.social-link {
  width: 40px;
  height: 40px;
  background: var(--card-bg);
  border: 1px solid rgba(0, 255, 204, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary);
  transition: all 0.3s;
}

.social-link:hover {
  background: var(--primary);
  color: var(--dark);
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 255, 204, 0.3);
}

.social-link svg {
  width: 20px;
  height: 20px;
}

.footer-links h4 {
  font-family: 'Orbitron', sans-serif;
  color: var(--primary);
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
}

.footer-links ul {
  list-style: none;
}

.footer-links li {
  margin-bottom: 0.8rem;
}

.footer-links a {
  color: var(--gray);
  text-decoration: none;
  transition: all 0.3s;
}

.footer-links a:hover {
  color: var(--primary);
  padding-left: 5px;
}

.footer-bottom {
  border-top: 1px solid rgba(0, 255, 204, 0.1);
  padding-top: 2rem;
  text-align: center;
  color: var(--gray);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .about-grid,
  .contact-grid {
    grid-template-columns: 1fr;
  }

  .footer-grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 768px) {
  .nav-links {
    display: none;
  }

  .hero-title {
    font-size: 2.5rem;
  }

  .services-grid,
  .founders-grid {
    grid-template-columns: 1fr;
  }

  .stats-grid {
    grid-template-columns: 1fr;
  }

  .footer-grid {
    grid-template-columns: 1fr;
  }

  .footer-bottom {
    flex-direction: column;
    gap: 1rem;
  }

  .section-container {
    padding: 4rem 1.5rem;
  }
}

@media (max-width: 480px) {
  .hero {
    padding: 5rem 1rem 2rem;
  }

  .cta-btn {
    padding: 1rem 2rem;
    font-size: 0.9rem;
  }
}
</style>