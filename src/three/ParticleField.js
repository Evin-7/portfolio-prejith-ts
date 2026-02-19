import * as THREE from 'three';

export class ParticleField {
  constructor(scene) {
    this.scene = scene;
    this.mesh = null;
    this._create();
  }

  _create() {
    const count = 3000;
    const geo = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const speeds = new Float32Array(count);

    const palette = [
      new THREE.Color(0x00ff88),
      new THREE.Color(0x0088ff),
      new THREE.Color(0xff0066),
      new THREE.Color(0x8800ff),
      new THREE.Color(0x00ccff),
    ];

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 120;
      positions[i * 3 + 1] = Math.random() * 30;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 120;

      const col = palette[Math.floor(Math.random() * palette.length)];
      colors[i * 3] = col.r;
      colors[i * 3 + 1] = col.g;
      colors[i * 3 + 2] = col.b;

      speeds[i] = 0.3 + Math.random() * 0.7;
    }

    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    this._speeds = speeds;
    this._count = count;

    const mat = new THREE.PointsMaterial({
      size: 0.12,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
      sizeAttenuation: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    this.mesh = new THREE.Points(geo, mat);
    this.scene.add(this.mesh);
  }

  update(elapsed) {
    if (!this.mesh) return;
    const positions = this.mesh.geometry.attributes.position.array;
    for (let i = 0; i < this._count; i++) {
      // Drift upward
      positions[i * 3 + 1] += this._speeds[i] * 0.01;
      // Slight horizontal drift
      positions[i * 3] += Math.sin(elapsed * 0.3 + i) * 0.003;
      positions[i * 3 + 2] += Math.cos(elapsed * 0.2 + i) * 0.003;

      // Reset when too high
      if (positions[i * 3 + 1] > 30) positions[i * 3 + 1] = 0;
    }
    this.mesh.geometry.attributes.position.needsUpdate = true;
  }
}
