// src/components/ThreeDScene.js
import React, { useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'; // Import GLTFLoader

const ThreeDScene = () => {
  useEffect(() => {
    // Initialize scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ canvas: document.querySelector('#c') });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    // Add basic ambient and directional light
    const ambientLight = new THREE.AmbientLight(0x404040); // Ambient light
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.5); // Directional light
    directionalLight.position.set(-5, 3, 1).normalize();
    scene.add(directionalLight);

    let stacy_txt = new THREE.TextureLoader().load('https://s3-us-west-2.amazonaws.com/s.cdpn.io/1376484/stacy.jpg');

    stacy_txt.flipY = false; // we flip the texture so that its the right way up

    const stacy_mtl = new THREE.MeshPhongMaterial({
      map: stacy_txt,
      color: 0xffffff,
      skinning: true
    });

    // Load model
    const loader = new GLTFLoader();
    let mixer; // For handling animations

    loader.load(
      'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1376484/stacy_lightweight.glb',
      (gltf) => {
        const model = gltf.scene;

        model.traverse(o => {
          if (o.isMesh) {
            o.castShadow = true;
            o.receiveShadow = true;
            o.material = stacy_mtl;
          }
        });
        // Set the models initial scale
        model.scale.set(2, 2, 2);
        model.position.y = -3;
        model.position.x = 5;

        let angle = -45;
        model.rotateY(angle * Math.PI / 180);

        scene.add(model);

        // Handle animations if any
        mixer = new THREE.AnimationMixer(model);
        gltf.animations.forEach((clip) => mixer.clipAction(clip).play());
      },
      undefined,
      (error) => console.error('An error happened:', error)
    );

    // Set up camera position
    camera.position.z = 5;

    // Animation loop
    const clock = new THREE.Clock();
    const animate = () => {
      requestAnimationFrame(animate);
      if (mixer) mixer.update(clock.getDelta()); // Update animations
      renderer.render(scene, camera);
    };
    animate();


    // Handle window resize
    const handleResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    };
    window.addEventListener('resize', handleResize);
    handleResize(); // Initial resize call

    // Clean up event listener and Three.js objects on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  }, []);

  return (
    <div>
      <div className="loading" id="js-loader">
        <div className="loader"></div>
      </div>

      <canvas
        id="c"
        style={{
          position: 'fixed',
          bottom: 0,
          right: 0,
          width: '300px', // Adjust width as needed
          height: '300px', // Adjust height as needed
          border: '1px solid #000', // Optional border for visibility
          backgroundColor: '#000', // Optional background color
        }}
      ></canvas>
    </div>
  );
};

export default ThreeDScene;