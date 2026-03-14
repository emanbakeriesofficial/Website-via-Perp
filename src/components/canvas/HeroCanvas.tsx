'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function ParticleField() {
  const pointsRef = useRef<THREE.Points>(null!);

  const particles = useMemo(() => {
    const count = 2000;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return positions;
  }, []);

  useFrame(({ clock }) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = clock.elapsedTime * 0.02;
      pointsRef.current.rotation.x = Math.sin(clock.elapsedTime * 0.01) * 0.05;
    }
  });

  return (
    <Points ref={pointsRef} positions={particles} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#fbddaf"
        size={0.02}
        sizeAttenuation
        depthWrite={false}
        opacity={0.4}
      />
    </Points>
  );
}

function FloatingRing() {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = clock.elapsedTime * 0.15;
      meshRef.current.rotation.z = clock.elapsedTime * 0.08;
      meshRef.current.position.y = Math.sin(clock.elapsedTime * 0.4) * 0.3;
    }
  });

  return (
    <mesh ref={meshRef}>
      <torusGeometry args={[3, 0.015, 16, 200]} />
      <meshBasicMaterial color="#fbddaf" transparent opacity={0.12} />
    </mesh>
  );
}

function FloatingRing2() {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = -clock.elapsedTime * 0.1;
      meshRef.current.rotation.y = clock.elapsedTime * 0.12;
      meshRef.current.position.y = Math.cos(clock.elapsedTime * 0.3) * 0.2;
    }
  });

  return (
    <mesh ref={meshRef}>
      <torusGeometry args={[4.5, 0.01, 16, 200]} />
      <meshBasicMaterial color="#fbddaf" transparent opacity={0.07} />
    </mesh>
  );
}

export default function HeroCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 70 }}
      gl={{ antialias: true, alpha: true }}
      style={{ background: 'transparent' }}
      dpr={[1, 1.5]}
    >
      <ParticleField />
      <FloatingRing />
      <FloatingRing2 />
      <ambientLight intensity={0.2} />
    </Canvas>
  );
}
