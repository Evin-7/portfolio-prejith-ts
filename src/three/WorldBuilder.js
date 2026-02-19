import * as THREE from 'three';

export class WorldBuilder {
  constructor(scene) {
    this.scene = scene;
    this.group = new THREE.Group();
    scene.add(this.group);
    this._build();
  }

  _build() {
    this._makeFloor();
    this._makeGrid();
    this._makeSkyDome();
    this._makeBuildings();
    this._makeZoneMarkers();
    this._makeNeonPillars();
  }

  _makeFloor() {
    const geo = new THREE.PlaneGeometry(300, 300);
    const mat = new THREE.MeshStandardMaterial({
      color: 0x020a1a,
      metalness: 0.8,
      roughness: 0.3,
    });
    const floor = new THREE.Mesh(geo, mat);
    floor.rotation.x = -Math.PI / 2;
    floor.receiveShadow = true;
    this.group.add(floor);
  }

  _makeGrid() {
    const grid = new THREE.GridHelper(300, 120, 0x003366, 0x001133);
    grid.position.y = 0.01;
    this.group.add(grid);

    // Glowing grid lines (inner)
    const innerGrid = new THREE.GridHelper(100, 40, 0x00ffcc, 0x004488);
    innerGrid.position.y = 0.02;
    this.group.add(innerGrid);
  }

  _makeSkyDome() {
    const geo = new THREE.SphereGeometry(400, 32, 32);
    const mat = new THREE.MeshBasicMaterial({
      color: 0x000510,
      side: THREE.BackSide,
    });
    this.group.add(new THREE.Mesh(geo, mat));

    // Stars
    const starGeo = new THREE.BufferGeometry();
    const starCount = 2000;
    const positions = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 700;
    }
    starGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const starMat = new THREE.PointsMaterial({ color: 0xffffff, size: 0.5, sizeAttenuation: true });
    this.group.add(new THREE.Points(starGeo, starMat));
  }

  _makeBuildings() {
    const neonColors = [0x00ff88, 0x0088ff, 0xff0066, 0x8800ff, 0x00ccff, 0xffcc00];
    const positions = [
      [-60, -50], [-80, -30], [-70, 10], [-60, 50], [-80, 70],
      [60, -50], [80, -30], [70, 10], [60, 50], [80, 70],
      [-40, -80], [20, -90], [40, -80], [0, -100],
      [-30, 90], [30, 90], [0, 100],
    ];

    positions.forEach((pos, i) => {
      const h = 10 + Math.random() * 25;
      const w = 4 + Math.random() * 6;
      const geo = new THREE.BoxGeometry(w, h, w);
      const col = neonColors[i % neonColors.length];
      const mat = new THREE.MeshStandardMaterial({
        color: 0x050f20,
        emissive: col,
        emissiveIntensity: 0.05,
        metalness: 0.9,
        roughness: 0.1,
      });
      const building = new THREE.Mesh(geo, mat);
      building.position.set(pos[0] + (Math.random() - 0.5) * 10, h / 2, pos[1] + (Math.random() - 0.5) * 10);
      building.castShadow = true;
      this.group.add(building);

      // Neon edge glow on top
      const edgeGeo = new THREE.BoxGeometry(w + 0.1, 0.15, w + 0.1);
      const edgeMat = new THREE.MeshBasicMaterial({ color: col });
      const edge = new THREE.Mesh(edgeGeo, edgeMat);
      edge.position.set(building.position.x, h + 0.1, building.position.z);
      this.group.add(edge);
    });
  }

  _makeZoneMarkers() {
    // Glowing floor circles at each zone position
    const zones = [
      { pos: [0, 0, 0], color: 0x00ffcc, label: 'START' },
      { pos: [0, 0, -30], color: 0x00ff88, label: 'ABOUT' },
      { pos: [-30, 0, 0], color: 0x0088ff, label: 'SKILLS' },
      { pos: [30, 0, 0], color: 0xff0066, label: 'PROJECTS' },
      { pos: [0, 0, 30], color: 0x8800ff, label: 'EXPERIENCE' },
      { pos: [0, 0, 60], color: 0xffcc00, label: 'CONTACT' },
    ];
    zones.forEach(z => {
      const geo = new THREE.CircleGeometry(4, 32);
      const mat = new THREE.MeshBasicMaterial({ color: z.color, transparent: true, opacity: 0.18 });
      const circle = new THREE.Mesh(geo, mat);
      circle.rotation.x = -Math.PI / 2;
      circle.position.set(z.pos[0], 0.03, z.pos[2]);
      this.group.add(circle);

      // Ring
      const ringGeo = new THREE.RingGeometry(3.8, 4.2, 32);
      const ringMat = new THREE.MeshBasicMaterial({ color: z.color, side: THREE.DoubleSide });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.rotation.x = -Math.PI / 2;
      ring.position.set(z.pos[0], 0.05, z.pos[2]);
      this.group.add(ring);
    });
  }

  _makeNeonPillars() {
    const positions = [
      [-10, -10], [10, -10], [-10, 10], [10, 10],
      [-10, -40], [10, -40], [-40, -10], [40, -10],
      [-40, 10], [40, 10], [-10, 40], [10, 40],
    ];
    const colors = [0x00ff88, 0x0088ff, 0xff0066, 0x8800ff];

    positions.forEach((pos, i) => {
      const col = colors[i % colors.length];
      // Thin pillar
      const geo = new THREE.CylinderGeometry(0.08, 0.08, 12, 8);
      const mat = new THREE.MeshBasicMaterial({ color: col });
      const pillar = new THREE.Mesh(geo, mat);
      pillar.position.set(pos[0], 6, pos[1]);
      this.group.add(pillar);

      // Point light at top
      const light = new THREE.PointLight(col, 2, 15, 2);
      light.position.set(pos[0], 12, pos[1]);
      this.group.add(light);
    });
  }
}
