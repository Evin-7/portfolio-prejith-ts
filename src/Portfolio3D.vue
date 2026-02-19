<template>
  <div class="world-wrapper">
    <!-- Loading Screen -->
    <LoadingScreen v-if="showLoading" :resume="resume" @done="onLoadDone" />

    <!-- Intro overlay (before clicking to lock) -->
    <Transition name="fade">
      <div class="intro-overlay" v-if="showIntro && !showLoading">
        <div class="intro-robot">🤖</div>
        <div class="intro-name">{{ resume.name }}</div>
        <div class="intro-title">{{ resume.title }}</div>
        <div class="intro-speech" v-if="robotSpeaking">
          <div class="speech-dot"></div>
          <span>Robot is introducing...</span>
        </div>
        <div class="intro-prompt" v-if="!robotSpeaking">
          <div class="prompt-pulse">▶ CLICK TO ENTER THE AI WORLD ◀</div>
        </div>
      </div>
    </Transition>

    <!-- Three.js Canvas -->
    <canvas ref="canvasEl" class="world-canvas"></canvas>

    <!-- HUD Overlay -->
    <HUDOverlay
      v-if="!showLoading"
      :activeZone="activeZone"
      :playerPos="playerPos"
      :isLocked="isLocked"
    />

    <!-- AI Chatbot -->
    <ChatBot v-if="!showLoading" :resume="resume" />

    <!-- ESC hint when locked -->
    <div class="esc-hint" v-if="isLocked">Press ESC to release mouse</div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, reactive } from 'vue';
import { SceneManager } from './three/SceneManager.js';
import { WorldBuilder } from './three/WorldBuilder.js';
import { ParticleField } from './three/ParticleField.js';
import { NavigationController } from './three/NavigationController.js';
import { RobotCharacter } from './three/RobotCharacter.js';
import { ZoneManager } from './three/ZoneManager.js';
import LoadingScreen from './components/LoadingScreen.vue';
import HUDOverlay from './components/HUDOverlay.vue';
import ChatBot from './components/ChatBot.vue';
import resumeData from './resume.json';

const resume = resumeData;
const canvasEl = ref(null);
const showLoading = ref(true);
const showIntro = ref(false);
const robotSpeaking = ref(false);
const activeZone = ref(null);
const isLocked = ref(false);
const playerPos = reactive({ x: 0, z: 0 });

let sceneManager = null;
let worldBuilder = null;
let particleField = null;
let navController = null;
let robot = null;
let zoneManager = null;

const onLoadDone = () => {
  showLoading.value = false;
  showIntro.value = true;

  // Init Three.js
  initScene();

  // Robot intro after brief delay
  setTimeout(() => {
    robotSpeaking.value = true;
    robot.playIntro(resume, () => {
      robotSpeaking.value = false;
    });
  }, 800);
};

const initScene = () => {
  const canvas = canvasEl.value;
  if (!canvas) return;

  // Scene
  sceneManager = new SceneManager(canvas);

  // World
  worldBuilder = new WorldBuilder(sceneManager.scene);

  // Particles
  particleField = new ParticleField(sceneManager.scene);

  // Robot
  robot = new RobotCharacter(sceneManager.scene);

  // Zones
  zoneManager = new ZoneManager(sceneManager.scene, resume);
  zoneManager.onZoneChange(id => { activeZone.value = id; });

  // Navigation
  navController = new NavigationController(sceneManager.camera, canvas);
  navController.enable();

  // Pointer lock state sync
  document.addEventListener('pointerlockchange', () => {
    isLocked.value = document.pointerLockElement === canvas;
    if (isLocked.value) showIntro.value = false;
  });

  // Register update callbacks
  sceneManager.addUpdateCallback((delta, elapsed) => {
    navController.update(delta);
    particleField.update(elapsed);
    robot.update(elapsed);
    robot.facePlayer(sceneManager.camera.position);
    zoneManager.update(elapsed, sceneManager.camera.position);

    // Sync playerPos for HUD
    playerPos.x = sceneManager.camera.position.x;
    playerPos.z = sceneManager.camera.position.z;
  });

  // Start loop
  sceneManager.start();
};

onUnmounted(() => {
  if (sceneManager) sceneManager.stop();
  if (navController) navController.disable();
  document.removeEventListener('pointerlockchange', () => {});
  if ('speechSynthesis' in window) window.speechSynthesis.cancel();
});
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&display=swap');

* { margin: 0; padding: 0; box-sizing: border-box; }
html, body { width: 100%; height: 100%; background: #000510; overflow: hidden; }
</style>

<style scoped>
.world-wrapper {
  width: 100vw; height: 100vh; overflow: hidden;
  position: relative; background: #000510;
}

.world-canvas {
  position: absolute; inset: 0;
  width: 100%; height: 100%;
  display: block;
}

/* Intro overlay */
.intro-overlay {
  position: absolute; inset: 0;
  display: flex; flex-direction: column;
  align-items: center; justify-content: center;
  z-index: 100;
  background: rgba(0,5,16,0.6);
  backdrop-filter: blur(4px);
  font-family: 'Orbitron', monospace;
  text-align: center;
  pointer-events: none;
}
.intro-robot { font-size: 4rem; margin-bottom: 1rem; animation: bob 2s ease-in-out infinite; }
.intro-name { color: #ffffff; font-size: 2.5rem; font-weight: 900; letter-spacing: 3px; text-shadow: 0 0 30px rgba(0,204,255,0.8); }
.intro-title { color: #00ff88; font-size: 1rem; letter-spacing: 4px; margin-top: 0.4rem; margin-bottom: 2rem; }
.intro-speech { display: flex; align-items: center; gap: 0.8rem; color: #00ccff; font-size: 0.85rem; }
.speech-dot { width: 10px; height: 10px; border-radius: 50%; background: #00ccff; animation: pulse 0.8s ease-in-out infinite; }
.intro-prompt { animation: pulse 1.5s ease-in-out infinite; }
.prompt-pulse { color: #00ccff; font-size: 0.9rem; letter-spacing: 3px; }

.esc-hint {
  position: fixed; top: 1rem; left: 50%; transform: translateX(-50%);
  color: rgba(0,204,255,0.4); font-family: 'Courier New', monospace;
  font-size: 0.7rem; letter-spacing: 2px; z-index: 300; pointer-events: none;
}

/* Transitions */
.fade-enter-active, .fade-leave-active { transition: opacity 0.6s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }

@keyframes bob { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-12px); } }
@keyframes pulse { 0%,100% { opacity: 1; } 50% { opacity: 0.3; } }
</style>
