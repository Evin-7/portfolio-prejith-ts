import * as THREE from 'three';
import gsap from 'gsap';

export class HologramPanel {
  constructor(scene, position, title, content, accentColor = 0x00ccff) {
    this.scene = scene;
    this.position = position;
    this.title = title;
    this.content = content;
    this.accentColor = accentColor;
    this.group = new THREE.Group();
    this.group.position.set(position.x, 0, position.z);
    this.visible = false;
    scene.add(this.group);
    this._buildPanel();
  }

  _hex(n) {
    return '#' + n.toString(16).padStart(6, '0');
  }

  _buildPanel() {
    const W = 5, H = 7;

    // Panel backing
    const geo = new THREE.PlaneGeometry(W, H);
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 768;
    const ctx = canvas.getContext('2d');
    this._canvas = canvas;
    this._ctx = ctx;
    this._drawContent(ctx, canvas.width, canvas.height);

    this._texture = new THREE.CanvasTexture(canvas);
    const mat = new THREE.MeshBasicMaterial({
      map: this._texture,
      transparent: true,
      opacity: 0.92,
      side: THREE.DoubleSide,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    this._panel = new THREE.Mesh(geo, mat);
    this._panel.position.set(0, H / 2 + 0.5, 0);
    this.group.add(this._panel);

    // Frame edges
    const col = this.accentColor;
    const edgeMat = new THREE.MeshBasicMaterial({ color: col });
    const edgeW = 0.06;
    const edges = [
      { w: W + edgeW, h: edgeW, x: 0, y: H + 0.5 },        // top
      { w: W + edgeW, h: edgeW, x: 0, y: 0.5 },            // bottom
      { w: edgeW, h: H + edgeW, x: -W / 2, y: H / 2 + 0.5 }, // left
      { w: edgeW, h: H + edgeW, x: W / 2, y: H / 2 + 0.5 },  // right
    ];
    edges.forEach(e => {
      const edgeGeo = new THREE.PlaneGeometry(e.w, e.h);
      const edge = new THREE.Mesh(edgeGeo, edgeMat);
      edge.position.set(e.x, e.y, 0.01);
      this.group.add(edge);
    });

    // Glow light
    this._light = new THREE.PointLight(col, 2, 12, 2);
    this._light.position.set(0, H / 2 + 0.5, 1);
    this.group.add(this._light);

    // Corner decorations
    [[-W / 2, H + 0.5], [W / 2, H + 0.5], [-W / 2, 0.5], [W / 2, 0.5]].forEach(([x, y]) => {
      const corner = new THREE.Mesh(
        new THREE.BoxGeometry(0.25, 0.25, 0.08),
        edgeMat
      );
      corner.position.set(x, y, 0.02);
      this.group.add(corner);
    });

    // Base pillar
    const pillar = new THREE.Mesh(
      new THREE.CylinderGeometry(0.06, 0.06, 1, 8),
      edgeMat
    );
    pillar.position.set(0, 0, 0);
    this.group.add(pillar);

    // Start hidden
    this.group.scale.set(0, 0, 0);
    this.group.visible = false;
  }

  _drawContent(ctx, W, H) {
    const col = this._hex(this.accentColor);
    // Background
    ctx.clearRect(0, 0, W, H);
    const bg = ctx.createLinearGradient(0, 0, 0, H);
    bg.addColorStop(0, 'rgba(0,20,40,0.95)');
    bg.addColorStop(1, 'rgba(0,5,15,0.95)');
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, W, H);

    // Scanlines
    for (let y = 0; y < H; y += 6) {
      ctx.fillStyle = 'rgba(0,255,200,0.03)';
      ctx.fillRect(0, y, W, 2);
    }

    // Title bar
    ctx.fillStyle = col;
    ctx.fillRect(0, 0, W, 80);
    ctx.fillStyle = '#000a1a';
    ctx.font = 'bold 34px "Courier New", monospace';
    ctx.textAlign = 'center';
    ctx.fillText(this.title, W / 2, 54);

    // Content lines
    ctx.fillStyle = col;
    ctx.fillRect(30, 90, W - 60, 2);

    ctx.font = '22px "Courier New", monospace';
    ctx.textAlign = 'left';
    ctx.fillStyle = '#aaffee';
    const lines = this.content.split('\n');
    let y = 130;
    lines.forEach(line => {
      if (line.startsWith('##')) {
        ctx.fillStyle = col;
        ctx.font = 'bold 24px "Courier New", monospace';
        ctx.fillText(line.replace('## ', ''), 30, y);
        ctx.font = '22px "Courier New", monospace';
        ctx.fillStyle = '#aaffee';
        y += 38;
      } else if (line.startsWith('--')) {
        ctx.fillStyle = '#00ff88';
        ctx.fillText('▶ ' + line.replace('-- ', ''), 30, y);
        ctx.fillStyle = '#aaffee';
        y += 30;
      } else if (line.trim()) {
        // Word wrap
        const words = line.split(' ');
        let current = '';
        words.forEach(w => {
          const test = current + w + ' ';
          if (ctx.measureText(test).width > W - 60) {
            ctx.fillText(current, 30, y);
            y += 28;
            current = w + ' ';
          } else current = test;
        });
        if (current) { ctx.fillText(current, 30, y); y += 28; }
      } else y += 14;
      if (y > H - 40) return;
    });

    // Bottom accent
    ctx.fillStyle = col;
    ctx.fillRect(0, H - 3, W, 3);
  }

  show(playerPos) {
    if (this.visible) return;
    this.visible = true;
    this.group.visible = true;
    // Face player
    const dx = playerPos.x - this.group.position.x;
    const dz = playerPos.z - this.group.position.z;
    this.group.rotation.y = Math.atan2(dx, dz);

    gsap.killTweensOf(this.group.scale);
    gsap.to(this.group.scale, { x: 1, y: 1, z: 1, duration: 0.8, ease: 'back.out(1.5)' });
  }

  hide() {
    if (!this.visible) return;
    this.visible = false;
    gsap.killTweensOf(this.group.scale);
    gsap.to(this.group.scale, {
      x: 0, y: 0, z: 0, duration: 0.4, ease: 'power2.in',
      onComplete: () => { this.group.visible = false; }
    });
  }

  update(elapsed) {
    if (!this.visible) return;
    // Hover float
    this.group.position.y = Math.sin(elapsed * 1.1) * 0.2;
    // Light pulse
    if (this._light) this._light.intensity = 1.5 + Math.sin(elapsed * 2) * 0.8;
  }
}
