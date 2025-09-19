<template>
  <div class="app">
    <div class="scroll-progress" :style="{ width: scrollProgress + '%' }"></div>

    <!-- Navigation -->
    <nav class="navbar">
      <div class="nav-container">
        <div class="nav-logo">PREJITH T S</div>
        <div class="nav-menu" :class="{ active: isMenuOpen }">
          <a href="#home" @click="scrollTo('home')" class="nav-link">Home</a>
          <a href="#about" @click="scrollTo('about')" class="nav-link">About</a>
          <a href="#experience" @click="scrollTo('experience')" class="nav-link">Experience</a>
          <a href="#skills" @click="scrollTo('skills')" class="nav-link">Skills</a>
          <a href="#projects" @click="scrollTo('projects')" class="nav-link">Projects</a>
          <a href="#contact" @click="scrollTo('contact')" class="nav-link">Contact</a>
        </div>
        <div class="nav-toggle" @click="toggleMenu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section id="home" class="hero-section">
      <div class="hero-container">
        <div class="hero-content">
          <h1 class="hero-title">PREJITH T S</h1>
          <h2 class="hero-subtitle">Flutter Developer</h2>
          <p class="hero-description">
            Accomplished Mobile Application Developer with 4+ years of experience, 
            specializing in Flutter framework and delivering exceptional user experiences 
            across diverse industry domains.
          </p>
          <div class="hero-buttons">
            <button @click="scrollTo('contact')" class="btn-primary">
              <span>Get In Touch</span>
              <div class="btn-wave"></div>
            </button>
            <a href="/Prejith_c_v.pdf" download="Prejith_c_v.pdf" class="btn-secondary">
              <span>Download Resume</span>
              <div class="btn-wave"></div>
            </a>
          </div>
          <div class="hero-social">
            <a href="https://www.linkedin.com/in/prejith-ts-a3ab7a1b2" target="_blank" class="social-link">
              <i class="fab fa-linkedin"></i>
              <div class="social-ripple"></div>
            </a>
            <a href="mailto:prejithts102@gmail.com" class="social-link">
              <i class="fas fa-envelope"></i>
              <div class="social-ripple"></div>
            </a>
            <a href="tel:+918086991977" class="social-link">
              <i class="fas fa-phone"></i>
              <div class="social-ripple"></div>
            </a>
          </div>
        </div>
        <div class="hero-image">
          <div class="image-frame">
            <img src="./assets/images/myphoto.jpeg" alt="Prejith T S" class="profile-image" />
            <div class="image-glow"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="about-section section">
      <div class="container">
        <h2 class="section-title">About Me</h2>
        <div class="about-content">
          <div class="about-text">
            <p class="about-description">
              I am a passionate Flutter developer with a proven track record of analyzing 
              user requirements and translating client needs into exceptional application designs. 
              My expertise spans across mobile application development, with a focus on creating 
              high-quality, scalable solutions that deliver outstanding user experiences.
            </p>
            <div class="about-stats">
              <div class="stat-item">
                <div class="stat-number">4.1+</div>
                <div class="stat-label">Years Experience</div>
                <div class="stat-bg"></div>
              </div>
              <div class="stat-item">
                <div class="stat-number">15+</div>
                <div class="stat-label">Projects Completed</div>
                <div class="stat-bg"></div>
              </div>
              <div class="stat-item">
                <div class="stat-number">100%</div>
                <div class="stat-label">Client Satisfaction</div>
                <div class="stat-bg"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Experience Section -->
    <section id="experience" class="experience-section section">
      <div class="container">
        <h2 class="section-title">Professional Experience</h2>
        <div class="timeline">
          <div class="timeline-item">
            <div class="timeline-dot">
              <div class="dot-pulse"></div>
            </div>
            <div class="timeline-content">
              <div class="timeline-header">
                <h3 class="timeline-title">Lead Developer</h3>
                <div class="timeline-company">Gigvoc Technologies Pvt. Ltd.</div>
                <div class="timeline-date">Apr 2024 - Present</div>
              </div>
              <div class="timeline-description">
                <div class="project-item">
                  <strong>OhYes App:</strong> Managed development of online booking application 
                  for home services including plumbing, gardening, and pest control.
                </div>
                <div class="project-item">
                  <strong>OhYes Partner App:</strong> Led design and development of partner-facing 
                  application for service providers.
                </div>
                <div class="project-item">
                  <strong>MyQPad:</strong> Directed creation of online booking platform focusing 
                  on customer engagement.
                </div>
                <div class="project-item">
                  <strong>OhYesAI:</strong> Integrated AI-powered assistant using OpenAI GPT 
                  for automated customer support.
                </div>
              </div>
              <div class="timeline-glow"></div>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-dot">
              <div class="dot-pulse"></div>
            </div>
            <div class="timeline-content">
              <div class="timeline-header">
                <h3 class="timeline-title">Flutter Developer</h3>
                <div class="timeline-company">LEOPARD TECH LABS Pvt. Ltd.</div>
                <div class="timeline-date">Sep 2021 - Mar 2024</div>
              </div>
              <div class="timeline-description">
                <div class="project-item">
                  <strong>Styloop:</strong> E-commerce platform available on Play Store 
                  enhancing online shopping experiences.
                </div>
                <div class="project-item">
                  <strong>Pakt:</strong> Online food delivery application enabling seamless 
                  food ordering from nearby restaurants.
                </div>
                <div class="project-item">
                  <strong>Parambikulam:</strong> Government project for ticket booking and 
                  asset management with offline functionality.
                </div>
                <div class="project-item">
                  <strong>Whale Shark:</strong> Government application for monitoring whale 
                  shark populations in marine conservation.
                </div>
                <div class="project-item">
                  <strong>Additional Projects:</strong> Church Directory, Attendance App, 
                  Site Guide, and Kinfolk applications.
                </div>
              </div>
              <div class="timeline-glow"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section id="skills" class="skills-section section">
      <div class="container">
        <h2 class="section-title">Technical Skills</h2>
        <div class="skills-grid">
          <div class="skill-category">
            <h3 class="skill-category-title">Primary Skills</h3>
            <div class="skills-list">
              <div class="skill-item">
                <div class="skill-name">Flutter Framework</div>
                <div class="skill-bar">
                  <div class="skill-progress" style="width: 95%"></div>
                  <div class="skill-glow"></div>
                </div>
              </div>
              <div class="skill-item">
                <div class="skill-name">Dart</div>
                <div class="skill-bar">
                  <div class="skill-progress" style="width: 90%"></div>
                  <div class="skill-glow"></div>
                </div>
              </div>
              <div class="skill-item">
                <div class="skill-name">RESTful API</div>
                <div class="skill-bar">
                  <div class="skill-progress" style="width: 85%"></div>
                  <div class="skill-glow"></div>
                </div>
              </div>
              <div class="skill-item">
                <div class="skill-name">Payment Gateway</div>
                <div class="skill-bar">
                  <div class="skill-progress" style="width: 80%"></div>
                  <div class="skill-glow"></div>
                </div>
              </div>
            </div>
            <div class="category-glow"></div>
          </div>

          <div class="skill-category">
            <h3 class="skill-category-title">Secondary Skills</h3>
            <div class="skills-list">
              <div class="skill-item">
                <div class="skill-name">Git/Version Control</div>
                <div class="skill-bar">
                  <div class="skill-progress" style="width: 85%"></div>
                  <div class="skill-glow"></div>
                </div>
              </div>
              <div class="skill-item">
                <div class="skill-name">Machine Learning</div>
                <div class="skill-bar">
                  <div class="skill-progress" style="width: 70%"></div>
                  <div class="skill-glow"></div>
                </div>
              </div>
              <div class="skill-item">
                <div class="skill-name">OpenAI API</div>
                <div class="skill-bar">
                  <div class="skill-progress" style="width: 75%"></div>
                  <div class="skill-glow"></div>
                </div>
              </div>
              <div class="skill-item">
                <div class="skill-name">Firebase</div>
                <div class="skill-bar">
                  <div class="skill-progress" style="width: 80%"></div>
                  <div class="skill-glow"></div>
                </div>
              </div>
            </div>
            <div class="category-glow"></div>
          </div>

          <div class="skill-category">
            <h3 class="skill-category-title">Specializations</h3>
            <div class="specialization-list">
              <div class="spec-item">
                <span>BLoC Architecture</span>
                <div class="spec-ripple"></div>
              </div>
              <div class="spec-item">
                <span>Google Maps Integration</span>
                <div class="spec-ripple"></div>
              </div>
              <div class="spec-item">
                <span>WebSockets</span>
                <div class="spec-ripple"></div>
              </div>
              <div class="spec-item">
                <span>Play Store Deployment</span>
                <div class="spec-ripple"></div>
              </div>
              <div class="spec-item">
                <span>UI/UX Design</span>
                <div class="spec-ripple"></div>
              </div>
              <div class="spec-item">
                <span>Clean Code Practices</span>
                <div class="spec-ripple"></div>
              </div>
            </div>
            <div class="category-glow"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="projects-section section">
      <div class="container">
        <h2 class="section-title">Featured Projects</h2>
        <div class="projects-grid">
          <div class="project-card" v-for="project in featuredProjects" :key="project.id">
            <div class="project-image">
              <img src="./assets/images/projectimage.jpg" :alt="project.title" />
              <div class="image-overlay">
                <div class="overlay-content">
                  <i class="fas fa-external-link-alt"></i>
                  <span>View Project</span>
                </div>
              </div>
            </div>
            <div class="project-content">
              <div class="project-header">
                <div class="project-category">{{ project.category }}</div>
              </div>
              <h3 class="project-title">{{ project.title }}</h3>
              <p class="project-description">{{ project.description }}</p>
              <div class="project-tech">
                <span class="tech-tag" v-for="tech in project.technologies" :key="tech">
                  {{ tech }}
                </span>
              </div>
              <div class="project-links">
                <button class="project-btn" v-if="project.playStore">
                  <i class="fab fa-google-play"></i>
                  <span>Play Store</span>
                  <div class="btn-shimmer"></div>
                </button>
                <button class="project-btn" v-if="project.github">
                  <i class="fab fa-github"></i>
                  <span>GitHub</span>
                  <div class="btn-shimmer"></div>
                </button>
              </div>
            </div>
            <div class="card-glow"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Education Section -->
    <section id="education" class="education-section section">
      <div class="container">
        <h2 class="section-title">Education</h2>
        <div class="education-timeline">
          <div class="education-item">
            <div class="education-year">2017 - 2021</div>
            <div class="education-content">
              <h3 class="education-title">Bachelor of Information Technology</h3>
              <div class="education-institution">APJ Abdul Kalam Technological University</div>
              <div class="education-location">Amal Jyothi College of Engineering, Kerala, India</div>
            </div>
            <div class="education-glow"></div>
          </div>
          <div class="education-item">
            <div class="education-year">2015 - 2017</div>
            <div class="education-content">
              <h3 class="education-title">Higher Secondary Education</h3>
              <div class="education-institution">St. Mary's HSS</div>
              <div class="education-location">Idukki, Kerala, India</div>
            </div>
            <div class="education-glow"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="contact-section section">
      <div class="container">
        <h2 class="section-title">Get In Touch</h2>
        <div class="contact-content">
          <div class="contact-info">
            <div class="contact-item">
              <div class="contact-icon">
                <i class="fas fa-envelope"></i>
                <div class="icon-pulse"></div>
              </div>
              <div class="contact-details">
                <h3>Email</h3>
                <a href="mailto:prejithts102@gmail.com">prejithts102@gmail.com</a>
              </div>
            </div>
            <div class="contact-item">
              <div class="contact-icon">
                <i class="fas fa-phone"></i>
                <div class="icon-pulse"></div>
              </div>
              <div class="contact-details">
                <h3>Phone</h3>
                <a href="tel:+918086991977">+91 8086991977</a>
              </div>
            </div>
            <div class="contact-item">
              <div class="contact-icon">
                <i class="fab fa-linkedin"></i>
                <div class="icon-pulse"></div>
              </div>
              <div class="contact-details">
                <h3>LinkedIn</h3>
                <a href="https://www.linkedin.com/in/prejith-ts-a3ab7a1b2" target="_blank">
                  Connect with me
                </a>
              </div>
            </div>
          </div>
          <div class="contact-form">
            <form @submit.prevent="submitForm">
              <div class="form-group">
                <input type="text" v-model="form.name" placeholder="Your Name" required :disabled="isSubmitting" />
                <div class="input-glow"></div>
              </div>
              <div class="form-group">
                <input type="email" v-model="form.email" placeholder="Your Email" required :disabled="isSubmitting" />
                <div class="input-glow"></div>
              </div>
              <div class="form-group">
                <input type="text" v-model="form.subject" placeholder="Subject" required :disabled="isSubmitting" />
                <div class="input-glow"></div>
              </div>
              <div class="form-group">
                <textarea v-model="form.message" placeholder="Your Message" rows="5" required :disabled="isSubmitting"></textarea>
                <div class="input-glow"></div>
              </div>
              <button type="submit" class="btn-primary" :disabled="isSubmitting">
                <span v-if="!isSubmitting">Send Message</span>
                <span v-else>Sending...</span>
                <div class="btn-wave"></div>
              </button>
              <div v-if="submitStatus.message" :class="['submit-status', submitStatus.type]">
                {{ submitStatus.message }}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-text">
            <p>&copy; 2024 Prejith T S. All rights reserved.</p>
          </div>
          <div class="footer-social">
            <a href="https://www.linkedin.com/in/prejith-ts-a3ab7a1b2" target="_blank" class="footer-link">
              <i class="fab fa-linkedin"></i>
              <div class="footer-ripple"></div>
            </a>
            <a href="mailto:prejithts102@gmail.com" class="footer-link">
              <i class="fas fa-envelope"></i>
              <div class="footer-ripple"></div>
            </a>
            <a href="tel:+918086991977" class="footer-link">
              <i class="fas fa-phone"></i>
              <div class="footer-ripple"></div>
            </a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, reactive } from "vue";
import emailjs from '@emailjs/browser';

// EmailJS Configuration
const SERVICE_ID = "service_561nn49";
const TEMPLATE_ID = "template_8if1w4s";
const PUBLIC_KEY = "vXbEqDiEeJw0Q8jCb";

// Reactive state
const scrollProgress = ref(0);
const isMenuOpen = ref(false);
const isSubmitting = ref(false);

// Form data
const form = reactive({
  name: "",
  email: "",
  subject: "",
  message: "",
});

// Submit status
const submitStatus = reactive({
  message: "",
  type: "" // 'success' or 'error'
});

// Featured projects data
const featuredProjects = ref([
  {
    id: 1,
    title: "OhYes App",
    description: "Online booking application for home services including plumbing, gardening, pest control, and maintenance.",
    image: "./assets/images/paramb.png",
    category: "Service Booking",
    technologies: ["Flutter", "Dart", "Firebase", "Payment Gateway"],
    playStore: true,
  },
  {
    id: 2,
    title: "OhYes Partner App",
    description: "Partner-facing application for service providers with comprehensive booking and management features.",
    image: "./assets/images/paramb.png",
    category: "Partner App",
    technologies: ["Flutter", "RESTful API", "Real-time Updates", "UI/UX"],
    playStore: true,
  },
  {
    id: 3,
    title: "Styloop",
    description: "Innovative e-commerce platform available on Play Store, enhancing online shopping experiences.",
    image: "./assets/images/paramb.png",
    category: "E-Commerce",
    technologies: ["Flutter", "RESTful API", "Payment Gateway", "UI/UX"],
    playStore: true,
  },
  {
    id: 4,
    title: "Pakt Food Delivery",
    description: "Seamless food ordering application from nearby restaurants with real-time tracking.",
    image: "./assets/images/paramb.png",
    category: "Food Delivery",
    technologies: ["Flutter", "Google Maps", "WebSockets", "Firebase"],
    playStore: true,
  },
  {
    id: 5,
    title: "Parambikulam",
    description: "Government ticket booking and asset management system with online and offline functionality.",
    image: "./assets/images/paramb.png",
    category: "Government",
    technologies: ["Flutter", "Offline Storage", "Asset Management", "Government APIs"],
    github: true,
  },
  {
    id: 6,
    title: "Whale Shark Monitor",
    description: "Government project for monitoring whale shark populations contributing to marine conservation.",
    image: "./assets/images/paramb.png",
    category: "Conservation",
    technologies: ["Flutter", "ML", "GPS Tracking", "Government APIs"],
    github: true,
  },
]);

// Initialize EmailJS
const initEmailJS = () => {
  emailjs.init(PUBLIC_KEY);
};

// Navigation functions
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const scrollTo = (elementId) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
  isMenuOpen.value = false;
};

// Form submission with EmailJS
const submitForm = async () => {
  isSubmitting.value = true;
  submitStatus.message = "";
  
  try {
    // Prepare template parameters
    const templateParams = {
      from_name: form.name,
      from_email: form.email,
      subject: form.subject,
      message: form.message,
      to_name: "Prejith T S",
    };

    // Send email using EmailJS
    const response = await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams);
    
    if (response.status === 200) {
      submitStatus.message = "Thank you for your message! I will get back to you soon.";
      submitStatus.type = "success";
      
      // Reset form
      form.name = "";
      form.email = "";
      form.subject = "";
      form.message = "";
    } else {
      throw new Error('Email service returned an error');
    }
  } catch (error) {
    console.error('EmailJS Error:', error);
    submitStatus.message = "Sorry, there was an error sending your message. Please try again or contact me directly.";
    submitStatus.type = "error";
  } finally {
    isSubmitting.value = false;
    
    // Clear status message after 5 seconds
    setTimeout(() => {
      submitStatus.message = "";
      submitStatus.type = "";
    }, 5000);
  }
};

// Scroll progress
const updateScrollProgress = () => {
  const scrollTop = window.pageYOffset;
  const docHeight = document.body.offsetHeight - window.innerHeight;
  scrollProgress.value = (scrollTop / docHeight) * 100;
};

// Intersection Observer for animations
const observeElements = () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  });

  document.querySelectorAll(".section").forEach((section) => {
    observer.observe(section);
  });
};

// Lifecycle
onMounted(() => {
  window.addEventListener("scroll", updateScrollProgress);
  setTimeout(observeElements, 100);
  initEmailJS();
});

onUnmounted(() => {
  window.removeEventListener("scroll", updateScrollProgress);
});
</script>

<style>
/* Import Font Awesome for icons */
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css");
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap");

/* Global Styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Inter', sans-serif;
  background: #000000;
  color: #ffffff;
  overflow-x: hidden;
  min-height: 100vh;
  line-height: 1.6;
}

.app {
  position: relative;
  min-height: 100vh;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Submit Status Styles */
.submit-status {
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 8px;
  font-weight: 500;
  animation: fade-in 0.3s ease;
}

.submit-status.success {
  background: rgba(0, 255, 136, 0.1);
  border: 1px solid rgba(0, 255, 136, 0.3);
  color: #00ff88;
}

.submit-status.error {
  background: rgba(255, 0, 102, 0.1);
  border: 1px solid rgba(255, 0, 102, 0.3);
  color: #ff0066;
}

@keyframes fade-in {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Disabled State Styles */
input:disabled,
textarea:disabled,
button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

button:disabled:hover {
  transform: none;
  box-shadow: none;
}

/* Scroll Progress Bar */
.scroll-progress {
  position: fixed;
  top: 0;
  left: 0;
  height: 4px;
  background: linear-gradient(90deg, #ff0066, #ff6b00, #00ff88, #0088ff, #8800ff);
  background-size: 300% 100%;
  animation: rainbow-flow 3s linear infinite;
  z-index: 9999;
  transition: width 0.3s ease;
  box-shadow: 0 0 20px rgba(255, 0, 102, 0.6);
}

/* Navigation */
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.95);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  z-index: 1000;
  box-shadow: 0 2px 30px rgba(0, 0, 0, 0.8);
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-logo {
  font-size: 1.5rem;
  font-weight: 700;
  color: #ffffff;
  letter-spacing: 2px;
  text-shadow: 0 0 20px rgba(255, 0, 102, 0.6);
  animation: logo-glow 2s ease-in-out infinite alternate;
}

.nav-menu {
  display: flex;
  gap: 2rem;
  list-style: none;
}

.nav-link {
  color: #ffffff;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;
  padding: 0.8rem 1.2rem;
  border-radius: 25px;
  overflow: hidden;
}

.nav-link::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 0, 102, 0.4), transparent);
  transition: all 0.6s ease;
}

.nav-link:hover::before {
  left: 100%;
}

.nav-link:hover {
  color: #ff0066;
  text-shadow: 0 0 15px rgba(255, 0, 102, 0.8);
  transform: translateY(-2px) scale(1.05);
  background: rgba(255, 0, 102, 0.1);
  border: 1px solid rgba(255, 0, 102, 0.3);
}

.nav-toggle {
  display: none;
  flex-direction: column;
  cursor: pointer;
  gap: 4px;
}

.nav-toggle span {
  width: 25px;
  height: 3px;
  background: #ffffff;
  border-radius: 2px;
  transition: all 0.3s ease;
}

/* Hero Section */
.hero-section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 120px 0 80px;
  background: radial-gradient(ellipse at center, #111111 0%, #000000 70%);
  position: relative;
  overflow: hidden;
}

.hero-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><circle cx="200" cy="300" r="2" fill="%23ffffff" opacity="0.3"><animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite"/></circle><circle cx="800" cy="200" r="1" fill="%23ff0066" opacity="0.5"><animate attributeName="opacity" values="0.5;1;0.5" dur="3s" repeatCount="indefinite"/></circle><circle cx="600" cy="700" r="1.5" fill="%2300ff88" opacity="0.4"><animate attributeName="opacity" values="0.4;1;0.4" dur="2.5s" repeatCount="indefinite"/></circle></svg>') repeat;
  animation: stars-twinkle 20s linear infinite;
}

.hero-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 4rem;
  align-items: center;
  position: relative;
  z-index: 2;
}

.hero-content {
  z-index: 10;
}

.hero-title {
  font-size: 4.5rem;
  font-weight: 800;
  margin-bottom: 1rem;
  line-height: 1.1;
  color: #ffffff;
  text-shadow: 0 0 30px rgba(255, 0, 102, 0.6);
  animation: title-pulse 3s ease-in-out infinite;
}

.hero-subtitle {
  font-size: 2.2rem;
  color: #ff0066;
  margin-bottom: 1.5rem;
  font-weight: 600;
  text-shadow: 0 0 20px rgba(255, 0, 102, 0.8);
  animation: subtitle-float 4s ease-in-out infinite;
}

.hero-description {
  font-size: 1.2rem;
  color: #cccccc;
  margin-bottom: 2.5rem;
  max-width: 600px;
  line-height: 1.8;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
}

.hero-buttons {
  display: flex;
  gap: 1.5rem;
  margin-bottom: 3rem;
}

.btn-primary,
.btn-secondary {
  padding: 18px 35px;
  border: none;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  text-decoration: none;
  display: inline-block;
  text-align: center;
  position: relative;
  overflow: hidden;
  z-index: 1;
}

.btn-primary {
  background: linear-gradient(135deg, #ff0066, #ff6b00);
  color: white;
  box-shadow: 0 8px 25px rgba(255, 0, 102, 0.4);
}

.btn-secondary {
  background: transparent;
  color: #ffffff;
  border: 2px solid #ffffff;
  box-shadow: 0 8px 25px rgba(255, 255, 255, 0.2);
}

.btn-wave {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.4) 0%, transparent 70%);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition: all 0.6s ease;
  z-index: -1;
}

.btn-primary:hover,
.btn-secondary:hover {
  transform: translateY(-5px) scale(1.05);
  box-shadow: 0 15px 40px rgba(255, 0, 102, 0.6);
}

.btn-primary:hover .btn-wave,
.btn-secondary:hover .btn-wave {
  width: 300px;
  height: 300px;
}

.hero-social {
  display: flex;
  gap: 1.5rem;
}

.social-link {
  width: 60px;
  height: 60px;
  background: rgba(255, 255, 255, 0.1);
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-size: 1.4rem;
  text-decoration: none;
  transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;
  overflow: hidden;
}

.social-ripple {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  background: radial-gradient(circle, rgba(255, 0, 102, 0.4) 0%, transparent 70%);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition: all 0.6s ease;
  z-index: -1;
}

.social-link:hover {
  color: #ff0066;
  border-color: #ff0066;
  box-shadow: 0 0 30px rgba(255, 0, 102, 0.6);
  transform: translateY(-5px) rotate(360deg);
}

.social-link:hover .social-ripple {
  width: 200px;
  height: 200px;
}

.hero-image {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.image-frame {
  position: relative;
  width: 350px;
  height: 350px;
  border-radius: 50%;
  overflow: hidden;
}

.profile-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  border: 4px solid rgba(255, 0, 102, 0.5);
  transition: all 0.5s ease;
}

.image-glow {
  position: absolute;
  top: -20px;
  left: -20px;
  right: -20px;
  bottom: -20px;
  border: 2px solid #ff0066;
  border-radius: 50%;
  animation: image-rotate 10s linear infinite;
  opacity: 0;
  transition: opacity 0.5s ease;
}

.image-frame:hover .image-glow {
  opacity: 1;
}

.image-frame:hover .profile-image {
  transform: scale(1.1);
  box-shadow: 0 0 50px rgba(255, 0, 102, 0.8);
}

/* Section Styles */
.section {
  padding: 100px 0;
  opacity: 0;
  transform: translateY(50px);
  transition: all 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.section.visible {
  opacity: 1;
  transform: translateY(0);
}

.section-title {
  font-size: 3.5rem;
  text-align: center;
  margin-bottom: 4rem;
  font-weight: 700;
  color: #ffffff;
  text-shadow: 0 0 30px rgba(255, 0, 102, 0.6);
  position: relative;
  display: inline-block;
  width: 100%;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 4px;
  background: linear-gradient(90deg, #ff0066, #ff6b00, #00ff88);
  border-radius: 2px;
  animation: title-underline 3s ease-in-out infinite;
}

/* About Section */
.about-section {
  background: radial-gradient(ellipse at center, #111111 0%, #000000 70%);
}

.about-content {
  max-width: 800px;
  margin: 0 auto;
}

.about-description {
  font-size: 1.3rem;
  text-align: center;
  color: #cccccc;
  margin-bottom: 4rem;
  line-height: 1.8;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
}

.about-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.stat-item {
  text-align: center;
  padding: 3rem 2rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  backdrop-filter: blur(10px);
  transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;
  overflow: hidden;
}

.stat-bg {
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 0, 102, 0.1), transparent);
  transition: all 0.8s ease;
}

.stat-item:hover .stat-bg {
  left: 100%;
}

.stat-item:hover {
  transform: translateY(-10px) scale(1.05);
  border-color: #ff0066;
  box-shadow: 0 20px 40px rgba(255, 0, 102, 0.4);
}

.stat-number {
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
  color: #ff0066;
  text-shadow: 0 0 20px rgba(255, 0, 102, 0.8);
  animation: number-glow 2s ease-in-out infinite alternate;
}

.stat-label {
  color: #ffffff;
  font-size: 1.1rem;
  font-weight: 500;
}

/* Experience Section */
.experience-section {
  background: #000000;
}

.timeline {
  max-width: 800px;
  margin: 0 auto;
  position: relative;
}

.timeline::before {
  content: "";
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 4px;
  height: 100%;
  background: linear-gradient(180deg, #ff0066, #ff6b00, #00ff88, #0088ff);
  border-radius: 2px;
  animation: timeline-glow 3s ease-in-out infinite alternate;
}

.timeline-item {
  position: relative;
  margin-bottom: 4rem;
  width: calc(50% - 2rem);
}

.timeline-item:nth-child(odd) {
  margin-left: 0;
}

.timeline-item:nth-child(even) {
  margin-left: calc(50% + 2rem);
}

.timeline-dot {
  position: absolute;
  width: 20px;
  height: 20px;
  background: #ff0066;
  border-radius: 50%;
  top: 2rem;
  border: 4px solid #000000;
  box-shadow: 0 0 20px rgba(255, 0, 102, 0.8);
  z-index: 10;
}

.dot-pulse {
  position: absolute;
  top: -10px;
  left: -10px;
  width: 40px;
  height: 40px;
  border: 2px solid #ff0066;
  border-radius: 50%;
  animation: dot-pulse 2s ease-in-out infinite;
}

.timeline-item:nth-child(odd) .timeline-dot {
  right: -3rem;
}

.timeline-item:nth-child(even) .timeline-dot {
  left: -3rem;
}

.timeline-content {
  padding: 2.5rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  backdrop-filter: blur(10px);
  transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;
  overflow: hidden;
}

.timeline-glow {
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 0, 102, 0.1), transparent);
  transition: all 1s ease;
}

.timeline-content:hover .timeline-glow {
  left: 100%;
}

.timeline-content:hover {
  transform: translateY(-10px) scale(1.02);
  border-color: #ff0066;
  box-shadow: 0 25px 50px rgba(255, 0, 102, 0.3);
}

.timeline-header {
  margin-bottom: 1.5rem;
}

.timeline-title {
  color: #ff0066;
  font-size: 1.6rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  text-shadow: 0 0 15px rgba(255, 0, 102, 0.6);
}

.timeline-company {
  font-size: 1.1rem;
  font-weight: 500;
  margin-bottom: 0.3rem;
  color: #ffffff;
}

.timeline-date {
  color: #cccccc;
  font-size: 0.9rem;
}

.project-item {
  margin-bottom: 1rem;
  padding-left: 1.5rem;
  border-left: 3px solid rgba(255, 0, 102, 0.5);
  line-height: 1.6;
  color: #cccccc;
  transition: all 0.3s ease;
}

.project-item:hover {
  border-left-color: #ff0066;
  padding-left: 2rem;
  color: #ffffff;
}

/* Skills Section */
.skills-section {
  background: radial-gradient(ellipse at center, #111111 0%, #000000 70%);
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.skill-category {
  padding: 2.5rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  backdrop-filter: blur(10px);
  transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;
  overflow: hidden;
}

.category-glow {
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: conic-gradient(from 0deg, transparent, #ff0066, transparent, #00ff88, transparent, #0088ff, transparent);
  animation: category-spin 4s linear infinite;
  opacity: 0;
  transition: opacity 0.5s ease;
}

.skill-category:hover .category-glow {
  opacity: 0.1;
}

.skill-category:hover {
  transform: translateY(-15px) scale(1.02);
  border-color: #ff0066;
  box-shadow: 0 25px 50px rgba(255, 0, 102, 0.4);
}

.skill-category-title {
  color: #ff0066;
  font-size: 1.6rem;
  font-weight: 600;
  margin-bottom: 2rem;
  text-align: center;
  text-shadow: 0 0 15px rgba(255, 0, 102, 0.6);
}

.skill-item {
  margin-bottom: 2rem;
  transition: all 0.3s ease;
}

.skill-item:hover {
  transform: translateX(10px);
}

.skill-name {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.8rem;
  font-weight: 500;
  color: #ffffff;
  font-size: 1.1rem;
}

.skill-bar {
  width: 100%;
  height: 8px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  overflow: hidden;
  position: relative;
}

.skill-progress {
  height: 100%;
  background: linear-gradient(90deg, #ff0066, #ff6b00, #00ff88);
  border-radius: 4px;
  transition: all 2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;
}

.skill-glow {
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
  animation: skill-shine 2s ease-in-out infinite;
}

.specialization-list {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.spec-item {
  background: rgba(255, 255, 255, 0.1);
  color: #ffffff;
  padding: 1rem 1.5rem;
  border-radius: 25px;
  font-weight: 500;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;
  overflow: hidden;
  cursor: pointer;
}

.spec-ripple {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  background: radial-gradient(circle, rgba(255, 0, 102, 0.4) 0%, transparent 70%);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition: all 0.6s ease;
  z-index: -1;
}

.spec-item:hover {
  color: #ff0066;
  border-color: #ff0066;
  transform: translateY(-5px) scale(1.05);
  box-shadow: 0 10px 25px rgba(255, 0, 102, 0.4);
}

.spec-item:hover .spec-ripple {
  width: 200px;
  height: 200px;
}

/* Projects Section */
.projects-section {
  background: #000000;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.project-card {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  overflow: hidden;
  backdrop-filter: blur(10px);
  transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;
  cursor: pointer;
}

.card-glow {
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  background: linear-gradient(45deg, #ff0066, #682f06ff, #173025ff, #0088ff, #8800ff);
  background-size: 300% 300%;
  border-radius: 20px;
  z-index: -1;
  animation: card-glow 4s ease-in-out infinite;
  opacity: 0;
  transition: opacity 0.5s ease;
}

.project-card:hover .card-glow {
  opacity: 1;
}

.project-card:hover {
  transform: translateY(-20px) scale(1.03);
  box-shadow: 0 30px 60px rgba(255, 0, 102, 0.4);
}

.project-image {
  width: 100%;
  height: 220px;
  overflow: hidden;
  position: relative;
}

.project-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 0, 102, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: all 0.5s ease;
}

.overlay-content {
  color: white;
  text-align: center;
  transform: translateY(20px);
  transition: transform 0.5s ease;
}

.overlay-content i {
  font-size: 2rem;
  margin-bottom: 0.5rem;
  display: block;
}

.project-card:hover .project-image img {
  transform: scale(1.1);
}

.project-card:hover .image-overlay {
  opacity: 1;
}

.project-card:hover .overlay-content {
  transform: translateY(0);
}

.project-content {
  padding: 2rem;
}

.project-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.project-category {
  background: linear-gradient(135deg, #ff0066, #ff6b00);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 15px;
  font-size: 0.85rem;
  font-weight: 500;
  text-shadow: none;
}

.project-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #ffffff;
  text-shadow: 0 0 15px rgba(255, 0, 102, 0.4);
}

.project-description {
  color: #cccccc;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 2rem;
}

.tech-tag {
  background: rgba(255, 255, 255, 0.1);
  color: #ffffff;
  padding: 0.4rem 0.8rem;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 500;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
}

.tech-tag:hover {
  background: rgba(255, 0, 102, 0.2);
  border-color: #ff0066;
  transform: translateY(-2px);
}

.project-links {
  display: flex;
  gap: 1rem;
}

.project-btn {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #ffffff;
  padding: 0.8rem 1.2rem;
  border-radius: 25px;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  position: relative;
  overflow: hidden;
}

.btn-shimmer {
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
  transition: all 0.6s ease;
}

.project-btn:hover .btn-shimmer {
  left: 100%;
}

.project-btn:hover {
  background: linear-gradient(135deg, #ff0066, #ff6b00);
  border-color: #ff0066;
  color: white;
  transform: translateY(-3px) scale(1.05);
  box-shadow: 0 10px 25px rgba(255, 0, 102, 0.4);
}

/* Education Section */
.education-section {
  background: radial-gradient(ellipse at center, #111111 0%, #000000 70%);
}

.education-timeline {
  max-width: 600px;
  margin: 0 auto;
}

.education-item {
  padding: 2.5rem;
  margin-bottom: 2rem;
  display: grid;
  grid-template-columns: 140px 1fr;
  gap: 2rem;
  align-items: center;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  backdrop-filter: blur(10px);
  transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;
  overflow: hidden;
}

.education-glow {
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(0, 255, 136, 0.1), transparent);
  transition: all 1s ease;
}

.education-item:hover .education-glow {
  left: 100%;
}

.education-item:hover {
  transform: translateY(-10px) scale(1.02);
  border-color: #00ff88;
  box-shadow: 0 20px 40px rgba(0, 255, 136, 0.3);
}

.education-year {
  font-size: 1rem;
  font-weight: 600;
  color: #00ff88;
  text-align: center;
  padding: 1rem;
  background: rgba(0, 255, 136, 0.1);
  border: 1px solid rgba(0, 255, 136, 0.3);
  border-radius: 10px;
  text-shadow: 0 0 10px rgba(0, 255, 136, 0.6);
}

.education-title {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #ffffff;
}

.education-institution {
  font-weight: 500;
  margin-bottom: 0.3rem;
  color: #cccccc;
}

.education-location {
  color: #999999;
  font-size: 0.9rem;
}

/* Contact Section */
.contact-section {
  background: #000000;
}

.contact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  max-width: 1000px;
  margin: 0 auto;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.contact-item {
  padding: 2.5rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  backdrop-filter: blur(10px);
  transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;
  overflow: hidden;
}

.contact-item:hover {
  transform: translateY(-10px) scale(1.02);
  border-color: #0088ff;
  box-shadow: 0 20px 40px rgba(0, 136, 255, 0.3);
}

.contact-icon {
  width: 70px;
  height: 70px;
  background: linear-gradient(135deg, #0088ff, #8800ff);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: white;
  flex-shrink: 0;
  position: relative;
}

.icon-pulse {
  position: absolute;
  top: -10px;
  left: -10px;
  width: 90px;
  height: 90px;
  border: 2px solid #0088ff;
  border-radius: 50%;
  animation: icon-pulse 2s ease-in-out infinite;
}

.contact-details h3 {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #ffffff;
}

.contact-details a {
  color: #cccccc;
  text-decoration: none;
  transition: all 0.3s ease;
}

.contact-details a:hover {
  color: #0088ff;
  text-shadow: 0 0 10px rgba(0, 136, 255, 0.6);
}

.contact-form {
  padding: 2.5rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  backdrop-filter: blur(10px);
}

.form-group {
  margin-bottom: 1.5rem;
  position: relative;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 1.2rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  color: #ffffff;
  font-size: 1rem;
  transition: all 0.4s ease;
}

.input-glow {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border: 2px solid transparent;
  border-radius: 10px;
  background: linear-gradient(45deg, #ff0066, #0088ff) border-box;
  -webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: exclude;
  mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
  opacity: 0;
  transition: opacity 0.4s ease;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #0088ff;
  box-shadow: 0 0 20px rgba(0, 136, 255, 0.4);
  transform: scale(1.02);
}

.form-group input:focus + .input-glow,
.form-group textarea:focus + .input-glow {
  opacity: 1;
}

.form-group input::placeholder,
.form-group textarea::placeholder {
  color: #999999;
}

/* Footer */
.footer {
  background: radial-gradient(ellipse at center, #111111 0%, #000000 100%);
  color: white;
  padding: 3rem 0;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer-text {
  color: #cccccc;
}

.footer-social {
  display: flex;
  gap: 1rem;
}

.footer-link {
  width: 50px;
  height: 50px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #cccccc;
  text-decoration: none;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;
  overflow: hidden;
}

.footer-ripple {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  background: radial-gradient(circle, rgba(255, 0, 102, 0.4) 0%, transparent 70%);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition: all 0.6s ease;
  z-index: -1;
}

.footer-link:hover {
  color: #ff0066;
  border-color: #ff0066;
  transform: translateY(-3px) scale(1.1);
  box-shadow: 0 10px 20px rgba(255, 0, 102, 0.4);
}

.footer-link:hover .footer-ripple {
  width: 100px;
  height: 100px;
}

/* Animations */
@keyframes rainbow-flow {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

@keyframes logo-glow {
  0%, 100% { text-shadow: 0 0 20px rgba(255, 0, 102, 0.6); }
  50% { text-shadow: 0 0 30px rgba(255, 0, 102, 1), 0 0 40px rgba(255, 0, 102, 0.8); }
}

@keyframes stars-twinkle {
  0% { transform: translateX(0); }
  100% { transform: translateX(-100px); }
}

@keyframes title-pulse {
  0%, 100% { transform: scale(1); text-shadow: 0 0 30px rgba(255, 0, 102, 0.6); }
  50% { transform: scale(1.02); text-shadow: 0 0 40px rgba(255, 0, 102, 0.8); }
}

@keyframes subtitle-float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

@keyframes image-rotate {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

@keyframes title-underline {
  0%, 100% { width: 100px; }
  50% { width: 150px; }
}

@keyframes number-glow {
  0%, 100% { text-shadow: 0 0 20px rgba(255, 0, 102, 0.8); }
  50% { text-shadow: 0 0 30px rgba(255, 0, 102, 1), 0 0 40px rgba(255, 0, 102, 0.6); }
}

@keyframes timeline-glow {
  0%, 100% { box-shadow: 0 0 20px rgba(255, 0, 102, 0.6); }
  50% { box-shadow: 0 0 30px rgba(255, 0, 102, 1), 0 0 40px rgba(255, 0, 102, 0.8); }
}

@keyframes dot-pulse {
  0% { transform: scale(1); opacity: 1; }
  100% { transform: scale(2); opacity: 0; }
}

@keyframes category-spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

@keyframes skill-shine {
  0% { left: -100%; }
  50% { left: 100%; }
  100% { left: -100%; }
}

@keyframes card-glow {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

@keyframes icon-pulse {
  0% { transform: scale(1); opacity: 1; }
  100% { transform: scale(1.3); opacity: 0; }
}

/* Responsive Design */
@media (max-width: 968px) {
  .hero-container {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 2rem;
  }

  .image-frame {
    width: 250px;
    height: 250px;
  }

  .timeline::before {
    left: 2rem;
  }

  .timeline-item {
    width: calc(100% - 4rem);
    margin-left: 4rem;
  }

  .timeline-item:nth-child(even) {
    margin-left: 4rem;
  }

  .timeline-dot {
    left: -2.5rem !important;
  }

  .contact-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}

@media (max-width: 768px) {
  .nav-menu {
    position: fixed;
    top: 100%;
    left: 0;
    width: 100%;
    background: rgba(0, 0, 0, 0.98);
    backdrop-filter: blur(20px);
    flex-direction: column;
    padding: 2rem;
    gap: 1rem;
    transition: all 0.3s ease;
    opacity: 0;
    visibility: hidden;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.8);
  }

  .nav-menu.active {
    top: 100%;
    opacity: 1;
    visibility: visible;
  }

  .nav-toggle {
    display: flex;
  }

  .hero-title {
    font-size: 2.8rem;
  }

  .hero-subtitle {
    font-size: 1.6rem;
  }

  .hero-buttons {
    flex-direction: column;
    gap: 1rem;
  }

  .section-title {
    font-size: 2.5rem;
  }

  .about-stats {
    grid-template-columns: 1fr;
  }

  .skills-grid {
    grid-template-columns: 1fr;
  }

  .projects-grid {
    grid-template-columns: 1fr;
  }

  .education-item {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .footer-content {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 15px;
  }

  .hero-title {
    font-size: 2.2rem;
  }

  .section-title {
    font-size: 2rem;
  }

  .timeline-item {
    margin-left: 2rem;
    width: calc(100% - 2rem);
  }

  .timeline-dot {
    left: -1.5rem !important;
  }
}

/* Reduced motion for accessibility */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
</style>