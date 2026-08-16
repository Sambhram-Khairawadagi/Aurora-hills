"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export const ThreeScene: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // 1. Scene & Camera Setup
    const scene = new THREE.Scene();
    // Soft atmospheric mist matching the cream-green background
    scene.fog = new THREE.FogExp2(0xF7F9F6, 0.038);

    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 4, 12);
    camera.lookAt(0, 0, 0);

    // 2. Renderer
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);

    // 3. Lighting (Fresh Morning Natural Sunlight)
    const ambientLight = new THREE.AmbientLight(0xE8F5E9, 1.4);
    scene.add(ambientLight);

    const sunLight = new THREE.DirectionalLight(0x81C784, 1.8);
    sunLight.position.set(10, 18, 8);
    sunLight.castShadow = true;
    scene.add(sunLight);

    const fillLight = new THREE.DirectionalLight(0x2E7D32, 1.0);
    fillLight.position.set(-10, 10, -5);
    scene.add(fillLight);

    // 4. 3D Terrain Geometry (Lush Rolling Grass Hills of Dharwad)
    const terrainGeo = new THREE.PlaneGeometry(36, 36, 72, 72);
    terrainGeo.rotateX(-Math.PI / 2);

    const pos = terrainGeo.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const z = pos.getZ(i);
      // Natural rolling hill elevation
      const y =
        Math.sin(x * 0.22) * Math.cos(z * 0.22) * 2.0 +
        Math.sin(x * 0.55) * 0.35 +
        Math.cos(z * 0.45) * 0.35;
      pos.setY(i, y - 2.8);
    }
    terrainGeo.computeVertexNormals();

    // 3D Terrain Material (Lush Meadow Crayon Green)
    const terrainMat = new THREE.MeshStandardMaterial({
      color: 0x66BB6A, // Vibrant Meadow Green
      roughness: 0.8,
      metalness: 0.05,
      flatShading: true,
    });
    const terrainMesh = new THREE.Mesh(terrainGeo, terrainMat);
    terrainMesh.receiveShadow = true;
    scene.add(terrainMesh);

    // 3D Topographic Contour Wireframe (Soft Emerald Lines)
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0x2E7D32,
      wireframe: true,
      transparent: true,
      opacity: 0.18,
    });
    const wireMesh = new THREE.Mesh(terrainGeo, wireMat);
    wireMesh.position.y += 0.03;
    scene.add(wireMesh);

    // 5. Floating 3D Luminous Emerald & Jade Nodes
    const landmarkGroup = new THREE.Group();
    const polyGeo = new THREE.IcosahedronGeometry(0.38, 0);
    const polyMat = new THREE.MeshStandardMaterial({
      color: 0x2E7D32,
      roughness: 0.2,
      metalness: 0.6,
    });

    const landmarks: THREE.Mesh[] = [];
    const coords = [
      { x: -4, y: 0.6, z: 2 },
      { x: 3.5, y: 1.3, z: -1 },
      { x: -2.5, y: 1.9, z: -4 },
      { x: 5, y: 0.3, z: 3 },
      { x: 0, y: 2.1, z: -2 },
      { x: -5, y: -0.4, z: 0 },
    ];

    coords.forEach((c) => {
      const mesh = new THREE.Mesh(polyGeo, polyMat);
      mesh.position.set(c.x, c.y, c.z);
      mesh.castShadow = true;
      landmarkGroup.add(mesh);
      landmarks.push(mesh);
    });
    scene.add(landmarkGroup);

    // 6. Scattered Low-Poly 3D Pine/Palm Trees on Terrain
    const treeGeo = new THREE.ConeGeometry(0.25, 0.7, 5);
    const treeMat = new THREE.MeshStandardMaterial({ color: 0x1B5E20, roughness: 0.9 });
    const trunkGeo = new THREE.CylinderGeometry(0.05, 0.05, 0.25, 5);
    const trunkMat = new THREE.MeshStandardMaterial({ color: 0x5D4037 });

    const treePositions = [
      { x: -2, z: 1 }, { x: 1.5, z: -2 }, { x: -3.5, z: -1 }, { x: 3, z: 2 },
      { x: -1, z: 3 }, { x: 4, z: -3 }, { x: -4, z: 2 }, { x: 2, z: 3.5 }
    ];

    treePositions.forEach((tp) => {
      const tree = new THREE.Mesh(treeGeo, treeMat);
      tree.position.set(tp.x, -0.6, tp.z);
      tree.castShadow = true;
      const trunk = new THREE.Mesh(trunkGeo, trunkMat);
      trunk.position.set(tp.x, -0.9, tp.z);
      scene.add(tree);
      scene.add(trunk);
    });

    // 7. Interactive Mouse Tracking
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const windowHalfX = window.innerWidth / 2;
      const windowHalfY = window.innerHeight / 2;
      mouseX = (e.clientX - windowHalfX) * 0.0006;
      mouseY = (e.clientY - windowHalfY) * 0.0006;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // 8. Resize Handler
    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener("resize", handleResize);

    // 9. Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth camera parallax
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      camera.position.x = Math.sin(targetX * 5) * 12;
      camera.position.z = Math.cos(targetX * 5) * 12;
      camera.position.y = 4 + targetY * 4;
      camera.lookAt(0, -0.5, 0);

      // Rotate terrain slowly
      terrainMesh.rotation.y = elapsedTime * 0.02;
      wireMesh.rotation.y = elapsedTime * 0.02;

      // Animate floating landmarks
      landmarks.forEach((mesh, index) => {
        mesh.rotation.x = elapsedTime * 0.5 + index;
        mesh.rotation.y = elapsedTime * 0.7 + index;
        mesh.position.y += Math.sin(elapsedTime * 1.5 + index) * 0.003;
      });

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      terrainGeo.dispose();
      terrainMat.dispose();
      wireMat.dispose();
      polyGeo.dispose();
      polyMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-85"
    />
  );
};
