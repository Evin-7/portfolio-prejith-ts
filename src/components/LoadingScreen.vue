<template>
  <div class="loading-screen" :class="{ fade: fading }">
    <div class="loading-content">
      <!-- Logo -->
      <div class="ai-logo">
        <div class="logo-ring ring1"></div>
        <div class="logo-ring ring2"></div>
        <div class="logo-ring ring3"></div>
        <div class="logo-core">AI</div>
      </div>

      <div class="loading-title">INITIALIZING AI WORLD</div>
      <div class="loading-name">{{ resume.name }}</div>
      <div class="loading-title2">{{ resume.title }}</div>

      <!-- Progress bar -->
      <div class="progress-bar">
        <div class="progress-fill" :style="{ width: progress + '%' }"></div>
        <div class="progress-glow" :style="{ left: progress + '%' }"></div>
      </div>
      <div class="progress-label">{{ progressLabel }}</div>

      <!-- Scan lines -->
      <div class="scan-line"></div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
const props = defineProps({ resume: { type: Object, required: true } });
const emit = defineEmits(['done']);

const progress = ref(0);
const fading = ref(false);
const steps = ['Booting Neural Core...', 'Loading World Assets...', 'Spawning AI Environment...', 'Calibrating Holograms...', 'Deploying Robot Guide...'];
const progressLabel = ref(steps[0]);
let step = 0;

onMounted(() => {
  const interval = setInterval(() => {
    progress.value += Math.random() * 15 + 8;
    step = Math.min(step + 1, steps.length - 1);
    progressLabel.value = steps[step];

    if (progress.value >= 100) {
      progress.value = 100;
      progressLabel.value = 'READY';
      clearInterval(interval);
      setTimeout(() => {
        fading.value = true;
        setTimeout(() => emit('done'), 800);
      }, 600);
    }
  }, 350);
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&display=swap');

.loading-screen {
  position: fixed; inset: 0; z-index: 9999;
  background: #000510;
  display: flex; align-items: center; justify-content: center;
  font-family: 'Orbitron', 'Courier New', monospace;
  transition: opacity 0.8s ease;
  overflow: hidden;
}
.loading-screen.fade { opacity: 0; pointer-events: none; }

.loading-content {
  text-align: center; position: relative; z-index: 2;
}

/* Animated ring logo */
.ai-logo {
  position: relative; width: 120px; height: 120px;
  margin: 0 auto 2rem;
}
.logo-ring {
  position: absolute; border-radius: 50%;
  border: 2px solid transparent; top: 50%; left: 50%;
  transform: translate(-50%, -50%);
}
.ring1 { width: 120px; height: 120px; border-top-color: #00ff88; border-right-color: #00ff88; animation: spin 2s linear infinite; }
.ring2 { width: 90px;  height: 90px;  border-top-color: #0088ff; border-left-color: #0088ff; animation: spin 1.5s linear infinite reverse; }
.ring3 { width: 60px;  height: 60px;  border-top-color: #ff0066; animation: spin 3s linear infinite; }
.logo-core {
  position: absolute; top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  color: #00ccff; font-size: 1.4rem; font-weight: 900;
  text-shadow: 0 0 20px #00ccff;
}

.loading-title {
  color: #00ccff; font-size: 1rem; letter-spacing: 4px; margin-bottom: 0.5rem;
  text-shadow: 0 0 10px #00ccff;
}
.loading-name {
  color: #ffffff; font-size: 2.2rem; font-weight: 900; letter-spacing: 2px;
  text-shadow: 0 0 30px rgba(0,204,255,0.6);
  margin-bottom: 0.3rem;
}
.loading-title2 {
  color: #00ff88; font-size: 1rem; letter-spacing: 3px; margin-bottom: 2.5rem;
}

.progress-bar {
  width: 300px; height: 4px; background: rgba(0,204,255,0.1);
  border-radius: 4px; margin: 0 auto 0.5rem;
  position: relative; overflow: visible;
}
.progress-fill {
  height: 100%; background: linear-gradient(90deg, #0088ff, #00ff88);
  border-radius: 4px; transition: width 0.3s ease;
  box-shadow: 0 0 10px #00ff88;
}
.progress-glow {
  position: absolute; top: -5px; width: 12px; height: 14px;
  background: #ffffff; border-radius: 50%;
  box-shadow: 0 0 15px #00ff88; transform: translateX(-50%);
  transition: left 0.3s ease;
}
.progress-label {
  color: #335577; font-size: 0.7rem; letter-spacing: 2px;
}

.scan-line {
  position: fixed; top: 0; left: 0; width: 100%; height: 3px;
  background: rgba(0,204,255,0.4);
  animation: scan 3s linear infinite;
}

@keyframes spin { from { transform: translate(-50%,-50%) rotate(0deg); } to { transform: translate(-50%,-50%) rotate(360deg); } }
@keyframes scan { 0% { top: 0; opacity: 1; } 100% { top: 100vh; opacity: 0.3; } }
</style>
