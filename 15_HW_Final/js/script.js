$(document).ready(function () {
    // Loaders
    const loader = new THREE.OBJLoader();
    const textureLoader = new THREE.TextureLoader();

    // Setup scene
    const scene = new THREE.Scene();

    // Set background image (optional: change "background.jpg" to your file)
    const backgroundTexture = textureLoader.load('images/background.jpg');
    scene.background = backgroundTexture;

    const camera = new THREE.PerspectiveCamera(
        75, 
        window.innerWidth / window.innerHeight, 
        0.1, 
        1000
    );

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

        // Ambient light (soft general light)
    const ambientLight = new THREE.AmbientLight(0x404040, 2); // Soft white light, slightly stronger
    scene.add(ambientLight);

    // Directional light (like sunlight)
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 10, 7.5); // Move the light above and to the side
    scene.add(directionalLight);

    // Load model
    loader.load('models/heartkeychain.obj', function (model) {
        model.scale.set(0.3, 0.3, 0.3);
        model.position.set(0, 0, 0);

        model.traverse(function (child) {
            if (child instanceof THREE.Mesh) {
                child.material = new THREE.MeshPhongMaterial({ color: 0xcc0033 }); // Default color (red)
            }
        });

        scene.add(model);

        // Animate
        function animate() {
            requestAnimationFrame(animate);
            model.rotation.y += 0.01;
            renderer.render(scene, camera);
        }
        animate();
    });

    // Controls (optional, if you want to rotate with mouse)
    const controls = new THREE.TrackballControls(camera, renderer.domElement);

    camera.position.z = 5;

    // Resize handling
    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
});