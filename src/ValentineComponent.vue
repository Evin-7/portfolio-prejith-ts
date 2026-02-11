<template>
  <div id="app">
    <!-- Floating hearts background -->
    <div class="heart" v-for="(heart, index) in floatingHearts" :key="index" 
         :style="{ left: heart.left, animationDelay: heart.delay }">
      {{ heart.emoji }}
    </div>

    <div class="container">
      <!-- Question Page -->
      <div v-if="!showSuccess" class="question-page">
        <div class="big-heart">💗</div>
        <h1>Will you be my</h1>
        <div class="valentine-text">Valentine?</div>
        <p class="subtitle">Choose wisely... 💕</p>
        
        <div class="button-container">
          <button class="yes-btn" @click="handleYes">Yes! 💕</button>
          <button 
            class="no-btn" 
            :style="{ left: noButtonPosition.x + 'px', top: noButtonPosition.y + 'px' }"
            @mouseover="moveNoButton"
            @touchstart.prevent="moveNoButton"
          >
            No 😢
          </button>
        </div>
        
        <p class="hint">Hint: The "No" button is a bit shy... 😉</p>
      </div>

      <!-- Success Page -->
      <div v-if="showSuccess" class="success-page active">
        <div class="celebration">🎉🎊</div>
        <h2 class="success-title">Yay!</h2>
        <h3 class="success-subtitle">Good Choice!</h3>
        
        <div class="card-image">
          <div class="card-content">💑</div>
          <div class="card-text">GOOD CHOICE!</div>
          <div class="card-banner">
            <p style="color: #666; font-size: 16px; font-style: italic;">Marrying me was...</p>
          </div>
        </div>

        <div class="message-box">
          <p class="message-text">I knew you'd say yes! 💕</p>
          <p class="message-text">You've made me the happiest person in the world.</p>
          <p class="message-text">I can't wait to celebrate this special day with you! 🌹</p>
          <div class="hearts-row">💖 💗 💖</div>
        </div>
      </div>
    </div>

    <!-- Confetti -->
    <div 
      v-for="(confetti, index) in confettiItems" 
      :key="'confetti-' + index"
      class="confetti"
      :style="{ 
        left: confetti.left, 
        background: confetti.color,
        animationDelay: confetti.delay 
      }"
    ></div>
  </div>
</template>

<script>
export default {
  name: 'ValentineApp',
  data() {
    return {
      showSuccess: false,
      noButtonPosition: { x: 0, y: 0 },
      floatingHearts: [
        { emoji: '💕', left: '10%', delay: '0s' },
        { emoji: '❤️', left: '20%', delay: '2s' },
        { emoji: '💗', left: '30%', delay: '4s' },
        { emoji: '💖', left: '40%', delay: '1s' },
        { emoji: '💕', left: '50%', delay: '3s' },
        { emoji: '❤️', left: '60%', delay: '5s' },
        { emoji: '💗', left: '70%', delay: '2.5s' },
        { emoji: '💖', left: '80%', delay: '4.5s' },
        { emoji: '💕', left: '90%', delay: '1.5s' }
      ],
      confettiItems: []
    };
  },
  methods: {
    moveNoButton() {
      // Get random position for the button
      const maxX = 400; // Maximum horizontal movement
      const maxY = 150; // Maximum vertical movement
      
      this.noButtonPosition = {
        x: Math.random() * maxX,
        y: Math.random() * maxY
      };
    },
    handleYes() {
      this.showSuccess = true;
      this.createConfetti();
    },
    createConfetti() {
      const colors = ['#ff0000', '#ff69b4', '#ffc0cb', '#ff1493', '#ff6347'];
      
      for (let i = 0; i < 50; i++) {
        setTimeout(() => {
          this.confettiItems.push({
            left: Math.random() * 100 + '%',
            color: colors[Math.floor(Math.random() * colors.length)],
            delay: Math.random() * 2 + 's'
          });
          
          // Remove confetti after animation
          setTimeout(() => {
            this.confettiItems.shift();
          }, 3000);
        }, i * 30);
      }
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

#app {
  font-family: 'Arial', sans-serif;
  background: linear-gradient(135deg, #ffc0cb 0%, #ffb6c1 100%);
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
}

/* Floating hearts animation */
.heart {
  position: absolute;
  font-size: 30px;
  opacity: 0.3;
  animation: float 10s infinite;
}

@keyframes float {
  0% {
    transform: translateY(100vh) rotate(0deg);
    opacity: 0;
  }
  50% {
    opacity: 0.3;
  }
  100% {
    transform: translateY(-100vh) rotate(360deg);
    opacity: 0;
  }
}

.container {
  text-align: center;
  background: rgba(255, 255, 255, 0.9);
  padding: 60px 40px;
  border-radius: 30px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  max-width: 600px;
  width: 90%;
  position: relative;
  z-index: 10;
}

.big-heart {
  font-size: 80px;
  margin-bottom: 20px;
  animation: heartbeat 1.5s infinite;
}

@keyframes heartbeat {
  0%, 100% { transform: scale(1); }
  25% { transform: scale(1.1); }
  50% { transform: scale(1); }
}

h1 {
  color: #c2185b;
  font-size: 48px;
  margin-bottom: 10px;
  font-weight: bold;
}

.valentine-text {
  color: #d81b60;
  font-size: 64px;
  font-weight: bold;
  margin-bottom: 20px;
}

.subtitle {
  color: #666;
  font-size: 20px;
  margin-bottom: 40px;
}

.button-container {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 40px;
  position: relative;
  min-height: 100px;
}

button {
  padding: 20px 50px;
  font-size: 24px;
  font-weight: bold;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.yes-btn {
  background: linear-gradient(135deg, #c2185b 0%, #d81b60 100%);
  color: white;
}

.yes-btn:hover {
  transform: scale(1.1);
  box-shadow: 0 8px 25px rgba(216, 27, 96, 0.4);
}

.no-btn {
  background: linear-gradient(135deg, #ffd54f 0%, #ffeb3b 100%);
  color: #333;
  position: absolute;
  transition: all 0.1s ease;
}

.hint {
  color: #999;
  font-size: 14px;
  margin-top: 20px;
  font-style: italic;
}

/* Success Page Styles */
.success-page {
  text-align: center;
}

.success-page.active {
  animation: fadeIn 0.5s ease;
}

@keyframes fadeIn {
  from { opacity: 0; transform: scale(0.8); }
  to { opacity: 1; transform: scale(1); }
}

.celebration {
  font-size: 60px;
  margin-bottom: 20px;
}

.success-title {
  color: #c2185b;
  font-size: 48px;
  margin-bottom: 10px;
  font-weight: bold;
}

.success-subtitle {
  color: #d81b60;
  font-size: 36px;
  margin-bottom: 30px;
  font-weight: bold;
}

.card-image {
  background: linear-gradient(135deg, #ffd9a0 0%, #ffe5b4 100%);
  border-radius: 20px;
  padding: 30px;
  margin: 30px 0;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.card-content {
  font-size: 80px;
  margin-bottom: 10px;
}

.card-text {
  color: #c2185b;
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 10px;
}

.card-banner {
  background: rgba(255, 255, 255, 0.8);
  padding: 10px 20px;
  border-radius: 10px;
  margin: 20px auto;
  max-width: 300px;
}

.message-box {
  background: rgba(255, 255, 255, 0.9);
  padding: 30px;
  border-radius: 20px;
  margin-top: 30px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.message-text {
  color: #333;
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 15px;
}

.hearts-row {
  font-size: 30px;
  margin-top: 15px;
}

.confetti {
  position: absolute;
  width: 10px;
  height: 10px;
  background: #f00;
  animation: confetti-fall 3s linear infinite;
}

@keyframes confetti-fall {
  to {
    transform: translateY(100vh) rotate(360deg);
    opacity: 0;
  }
}
</style>