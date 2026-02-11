<template>
  <div id="app">
    <!-- Header Section -->
    <header class="hero-header">
      <div class="header-overlay">
        <h1 class="hero-title">🥗 Personalized Diet Plan</h1>
        <p class="hero-subtitle">Personalized nutrition to help manage your migraines</p>
      </div>
    </header>

    <!-- Main Form Section -->
    <main class="container">
      <section class="card form-section">
        <h2 class="section-title">Get Your Personalized Diet Plan</h2>
        
        <form @submit.prevent="generateDietPlan" class="diet-form">
          <!-- Height Input -->
          <div class="form-group">
            <label for="height" class="form-label">Height</label>
            <input 
              type="number" 
              id="height" 
              v-model.number="height" 
              :placeholder="heightUnit === 'cm' ? 'Enter height in cm' : 'Enter height in inches'"
              class="form-input"
              required
              step="0.1"
              min="0"
            >
            <div class="unit-selector">
              <button 
                type="button" 
                class="unit-btn" 
                :class="{ active: heightUnit === 'cm' }"
                @click="heightUnit = 'cm'"
                aria-label="Select centimeters"
              >
                Centimeters
              </button>
              <button 
                type="button" 
                class="unit-btn" 
                :class="{ active: heightUnit === 'inches' }"
                @click="heightUnit = 'inches'"
                aria-label="Select inches"
              >
                Inches
              </button>
            </div>
          </div>

          <!-- Weight Input -->
          <div class="form-group">
            <label for="weight" class="form-label">Weight</label>
            <input 
              type="number" 
              id="weight" 
              v-model.number="weight" 
              :placeholder="weightUnit === 'kg' ? 'Enter weight in kg' : 'Enter weight in lbs'"
              class="form-input"
              required
              step="0.1"
              min="0"
            >
            <div class="unit-selector">
              <button 
                type="button" 
                class="unit-btn" 
                :class="{ active: weightUnit === 'kg' }"
                @click="weightUnit = 'kg'"
                aria-label="Select kilograms"
              >
                Kilograms
              </button>
              <button 
                type="button" 
                class="unit-btn" 
                :class="{ active: weightUnit === 'lbs' }"
                @click="weightUnit = 'lbs'"
                aria-label="Select pounds"
              >
                Pounds
              </button>
            </div>
          </div>

          <button type="submit" class="submit-btn">
            Generate My Diet Plan
          </button>
        </form>

        <!-- Diet Plan Results -->
        <transition name="fade-slide">
          <div v-if="showPlan" ref="dietPlan" class="diet-plan">
            <!-- BMI Display -->
            <div class="bmi-card">
              <div class="bmi-label">Your BMI</div>
              <div class="bmi-value">{{ bmi }}</div>
              <div class="bmi-category" :class="getBmiClass()">{{ bmiCategory }}</div>
            </div>

            <h3 class="plan-title">Your Migraine-Friendly Diet Plan</h3>

            <!-- Meal Sections -->
            <div class="meals-container">
              <div 
                v-for="(meal, index) in meals" 
                :key="index"
                class="meal-card"
              >
                <div class="meal-header">
                  <span class="meal-icon">{{ meal.icon }}</span>
                  <div>
                    <h4 class="meal-title">{{ meal.title }}</h4>
                    <p class="meal-time">{{ meal.time }}</p>
                  </div>
                </div>
                <ul class="meal-items">
                  <li v-for="(item, idx) in meal.items" :key="idx">{{ item }}</li>
                </ul>
              </div>
            </div>

            <!-- General Tips -->
            <div class="tips-card">
              <h4>💡 Important Tips</h4>
              <ul>
                <li>Stay hydrated - drink at least 8 glasses of water daily</li>
                <li>Maintain regular meal times to prevent blood sugar drops</li>
                <li>Keep a food diary to identify personal triggers</li>
                <li>Get adequate sleep (7-9 hours) for migraine prevention</li>
              </ul>
            </div>
          </div>
        </transition>
      </section>

      <!-- FAQ Section -->
      <section class="card faq-section">
        <h2 class="section-title">Frequently Asked Questions</h2>
        
        <div class="faq-container">
          <div 
            v-for="(faq, index) in faqs" 
            :key="index"
            class="faq-item"
          >
            <button 
              class="faq-question" 
              @click="toggleFaq(index)"
              :aria-expanded="faq.open"
            >
              <span>{{ faq.question }}</span>
              <span class="faq-toggle" :class="{ open: faq.open }">▼</span>
            </button>
            <transition name="expand">
              <div v-if="faq.open" class="faq-answer">
                {{ faq.answer }}
              </div>
            </transition>
          </div>
        </div>
      </section>

      <!-- Contact Section -->
      <section class="contact-section">
        <h2 class="contact-title">Contact Us</h2>
        <p class="contact-description">Have questions about your diet plan?</p>
        <p class="contact-subdesc">We're here to help you on your journey to better health!</p>
        
        <div class="contact-info">
          <div class="contact-item">
            <div class="contact-icon">📧</div>
            <a href="mailto:info@migrainediet.com" class="contact-link">
              info@migrainediet.com
            </a>
          </div>
          <div class="contact-item">
            <div class="contact-icon">📱</div>
            <a href="tel:+1234567890" class="contact-link">
              +1 (234) 567-890
            </a>
          </div>
          <div class="contact-item">
            <div class="contact-icon">💬</div>
            <div class="contact-text">Available Mon-Fri, 9AM-6PM</div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: 'MigraineDietPlan',
  data() {
    return {
      height: '',
      weight: '',
      heightUnit: 'cm',
      weightUnit: 'kg',
      showPlan: false,
      bmi: 0,
      bmiCategory: '',
      meals: [
        {
          icon: '🌅',
          title: "Breakfast",
          time: "8:00 AM",
          items: [
            "Oatmeal with fresh berries and almonds",
            "Herbal tea (ginger or chamomile)",
            "Banana for potassium",
            "Avoid: Aged cheese, processed meats, citrus fruits"
          ]
        },
        {
          icon: '🍎',
          title: "Mid-Morning Snack",
          time: "10:30 AM",
          items: [
            "Handful of unsalted nuts (walnuts or cashews)",
            "Fresh apple or pear",
            "Plenty of water"
          ]
        },
        {
          icon: '🍽️',
          title: "Lunch",
          time: "1:00 PM",
          items: [
            "Grilled chicken or fish with quinoa",
            "Steamed vegetables (broccoli, carrots, spinach)",
            "Brown rice or sweet potato",
            "Fresh salad with olive oil dressing",
            "Avoid: MSG, artificial sweeteners, fermented foods"
          ]
        },
        {
          icon: '🥤',
          title: "Evening Snack",
          time: "4:00 PM",
          items: [
            "Greek yogurt with honey",
            "Whole grain crackers",
            "Herbal tea"
          ]
        },
        {
          icon: '🌙',
          title: "Dinner",
          time: "7:00 PM",
          items: [
            "Baked salmon or tofu",
            "Roasted vegetables",
            "Wild rice or whole wheat pasta",
            "Mixed green salad",
            "Avoid: Chocolate, alcohol, caffeine after 3 PM"
          ]
        }
      ],
      faqs: [
        {
          question: 'How does diet affect migraines?',
          answer: 'Certain foods and drinks can trigger migraines by affecting neurotransmitters or causing inflammation. Common triggers include aged cheeses, processed meats, and alcohol.',
          open: false
        },
        {
          question: 'How long before I see results?',
          answer: 'Most people notice improvements within 2-4 weeks of following a migraine-friendly diet consistently.',
          open: false
        },
        {
          question: 'Can I customize this diet plan?',
          answer: 'Yes! You can adjust it based on your preferences and triggers. Consulting a nutritionist is recommended.',
          open: false
        },
        {
          question: 'Should I eliminate all trigger foods at once?',
          answer: 'It\'s best to eliminate one suspected trigger at a time over 2-3 weeks to identify specific sensitivities.',
          open: false
        },
        {
          question: 'How important is meal timing?',
          answer: 'Very important! Skipping meals can trigger migraines due to blood sugar fluctuations. Try to eat at consistent times every day.',
          open: false
        }
      ]
    };
  },
  methods: {
    generateDietPlan() {
      // Convert to metric
      const heightInMeters = this.heightUnit === 'cm' 
        ? this.height / 100 
        : (this.height * 2.54) / 100;
      
      const weightInKg = this.weightUnit === 'kg' 
        ? this.weight 
        : this.weight * 0.453592;

      // Calculate BMI
      this.bmi = (weightInKg / (heightInMeters * heightInMeters)).toFixed(1);

      // Determine BMI category
      if (this.bmi < 18.5) {
        this.bmiCategory = 'Underweight';
      } else if (this.bmi < 25) {
        this.bmiCategory = 'Normal weight';
      } else if (this.bmi < 30) {
        this.bmiCategory = 'Overweight';
      } else {
        this.bmiCategory = 'Obese';
      }

      this.showPlan = true;

      // Smooth scroll to results
      this.$nextTick(() => {
        if (this.$refs.dietPlan) {
          this.$refs.dietPlan.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start' 
          });
        }
      });
    },
    toggleFaq(index) {
      this.faqs[index].open = !this.faqs[index].open;
    },
    getBmiClass() {
      if (this.bmi < 18.5) return 'bmi-underweight';
      if (this.bmi < 25) return 'bmi-normal';
      if (this.bmi < 30) return 'bmi-overweight';
      return 'bmi-obese';
    }
  }
};
</script>

<style scoped>
/* ===== CSS RESET & BASE STYLES ===== */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #333;
  padding: 20px;
}

/* ===== CONTAINER ===== */
.container {
  max-width: 1000px;
  margin: 0 auto;
}

/* ===== HEADER STYLES ===== */
.hero-header {
  position: relative;
  background: url('./assets/images/dietimage.jpg') center center/cover no-repeat;
  border-radius: 20px;
  padding: 80px 30px;
  margin-bottom: 30px;
  text-align: center;
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.2);
  animation: slideDown 0.6s ease-out;
  min-height: 320px;
  overflow: hidden;
}

.header-overlay {
  position: relative;
  z-index: 1;
}

.hero-header::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.85) 0%, rgba(118, 75, 162, 0.85) 100%);
  z-index: 0;
}

.hero-title {
  font-size: 4.8em;
  color: white;
  margin-bottom: 15px;
  font-weight: 700;
}

.hero-subtitle {
  font-size: 1.3em;
  color: rgba(255, 255, 255, 0.95);
  font-weight: 400;
}

/* ===== CARD STYLES ===== */
.card {
  background: white;
  border-radius: 20px;
  padding: 40px;
  margin-bottom: 30px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
  animation: fadeIn 0.6s ease-in;
}

.section-title {
  color: #667eea;
  margin-bottom: 30px;
  font-size: 2em;
  font-weight: 700;
  text-align: center;
}

/* ===== FORM STYLES ===== */
.diet-form {
  max-width: 600px;
  margin: 0 auto;
}

.form-group {
  margin-bottom: 28px;
}

.form-label {
  display: block;
  margin-bottom: 10px;
  font-weight: 600;
  color: #555;
  font-size: 1.1em;
}

.form-input {
  width: 100%;
  padding: 15px;
  border: 2px solid #e0e0e0;
  border-radius: 12px;
  font-size: 1em;
  transition: all 0.3s ease;
  font-family: inherit;
}

.form-input:focus {
  outline: none;
  border-color: #667eea;
  box-shadow: 0 0 0 4px rgba(102, 126, 234, 0.1);
}

.unit-selector {
  display: flex;
  gap: 12px;
  margin-top: 12px;
}

.unit-btn {
  flex: 1;
  padding: 10px 20px;
  border: 2px solid #667eea;
  background: white;
  color: #667eea;
  border-radius: 10px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
  font-size: 0.95em;
}

.unit-btn:hover {
  background: rgba(102, 126, 234, 0.1);
}

.unit-btn.active {
  background: #667eea;
  color: white;
}

.submit-btn {
  width: 100%;
  padding: 18px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 1.2em;
  font-weight: 600;
  cursor: pointer;
  margin-top: 20px;
  transition: all 0.3s ease;
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
}

.submit-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 35px rgba(102, 126, 234, 0.4);
}

.submit-btn:active {
  transform: translateY(-1px);
}

/* ===== DIET PLAN RESULTS ===== */
.diet-plan {
  margin-top: 40px;
  padding-top: 30px;
  border-top: 2px solid #f0f0f0;
}

.bmi-card {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 30px;
  border-radius: 16px;
  margin-bottom: 30px;
  text-align: center;
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
}

.bmi-label {
  font-size: 1.1em;
  opacity: 0.95;
  margin-bottom: 10px;
}

.bmi-value {
  font-size: 3.5em;
  font-weight: 700;
  margin: 10px 0;
}

.bmi-category {
  font-size: 1.3em;
  font-weight: 600;
  padding: 8px 20px;
  border-radius: 25px;
  display: inline-block;
  margin-top: 10px;
}

.bmi-underweight { background: rgba(255, 193, 7, 0.3); }
.bmi-normal { background: rgba(76, 175, 80, 0.3); }
.bmi-overweight { background: rgba(255, 152, 0, 0.3); }
.bmi-obese { background: rgba(244, 67, 54, 0.3); }

.plan-title {
  color: #333;
  font-size: 1.8em;
  margin-bottom: 25px;
  text-align: center;
  font-weight: 700;
}

/* ===== MEALS CONTAINER ===== */
.meals-container {
  display: grid;
  gap: 20px;
}

.meal-card {
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
  padding: 25px;
  border-radius: 16px;
  border-left: 5px solid #667eea;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
}

.meal-card:hover {
  transform: translateX(5px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.12);
}

.meal-header {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 15px;
}

.meal-icon {
  font-size: 2.5em;
}

.meal-title {
  color: #667eea;
  font-size: 1.4em;
  font-weight: 700;
  margin-bottom: 5px;
}

.meal-time {
  color: #888;
  font-size: 0.95em;
  font-weight: 500;
}

.meal-items {
  list-style: none;
  padding-left: 0;
}

.meal-items li {
  padding: 8px 0;
  padding-left: 25px;
  position: relative;
  color: #555;
  line-height: 1.6;
}

.meal-items li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: #667eea;
  font-weight: 700;
}

/* ===== TIPS CARD ===== */
.tips-card {
  background: linear-gradient(135deg, #fff3cd 0%, #fffaeb 100%);
  border-left: 5px solid #ffc107;
  padding: 25px;
  border-radius: 16px;
  margin-top: 25px;
}

.tips-card h4 {
  color: #856404;
  font-size: 1.3em;
  margin-bottom: 15px;
  font-weight: 700;
}

.tips-card ul {
  list-style: none;
  padding-left: 0;
}

.tips-card li {
  padding: 8px 0;
  padding-left: 25px;
  position: relative;
  color: #856404;
  line-height: 1.6;
}

.tips-card li::before {
  content: '💡';
  position: absolute;
  left: 0;
}

/* ===== FAQ SECTION ===== */
.faq-container {
  max-width: 800px;
  margin: 0 auto;
}

.faq-item {
  margin-bottom: 15px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
}

.faq-item:hover {
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.12);
}

.faq-question {
  width: 100%;
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
  padding: 20px 25px;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.1em;
  font-weight: 600;
  color: #333;
  text-align: left;
  transition: all 0.3s ease;
}

.faq-question:hover {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.faq-question:hover .faq-toggle {
  color: white;
}

.faq-toggle {
  color: #667eea;
  font-size: 1.2em;
  transition: transform 0.3s ease;
}

.faq-toggle.open {
  transform: rotate(180deg);
}

.faq-answer {
  background: white;
  padding: 20px 25px;
  color: #555;
  line-height: 1.7;
  border-top: 1px solid #f0f0f0;
}

/* ===== CONTACT SECTION ===== */
.contact-section {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 50px 40px;
  border-radius: 20px;
  text-align: center;
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.2);
}

.contact-title {
  font-size: 2.2em;
  margin-bottom: 15px;
  font-weight: 700;
}

.contact-description {
  font-size: 1.3em;
  margin-bottom: 8px;
}

.contact-subdesc {
  font-size: 1.1em;
  opacity: 0.9;
  margin-bottom: 35px;
}

.contact-info {
  display: flex;
  justify-content: center;
  gap: 40px;
  margin-top: 30px;
  flex-wrap: wrap;
}

.contact-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.contact-icon {
  font-size: 2.5em;
  margin-bottom: 5px;
}

.contact-link {
  color: white;
  text-decoration: none;
  font-size: 1.1em;
  font-weight: 500;
  transition: all 0.3s ease;
  border-bottom: 2px solid transparent;
}

.contact-link:hover {
  border-bottom: 2px solid white;
}

.contact-text {
  color: white;
  font-size: 1.1em;
  font-weight: 500;
}

/* ===== ANIMATIONS ===== */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-slide-enter-active {
  animation: fadeIn 0.5s ease-out;
}

.fade-slide-leave-active {
  animation: fadeIn 0.3s ease-in reverse;
}

.expand-enter-active, .expand-leave-active {
  transition: all 0.3s ease;
  overflow: hidden;
}

.expand-enter-from, .expand-leave-to {
  opacity: 0;
  max-height: 0;
}

.expand-enter-to, .expand-leave-from {
  opacity: 1;
  max-height: 500px;
}

/* ===== RESPONSIVE DESIGN ===== */
@media (max-width: 768px) {
  #app {
    padding: 10px;
  }

  .hero-title {
    font-size: 2em;
  }

  .hero-subtitle {
    font-size: 1.1em;
  }

  .card {
    padding: 25px 20px;
  }

  .section-title {
    font-size: 1.6em;
  }

  .bmi-value {
    font-size: 2.8em;
  }

  .meal-title {
    font-size: 1.2em;
  }

  .contact-info {
    gap: 25px;
  }

  .contact-title {
    font-size: 1.8em;
  }
}

@media (max-width: 480px) {
  .unit-selector {
    flex-direction: column;
  }

  .meal-header {
    flex-direction: column;
    align-items: flex-start;
  }

  .hero-header {
    padding: 40px 20px;
  }
}

/* ===== ACCESSIBILITY ===== */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

/* ===== PRINT STYLES ===== */
@media print {
  .hero-header,
  .form-section form,
  .faq-section,
  .contact-section {
    display: none;
  }

  .diet-plan {
    border-top: none;
  }
}
</style>