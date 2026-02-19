import * as THREE from 'three';
import gsap from 'gsap';

export class RobotCharacter {
  constructor(scene) {
    this.scene = scene;
    this.group = new THREE.Group();
    scene.add(this.group);
    this.group.position.set(0, 0, -8);
    this._baseY = 0;
    this._time = 0;
    this._build();
  }

  _mat(color, emissive = 0x000000, emissiveIntensity = 0, metal = 0.8, rough = 0.2) {
    return new THREE.MeshStandardMaterial({ color, emissive, emissiveIntensity, metalness: metal, roughness: rough });
  }

  _box(w, h, d, mat) {
    return new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat);
  }

  _build() {
    const bodyMat = this._mat(0x0a1a2e, 0x00ccff, 0.3);
    const accentMat = this._mat(0x00ccff, 0x00ccff, 1);
    const eyeMat = this._mat(0x00ff88, 0x00ff88, 2);
    const darkMat = this._mat(0x050f20);
    const redMat = this._mat(0xff0066, 0xff0066, 1.5);

    // === TORSO ===
    const torso = this._box(1.4, 1.8, 0.9, bodyMat);
    torso.position.set(0, 2.0, 0);
    torso.castShadow = true;
    this.group.add(torso);

    // Chest panel
    const panel = this._box(0.8, 0.8, 0.05, darkMat);
    panel.position.set(0, 2.0, 0.48);
    this.group.add(panel);

    // Chest light (core)
    const core = this._box(0.3, 0.3, 0.06, eyeMat);
    core.position.set(0, 2.0, 0.49);
    this.group.add(core);
    const coreLight = new THREE.PointLight(0x00ff88, 2, 3);
    coreLight.position.set(0, 2.0, 0.6);
    this.group.add(coreLight);

    // Torso accent strips
    [-0.5, 0.5].forEach(x => {
      const strip = this._box(0.08, 1.6, 0.05, accentMat);
      strip.position.set(x, 2.0, 0.46);
      this.group.add(strip);
    });

    // === HEAD ===
    const head = this._box(1.1, 1.0, 1.0, bodyMat);
    head.position.set(0, 3.4, 0);
    head.castShadow = true;
    this.group.add(head);

    // Eyes
    [[-0.22, 3.42], [0.22, 3.42]].forEach(([x, y]) => {
      const eye = this._box(0.18, 0.1, 0.06, eyeMat);
      eye.position.set(x, y, 0.52);
      this.group.add(eye);
      const eLight = new THREE.PointLight(0x00ff88, 1.5, 2);
      eLight.position.set(x, y, 0.6);
      this.group.add(eLight);
    });

    // Mouth line
    const mouth = this._box(0.5, 0.05, 0.06, accentMat);
    mouth.position.set(0, 3.1, 0.52);
    this.group.add(mouth);

    // Antenna
    const antenna = new THREE.Mesh(
      new THREE.CylinderGeometry(0.03, 0.03, 0.5, 8),
      accentMat
    );
    antenna.position.set(0, 3.95, 0);
    this.group.add(antenna);
    const antTip = this._box(0.1, 0.1, 0.1, redMat);
    antTip.position.set(0, 4.22, 0);
    this.group.add(antTip);
    const antLight = new THREE.PointLight(0xff0066, 2, 2);
    antLight.position.set(0, 4.3, 0);
    this.group.add(antLight);

    // === NECK ===
    const neck = new THREE.Mesh(
      new THREE.CylinderGeometry(0.2, 0.25, 0.3, 8),
      darkMat
    );
    neck.position.set(0, 2.95, 0);
    this.group.add(neck);

    // === SHOULDERS & ARMS ===
    [[-0.95, 2.6], [0.95, 2.6]].forEach(([x, y]) => {
      const shoulder = this._box(0.35, 0.35, 0.35, accentMat);
      shoulder.position.set(x, y, 0);
      this.group.add(shoulder);

      const arm = this._box(0.3, 0.9, 0.3, bodyMat);
      arm.position.set(x, y - 0.65, 0);
      arm.castShadow = true;
      this.group.add(arm);

      const hand = this._box(0.28, 0.3, 0.28, darkMat);
      hand.position.set(x, y - 1.15, 0);
      this.group.add(hand);
    });

    // === LEGS ===
    [[-0.35, 0.9], [0.35, 0.9]].forEach(([x, y]) => {
      const hip = this._box(0.4, 0.25, 0.4, accentMat);
      hip.position.set(x, y, 0);
      this.group.add(hip);

      const leg = this._box(0.38, 0.9, 0.38, bodyMat);
      leg.position.set(x, y - 0.6, 0);
      leg.castShadow = true;
      this.group.add(leg);

      const foot = this._box(0.45, 0.2, 0.55, darkMat);
      foot.position.set(x, y - 1.1, 0.08);
      this.group.add(foot);
    });

    // === BASE PLATFORM ===
    const base = new THREE.Mesh(
      new THREE.CylinderGeometry(1, 1.2, 0.1, 16),
      new THREE.MeshStandardMaterial({ color: 0x00ccff, emissive: 0x00ccff, emissiveIntensity: 0.3, transparent: true, opacity: 0.4 })
    );
    base.position.set(0, 0.05, 0);
    this.group.add(base);

    this._antLight = antLight;
    this._coreLight = coreLight;
  }

  playIntro(resume, onDone) {
    // TTS intro
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const msg = new SpeechSynthesisUtterance(
        `Hello! I am ${resume.name}, a ${resume.title}. ${resume.tagline} Welcome to my AI World Portfolio. Use W A S D keys to walk around and explore the zones!`
      );
      msg.rate = 0.92;
      msg.pitch = 0.85;
      msg.volume = 1;
      msg.onend = onDone;
      setTimeout(() => window.speechSynthesis.speak(msg), 300);
    } else {
      setTimeout(onDone, 4000);
    }

    // Entrance animation
    this.group.scale.set(0, 0, 0);
    gsap.to(this.group.scale, { x: 1, y: 1, z: 1, duration: 1.2, ease: 'back.out(1.7)', delay: 0.3 });
  }

  facePlayer(playerPos) {
    const dx = playerPos.x - this.group.position.x;
    const dz = playerPos.z - this.group.position.z;
    const angle = Math.atan2(dx, dz);
    this.group.rotation.y = angle;
  }

  update(elapsed) {
    // Bob animation
    this.group.position.y = Math.sin(elapsed * 1.2) * 0.15;
    // Subtle sway
    this.group.rotation.z = Math.sin(elapsed * 0.7) * 0.03;

    // Antenna light pulse
    if (this._antLight) {
      this._antLight.intensity = 1.5 + Math.sin(elapsed * 4) * 1;
    }
    if (this._coreLight) {
      this._coreLight.intensity = 1.5 + Math.sin(elapsed * 2) * 0.8;
    }
  }
}
