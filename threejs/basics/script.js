/* eslint-disable no-undef */
let scene;
let camera;
let renderer;
let cube;
let stats;

function init() {
  stats = new Stats();
  stats.showPanel(0); // 0: fps, 1: ms, 2: mb, 3+: custom
  stats.domElement.classList.add('stats');
  document.body.appendChild(stats.domElement);

  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  // CREATE CUBE
  const geometry = new THREE.BoxGeometry(2, 2, 2);
  // const texture = new THREE.TextureLoader().load('textures/brick_bump.jpg');
  // const texture = new THREE.TextureLoader().load('textures/brick_diffuse.jpg');
  // const texture = new THREE.TextureLoader().load('textures/disturb.jpg');
  // const texture = new THREE.TextureLoader().load('textures/grass_dirt.png');
  const texture = new THREE.TextureLoader().load('textures/crate.gif');
  const material = new THREE.MeshBasicMaterial({ map: texture });
  // const material = new THREE.MeshBasicMaterial({ color: 0xff3333 });
  cube = new THREE.Mesh(geometry, material);

  // SET SCENE
  scene.add(cube);
  camera.position.z = 5;
}

function animate() {
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
  stats.update();
  requestAnimationFrame(animate);
}

function handleWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

// CODE START
window.addEventListener('resize', handleWindowResize, false);

init();
animate();
