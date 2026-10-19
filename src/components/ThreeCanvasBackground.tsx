import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const ThreeCanvasBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef({ target: 0, current: 0 });
  const mouseRef = useRef({ targetX: 0, targetY: 0, currentX: 0, currentY: 0 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x06070a, 0.035);

    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    camera.position.z = 16;
    camera.position.y = 0;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // Group to hold all 3D objects for scroll and mouse rotation
    const worldGroup = new THREE.Group();
    scene.add(worldGroup);

    // 1. NEURAL CORE (Outer Icosahedron Wireframe)
    const icoGeometry = new THREE.IcosahedronGeometry(3.2, 1);
    const icoMaterial = new THREE.MeshBasicMaterial({
      color: 0x8b5cf6,
      wireframe: true,
      transparent: true,
      opacity: 0.28,
    });
    const icoMesh = new THREE.Mesh(icoGeometry, icoMaterial);
    worldGroup.add(icoMesh);

    // Inner Glowing Polyhedron
    const innerGeometry = new THREE.OctahedronGeometry(1.8, 0);
    const innerMaterial = new THREE.MeshBasicMaterial({
      color: 0x06b6d4,
      wireframe: true,
      transparent: true,
      opacity: 0.5,
    });
    const innerMesh = new THREE.Mesh(innerGeometry, innerMaterial);
    worldGroup.add(innerMesh);

    // Center Core Light Point
    const corePointGeo = new THREE.SphereGeometry(0.5, 16, 16);
    const corePointMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.8,
    });
    const corePoint = new THREE.Mesh(corePointGeo, corePointMat);
    worldGroup.add(corePoint);

    // 2. CONCENTRIC CYBERNETIC GIMBAL RINGS
    const createRing = (radius: number, tube: number, color: number, rotX: number, rotY: number) => {
      const ringGeo = new THREE.TorusGeometry(radius, tube, 16, 80);
      const ringMat = new THREE.MeshBasicMaterial({
        color,
        transparent: true,
        opacity: 0.35,
        wireframe: true,
      });
      const ringMesh = new THREE.Mesh(ringGeo, ringMat);
      ringMesh.rotation.x = rotX;
      ringMesh.rotation.y = rotY;
      worldGroup.add(ringMesh);
      return ringMesh;
    };

    const ring1 = createRing(5.2, 0.035, 0x06b6d4, Math.PI / 3, 0);
    const ring2 = createRing(6.8, 0.03, 0x8b5cf6, -Math.PI / 4, Math.PI / 6);
    const ring3 = createRing(8.4, 0.025, 0x38bdf8, Math.PI / 6, -Math.PI / 3);

    // 3. 3D PARTICLE NEBULA
    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? 450 : 950;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const palette = [
      new THREE.Color(0x8b5cf6), // Violet
      new THREE.Color(0x06b6d4), // Cyan
      new THREE.Color(0x38bdf8), // Sky
      new THREE.Color(0x10b981), // Emerald
    ];

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      const radius = 6 + Math.random() * 26;
      const theta = Math.random() * Math.PI * 2;
      const phi = (Math.random() - 0.5) * Math.PI;

      positions[i3] = radius * Math.cos(phi) * Math.sin(theta);
      positions[i3 + 1] = (Math.random() - 0.5) * 45;
      positions[i3 + 2] = radius * Math.sin(phi) - 4;

      const color = palette[Math.floor(Math.random() * palette.length)];
      colors[i3] = color.r;
      colors[i3 + 1] = color.g;
      colors[i3 + 2] = color.b;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: isMobile ? 0.12 : 0.16,
      vertexColors: true,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // Listeners
    const handleScroll = () => {
      const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      scrollRef.current.target = window.scrollY / maxScroll;
    };

    const handleMouseMove = (e: MouseEvent) => {
      const normalizedX = (e.clientX / window.innerWidth) * 2 - 1;
      const normalizedY = -(e.clientY / window.innerHeight) * 2 + 1;
      mouseRef.current.targetX = normalizedX * 0.45;
      mouseRef.current.targetY = normalizedY * 0.45;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        const normalizedX = (touch.clientX / window.innerWidth) * 2 - 1;
        const normalizedY = -(touch.clientY / window.innerHeight) * 2 + 1;
        mouseRef.current.targetX = normalizedX * 0.25;
        mouseRef.current.targetY = normalizedY * 0.25;
      }
    };

    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('resize', handleResize);

    handleScroll();

    // Animation Loop
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      scrollRef.current.current += (scrollRef.current.target - scrollRef.current.current) * 0.08;
      mouseRef.current.currentX += (mouseRef.current.targetX - mouseRef.current.currentX) * 0.05;
      mouseRef.current.currentY += (mouseRef.current.targetY - mouseRef.current.currentY) * 0.05;

      const scrollProg = scrollRef.current.current;
      const mouseX = mouseRef.current.currentX;
      const mouseY = mouseRef.current.currentY;

      if (!prefersReducedMotion) {
        icoMesh.rotation.x = elapsedTime * 0.15 + scrollProg * Math.PI * 2;
        icoMesh.rotation.y = elapsedTime * 0.25 + scrollProg * Math.PI * 3;

        innerMesh.rotation.x = -elapsedTime * 0.3 + scrollProg * Math.PI * 2.5;
        innerMesh.rotation.y = -elapsedTime * 0.2 + scrollProg * Math.PI * 1.5;

        ring1.rotation.z = elapsedTime * 0.2 + scrollProg * Math.PI;
        ring1.rotation.y = Math.sin(elapsedTime * 0.3) * 0.3;

        ring2.rotation.z = -elapsedTime * 0.25 - scrollProg * Math.PI * 1.4;
        ring2.rotation.x = Math.cos(elapsedTime * 0.25) * 0.35;

        ring3.rotation.z = elapsedTime * 0.15 + scrollProg * Math.PI * 0.8;

        const pulse = 1 + Math.sin(elapsedTime * 2) * 0.04;
        corePoint.scale.set(pulse, pulse, pulse);

        particles.rotation.y = elapsedTime * 0.03 + scrollProg * 0.5;
        particles.position.y = (scrollProg - 0.5) * 12;

        worldGroup.rotation.y = mouseX;
        worldGroup.rotation.x = -mouseY;

        camera.position.x = mouseX * 2.5;
        camera.position.y = mouseY * 2.5 - scrollProg * 2;
        camera.lookAt(0, -scrollProg * 2, 0);
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('resize', handleResize);

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }

      icoGeometry.dispose();
      icoMaterial.dispose();
      innerGeometry.dispose();
      innerMaterial.dispose();
      corePointGeo.dispose();
      corePointMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 0,
        opacity: 0.65,
        overflow: 'hidden',
      }}
      aria-hidden="true"
    />
  );
};
