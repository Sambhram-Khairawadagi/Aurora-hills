"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { RotateCw, ZoomIn, ZoomOut, Compass, Sparkles, Layers, Box, Info } from "lucide-react";

interface ThreeMasterPlan3DProps {
  onSelectPlot?: (plotInfo: string) => void;
}

export const ThreeMasterPlan3D: React.FC<ThreeMasterPlan3DProps> = ({ onSelectPlot }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [selectedPlot, setSelectedPlot] = useState<string | null>("Plot #A-01 (1,200 sq.ft 30x40)");

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // 1. Scene & Camera
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xF0F4ED);

    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.set(15, 14, 18);

    // 2. Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);

    // 3. Orbit Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.maxPolarAngle = Math.PI / 2.1;
    controls.minDistance = 6;
    controls.maxDistance = 40;
    controls.target.set(0, 0, 0);

    // 4. Lighting (Fresh Natural Daylight)
    const ambientLight = new THREE.AmbientLight(0xE8F5E9, 1.4);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 1.8);
    dirLight.position.set(20, 30, 15);
    dirLight.castShadow = true;
    dirLight.shadow.mapSize.width = 1024;
    dirLight.shadow.mapSize.height = 1024;
    scene.add(dirLight);

    const softFill = new THREE.DirectionalLight(0x81C784, 0.6);
    softFill.position.set(-15, 10, -15);
    scene.add(softFill);

    // 5. Township Base Ground (Lush Green Grass Lawn)
    const groundGeo = new THREE.PlaneGeometry(24, 24);
    groundGeo.rotateX(-Math.PI / 2);
    const groundMat = new THREE.MeshStandardMaterial({
      color: 0x66BB6A, // Lush Meadow Grass
      roughness: 0.8,
      metalness: 0.05,
    });
    const ground = new THREE.Mesh(groundGeo, groundMat);
    ground.receiveShadow = true;
    scene.add(ground);

    // Grid Floor Overlay
    const grid = new THREE.GridHelper(24, 24, 0x2E7D32, 0xA5D6A7);
    grid.position.y = 0.01;
    scene.add(grid);

    // 6. Roads (High Grade Asphalt Avenues)
    const roadMat = new THREE.MeshStandardMaterial({ color: 0x37474F, roughness: 0.9 });
    
    // Main 40ft Avenue
    const mainRoadGeo = new THREE.PlaneGeometry(2.2, 22);
    mainRoadGeo.rotateX(-Math.PI / 2);
    const mainRoad = new THREE.Mesh(mainRoadGeo, roadMat);
    mainRoad.position.set(0, 0.02, 0);
    mainRoad.receiveShadow = true;
    scene.add(mainRoad);

    // Cross 30ft Roads
    [-6, 0, 6].forEach((zPos) => {
      const crossRoadGeo = new THREE.PlaneGeometry(20, 1.6);
      crossRoadGeo.rotateX(-Math.PI / 2);
      const crossRoad = new THREE.Mesh(crossRoadGeo, roadMat);
      crossRoad.position.set(0, 0.02, zPos);
      crossRoad.receiveShadow = true;
      scene.add(crossRoad);
    });

    // 7. 3D Plots (Demarcated Residential Plots)
    const plotGroup = new THREE.Group();
    const plotMaterials = {
      default: new THREE.MeshStandardMaterial({ color: 0xF5F5F0, roughness: 0.3, metalness: 0.1 }),
      selected: new THREE.MeshStandardMaterial({ color: 0x2E7D32, roughness: 0.2, metalness: 0.4 }),
      corner: new THREE.MeshStandardMaterial({ color: 0xC8E6C9, roughness: 0.3, metalness: 0.1 }),
    };

    const plotMeshes: THREE.Mesh[] = [];
    const plotConfigs = [
      // Left side blocks
      { x: -5, z: -8.5, w: 3.5, d: 2.5, type: "1,200 sq.ft (30x40)", id: "A-01" },
      { x: -5, z: -3.5, w: 3.5, d: 2.5, type: "1,200 sq.ft (30x40)", id: "A-02" },
      { x: -5, z: 2.5, w: 3.5, d: 2.5, type: "1,500 sq.ft (30x50)", id: "B-01" },
      { x: -5, z: 8.5, w: 4.5, d: 3.2, type: "2,400 sq.ft (40x60)", id: "C-Corner" },
      // Right side blocks
      { x: 5, z: -8.5, w: 4.5, d: 3.2, type: "2,400 sq.ft (40x60)", id: "C-01" },
      { x: 5, z: -3.5, w: 3.5, d: 2.5, type: "1,200 sq.ft (30x40)", id: "A-03" },
      { x: 5, z: 2.5, w: 3.5, d: 2.5, type: "1,500 sq.ft (30x50)", id: "B-02" },
      { x: 5, z: 8.5, w: 3.5, d: 2.5, type: "1,200 sq.ft (30x40)", id: "A-04" },
    ];

    plotConfigs.forEach((cfg) => {
      const geo = new THREE.BoxGeometry(cfg.w, 0.4, cfg.d);
      const isCorner = cfg.id.includes("Corner");
      const mesh = new THREE.Mesh(geo, isCorner ? plotMaterials.corner : plotMaterials.default);
      mesh.position.set(cfg.x, 0.2, cfg.z);
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      mesh.userData = { id: cfg.id, type: cfg.type };
      plotGroup.add(mesh);
      plotMeshes.push(mesh);

      // Plot border outline
      const edges = new THREE.EdgesGeometry(geo);
      const line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({ color: 0x81C784 }));
      mesh.add(line);
    });
    scene.add(plotGroup);

    // 8. Central Landscaped Park with Pine Trees
    const parkGeo = new THREE.BoxGeometry(3.5, 0.25, 6);
    const parkMat = new THREE.MeshStandardMaterial({ color: 0x388E3C, roughness: 0.9 });
    const park = new THREE.Mesh(parkGeo, parkMat);
    park.position.set(0, 0.12, 0);
    park.receiveShadow = true;
    scene.add(park);

    // 3D Trees on Park
    const treeGeo = new THREE.ConeGeometry(0.5, 1.2, 5);
    const treeMat = new THREE.MeshStandardMaterial({ color: 0x1B5E20, roughness: 0.8 });
    const trunkGeo = new THREE.CylinderGeometry(0.1, 0.1, 0.4, 5);
    const trunkMat = new THREE.MeshStandardMaterial({ color: 0x5D4037 });

    [
      { x: -0.8, z: -1.5 },
      { x: 0.8, z: -1.0 },
      { x: -0.6, z: 1.2 },
      { x: 0.7, z: 1.8 },
    ].forEach((t) => {
      const tree = new THREE.Mesh(treeGeo, treeMat);
      tree.position.set(t.x, 0.8, t.z);
      tree.castShadow = true;
      const trunk = new THREE.Mesh(trunkGeo, trunkMat);
      trunk.position.set(t.x, 0.3, t.z);
      scene.add(tree);
      scene.add(trunk);
    });

    // 1.5L Water Tank 3D Model
    const tankGeo = new THREE.CylinderGeometry(0.9, 0.9, 1.8, 16);
    const tankMat = new THREE.MeshStandardMaterial({ color: 0x4CAF50, metalness: 0.3, roughness: 0.3 });
    const tank = new THREE.Mesh(tankGeo, tankMat);
    tank.position.set(-9, 1.5, -9);
    tank.castShadow = true;
    scene.add(tank);

    // 9. Raycaster for Interactive Plot Selection
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    const handleClick = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouse.x = ((event.clientX - rect.left) / container.clientWidth) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / container.clientHeight) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(plotMeshes, false);

      if (intersects.length > 0) {
        const hit = intersects[0].object as THREE.Mesh;
        const data = hit.userData;
        if (data && data.id) {
          const info = `Plot #${data.id} (${data.type})`;
          setSelectedPlot(info);
          if (onSelectPlot) onSelectPlot(info);

          // Highlight selected mesh
          plotMeshes.forEach((m) => {
            if (m === hit) {
              m.material = plotMaterials.selected;
              m.position.y = 0.4;
            } else {
              const isCorner = m.userData.id.includes("Corner");
              m.material = isCorner ? plotMaterials.corner : plotMaterials.default;
              m.position.y = 0.2;
            }
          });
        }
      }
    };

    container.addEventListener("click", handleClick);

    // 10. Resize handler
    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener("resize", handleResize);

    // 11. Animation Loop
    let reqId: number;
    const animate = () => {
      reqId = requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      container.removeEventListener("click", handleClick);
      cancelAnimationFrame(reqId);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [onSelectPlot]);

  return (
    <div className="relative w-full h-[450px] sm:h-[550px] rounded-3xl overflow-hidden neu-card border border-white/90 shadow-2xl">
      {/* 3D WebGL Canvas */}
      <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

      {/* 3D HUD Top Toolbar */}
      <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
        <div className="p-3 rounded-2xl neu-glass pointer-events-auto flex items-center gap-2 text-xs font-bold text-forest-950 shadow-md">
          <Box className="w-4 h-4 text-emerald-600" />
          <span>Interactive 3D Master Plan Layout</span>
        </div>

        <div className="p-2 rounded-2xl neu-glass pointer-events-auto flex items-center gap-1 text-[11px] font-semibold text-charcoal-700 shadow-md">
          <RotateCw className="w-3.5 h-3.5 text-emerald-600 animate-spin" style={{ animationDuration: "12s" }} />
          <span>Drag to Orbit / Scroll to Zoom</span>
        </div>
      </div>

      {/* 3D HUD Bottom Plot Inspector */}
      {selectedPlot && (
        <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl neu-glass pointer-events-auto flex flex-wrap items-center justify-between gap-3 shadow-lg border border-emerald-400/40 animate-fade-in">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-emerald-100 text-emerald-700 border border-emerald-300">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-wider font-bold text-emerald-700 block">
                Selected 3D Plot Inspection
              </span>
              <span className="text-sm font-bold text-forest-950 font-serif">
                {selectedPlot}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[11px] text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full border border-emerald-300 font-bold">
              Ready for Booking
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
