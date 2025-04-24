$(document).ready(function () {
    // ✅ Should not error if OBJLoader is loaded properly
    const loader = new THREE.OBJLoader();

    // Setup scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Lighting
    const light = new THREE.AmbientLight(0xffffff);
    scene.add(light);

    // Simple cube
    const cube = new THREE.Mesh(
        new THREE.BoxGeometry(),
        new THREE.MeshBasicMaterial({ color: 0x00ff00 })
    );
    cube.position.x = -2;
    scene.add(cube);

    // Simple sphere
    const sphere = new THREE.Mesh(
        new THREE.SphereGeometry(0.75, 32, 32),
        new THREE.MeshBasicMaterial({ color: 0x0000ff })
    );
    sphere.position.x = 2;
    scene.add(sphere);

    // ✅ Load model
    loader.load('models/beemodel.obj', function (model) {
        model.scale.set(0.5, 0.5, 0.5);
        model.position.y = 3;
        model.position.x = 0;
        model.position.z = -3;

        model.traverse(function (child) {
            if (child instanceof THREE.Mesh) {
                child.material = new THREE.MeshNormalMaterial();
            }
        });

        scene.add(model);

        // Animate
        function animate() {
            requestAnimationFrame(animate);
            cube.rotation.y += 0.01;
            sphere.rotation.y += 0.01;
            model.rotation.y += 0.01;
            renderer.render(scene, camera);
        }
        animate();
    });

    camera.position.z = 5;
});
