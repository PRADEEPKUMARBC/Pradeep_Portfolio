"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

// Floating geometric core with dual layers: inner metallic faceted core + outer wireframe cage + orbital ring
function FloatingGeometricCore() {
  const outerRef = useRef<THREE.Mesh>(null);
  const innerRef = useRef<THREE.Mesh>(null);
  const ringRef1 = useRef<THREE.Mesh>(null);
  const ringRef2 = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);

  // Gentle pointer tracking
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const { pointer } = state;

    if (groupRef.current) {
      // Gentle floating elevation
      groupRef.current.position.y = Math.sin(time * 0.8) * 0.15;
      
      // Smooth lerp towards pointer position
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        pointer.x * 0.4 + time * 0.12,
        0.05
      );
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        -pointer.y * 0.3 + Math.sin(time * 0.5) * 0.1,
        0.05
      );
    }

    if (innerRef.current) {
      innerRef.current.rotation.y = -time * 0.2;
      innerRef.current.rotation.x = time * 0.15;
    }

    if (ringRef1.current) {
      ringRef1.current.rotation.z = time * 0.25;
      ringRef1.current.rotation.x = Math.PI / 3 + Math.sin(time * 0.3) * 0.1;
    }

    if (ringRef2.current) {
      ringRef2.current.rotation.y = -time * 0.18;
      ringRef2.current.rotation.z = Math.PI / 4 + Math.cos(time * 0.2) * 0.15;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* Central Solid Polyhedron */}
      <mesh ref={innerRef}>
        <icosahedronGeometry args={[1.3, 1]} />
        <meshStandardMaterial
          color="#1e293b"
          roughness={0.2}
          metalness={0.85}
          wireframe={false}
          flatShading={true}
        />
      </mesh>

      {/* Outer Wireframe Hull with Cyan Accent */}
      <mesh ref={outerRef} scale={1.55}>
        <icosahedronGeometry args={[1, 1]} />
        <meshBasicMaterial
          color="#38bdf8"
          wireframe={true}
          transparent={true}
          opacity={0.35}
        />
      </mesh>

      {/* Primary Luminous Orbital Ring */}
      <mesh ref={ringRef1} scale={2.2}>
        <torusGeometry args={[1, 0.015, 16, 100]} />
        <meshBasicMaterial color="#60a5fa" transparent opacity={0.6} />
      </mesh>

      {/* Secondary Orbital Ring */}
      <mesh ref={ringRef2} scale={2.5}>
        <torusGeometry args={[1, 0.01, 16, 100]} />
        <meshBasicMaterial color="#a78bfa" transparent opacity={0.4} />
      </mesh>
    </group>
  );
}

// Particle field around the 3D core
function Particles({ count = 80 }: { count?: number }) {
  const points = useMemo(() => {
    const coords = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const radius = 3 + Math.random() * 3.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      coords[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      coords[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      coords[i * 3 + 2] = radius * Math.cos(phi);
    }
    return coords;
  }, [count]);

  const pointsRef = useRef<THREE.Points>(null);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.03;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={points}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        color="#67e8f9"
        transparent
        opacity={0.5}
        sizeAttenuation={true}
      />
    </points>
  );
}

export default function GeometricOrbScene() {
  return (
    <div className="w-full h-full relative">
      <Canvas
        camera={{ position: [0, 0, 5.5], fov: 45 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        dpr={[1, 1.5]}
        className="cursor-grab active:cursor-grabbing"
      >
        <ambientLight intensity={0.7} />
        {/* Key Light - Electric Blue */}
        <directionalLight position={[5, 5, 5]} intensity={1.5} color="#60a5fa" />
        {/* Rim Light - Soft Violet */}
        <directionalLight position={[-5, -3, -4]} intensity={1.2} color="#a78bfa" />
        {/* Cyan Accent Fill Light */}
        <pointLight position={[0, -2, 2]} intensity={1.0} color="#38bdf8" />

        <FloatingGeometricCore />
        <Particles count={75} />
      </Canvas>
    </div>
  );
}
