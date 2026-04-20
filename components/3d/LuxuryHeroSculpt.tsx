'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, MeshTransmissionMaterial } from '@react-three/drei';
import { Suspense, useEffect, useMemo, useRef } from 'react';
import * as THREE from 'three';

function createSculptGeometry() {
  const profile: THREE.Vector2[] = [];

  for (let i = 0; i <= 90; i += 1) {
    const t = i / 90;
    const y = -1.5 + t * 3.05;

    const base = 0.42 + Math.sin(t * Math.PI) * 0.52;
    const upperLift = Math.exp(-Math.pow((t - 0.76) / 0.18, 2)) * 0.18;
    const lowerTension = Math.exp(-Math.pow((t - 0.2) / 0.17, 2)) * 0.1;
    const waist = Math.exp(-Math.pow((t - 0.5) / 0.16, 2)) * 0.2;
    const taperTop = Math.pow(t, 3) * 0.12;

    const radius = Math.max(0.12, base + upperLift + lowerTension - waist - taperTop);
    profile.push(new THREE.Vector2(radius, y));
  }

  const geometry = new THREE.LatheGeometry(profile, 220);
  const position = geometry.attributes.position;
  const vertex = new THREE.Vector3();
  const normal = new THREE.Vector3();

  for (let i = 0; i < position.count; i += 1) {
    vertex.fromBufferAttribute(position, i);

    const y01 = (vertex.y + 1.5) / 3.05;
    const angle = Math.atan2(vertex.z, vertex.x);
    const radial = Math.sqrt(vertex.x * vertex.x + vertex.z * vertex.z);

    const verticalWave = Math.sin(y01 * Math.PI * 2.1 + angle * 1.7) * 0.04;
    const spiralFold = Math.sin(angle * 2.0 - y01 * 6.4) * 0.055;
    const petalBias = Math.cos(angle * 3.0 + y01 * 3.2) * 0.03;

    const sculptScale = 1 + verticalWave + spiralFold + petalBias;
    vertex.x *= sculptScale;
    vertex.z *= sculptScale;

    const leanX = Math.sin(y01 * Math.PI * 1.1) * 0.1;
    const leanZ = Math.cos(y01 * Math.PI * 1.3) * 0.06;
    vertex.x += leanX * (0.25 + radial * 0.18);
    vertex.z += leanZ * (0.2 + radial * 0.15);

    position.setXYZ(i, vertex.x, vertex.y, vertex.z);
  }

  geometry.computeVertexNormals();

  const normals = geometry.attributes.normal;
  for (let i = 0; i < normals.count; i += 1) {
    normal.fromBufferAttribute(normals, i).normalize();
    normals.setXYZ(i, normal.x, normal.y, normal.z);
  }

  return geometry;
}

function SculptMesh() {
  const groupRef = useRef<THREE.Group>(null);
  const meshRef = useRef<THREE.Mesh>(null);
  const basePositions = useRef<Float32Array | null>(null);

  const geometry = useMemo(() => createSculptGeometry(), []);

  useEffect(() => {
    basePositions.current = Float32Array.from(
      geometry.attributes.position.array as ArrayLike<number>
    );

    return () => {
      geometry.dispose();
    };
  }, [geometry]);

  useFrame((state) => {
    const group = groupRef.current;
    const mesh = meshRef.current;
    const base = basePositions.current;

    if (!group || !mesh || !base) return;

    const t = state.clock.getElapsedTime();

    const pointerY = THREE.MathUtils.damp(
      group.rotation.y,
      state.pointer.x * 0.12,
      3,
      state.clock.getDelta()
    );

    const pointerZ = THREE.MathUtils.damp(
      group.rotation.z,
      state.pointer.y * 0.05,
      3,
      state.clock.getDelta()
    );

    group.rotation.y = pointerY + Math.sin(t * 0.16) * 0.12;
    group.rotation.x = -0.16 + Math.cos(t * 0.14) * 0.025;
    group.rotation.z = pointerZ - 0.08;
    group.position.y = Math.sin(t * 0.32) * 0.05;

    const positions = geometry.attributes.position;
    const temp = new THREE.Vector3();

    for (let i = 0; i < positions.count; i += 1) {
      const index = i * 3;
      temp.set(base[index], base[index + 1], base[index + 2]);

      const y01 = (temp.y + 1.5) / 3.05;
      const angle = Math.atan2(temp.z, temp.x);
      const pulse = Math.sin(t * 0.55 + y01 * 5.6 + angle * 1.8) * 0.012;
      const veil = Math.cos(t * 0.35 - y01 * 4.3 + angle * 2.4) * 0.008;
      const scale = 1 + pulse + veil;

      temp.x *= scale;
      temp.z *= scale;

      positions.setXYZ(i, temp.x, temp.y, temp.z);
    }

    positions.needsUpdate = true;
    geometry.computeVertexNormals();
  });

  return (
    <group ref={groupRef} position={[0.32, -0.06, 0]}>
      <mesh ref={meshRef} geometry={geometry} scale={[1.02, 1.12, 1.02]}>
        <MeshTransmissionMaterial
          transmission={1}
          thickness={0.85}
          roughness={0.08}
          ior={1.18}
          chromaticAberration={0.012}
          anisotropy={0.25}
          distortion={0.08}
          distortionScale={0.14}
          temporalDistortion={0.06}
          samples={8}
          resolution={256}
          backside
          transparent
          opacity={0.96}
          attenuationColor="#f3d8cf"
          attenuationDistance={1.15}
          color="#fff6f2"
        />
      </mesh>
    </group>
  );
}

export default function LuxuryHeroSculpt() {
  return (
    <div className="relative h-[460px] w-full overflow-hidden rounded-[2.25rem] border border-white/70 bg-[radial-gradient(circle_at_22%_18%,rgba(255,255,255,0.95),transparent_34%),radial-gradient(circle_at_70%_34%,rgba(236,205,198,0.3),transparent_30%),radial-gradient(circle_at_62%_76%,rgba(217,193,163,0.22),transparent_28%),linear-gradient(145deg,#fffefd_0%,#fcf3ef_52%,#f5e7de_100%)] shadow-[0_30px_100px_rgba(107,82,74,0.13)] md:h-[620px]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_72%_50%,rgba(255,255,255,0.34),transparent_18%),radial-gradient(circle_at_50%_55%,rgba(255,244,239,0.58),transparent_24%),linear-gradient(180deg,rgba(255,255,255,0.16),rgba(255,255,255,0))]" />
      <div className="pointer-events-none absolute inset-y-[12%] left-[8%] w-[32%] rounded-full bg-white/40 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[10%] right-[10%] h-28 w-28 rounded-full border border-white/40 bg-white/20 blur-2xl" />

      <Canvas
        dpr={[1, 1.6]}
        camera={{ position: [0, 0.15, 5.4], fov: 28 }}
        gl={{ antialias: true, alpha: true }}
      >
        <fog attach="fog" args={['#fff7f3', 7.2, 12]} />
        <Suspense fallback={null}>
          <ambientLight intensity={0.55} color="#fff3ee" />
          <directionalLight position={[3.8, 3.6, 4.5]} intensity={1.6} color="#f6ddcf" />
          <directionalLight position={[-3.5, 1.4, 2.8]} intensity={0.8} color="#fff1ea" />
          <pointLight position={[2.8, -1.8, 2.4]} intensity={0.55} color="#e9c0b3" />
          <spotLight
            position={[-4, 3.5, 5]}
            angle={0.4}
            penumbra={1}
            intensity={1.1}
            color="#ffe5d8"
          />
          <SculptMesh />
          <Environment preset="studio" />
        </Suspense>
      </Canvas>
    </div>
  );
}
