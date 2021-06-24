let W = window.innerWidth;
let H = window.innerHeight;

const renderer = new THREE.WebGLRenderer({
  antialias: true,
  alpha: true
});
document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(28, 1, 1, 1000);
camera.position.set(10, 10, 50);
camera.lookAt(scene.position);
scene.add(camera);

const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(0, 0, -1);
camera.add(light);

const group = new THREE.Group();
scene.add(group);

const arrowMat = new THREE.MeshLambertMaterial({color:"green"});

const arrowGeo = new THREE.ConeBufferGeometry(2, 5, 32);
const arrowMesh = new THREE.Mesh(arrowGeo, arrowMat);
arrowMesh.rotation.x = Math.PI / 2;
arrowMesh.position.z = 2.5;
group.add(arrowMesh);

const cylinderGeo = new THREE.CylinderBufferGeometry(1, 1, 5, 32);
const cylinderMesh = new THREE.Mesh(cylinderGeo, arrowMat);
cylinderMesh.rotation.x = Math.PI / 2;
cylinderMesh.position.z = -2.5;
group.add(cylinderMesh);

function render() {
  renderer.render(scene, camera);
}

function resize() {
  W = window.innerWidth;
  H = window.innerHeight;
  renderer.setSize(W, H);
  camera.aspect = W / H;
  camera.updateProjectionMatrix();
  render();
}

window.addEventListener("resize", resize);

resize();

let rad = 0;

function animate() {
  rad += 0.05;
  group.lookAt(Math.sin(rad) * 100, Math.cos(rad) * 100, 100);
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}
requestAnimationFrame(animate);