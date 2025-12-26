"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

const PARTICLE_COUNT = 2000;
const CONNECTION_DISTANCE = 1.8;
const CONNECTION_DIST_SQ = CONNECTION_DISTANCE * CONNECTION_DISTANCE;
const MAX_CONNECTIONS = 40;

function SceneContent() {
  const { pointer, viewport } = useThree();
  const groupRef = useRef<THREE.Group>(null);
  const lineGeoRef = useRef<THREE.BufferGeometry>(null);

  const positions = useMemo(() => {
    const coords = new Float32Array(PARTICLE_COUNT * 3);
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = 2 * Math.PI * u;
      const phi = Math.acos(2 * v - 1);
      const r = 1.5 + Math.random() * 2.5;
      coords[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      coords[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      coords[i * 3 + 2] = r * Math.cos(phi);
    }
    return coords;
  }, []);

  const maxVertexCount = MAX_CONNECTIONS * 2;
  const linePositions = useMemo(() => new Float32Array(maxVertexCount * 3), [maxVertexCount]);

  const tempMatrix = useRef(new THREE.Matrix4());
  const tempMouseLocal = useRef(new THREE.Vector3());

  useFrame((state, delta) => {
    const group = groupRef.current;
    if (!group) return;

    group.rotation.x -= delta / 25;
    group.rotation.y -= delta / 30;
    group.updateMatrixWorld();

    const mouseX = (pointer.x * viewport.width) / 2;
    const mouseY = (pointer.y * viewport.height) / 2;
    const mouseZ = 0;

    tempMouseLocal.current.set(mouseX, mouseY, mouseZ);
    tempMatrix.current.copy(group.matrixWorld).invert();
    tempMouseLocal.current.applyMatrix4(tempMatrix.current);

    const localMouseX = tempMouseLocal.current.x;
    const localMouseY = tempMouseLocal.current.y;
    const localMouseZ = tempMouseLocal.current.z;

    let vertexIndex = 0;

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      if (vertexIndex >= maxVertexCount * 3) break;

      const px = positions[i * 3];
      const py = positions[i * 3 + 1];
      const pz = positions[i * 3 + 2];

      if (Math.abs(pz - localMouseZ) > CONNECTION_DISTANCE) continue;

      const dx = px - localMouseX;
      const dy = py - localMouseY;
      const dz = pz - localMouseZ;
      const distSq = dx * dx + dy * dy + dz * dz;

      if (distSq < CONNECTION_DIST_SQ) {
        linePositions[vertexIndex++] = localMouseX;
        linePositions[vertexIndex++] = localMouseY;
        linePositions[vertexIndex++] = localMouseZ;
        linePositions[vertexIndex++] = px;
        linePositions[vertexIndex++] = py;
        linePositions[vertexIndex++] = pz;
      }
    }

    if (lineGeoRef.current) {
      lineGeoRef.current.attributes.position.needsUpdate = true;
      lineGeoRef.current.setDrawRange(0, vertexIndex / 3);
    }
  });

  return (
    <group ref={groupRef} rotation={[0, 0, Math.PI / 4]}>
      <Points positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#06b6d4"
          size={0.02}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>

      <lineSegments>
        <bufferGeometry ref={lineGeoRef}>
          <bufferAttribute
            attach="attributes-position"
            count={maxVertexCount}
            args={[linePositions, 3]}
            usage={THREE.DynamicDrawUsage}
          />
        </bufferGeometry>
        <lineBasicMaterial
          color="#22d3ee"
          transparent
          opacity={0.5}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </lineSegments>
    </group>
  );
}

export default function ThreeBackground() {
  return (
    <div className="absolute inset-0 z-0 bg-[#0B1120]">
      <div className="absolute inset-0">
        <Canvas camera={{ position: [0, 0, 3], fov: 60 }}>
          <color attach="background" args={['#0B1120']} />
          <SceneContent />
        </Canvas>
      </div>
    </div>
  );
}