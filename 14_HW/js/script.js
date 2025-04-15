$(document).ready(function () {
    // ✅ Set up scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // ✅ Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff);
    scene.add(ambientLight);

    // ✅ Cube
    const cube = new THREE.Mesh(
        new THREE.BoxGeometry(),
        new THREE.MeshNormalMaterial()
    );
    cube.position.x = -2;
    scene.add(cube);

    // ✅ Sphere
    const sphere = new THREE.Mesh(
        new THREE.SphereGeometry(0.75, 32, 32),
        new THREE.MeshNormalMaterial()
    );
    sphere.position.x = 2;
    scene.add(sphere);

    // ✅ Model placeholder
    const objLoader = new THREE.OBJLoader();
    objLoader.load('models/model.obj', function (model) {
        model.scale.set(0.5, 0.5, 0.5);
        model.position.y = -1;
        scene.add(model);

        // ✅ Animate everything
        function animate() {
            requestAnimationFrame(animate);
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;
            sphere.rotation.y += 0.01;
            model.rotation.y += 0.01;
            renderer.render(scene, camera);
        }
        animate();
    }, undefined, function (error) {
        console.error('Error loading model:', error);
    });

    // ✅ Set camera position
    camera.position.z = 5;
});
