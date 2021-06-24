// Create end vectors
var v1 = new THREE.Vector3(1, 3, 5);
var v2 = new THREE.Vector3(7, 8, 10);

// Get midpoint
var mid = new THREE.Vector3();
mid.addVectors(v1, v2);
mid.multiplyScalar(0.5);

// Nest child object inside parent
var parent = new THREE.Object3D();
var child = new THREE.Object3D();
parent.add(child);

// Set child position to any point in the XY plane with radius = 1
// This is a point in your "disc"
child.position.set(0, 1, 0);

// Move parent to midpoint
parent.position.copy(mid);

// Rotate parent to look towards end of the line
// This makes the "disc" perpendicular to the line
parent.lookAt(v1);

// Get world position of child 
var discPoint = new THREE.Vector3();
child.getWorldPosition(discPoint);
console.log(discPoint);
