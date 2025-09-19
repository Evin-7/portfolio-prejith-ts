<template>
  <div class="app">
    <div class="scroll-progress" :style="{ width: scrollProgress + '%' }"></div>

    <!-- Navigation -->
    <nav class="navbar">
      <div class="nav-container">
        <div class="nav-logo">CHRISTO GEORGE</div>
        <div class="nav-menu" :class="{ active: isMenuOpen }">
          <a @click="scrollTo('home')" class="nav-link">Home</a>
          <a @click="scrollTo('about')" class="nav-link">About</a>
          <a @click="scrollTo('experience')" class="nav-link">Experience</a>
          <a @click="scrollTo('skills')" class="nav-link">Skills</a>
          <a @click="scrollTo('projects')" class="nav-link">Campaigns</a>
          <a @click="scrollTo('education')" class="nav-link">Education</a>
          <a @click="scrollTo('contact')" class="nav-link">Contact</a>
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
          <h1 class="hero-title">CHRISTO GEORGE</h1>
          <h2 class="hero-subtitle">Digital Marketing Expert</h2>
          <p class="hero-description">
            Experienced Digital Marketing Executive with a demonstrated history of working in different types of industry. Skilled in Search Engine Optimization (SEO), Buffer Social Media Management, Google Adwords Professional, Social Media Optimization (SMO), and Social Media Marketing. Strong marketing professional with a BCA focused in Computer Science from the University of Kerala.
          </p>
          <div class="hero-buttons">
            <button @click="scrollTo('contact')" class="btn-primary">
              <span>Let's Connect</span>
            </button>
            <a href="/ChristoResume.pdf"  download="ChristoResume.pdf" class="btn-secondary">
              <span><i class="fas fa-download"></i> Download Resume</span>
            </a>
          </div>
          <div class="hero-social">
            <a href="https://www.linkedin.com/in/christo-george-digital-marketer/" target="_blank" class="social-link">
              <i class="fab fa-linkedin"></i>
            </a>
            <a href="mailto:christo4747@gmail.com" class="social-link">
              <i class="fas fa-envelope"></i>
            </a>
            <a href="tel:+919048685718" class="social-link">
              <i class="fas fa-phone"></i>
            </a>
          </div>
        </div>
           <div class="hero-image">
          <div class="image-frame">
            <img src="./assets/images/chrystoopic.jpeg" alt="Prejith T S" class="profile-image" />
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
              I'm Christo George, a passionate Digital Marketing Specialist with over 8 years of experience 
              helping businesses grow through data-driven strategies and creative campaigns. My expertise spans across SEO,
               Google Ads, Social Media Marketing, Content Strategy, and Analytics, with proven success in improving 
               online visibility and driving measurable results.
Beyond campaigns, I'm committed to continuous learning and staying updated with the latest trends in digital marketing
 to provide innovative solutions. My goal is simple: to help brands build a strong online presence, connect with the right 
 audience, and achieve sustainable growth.
            </p>
            <div class="about-stats">
              <div class="stat-item">
                <div class="stat-number">8+</div>
                <div class="stat-label">Years Experience</div>
              </div>
              <div class="stat-item">
                <div class="stat-number">200+</div>
                <div class="stat-label">Campaigns Managed</div>
              </div>
              <div class="stat-item">
                <div class="stat-number">540K+</div>
                <div class="stat-label">App Downloads</div>
              </div>
              <div class="stat-item">
                <div class="stat-number">100%</div>
                <div class="stat-label">Client Satisfaction</div>
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
            <div class="timeline-header">
              <div>
                <h3 class="timeline-title">Digital Marketer</h3>
                <div class="timeline-company">Oh Yes APP</div>
              </div>
              <div class="timeline-date">Apr 2024 - Present</div>
            </div>
            <div class="timeline-description">
              <ul>
                <li>Scaled app downloads from 2,000 to 70,000 users (3500% growth)</li>
                <li>Generated leads through Facebook, Instagram, Google Ads, and other platforms</li>
                <li>Executed brand awareness campaigns across multiple social media platforms</li>
                <li>Increased website traffic through comprehensive SEO strategies</li>
                <li>Developed notification strategies to improve user engagement</li>
              </ul>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-header">
              <div>
                <h3 class="timeline-title">Digital Marketer</h3>
                <div class="timeline-company">IBIS Academy of Higher Education</div>
              </div>
              <div class="timeline-date">Dec 2021 - Apr 2024</div>
            </div>
            <div class="timeline-description">
              <ul>
                <li>Developed social media, YouTube, and Google ads for daily lead generation</li>
                <li>Managed campaigns for all branches across India</li>
                <li>Led digital marketing team and social media accounts</li>
                <li>Implemented SEO strategies for improved Google search rankings</li>
              </ul>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-header">
              <div>
                <h3 class="timeline-title">Social Media Promoter</h3>
                <div class="timeline-company">90+ My Tuition APP</div>
              </div>
              <div class="timeline-date">Sep 2020 - Dec 2021</div>
            </div>
            <div class="timeline-description">
              <ul>
                <li>Achieved massive growth: 35,000 to 540,000 app downloads (1440% growth)</li>
                <li>Executed multi-platform advertising campaigns</li>
                <li>Created brand awareness strategies across social media platforms</li>
                <li>Enhanced website traffic through targeted SEO techniques</li>
              </ul>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-header">
              <div>
                <h3 class="timeline-title">Digital Marketing Executive</h3>
                <div class="timeline-company">Potters Wheel Media</div>
              </div>
              <div class="timeline-date">Aug 2019 - Aug 2020</div>
            </div>
            <div class="timeline-description">
              <ul>
                <li>Managed digital marketing campaigns for 13+ clients</li>
                <li>Performed detailed keyword research using Google AdWords</li>
                <li>Executed on-page and off-page SEO strategies</li>
                <li>Prepared comprehensive client content calendars</li>
              </ul>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-header">
              <div>
                <h3 class="timeline-title">Digital Marketing Executive</h3>
                <div class="timeline-company">Phase 3 India (P) Ltd.</div>
              </div>
              <div class="timeline-date">Jan 2017 - Jul 2019</div>
            </div>
            <div class="timeline-description">
              <ul>
                <li>Generated 150+ quality leads monthly, exceeding targets consistently</li>
                <li>Managed multiple social media accounts and campaigns</li>
                <li>Developed campaign strategies for follower growth and engagement</li>
                <li>Implemented SEO strategies that significantly improved website rankings</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section id="skills" class="skills-section section">
      <div class="container">
        <h2 class="section-title">Core Skills</h2>
        <div class="skills-grid">
          <div class="skill-category">
            <h3 class="skill-category-title">Digital Marketing</h3>
            <div class="skills-list">
              <div class="skill-item">
                <div class="skill-name">
                  <span>Search Engine Optimization</span>
                  <span>95%</span>
                </div>
                <div class="skill-bar">
                  <div class="skill-progress" style="width: 95%"></div>
                </div>
              </div>
              <div class="skill-item">
                <div class="skill-name">
                  <span>Pay-Per-Click Advertising</span>
                  <span>90%</span>
                </div>
                <div class="skill-bar">
                  <div class="skill-progress" style="width: 90%"></div>
                </div>
              </div>
              <div class="skill-item">
                <div class="skill-name">
                  <span>Social Media Marketing</span>
                  <span>95%</span>
                </div>
                <div class="skill-bar">
                  <div class="skill-progress" style="width: 95%"></div>
                </div>
              </div>
              <div class="skill-item">
                <div class="skill-name">
                  <span>Google Ads & Analytics</span>
                  <span>90%</span>
                </div>
                <div class="skill-bar">
                  <div class="skill-progress" style="width: 90%"></div>
                </div>
              </div>
            </div>
          </div>

          <div class="skill-category">
            <h3 class="skill-category-title">Analytics & Tools</h3>
            <div class="skills-list">
              <div class="skill-item">
                <div class="skill-name">
                  <span>Keyword Research</span>
                  <span>88%</span>
                </div>
                <div class="skill-bar">
                  <div class="skill-progress" style="width: 88%"></div>
                </div>
              </div>
              <div class="skill-item">
                <div class="skill-name">
                  <span>YouTube Marketing</span>
                  <span>85%</span>
                </div>
                <div class="skill-bar">
                  <div class="skill-progress" style="width: 85%"></div>
                </div>
              </div>
              <div class="skill-item">
                <div class="skill-name">
                  <span>App Promotion</span>
                  <span>95%</span>
                </div>
                <div class="skill-bar">
                  <div class="skill-progress" style="width: 95%"></div>
                </div>
              </div>
              <div class="skill-item">
                <div class="skill-name">
                  <span>Brand Marketing</span>
                  <span>85%</span>
                </div>
                <div class="skill-bar">
                  <div class="skill-progress" style="width: 85%"></div>
                </div>
              </div>
            </div>
          </div>

          <div class="skill-category">
            <h3 class="skill-category-title">Specializations</h3>
            <div class="specialization-list">
              <div class="spec-item">
                <span>Lead Generation</span>
              </div>
              <div class="spec-item">
                <span>Social Media Management</span>
              </div>
              <div class="spec-item">
                <span>Campaign Strategy</span>
              </div>
              <div class="spec-item">
                <span>Content Marketing</span>
              </div>
              <div class="spec-item">
                <span>Conversion Optimization</span>
              </div>
              <div class="spec-item">
                <span>Performance Marketing</span>
              </div>
              <div class="spec-item">
                <span>Influencer Marketing</span>
              </div>
              <div class="spec-item">
                <span>Mobile Marketing</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="projects-section section">
      <div class="container">
        <h2 class="section-title">Featured Campaigns</h2>
        <div class="projects-grid">
          <div class="project-card" v-for="project in featuredProjects" :key="project.id">
            <div class="project-content">
              <div class="project-header">
                <div class="project-category">{{ project.category }}</div>
                <i class="fas fa-chart-line" style="color: #60a5fa; font-size: 1.2rem;"></i>
              </div>
              <h3 class="project-title">{{ project.title }}</h3>
              <p class="project-description">{{ project.description }}</p>
              <div class="project-metrics">
                <i class="fas fa-trophy" style="color: #fbbf24;"></i>
                <span class="achievement-badge">{{ project.achievement }}</span>
              </div>
              <div class="metrics-label">{{ project.metrics }}</div>
              <div class="project-tech">
                <span class="tech-tag" v-for="platform in project.platforms" :key="platform">
                  {{ platform }}
                </span>
              </div>
            </div>
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
            <div class="education-header">
              <div>
                <h3 class="education-title">Bachelor of Computer Applications (BCA)</h3>
                <div class="education-institution">Lakshmi College, Chalakudy</div>
                <div class="education-institution">Kerala University</div>
              </div>
              <div class="education-year">2016 | 68%</div>
            </div>
          </div>
          <div class="education-item">
            <div class="education-header">
              <div>
                <h3 class="education-title">Digital Marketing Certification</h3>
                <div class="education-institution">Digital ProSchool</div>
              </div>
              <div class="education-year">2017</div>
            </div>
            <p style="color: #cccccc; margin-top: 1rem;">
              Comprehensive certification covering SEO, SEM, Social Media Marketing, 
              Analytics, and Digital Strategy fundamentals.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="contact-section section">
      <div class="container">
        <h2 class="section-title">Let's Connect</h2>
        <div class="contact-content">
          <div class="contact-info">
            <div class="contact-item">
              <div class="contact-icon">
                <i class="fas fa-envelope"></i>
              </div>
              <div class="contact-details">
                <h3>Email</h3>
                <a href="mailto:christo4747@gmail.com">christo4747@gmail.com</a>
              </div>
            </div>
            <div class="contact-item">
              <div class="contact-icon">
                <i class="fas fa-phone"></i>
              </div>
              <div class="contact-details">
                <h3>Phone</h3>
                <a href="tel:+919048685718">+91 9048685718</a>
              </div>
            </div>
            <div class="contact-item">
              <div class="contact-icon">
                <i class="fas fa-map-marker-alt"></i>
              </div>
              <div class="contact-details">
                <h3>Location</h3>
                <p>Thrissur, Kerala, India</p>
              </div>
            </div>
          </div>
          <div class="contact-form">
            <form @submit.prevent="submitForm">
              <div class="form-group">
                <input type="text" v-model="form.name" placeholder="Your Name" required :disabled="isSubmitting" />
              </div>
              <div class="form-group">
                <input type="email" v-model="form.email" placeholder="Your Email" required :disabled="isSubmitting" />
              </div>
              <div class="form-group">
                <input type="text" v-model="form.subject" placeholder="Subject" required :disabled="isSubmitting" />
              </div>
              <div class="form-group">
                <textarea v-model="form.message" placeholder="Your Message" rows="5" required :disabled="isSubmitting"></textarea>
              </div>
              <button type="submit" class="btn-primary" :disabled="isSubmitting" style="width: 100%;">
                <span v-if="!isSubmitting"><i class="fas fa-paper-plane"></i> Send Message</span>
                <span v-else><i class="fas fa-spinner fa-spin"></i> Sending...</span>
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
            <p>&copy; 2024 Christo George. All rights reserved.</p>
          </div>
          <div class="footer-social">
            <a href="https://linkedin.com/in/christo-george" target="_blank" class="footer-link">
              <i class="fab fa-linkedin"></i>
            </a>
            <a href="mailto:christo4747@gmail.com" class="footer-link">
              <i class="fas fa-envelope"></i>
            </a>
            <a href="tel:+919048685718" class="footer-link">
              <i class="fas fa-phone"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, reactive } from "vue";

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
    title: "OhYes App Growth Campaign",
    description: "Increased app downloads from 2,000 to 70,000 through strategic digital marketing across multiple platforms.",
    category: "App Marketing",
    metrics: "3500% growth in downloads",
    platforms: ["Facebook Ads", "Instagram", "Google Ads", "SEO"],
    achievement: "70,000 downloads"
  },
  {
    id: 2,
    title: "90+ My Tuition App Promotion",
    description: "Massive growth campaign that scaled app downloads from 35,000 to 540,000 users through targeted marketing.",
    category: "Social Media Marketing",
    metrics: "1440% user growth",
    platforms: ["Social Media", "PPC", "Brand Awareness", "SEO"],
    achievement: "540,000 downloads"
  },
  {
    id: 3,
    title: "IBIS Academy Lead Generation",
    description: "Developed comprehensive digital marketing strategies generating daily leads for all branches across India.",
    category: "Lead Generation",
    metrics: "Daily lead targets achieved",
    platforms: ["YouTube Ads", "Google Ads", "Social Media", "SEO"],
    achievement: "Pan-India reach"
  },
  {
    id: 4,
    title: "Multi-Client Campaign Management",
    description: "Successfully managed digital marketing campaigns for 13+ clients with comprehensive social media and ad strategies.",
    category: "Client Management",
    metrics: "13+ active clients",
    platforms: ["Google AdWords", "Social Media", "SEO", "Analytics"],
    achievement: "100% client retention"
  },
  {
    id: 5,
    title: "Phase 3 India Lead Pipeline",
    description: "Consistently generated 150+ quality leads monthly through strategic SEO and digital marketing campaigns.",
    category: "B2B Marketing",
    metrics: "150+ leads/month",
    platforms: ["SEO", "Social Media", "Lead Generation", "Analytics"],
    achievement: "Monthly targets exceeded"
  },
  {
    id: 6,
    title: "Brand Awareness Campaigns",
    description: "Created and executed brand awareness strategies across multiple social media platforms for various clients.",
    category: "Brand Marketing",
    metrics: "Significant brand visibility",
    platforms: ["Social Media", "Content Marketing", "Influencer Marketing", "Analytics"],
    achievement: "Enhanced brand presence"
  }
]);

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

// Form submission
const submitForm = async () => {
  isSubmitting.value = true;
  submitStatus.message = "";
  
  try {
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    submitStatus.message = "Thank you for your message! I will get back to you soon.";
    submitStatus.type = "success";
    
    // Reset form
    form.name = "";
    form.email = "";
    form.subject = "";
    form.message = "";
  } catch (error) {
    submitStatus.message = "Sorry, there was an error sending your message. Please try again.";
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
  background: rgba(59, 130, 246, 0.1);
  border: 1px solid rgba(59, 130, 246, 0.3);
  color: #3b82f6;
}

.submit-status.error {
  background: rgba(239, 68, 68, 0.1);
  border: 1px solid rgba(239, 68, 68, 0.3);
  color: #ef4444;
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
  background: linear-gradient(90deg, #1d4ed8, #3b82f6, #60a5fa, #2563eb, #1e40af);
  background-size: 300% 100%;
  animation: rainbow-flow 3s linear infinite;
  z-index: 9999;
  transition: width 0.3s ease;
  box-shadow: 0 0 20px rgba(59, 130, 246, 0.6);
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
  text-shadow: 0 0 20px rgba(59, 130, 246, 0.6);
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
  cursor: pointer;
}

.nav-link::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.4), transparent);
  transition: all 0.6s ease;
}

.nav-link:hover::before {
  left: 100%;
}

.nav-link:hover {
  color: #3b82f6;
  text-shadow: 0 0 15px rgba(59, 130, 246, 0.8);
  transform: translateY(-2px) scale(1.05);
  background: rgba(59, 130, 246, 0.1);
  border: 1px solid rgba(59, 130, 246, 0.3);
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
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><circle cx="200" cy="300" r="2" fill="%23ffffff" opacity="0.3"><animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite"/></circle><circle cx="800" cy="200" r="1" fill="%233b82f6" opacity="0.5"><animate attributeName="opacity" values="0.5;1;0.5" dur="3s" repeatCount="indefinite"/></circle><circle cx="600" cy="700" r="1.5" fill="%2360a5fa" opacity="0.4"><animate attributeName="opacity" values="0.4;1;0.4" dur="2.5s" repeatCount="indefinite"/></circle></svg>') repeat;
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
  background: linear-gradient(135deg, #1d4ed8, #3b82f6, #60a5fa);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: title-pulse 3s ease-in-out infinite;
}

.hero-subtitle {
  font-size: 2.2rem;
  color: #3b82f6;
  margin-bottom: 1.5rem;
  font-weight: 600;
  text-shadow: 0 0 20px rgba(59, 130, 246, 0.8);
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
  background: linear-gradient(135deg, #1d4ed8, #3b82f6);
  color: white;
  box-shadow: 0 8px 25px rgba(59, 130, 246, 0.4);
}

.btn-secondary {
  background: transparent;
  color: #ffffff;
  border: 2px solid #ffffff;
  box-shadow: 0 8px 25px rgba(255, 255, 255, 0.2);
}

.btn-primary:hover,
.btn-secondary:hover {
  transform: translateY(-5px) scale(1.05);
  box-shadow: 0 15px 40px rgba(59, 130, 246, 0.6);
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

.social-link:hover {
  color: #3b82f6;
  border-color: #3b82f6;
  box-shadow: 0 0 30px rgba(59, 130, 246, 0.6);
  transform: translateY(-5px) rotate(360deg);
}

.hero-image {
  display: flex;
  justify-content: left;
  align-items: left;
  position: relative;
}

.image-frame {
  position: relative;
  width: 380px;
  height: 380px;
  border-radius: 60%;
  overflow: hidden;
}

.profile-placeholder {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: radial-gradient(circle, #333, #111);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  font-weight: bold;
  color: #fff;
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
  background: linear-gradient(135deg, #1d4ed8, #3b82f6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
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
  background: linear-gradient(90deg, #1d4ed8, #3b82f6, #60a5fa);
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

.stat-item:hover {
  transform: translateY(-10px) scale(1.05);
  border-color: #3b82f6;
  box-shadow: 0 20px 40px rgba(59, 130, 246, 0.4);
}

.stat-number {
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
  color: #3b82f6;
  text-shadow: 0 0 20px rgba(59, 130, 246, 0.8);
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

.timeline-item {
  position: relative;
  margin-bottom: 4rem;
  padding: 2.5rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  backdrop-filter: blur(10px);
  transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.timeline-item:hover {
  transform: translateY(-10px) scale(1.02);
  border-color: #3b82f6;
  box-shadow: 0 25px 50px rgba(59, 130, 246, 0.3);
}

.timeline-header {
  margin-bottom: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 1rem;
}

.timeline-title {
  color: #3b82f6;
  font-size: 1.6rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  text-shadow: 0 0 15px rgba(59, 130, 246, 0.6);
}

.timeline-company {
  font-size: 1.1rem;
  font-weight: 500;
  margin-bottom: 0.3rem;
  color: #ffffff;
}

.timeline-date {
  background: rgba(96, 165, 250, 0.2);
  color: #60a5fa;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
}

.timeline-description {
  color: #cccccc;
  line-height: 1.6;
}

.timeline-description ul {
  list-style: none;
  padding: 0;
}

.timeline-description li {
  margin-bottom: 0.5rem;
  padding-left: 1.5rem;
  border-left: 3px solid rgba(59, 130, 246, 0.5);
  transition: all 0.3s ease;
}

.timeline-description li:hover {
  border-left-color: #3b82f6;
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

.skill-category:hover {
  transform: translateY(-15px) scale(1.02);
  border-color: #3b82f6;
  box-shadow: 0 25px 50px rgba(59, 130, 246, 0.4);
}

.skill-category-title {
  color: #3b82f6;
  font-size: 1.6rem;
  font-weight: 600;
  margin-bottom: 2rem;
  text-align: center;
  text-shadow: 0 0 15px rgba(59, 130, 246, 0.6);
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
  background: linear-gradient(90deg, #1d4ed8, #3b82f6, #60a5fa);
  border-radius: 4px;
  transition: all 2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;
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

.spec-item:hover {
  color: #3b82f6;
  border-color: #3b82f6;
  transform: translateY(-5px) scale(1.05);
  box-shadow: 0 10px 25px rgba(59, 130, 246, 0.4);
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

.project-card:hover {
  transform: translateY(-20px) scale(1.03);
  box-shadow: 0 30px 60px rgba(59, 130, 246, 0.4);
  border-color: #3b82f6;
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
  background: linear-gradient(135deg, #1d4ed8, #3b82f6);
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
  text-shadow: 0 0 15px rgba(59, 130, 246, 0.4);
}

.project-description {
  color: #cccccc;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.project-metrics {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.achievement-badge {
  background: rgba(251, 191, 36, 0.2);
  color: #fbbf24;
  padding: 0.3rem 0.8rem;
  border-radius: 12px;
  font-size: 0.9rem;
  font-weight: 500;
}

.metrics-label {
  color: #60a5fa;
  font-weight: 600;
  margin-bottom: 1.5rem;
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
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
  background: rgba(59, 130, 246, 0.2);
  border-color: #3b82f6;
  transform: translateY(-2px);
}

/* Education Section */
.education-section {
  background: #000000;
}

.education-timeline {
  max-width: 600px;
  margin: 0 auto;
}

.education-item {
  padding: 2.5rem;
  margin-bottom: 2rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  backdrop-filter: blur(10px);
  transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;
  overflow: hidden;
}

.education-item:hover {
  transform: translateY(-10px) scale(1.02);
  border-color: #60a5fa;
  box-shadow: 0 20px 40px rgba(96, 165, 250, 0.3);
}

.education-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
  flex-wrap: wrap;
  gap: 1rem;
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

.education-year {
  background: rgba(96, 165, 250, 0.2);
  color: #60a5fa;
  padding: 0.5rem 1rem;
  border-radius: 15px;
  font-size: 0.9rem;
  font-weight: 600;
  text-shadow: 0 0 10px rgba(96, 165, 250, 0.6);
}

/* Contact Section */
.contact-section {
  background: radial-gradient(ellipse at center, #111111 0%, #000000 70%);
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
  border-color: #1d4ed8;
  box-shadow: 0 20px 40px rgba(29, 78, 216, 0.3);
}

.contact-icon {
  width: 70px;
  height: 70px;
  background: linear-gradient(135deg, #1d4ed8, #3b82f6);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: white;
  flex-shrink: 0;
  position: relative;
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
  color: #3b82f6;
  text-shadow: 0 0 10px rgba(59, 130, 246, 0.6);
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

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 20px rgba(59, 130, 246, 0.4);
  transform: scale(1.02);
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

.footer-link:hover {
  color: #3b82f6;
  border-color: #3b82f6;
  transform: translateY(-3px) scale(1.1);
  box-shadow: 0 10px 20px rgba(59, 130, 246, 0.4);
}

/* Animations */
@keyframes rainbow-flow {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

@keyframes logo-glow {
  0%, 100% { text-shadow: 0 0 20px rgba(59, 130, 246, 0.6); }
  50% { text-shadow: 0 0 30px rgba(59, 130, 246, 1), 0 0 40px rgba(59, 130, 246, 0.8); }
}

@keyframes stars-twinkle {
  0% { transform: translateX(0); }
  100% { transform: translateX(-100px); }
}

@keyframes title-pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.02); }
}

@keyframes subtitle-float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

@keyframes rotate {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

@keyframes title-underline {
  0%, 100% { width: 100px; }
  50% { width: 150px; }
}

@keyframes number-glow {
  0%, 100% { text-shadow: 0 0 20px rgba(59, 130, 246, 0.8); }
  50% { text-shadow: 0 0 30px rgba(59, 130, 246, 1), 0 0 40px rgba(59, 130, 246, 0.6); }
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

  .footer-content {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }

  .timeline-header,
  .education-header {
    flex-direction: column;
    align-items: flex-start;
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