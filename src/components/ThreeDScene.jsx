import React, { useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const ThreeDScene = () => {
  useEffect(() => {
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

    const ambientLight = new THREE.AmbientLight(0x404040);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.5);
    directionalLight.position.set(-5, 3, 1).normalize();
    scene.add(directionalLight);

    const textureLoader = new THREE.TextureLoader();
    const stacyTexture = textureLoader.load('https://s3-us-west-2.amazonaws.com/s.cdpn.io/1376484/stacy.jpg');
    stacyTexture.flipY = false;

    const stacyMaterial = new THREE.MeshPhongMaterial({
      map: stacyTexture,
      color: 0xffffff,
      skinning: true
    });

    const loader = new GLTFLoader();
    let mixer;
    let neck, waist;

    loader.load(
      'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1376484/stacy_lightweight.glb',
      (gltf) => {
        const model = gltf.scene;
        model.traverse(o => {
          if (o.isMesh) {
            o.castShadow = true;
            o.receiveShadow = true;
            o.material = stacyMaterial;
          }
          if (o.isBone && o.name === 'mixamorigNeck') {
            neck = o;
          }
          if (o.isBone && o.name === 'mixamorigSpine') {
            waist = o;
          }
        });

        model.scale.set(2, 2, 2);
        model.position.set(5, -3, 0);
        model.rotateY(-45 * (Math.PI / 180));

        scene.add(model);

        mixer = new THREE.AnimationMixer(model);
        gltf.animations.forEach((clip) => mixer.clipAction(clip).play());

        const loaderAnim = document.getElementById('js-loader');
        if (loaderAnim) {
          loaderAnim.style.display = 'none';
        }
      },
      undefined,
      (error) => console.error('An error happened:', error)
    );

    camera.position.z = 10;

    const clock = new THREE.Clock();
    const animate = () => {
      requestAnimationFrame(animate);
      if (mixer) {
        mixer.update(clock.getDelta());
      }
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    };
    window.addEventListener('resize', handleResize);
    handleResize();

    document.addEventListener('mousemove', function (e) {
      const mousecoords = getMousePos(e);
      if (neck && waist) {
        moveJoint(mousecoords, neck, 50);
        moveJoint(mousecoords, waist, 30);
      }
    });

    const getMousePos = (e) => {
      return { x: e.clientX, y: e.clientY };
    };

    const moveJoint = (mouse, joint, degreeLimit) => {
      const degrees = getMouseDegrees(mouse.x, mouse.y, degreeLimit);
      joint.rotation.y = THREE.Math.degToRad(degrees.x);
      joint.rotation.x = THREE.Math.degToRad(degrees.y);
    };

    const getMouseDegrees = (x, y, degreeLimit) => {
      let dx = 0,
          dy = 0,
          xdiff,
          xPercentage,
          ydiff,
          yPercentage;

      const w = { x: window.innerWidth, y: window.innerHeight };

      if (x <= w.x / 2) {
        xdiff = w.x / 2 - x;
        xPercentage = (xdiff / (w.x / 2)) * 100;
        dx = ((degreeLimit * xPercentage) / 100) * -1;
      }
      if (x >= w.x / 2) {
        xdiff = x - w.x / 2;
        xPercentage = (xdiff / (w.x / 2)) * 100;
        dx = (degreeLimit * xPercentage) / 100;
      }

      if (y <= w.y / 2) {
        ydiff = w.y / 2 - y;
        yPercentage = (ydiff / (w.y / 2)) * 100;
        dy = (((degreeLimit * 0.5) * yPercentage) / 100) * -1;
      }

      if (y >= w.y / 2) {
        ydiff = y - w.y / 2;
        yPercentage = (ydiff / (w.y / 2)) * 100;
        dy = (degreeLimit * yPercentage) / 100;
      }

      return { x: dx, y: dy };
    };

    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  }, []);

  return (
    <div>
      <div className="loading" id="js-loader">
        <div className="loader">Loading...</div>
      </div>
      <canvas
        id="c"
        style={{
          position: 'fixed',
          bottom: 0,
          right: 0,
          width: '300px',
          height: '300px',
          border: '1px solid #000',
          backgroundColor: '#000',
        }}
      ></canvas>
    </div>
  );
};

export default ThreeDScene;