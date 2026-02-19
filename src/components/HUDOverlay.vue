<template>
  <div class="hud">
    <!-- Crosshair -->
    <div class="crosshair">
      <div class="ch-h"></div>
      <div class="ch-v"></div>
    </div>

    <!-- Zone label -->
    <div class="zone-label" :class="{ visible: !!activeZone }">
      <div class="zone-icon">◈</div>
      <div class="zone-name">{{ zoneNames[activeZone] || '' }}</div>
      <div class="zone-hint">Hologram Active</div>
    </div>

    <!-- Controls hint -->
    <div class="controls-hint" :class="{ hide: isLocked }">
      <div class="hint-title">⬡ CLICK TO ENTER AI WORLD ⬡</div>
      <div class="hint-keys">
        <span class="key">W</span><span class="key">A</span><span class="key">S</span><span class="key">D</span>
        <span class="hint-text">Move</span>
        &nbsp;&nbsp;
        <span class="hint-text">Mouse = Look</span>
        &nbsp;&nbsp;
        <span class="key">ESC</span>
        <span class="hint-text">Exit</span>
      </div>
    </div>

    <!-- Minimap zones -->
    <div class="minimap">
      <div class="minimap-title">MAP</div>
      <svg class="minimap-svg" viewBox="-65 -40 130 110">
        <circle v-for="z in zoneList" :key="z.id"
          :cx="z.mapX" :cy="z.mapZ"
          r="5"
          :fill="z.color"
          :opacity="activeZone === z.id ? 1 : 0.3"
        />
        <text v-for="z in zoneList" :key="z.id + 'l'"
          :x="z.mapX" :y="z.mapZ - 7"
          text-anchor="middle"
          fill="white"
          font-size="5"
          opacity="0.6"
        >{{ z.short }}</text>
        <!-- Player dot -->
        <circle :cx="playerMapX" :cy="playerMapZ" r="3" fill="#ffffff" opacity="0.9"/>
      </svg>
    </div>

    <!-- Position readout -->
    <div class="position-hud">
      <span class="pos-label">POS</span>
      X:{{ playerX.toFixed(0) }} Z:{{ playerZ.toFixed(0) }}
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  activeZone: { type: String, default: null },
  playerPos:  { type: Object, default: () => ({ x: 0, z: 0 }) },
  isLocked:   { type: Boolean, default: false },
});

const zoneNames = {
  about:      '[ ABOUT ME ]',
  skills:     '[ SKILLS ]',
  projects:   '[ PROJECTS ]',
  experience: '[ EXPERIENCE ]',
  contact:    '[ CONTACT ]',
  education:  '[ EDUCATION ]',
};

const zoneList = [
  { id: 'about',      mapX: 0,   mapZ: -30, color: '#00ff88', short: 'ABT' },
  { id: 'skills',     mapX: -30, mapZ: 0,   color: '#0088ff', short: 'SKL' },
  { id: 'projects',   mapX: 30,  mapZ: 0,   color: '#ff0066', short: 'PRJ' },
  { id: 'experience', mapX: 0,   mapZ: 30,  color: '#8800ff', short: 'EXP' },
  { id: 'contact',    mapX: 0,   mapZ: 60,  color: '#ffcc00', short: 'CTQ' },
  { id: 'education',  mapX: -30, mapZ: 50,  color: '#00ccff', short: 'EDU' },
];

const playerX = computed(() => props.playerPos?.x ?? 0);
const playerZ = computed(() => props.playerPos?.z ?? 0);
const playerMapX = computed(() => Math.max(-60, Math.min(60, playerX.value)));
const playerMapZ = computed(() => Math.max(-35, Math.min(100, playerZ.value)));
</script>

<style scoped>
.hud { position: fixed; inset: 0; pointer-events: none; font-family: 'Courier New', monospace; z-index: 200; }

/* Crosshair */
.crosshair { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); }
.ch-h { width: 20px; height: 2px; background: rgba(0,255,200,0.7); position: absolute; top: -1px; left: -10px; }
.ch-v { width: 2px; height: 20px; background: rgba(0,255,200,0.7); position: absolute; top: -10px; left: -1px; }

/* Zone Label */
.zone-label {
  position: absolute; top: 40%; left: 50%; transform: translate(-50%, -50%);
  text-align: center; opacity: 0; transition: opacity 0.5s;
  background: rgba(0,20,40,0.7); border: 1px solid #00ccff;
  padding: 0.5rem 1.5rem; border-radius: 6px;
  backdrop-filter: blur(6px);
}
.zone-label.visible { opacity: 1; }
.zone-icon { color: #00ccff; font-size: 1.4rem; }
.zone-name { color: #00ccff; font-size: 1.1rem; font-weight: bold; letter-spacing: 3px; }
.zone-hint { color: #005577; font-size: 0.7rem; margin-top: 2px; }

/* Controls hint */
.controls-hint {
  position: absolute; bottom: 2rem; left: 50%; transform: translateX(-50%);
  text-align: center; color: #aaddee; transition: opacity 0.5s;
  background: rgba(0,10,25,0.8); border: 1px solid rgba(0,204,255,0.3);
  padding: 0.8rem 2rem; border-radius: 8px;
}
.controls-hint.hide { opacity: 0; }
.hint-title { color: #00ccff; font-size: 0.9rem; font-weight: bold; letter-spacing: 2px; margin-bottom: 0.5rem; }
.hint-keys { display: flex; align-items: center; gap: 0.4rem; font-size: 0.85rem; }
.key { background: rgba(0,204,255,0.15); border: 1px solid #00ccff; color: #00ccff; padding: 2px 8px; border-radius: 4px; font-weight: bold; }
.hint-text { color: #5599bb; }

/* Minimap */
.minimap {
  position: absolute; top: 5rem; right: 1.5rem;
  background: rgba(0,10,25,0.85); border: 1px solid rgba(0,204,255,0.3);
  border-radius: 8px; padding: 0.5rem;
  width: 130px;
}
.minimap-title { color: #00ccff; font-size: 0.65rem; letter-spacing: 3px; text-align: center; margin-bottom: 4px; }
.minimap-svg { width: 100%; }

/* Position HUD */
.position-hud {
  position: absolute; bottom: 1rem; right: 1.5rem;
  color: #335566; font-size: 0.7rem; letter-spacing: 1px;
}
.pos-label { color: #00ccff; margin-right: 4px; }
</style>
