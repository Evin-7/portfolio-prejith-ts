import * as THREE from 'three';

export class NavigationController {
  constructor(camera, domElement) {
    this.camera = camera;
    this.domElement = domElement;
    this.enabled = false;

    // State
    this.keys = {};
    this.yaw = 0;
    this.pitch = 0;
    this.speed = 8;
    this.sensitivity = 0.002;
    this.velocity = new THREE.Vector3();
    this.direction = new THREE.Vector3();

    // Lock state
    this.isLocked = false;
    this._onKeyDown = this._onKeyDown.bind(this);
    this._onKeyUp = this._onKeyUp.bind(this);
    this._onMouseMove = this._onMouseMove.bind(this);
    this._onLockChange = this._onLockChange.bind(this);
    this._onClick = this._onClick.bind(this);
  }

  enable() {
    if (this.enabled) return;
    this.enabled = true;
    document.addEventListener('keydown', this._onKeyDown);
    document.addEventListener('keyup', this._onKeyUp);
    document.addEventListener('pointerlockchange', this._onLockChange);
    this.domElement.addEventListener('click', this._onClick);
  }

  disable() {
    this.enabled = false;
    document.removeEventListener('keydown', this._onKeyDown);
    document.removeEventListener('keyup', this._onKeyUp);
    document.removeEventListener('pointerlockchange', this._onLockChange);
    this.domElement.removeEventListener('click', this._onClick);
    if (this.isLocked) document.exitPointerLock();
  }

  _onClick() {
    if (!this.isLocked) {
      this.domElement.requestPointerLock();
    }
  }

  _onLockChange() {
    this.isLocked = document.pointerLockElement === this.domElement;
    if (this.isLocked) {
      document.addEventListener('mousemove', this._onMouseMove);
    } else {
      document.removeEventListener('mousemove', this._onMouseMove);
    }
  }

  _onMouseMove(e) {
    this.yaw -= e.movementX * this.sensitivity;
    this.pitch -= e.movementY * this.sensitivity;
    this.pitch = Math.max(-Math.PI / 3, Math.min(Math.PI / 3, this.pitch));
    this._applyLook();
  }

  _applyLook() {
    const euler = new THREE.Euler(this.pitch, this.yaw, 0, 'YXZ');
    this.camera.quaternion.setFromEuler(euler);
  }

  _onKeyDown(e) { this.keys[e.code] = true; }
  _onKeyUp(e) { this.keys[e.code] = false; }

  update(delta) {
    if (!this.enabled || !this.isLocked) return;

    const forward = this.keys['KeyW'] || this.keys['ArrowUp'];
    const backward = this.keys['KeyS'] || this.keys['ArrowDown'];
    const left = this.keys['KeyA'] || this.keys['ArrowLeft'];
    const right = this.keys['KeyD'] || this.keys['ArrowRight'];

    this.direction.set(
      (right ? 1 : 0) - (left ? 1 : 0),
      0,
      (backward ? 1 : 0) - (forward ? 1 : 0)
    ).normalize();

    const moveDir = this.direction.clone().applyEuler(
      new THREE.Euler(0, this.yaw, 0, 'YXZ')
    );

    this.camera.position.addScaledVector(moveDir, this.speed * delta);

    // Clamp to world bounds
    this.camera.position.x = Math.max(-80, Math.min(80, this.camera.position.x));
    this.camera.position.z = Math.max(-80, Math.min(80, this.camera.position.z));
    this.camera.position.y = 1.7; // Eye height
  }

  getPosition() {
    return this.camera.position;
  }
}
