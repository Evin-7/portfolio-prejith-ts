<template>
  <div id="app">
    <!-- Header -->
    <header :class="['header', { scrolled: isScrolled }]">
      <nav class="navbar">
        <div class="logo">PA Tours & Travels</div>
        <ul :class="['nav-links', { active: menuOpen }]">
          <li><a href="#home" @click="scrollTo('home')">Home</a></li>
          <li><a href="#about" @click="scrollTo('about')">About</a></li>
          <li><a href="#packages" @click="scrollTo('packages')">Packages</a></li>
          <li><a href="#destinations" @click="scrollTo('destinations')">Destinations</a></li>
          <li><a href="#contact" @click="scrollTo('contact')">Contact</a></li>
        </ul>
        <div class="menu-toggle" @click="menuOpen = !menuOpen">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </header>

    <!-- Hero Section -->
    <section id="home" class="hero">
      <div class="hero-content">
        <h1 class="hero-title">Explore The World With Us</h1>
        <p class="hero-subtitle">Discover amazing places at exclusive deals</p>
        <button class="cta-button" @click="scrollTo('packages')">Explore Now</button>
      </div>
      <div class="hero-overlay"></div>
    </section>

    <!-- Search Bar -->
    <section class="search-section">
      <div class="container">
        <div class="search-box">
          <div class="search-input">
            <label>Destination</label>
            <input v-model="searchData.destination" type="text" placeholder="Where to?">
          </div>
          <div class="search-input">
            <label>Check In</label>
            <input v-model="searchData.checkIn" type="date">
          </div>
          <div class="search-input">
            <label>Check Out</label>
            <input v-model="searchData.checkOut" type="date">
          </div>
          <div class="search-input">
            <label>Guests</label>
            <select v-model="searchData.guests">
              <option value="1">1 Guest</option>
              <option value="2">2 Guests</option>
              <option value="3">3 Guests</option>
              <option value="4">4+ Guests</option>
            </select>
          </div>
          <button class="search-button" @click="handleSearch">Search</button>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="about-section">
      <div class="container">
        <div class="section-header">
          <h2>About Us</h2>
          <p>Your trusted travel partner</p>
        </div>
        <div class="about-content">
          <div class="about-image">
            <img src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&h=400&fit=crop" alt="About Us">
          </div>
          <div class="about-text">
            <h3>Making Your Travel Dreams Come True</h3>
            <p>At PA Tours & Travels, we specialize in creating unforgettable travel experiences. With over 10 years of expertise, we've helped thousands of travelers explore the world's most beautiful destinations.</p>
            <p>Our team of travel experts carefully curates each package to ensure you get the best value, comfort, and memories that last a lifetime.</p>
            <div class="about-stats">
              <div class="stat">
                <h4>5000+</h4>
                <p>Happy Customers</p>
              </div>
              <div class="stat">
                <h4>150+</h4>
                <p>Destinations</p>
              </div>
              <div class="stat">
                <h4>10+</h4>
                <p>Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Packages Section -->
    <section id="packages" class="packages-section">
      <div class="container">
        <div class="section-header">
          <h2>Popular Packages</h2>
          <p>Choose your perfect getaway</p>
        </div>
        <div class="packages-grid">
          <div v-for="pkg in packages" :key="pkg.id" class="package-card">
            <div class="package-image">
              <img :src="pkg.image" :alt="pkg.title">
              <span class="package-badge">{{ pkg.days }} Days</span>
            </div>
            <div class="package-content">
              <h3>{{ pkg.title }}</h3>
              <p class="package-location">📍 {{ pkg.location }}</p>
              <p class="package-description">{{ pkg.description }}</p>
              <div class="package-features">
                <span v-for="feature in pkg.features" :key="feature">✓ {{ feature }}</span>
              </div>
              <div class="package-footer">
                <div class="package-price">
                  <span class="price">${{ pkg.price }}</span>
                  <span class="per-person">per person</span>
                </div>
                <button class="book-button" @click="bookPackage(pkg)">Book Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Destinations Section -->
    <section id="destinations" class="destinations-section">
      <div class="container">
        <div class="section-header">
          <h2>Top Destinations</h2>
          <p>Explore the world's most beautiful places</p>
        </div>
        <div class="destinations-grid">
          <div v-for="dest in destinations" :key="dest.id" class="destination-card" @click="selectDestination(dest)">
            <img :src="dest.image" :alt="dest.name">
            <div class="destination-overlay">
              <h3>{{ dest.name }}</h3>
              <p>{{ dest.tours }} Tours Available</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="testimonials-section">
      <div class="container">
        <div class="section-header">
          <h2>What Our Clients Say</h2>
          <p>Real stories from real travelers</p>
        </div>
        <div class="testimonials-grid">
          <div v-for="testimonial in testimonials" :key="testimonial.id" class="testimonial-card">
            <div class="testimonial-rating">
              <span v-for="n in 5" :key="n">⭐</span>
            </div>
            <p class="testimonial-text">"{{ testimonial.text }}"</p>
            <div class="testimonial-author">
              <img :src="testimonial.avatar" :alt="testimonial.name">
              <div>
                <h4>{{ testimonial.name }}</h4>
                <p>{{ testimonial.location }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="contact-section">
      <div class="container">
        <div class="section-header">
          <h2>Get In Touch</h2>
          <p>We'd love to hear from you</p>
        </div>
        <div class="contact-content">
          <div class="contact-info">
            <div class="contact-item">
              <div class="contact-icon">📞</div>
              <div>
                <h4>Phone</h4>
                <p>+1 (555) 123-4567</p>
              </div>
            </div>
            <div class="contact-item">
              <div class="contact-icon">✉️</div>
              <div>
                <h4>Email</h4>
                <p>info@patours.com</p>
              </div>
            </div>
            <div class="contact-item">
              <div class="contact-icon">📍</div>
              <div>
                <h4>Address</h4>
                <p>123 Travel Street, Tourism City, TC 12345</p>
              </div>
            </div>
          </div>
          <form class="contact-form" @submit.prevent="submitContact">
            <div class="form-group">
              <input v-model="contactForm.name" type="text" placeholder="Your Name" required>
            </div>
            <div class="form-group">
              <input v-model="contactForm.email" type="email" placeholder="Your Email" required>
            </div>
            <div class="form-group">
              <input v-model="contactForm.phone" type="tel" placeholder="Your Phone">
            </div>
            <div class="form-group">
              <textarea v-model="contactForm.message" placeholder="Your Message" rows="5" required></textarea>
            </div>
            <button type="submit" class="submit-button">Send Message</button>
          </form>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-section">
            <h3>PA Tours & Travels</h3>
            <p>Your gateway to unforgettable adventures around the world.</p>
            <div class="social-links">
              <a href="#" aria-label="Facebook">📘</a>
              <a href="#" aria-label="Instagram">📷</a>
              <a href="#" aria-label="Twitter">🐦</a>
              <a href="#" aria-label="YouTube">📺</a>
            </div>
          </div>
          <div class="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#packages">Packages</a></li>
              <li><a href="#destinations">Destinations</a></li>
            </ul>
          </div>
          <div class="footer-section">
            <h4>Services</h4>
            <ul>
              <li><a href="#">Flight Booking</a></li>
              <li><a href="#">Hotel Reservation</a></li>
              <li><a href="#">Tour Packages</a></li>
              <li><a href="#">Car Rental</a></li>
            </ul>
          </div>
          <div class="footer-section">
            <h4>Newsletter</h4>
            <p>Subscribe to get special offers</p>
            <form class="newsletter-form" @submit.prevent="subscribeNewsletter">
              <input v-model="newsletter" type="email" placeholder="Your email" required>
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; 2024 PA Tours & Travels. All rights reserved.</p>
        </div>
      </div>
    </footer>

    <!-- Booking Modal -->
    <div v-if="showBookingModal" class="modal-overlay" @click="closeModal">
      <div class="modal" @click.stop>
        <button class="modal-close" @click="closeModal">×</button>
        <h2>Book Package</h2>
        <div v-if="selectedPackage" class="modal-content">
          <h3>{{ selectedPackage.title }}</h3>
          <p class="modal-price">Price: ${{ selectedPackage.price }} per person</p>
          <form @submit.prevent="confirmBooking">
            <div class="form-group">
              <label>Full Name</label>
              <input v-model="bookingForm.name" type="text" required>
            </div>
            <div class="form-group">
              <label>Email</label>
              <input v-model="bookingForm.email" type="email" required>
            </div>
            <div class="form-group">
              <label>Phone</label>
              <input v-model="bookingForm.phone" type="tel" required>
            </div>
            <div class="form-group">
              <label>Number of Travelers</label>
              <select v-model="bookingForm.travelers" required>
                <option value="1">1 Person</option>
                <option value="2">2 People</option>
                <option value="3">3 People</option>
                <option value="4">4+ People</option>
              </select>
            </div>
            <div class="form-group">
              <label>Travel Date</label>
              <input v-model="bookingForm.date" type="date" required>
            </div>
            <div class="form-group">
              <label>Special Requests</label>
              <textarea v-model="bookingForm.requests" rows="3"></textarea>
            </div>
            <button type="submit" class="submit-button">Confirm Booking</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PATours',
  data() {
    return {
      isScrolled: false,
      menuOpen: false,
      showBookingModal: false,
      selectedPackage: null,
      newsletter: '',
      searchData: {
        destination: '',
        checkIn: '',
        checkOut: '',
        guests: '2'
      },
      contactForm: {
        name: '',
        email: '',
        phone: '',
        message: ''
      },
      bookingForm: {
        name: '',
        email: '',
        phone: '',
        travelers: '2',
        date: '',
        requests: ''
      },
      packages: [
        {
          id: 1,
          title: 'Bali Paradise Experience',
          location: 'Bali, Indonesia',
          days: 7,
          price: 899,
          image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&h=400&fit=crop',
          description: 'Explore the stunning beaches, temples, and rice terraces of Bali.',
          features: ['Accommodation', 'Meals', 'Guided Tours', 'Transport']
        },
        {
          id: 2,
          title: 'Maldives Luxury Retreat',
          location: 'Maldives',
          days: 5,
          price: 1499,
          image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=600&h=400&fit=crop',
          description: 'Luxury overwater villas with pristine beaches and crystal-clear waters.',
          features: ['Luxury Resort', 'All Inclusive', 'Water Sports', 'Spa Access']
        },
        {
          id: 3,
          title: 'Swiss Alps Adventure',
          location: 'Switzerland',
          days: 6,
          price: 1299,
          image: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=600&h=400&fit=crop',
          description: 'Experience breathtaking mountain views and charming Swiss villages.',
          features: ['Mountain Lodge', 'Ski Pass', 'Cable Car Rides', 'Meals']
        },
        {
          id: 4,
          title: 'Santorini Sunset Tour',
          location: 'Santorini, Greece',
          days: 5,
          price: 999,
          image: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=600&h=400&fit=crop',
          description: 'Discover the iconic white-washed buildings and stunning sunsets.',
          features: ['Sea View Hotel', 'Island Tours', 'Wine Tasting', 'Breakfast']
        },
        {
          id: 5,
          title: 'Dubai Extravaganza',
          location: 'Dubai, UAE',
          days: 4,
          price: 799,
          image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&h=400&fit=crop',
          description: 'Experience luxury shopping, modern architecture, and desert safaris.',
          features: ['5-Star Hotel', 'Desert Safari', 'City Tour', 'Burj Khalifa']
        },
        {
          id: 6,
          title: 'Thailand Explorer',
          location: 'Bangkok & Phuket',
          days: 8,
          price: 1099,
          image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=600&h=400&fit=crop',
          description: 'Explore vibrant cities, beautiful islands, and rich cultural heritage.',
          features: ['Hotels', 'Island Hopping', 'Street Food Tour', 'Temples Visit']
        }
      ],
      destinations: [
        {
          id: 1,
          name: 'Paris, France',
          tours: 24,
          image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400&h=400&fit=crop'
        },
        {
          id: 2,
          name: 'Tokyo, Japan',
          tours: 18,
          image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400&h=400&fit=crop'
        },
        {
          id: 3,
          name: 'New York, USA',
          tours: 32,
          image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=400&h=400&fit=crop'
        },
        {
          id: 4,
          name: 'Rome, Italy',
          tours: 21,
          image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400&h=400&fit=crop'
        },
        {
          id: 5,
          name: 'London, UK',
          tours: 28,
          image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400&h=400&fit=crop'
        },
        {
          id: 6,
          name: 'Barcelona, Spain',
          tours: 19,
          image: 'https://images.unsplash.com/photo-1583422409516-2895a77efded?w=400&h=400&fit=crop'
        }
      ],
      testimonials: [
        {
          id: 1,
          name: 'Sarah Johnson',
          location: 'New York, USA',
          text: 'Amazing experience! PA Tours made our dream vacation to Bali a reality. Everything was perfectly organized and the guides were fantastic.',
          avatar: 'https://i.pravatar.cc/150?img=1'
        },
        {
          id: 2,
          name: 'Michael Chen',
          location: 'Singapore',
          text: 'Best travel agency ever! The Swiss Alps package exceeded all our expectations. Highly recommend their services.',
          avatar: 'https://i.pravatar.cc/150?img=2'
        },
        {
          id: 3,
          name: 'Emma Williams',
          location: 'London, UK',
          text: 'Professional, reliable, and affordable. We had a wonderful time in Santorini thanks to PA Tours. Will definitely book again!',
          avatar: 'https://i.pravatar.cc/150?img=3'
        }
      ]
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 50;
    },
    scrollTo(section) {
      this.menuOpen = false;
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    },
    handleSearch() {
      alert(`Searching for: ${this.searchData.destination || 'All Destinations'}\nCheck-in: ${this.searchData.checkIn}\nCheck-out: ${this.searchData.checkOut}\nGuests: ${this.searchData.guests}`);
    },
    bookPackage(pkg) {
      this.selectedPackage = pkg;
      this.showBookingModal = true;
      document.body.style.overflow = 'hidden';
    },
    closeModal() {
      this.showBookingModal = false;
      document.body.style.overflow = 'auto';
      this.bookingForm = {
        name: '',
        email: '',
        phone: '',
        travelers: '2',
        date: '',
        requests: ''
      };
    },
    confirmBooking() {
      alert(`Booking confirmed for ${this.selectedPackage.title}!\n\nName: ${this.bookingForm.name}\nEmail: ${this.bookingForm.email}\nTravelers: ${this.bookingForm.travelers}\nDate: ${this.bookingForm.date}\n\nWe'll contact you shortly!`);
      this.closeModal();
    },
    selectDestination(dest) {
      alert(`Exploring ${dest.name} - ${dest.tours} tours available!`);
    },
    submitContact() {
      alert(`Thank you ${this.contactForm.name}! We'll get back to you soon at ${this.contactForm.email}`);
      this.contactForm = {
        name: '',
        email: '',
        phone: '',
        message: ''
      };
    },
    subscribeNewsletter() {
      alert(`Thank you for subscribing with ${this.newsletter}!`);
      this.newsletter = '';
    }
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Header */
.header {
  position: fixed;
  top: 0;
  width: 100%;
  background: rgba(255, 255, 255, 0.95);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  transition: all 0.3s;
}

.header.scrolled {
  background: white;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 5%;
  max-width: 1400px;
  margin: 0 auto;
}

.logo {
  font-size: 1.8rem;
  font-weight: 700;
  color: #ff6b6b;
  cursor: pointer;
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 2rem;
}

.nav-links a {
  text-decoration: none;
  color: #333;
  font-weight: 500;
  transition: color 0.3s;
}

.nav-links a:hover {
  color: #ff6b6b;
}

.menu-toggle {
  display: none;
  flex-direction: column;
  cursor: pointer;
  gap: 5px;
}

.menu-toggle span {
  width: 25px;
  height: 3px;
  background: #333;
}

/* Hero Section */
.hero {
  position: relative;
  height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url('https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1600&h=900&fit=crop') center/cover;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
}

.hero-content {
  z-index: 2;
  max-width: 800px;
  padding: 2rem;
}

.hero-title {
  font-size: 4rem;
  margin-bottom: 1rem;
  animation: fadeInUp 1s;
}

.hero-subtitle {
  font-size: 1.5rem;
  margin-bottom: 2rem;
  animation: fadeInUp 1.2s;
}

.cta-button {
  padding: 1rem 3rem;
  font-size: 1.1rem;
  background: #ff6b6b;
  color: white;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s;
  animation: fadeInUp 1.4s;
}

.cta-button:hover {
  background: #ff5252;
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(255, 107, 107, 0.4);
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

/* Search Section */
.search-section {
  padding: 2rem 5%;
  background: white;
  margin-top: -50px;
  position: relative;
  z-index: 10;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
}

.search-box {
  background: white;
  border-radius: 10px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  align-items: end;
}

.search-input {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.search-input label {
  font-weight: 600;
  color: #333;
  font-size: 0.9rem;
}

.search-input input,
.search-input select {
  padding: 0.8rem;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.3s;
}

.search-input input:focus,
.search-input select:focus {
  outline: none;
  border-color: #ff6b6b;
}

.search-button {
  padding: 0.8rem 2rem;
  background: #ff6b6b;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  transition: all 0.3s;
}

.search-button:hover {
  background: #ff5252;
  transform: translateY(-2px);
}

/* Section Header */
.section-header {
  text-align: center;
  margin-bottom: 3rem;
}

.section-header h2 {
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 0.5rem;
}

.section-header p {
  font-size: 1.1rem;
  color: #666;
}

/* About Section */
.about-section {
  padding: 5rem 5%;
  background: #f9f9f9;
}

.about-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
}

.about-image img {
  width: 100%;
  border-radius: 15px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
}

.about-text h3 {
  font-size: 2rem;
  color: #333;
  margin-bottom: 1rem;
}

.about-text p {
  color: #666;
  line-height: 1.8;
  margin-bottom: 1rem;
}

.about-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 2rem;
}

.stat {
  text-align: center;
  padding: 1.5rem;
  background: white;
  border-radius: 10px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
}

.stat h4 {
  font-size: 2rem;
  color: #ff6b6b;
  margin-bottom: 0.5rem;
}

.stat p {
  color: #666;
  margin: 0;
}

/* Packages Section */
.packages-section {
  padding: 5rem 5%;
}

.packages-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.package-card {
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
}

.package-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
}

.package-image {
  position: relative;
  height: 250px;
  overflow: hidden;
}

.package-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s;
}

.package-card:hover .package-image img {
  transform: scale(1.1);
}

.package-badge {
  position: absolute;
  top: 20px;
  right: 20px;
  background: #ff6b6b;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-weight: 600;
}

.package-content {
  padding: 1.5rem;
}

.package-content h3 {
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 0.5rem;
}

.package-location {
  color: #666;
  margin-bottom: 1rem;
  font-size: 0.9rem;
}

.package-description {
  color: #666;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.package-features {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.package-features span {
  background: #f0f0f0;
  padding: 0.4rem 0.8rem;
  border-radius: 15px;
  font-size: 0.85rem;
  color: #666;
}

.package-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1rem;
  border-top: 1px solid #e0e0e0;
}

.package-price {
  display: flex;
  flex-direction: column;
}

.price {
  font-size: 1.8rem;
  font-weight: 700;
  color: #ff6b6b;
}

.per-person {
  font-size: 0.85rem;
  color: #666;
}

.book-button {
  padding: 0.8rem 1.5rem;
  background: #ff6b6b;
  color: white;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s;
}

.book-button:hover {
  background: #ff5252;
  transform: scale(1.05);
}

/* Destinations Section */
.destinations-section {
  padding: 5rem 5%;
  background: #f9f9f9;
}

.destinations-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.destination-card {
  position: relative;
  height: 350px;
  border-radius: 15px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s;
}

.destination-card:hover {
  transform: scale(1.05);
}

.destination-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s;
}

.destination-card:hover img {
  transform: scale(1.1);
}

.destination-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
  padding: 2rem;
  color: white;
}

.destination-overlay h3 {
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
}

.destination-overlay p {
  font-size: 1rem;
}

/* Testimonials Section */
.testimonials-section {
  padding: 5rem 5%;
}

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.testimonial-card {
  background: white;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
}

.testimonial-card:hover {
  transform: translateY(-5px);
}

.testimonial-rating {
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

.testimonial-text {
  color: #666;
  line-height: 1.8;
  margin-bottom: 1.5rem;
  font-style: italic;
}

.testimonial-author {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.testimonial-author img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
}

.testimonial-author h4 {
  color: #333;
  margin-bottom: 0.2rem;
}

.testimonial-author p {
  color: #999;
  font-size: 0.9rem;
}

/* Contact Section */
.contact-section {
  padding: 5rem 5%;
  background: #f9f9f9;
}

.contact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.contact-item {
  display: flex;
  gap: 1.5rem;
  align-items: flex-start;
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
}

.contact-icon {
  font-size: 2rem;
}

.contact-item h4 {
  color: #333;
  margin-bottom: 0.5rem;
}

.contact-item p {
  color: #666;
}

.contact-form {
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group input,
.form-group textarea,
.form-group select {
  width: 100%;
  padding: 0.8rem;
  border: 2px solid #120d0d;
  border-radius: 8px;
  font-size: 1rem;
  font-family: 'Poppins', sans-serif;
  transition: border-color 0.3s;
}

.form-group input:focus,
.form-group textarea:focus,
.form-group select:focus {
  outline: none;
  border-color: #ff6b6b;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  color: #333;
  font-weight: 600;
}

.submit-button {
  width: 100%;
  padding: 1rem;
  background: #ff6b6b;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  transition: all 0.3s;
}

.submit-button:hover {
  background: #ff5252;
  transform: translateY(-2px);
}

/* Footer */
.footer {
  background: #2c3e50;
  color: white;
  padding: 3rem 5% 1rem;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.footer-section h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #ff6b6b;
}

.footer-section h4 {
  margin-bottom: 1rem;
}

.footer-section p {
  color: #bdc3c7;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.footer-section ul {
  list-style: none;
}

.footer-section ul li {
  margin-bottom: 0.5rem;
}

.footer-section ul li a {
  color: #bdc3c7;
  text-decoration: none;
  transition: color 0.3s;
}

.footer-section ul li a:hover {
  color: #ff6b6b;
}

.social-links {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}

.social-links a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  text-decoration: none;
  font-size: 1.2rem;
  transition: all 0.3s;
}

.social-links a:hover {
  background: #ff6b6b;
  transform: translateY(-3px);
}

.newsletter-form {
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;
}

.newsletter-form input {
  flex: 1;
  padding: 0.8rem;
  border: none;
  border-radius: 5px;
  font-size: 0.9rem;
}

.newsletter-form button {
  padding: 0.8rem 1.5rem;
  background: #ff6b6b;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 600;
  transition: background 0.3s;
}

.newsletter-form button:hover {
  background: #ff5252;
}

.footer-bottom {
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: #bdc3c7;
}

/* Modal */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  animation: fadeIn 0.3s;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.modal {
  background: white;
  border-radius: 15px;
  padding: 2rem;
  max-width: 600px;
  width: 90%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  animation: slideUp 0.3s;
}

@keyframes slideUp {
  from {
    transform: translateY(50px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.modal-close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: #f0f0f0;
  border: none;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  font-size: 1.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
}

.modal-close:hover {
  background: #ff6b6b;
  color: white;
  transform: rotate(90deg);
}

.modal h2 {
  margin-bottom: 1rem;
  color: #333;
}

.modal h3 {
  color: #333;
  margin-bottom: 0.5rem;
}

.modal-price {
  color: #ff6b6b;
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
}

.modal-content form {
  margin-top: 1.5rem;
}

/* Responsive Design */
@media (max-width: 968px) {
  .nav-links {
    position: fixed;
    top: 70px;
    left: -100%;
    flex-direction: column;
    background: white;
    width: 100%;
    padding: 2rem;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    transition: left 0.3s;
  }

  .nav-links.active {
    left: 0;
  }

  .menu-toggle {
    display: flex;
  }

  .hero-title {
    font-size: 2.5rem;
  }

  .hero-subtitle {
    font-size: 1.2rem;
  }

  .search-box {
    grid-template-columns: 1fr;
  }

  .about-content {
    grid-template-columns: 1fr;
  }

  .packages-grid {
    grid-template-columns: 1fr;
  }

  .destinations-grid {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }

  .testimonials-grid {
    grid-template-columns: 1fr;
  }

  .contact-content {
    grid-template-columns: 1fr;
  }

  .footer-content {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 2rem;
  }

  .section-header h2 {
    font-size: 2rem;
  }

  .packages-grid {
    grid-template-columns: 1fr;
  }

  .destination-card {
    height: 250px;
  }
}
</style>