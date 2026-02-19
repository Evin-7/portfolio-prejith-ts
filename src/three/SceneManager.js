import * as THREE from 'three';

export class SceneManager {
  constructor(canvas) {
    this.canvas = canvas;
    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.clock = new THREE.Clock();
    this.animationId = null;
    this.updateCallbacks = [];
    this.init();
  }

  init() {
    // Scene
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x000510);
    this.scene.fog = new THREE.FogExp2(0x000510, 0.018);

    // Camera
    this.camera = new THREE.PerspectiveCamera(
      70,
      this.canvas.clientWidth / this.canvas.clientHeight,
      0.1,
      1000
    );
    this.camera.position.set(0, 1.7, 0);

    // Renderer
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
      alpha: false,
    });
    this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.2;

    // Lights
    this._setupLights();

    // Resize handler
    window.addEventListener('resize', this._onResize.bind(this));
  }

  _setupLights() {
    // Ambient
    const ambient = new THREE.AmbientLight(0x0a1a2e, 3);
    this.scene.add(ambient);

    // Hemisphere
    const hemi = new THREE.HemisphereLight(0x0088ff, 0x000510, 1.5);
    this.scene.add(hemi);

    // Main directional
    const dirLight = new THREE.DirectionalLight(0x00ffcc, 2);
    dirLight.position.set(10, 20, 10);
    dirLight.castShadow = true;
    dirLight.shadow.mapSize.set(2048, 2048);
    dirLight.shadow.camera.far = 200;
    this.scene.add(dirLight);

    // Neon point lights
    const colors = [0x00ff88, 0x0088ff, 0xff0066, 0x8800ff];
    const positions = [
      [-20, 3, -20], [20, 3, -20], [-20, 3, 20], [20, 3, 20]
    ];
    positions.forEach((pos, i) => {
      const light = new THREE.PointLight(colors[i], 3, 40, 2);
      light.position.set(...pos);
      this.scene.add(light);
    });
  }

  addUpdateCallback(fn) {
    this.updateCallbacks.push(fn);
  }

  start() {
    const loop = () => {
      this.animationId = requestAnimationFrame(loop);
      const delta = this.clock.getDelta();
      const elapsed = this.clock.getElapsedTime();
      this.updateCallbacks.forEach(fn => fn(delta, elapsed));
      this.renderer.render(this.scene, this.camera);
    };
    loop();
  }

  stop() {
    if (this.animationId) cancelAnimationFrame(this.animationId);
    window.removeEventListener('resize', this._onResize.bind(this));
  }

  _onResize() {
    if (!this.canvas.parentElement) return;
    const w = this.canvas.clientWidth;
    const h = this.canvas.clientHeight;
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(w, h);
  }
}
