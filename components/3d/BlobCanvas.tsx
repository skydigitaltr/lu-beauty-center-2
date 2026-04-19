"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

function OrganicBlob() {
  const meshRef = useRef<THREE.Mesh>(null);
  const { mouse } = useThree();

  // Create a smooth, organic geometry using a sphere with custom noise
  const geometry = useMemo(() => {
    const geo = new THREE.SphereGeometry(1.4, 128, 128);
    const positions = geo.attributes.position;
    const count = positions.count;
    const originalPositions = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      originalPositions[i * 3] = positions.getX(i);
      originalPositions[i * 3 + 1] = positions.getY(i);
      originalPositions[i * 3 + 2] = positions.getZ(i);
    }

    geo.setAttribute(
      "originalPosition",
      new THREE.BufferAttribute(originalPositions, 3)
    );

    return geo;
  }, []);

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    const t = clock.getElapsedTime();

    // Gentle floating rotation
    meshRef.current.rotation.x = Math.sin(t * 0.25) * 0.08 + mouse.y * 0.04;
    meshRef.current.rotation.y = t * 0.12 + mouse.x * 0.04;
    meshRef.current.rotation.z = Math.cos(t * 0.18) * 0.05;

    // Organic morphing via vertex displacement
    const positions = meshRef.current.geometry.attributes.position;
    const origPos = meshRef.current.geometry.attributes.originalPosition;
    const count = positions.count;

    for (let i = 0; i < count; i++) {
      const ox = origPos.getX(i);
      const oy = origPos.getY(i);
      const oz = origPos.getZ(i);

      const noise =
        Math.sin(ox * 2.2 + t * 0.7) * 0.07 +
        Math.sin(oy * 2.8 + t * 0.5) * 0.06 +
        Math.cos(oz * 1.9 + t * 0.6) * 0.05 +
        Math.sin((ox + oy) * 1.5 + t * 0.4) * 0.04;

      const len = Math.sqrt(ox * ox + oy * oy + oz * oz);
      const scale = (len + noise) / len;

      positions.setXYZ(i, ox * scale, oy * scale, oz * scale);
    }

    positions.needsUpdate = true;
    meshRef.current.geometry.computeVertexNormals();
  });

  return (
    <mesh ref={meshRef} geometry={geometry}>
      <meshPhysicalMaterial
        color="#e8bfa5"
        roughness={0.15}
        metalness={0.05}
        transmission={0.2}
        thickness={0.5}
        envMapIntensity={0.8}
        clearcoat={0.6}
        clearcoatRoughness={0.2}
      />
    </mesh>
  );
}

function Scene() {
  return (
    <>
      {/* Ambient light */}
      <ambientLight intensity={0.8} color="#fdf8f5" />

      {/* Key light - warm champagne */}
      <directionalLight
        position={[4, 6, 3]}
        intensity={1.2}
        color="#f5e0cc"
      />

      {/* Fill light - soft rose */}
      <directionalLight
        position={[-3, 2, -2]}
        intensity={0.5}
        color="#f8d4d4"
      />

      {/* Rim light */}
      <directionalLight
        position={[0, -4, -3]}
        intensity={0.3}
        color="#faedc6"
      />

      <OrganicBlob />
    </>
  );
}

export default function BlobCanvas() {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 3.5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 1.5]}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
