"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

// 定数設定
const PARTICLE_COUNT = 2000;
const CONNECTION_DISTANCE = 1.8; // 繋がりやすさを少しアップ
const CONNECTION_DIST_SQ = CONNECTION_DISTANCE * CONNECTION_DISTANCE;
const MAX_CONNECTIONS = 40; // 同時接続数を少し増やす

function SceneContent() {
  const { pointer, viewport } = useThree();

  // パーティクルとラインをまとめるグループ
  const groupRef = useRef<THREE.Group>(null);

  // ラインのジオメトリ参照
  const lineGeoRef = useRef<THREE.BufferGeometry>(null);

  // 1. パーティクル位置データの生成
  const positions = useMemo(() => {
    const coords = new Float32Array(PARTICLE_COUNT * 3);
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = 2 * Math.PI * u;
      const phi = Math.acos(2 * v - 1);
      const r = 1.5 + Math.random() * 2.5; // 半径1.5〜4.0の球殻状に配置
      coords[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      coords[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      coords[i * 3 + 2] = r * Math.cos(phi);
    }
    return coords;
  }, []);

  // 2. ライン描画用のバッファ確保
  const maxVertexCount = MAX_CONNECTIONS * 2;
  const linePositions = useMemo(() => new Float32Array(maxVertexCount * 3), [maxVertexCount]);

  // 計算用の一時変数をRefで保持（GC対策：毎フレームnewしないため）
  const tempMatrix = useRef(new THREE.Matrix4());
  const tempMouseLocal = useRef(new THREE.Vector3());

  useFrame((state, delta) => {
    const group = groupRef.current;
    if (!group) return;

    // --- A. アニメーション（回転） ---
    // パーティクル全体をゆっくり回す
    group.rotation.x -= delta / 25;
    group.rotation.y -= delta / 30;

    // 重要：回転させた結果（行列）を最新状態に更新
    group.updateMatrixWorld();

    // --- B. マウス座標の計算 ---
    // 1. マウスのワールド座標（画面上の見た目の位置）を取得
    const mouseX = (pointer.x * viewport.width) / 2;
    const mouseY = (pointer.y * viewport.height) / 2;
    const mouseZ = 0;

    // 2. マウス位置を「回転しているグループの内部座標（ローカル）」に変換
    // これにより、回転していても正しい距離判定が可能になる
    tempMouseLocal.current.set(mouseX, mouseY, mouseZ);

    // グループのワールド行列の「逆行列」を計算し、マウス座標に適用
    tempMatrix.current.copy(group.matrixWorld).invert();
    tempMouseLocal.current.applyMatrix4(tempMatrix.current);

    const localMouseX = tempMouseLocal.current.x;
    const localMouseY = tempMouseLocal.current.y;
    const localMouseZ = tempMouseLocal.current.z;

    // --- C. 距離判定とライン生成 ---
    let vertexIndex = 0;

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      // 最大本数を超えたら終了
      if (vertexIndex >= maxVertexCount * 3) break;

      const px = positions[i * 3];
      const py = positions[i * 3 + 1];
      const pz = positions[i * 3 + 2];

      // 簡易カリング：マウスから遠すぎるZ座標の点は計算スキップ（最適化）
      if (Math.abs(pz - localMouseZ) > CONNECTION_DISTANCE) continue;

      // 距離の2乗を計算
      const dx = px - localMouseX;
      const dy = py - localMouseY;
      const dz = pz - localMouseZ;
      const distSq = dx * dx + dy * dy + dz * dz;

      // 範囲内ならラインを結ぶ
      if (distSq < CONNECTION_DIST_SQ) {
        // 始点：マウス位置（ローカル）
        linePositions[vertexIndex++] = localMouseX;
        linePositions[vertexIndex++] = localMouseY;
        linePositions[vertexIndex++] = localMouseZ;

        // 終点：パーティクル位置（ローカル）
        linePositions[vertexIndex++] = px;
        linePositions[vertexIndex++] = py;
        linePositions[vertexIndex++] = pz;
      }
    }

    // --- D. 描画更新 ---
    if (lineGeoRef.current) {
      lineGeoRef.current.attributes.position.needsUpdate = true;
      // 実際に線がある部分だけを描画するように範囲指定
      lineGeoRef.current.setDrawRange(0, vertexIndex / 3);
    }
  });

  return (
    <group ref={groupRef} rotation={[0, 0, Math.PI / 4]}>
      {/* パーティクル本体 */}
      <Points positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#06b6d4" // Cyan-500
          size={0.02}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>

      {/* マウスとの接続ライン */}
      <lineSegments>
        <bufferGeometry ref={lineGeoRef}>
          <bufferAttribute
            attach="attributes-position"
            count={maxVertexCount}
            array={linePositions}
            itemSize={3}
            usage={THREE.DynamicDrawUsage}
          />
        </bufferGeometry>
        <lineBasicMaterial
          color="#22d3ee" // Cyan-400
          transparent
          opacity={0.5}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </lineSegments>
    </group>
  );
}
// components/ThreeBackground.tsx の最後の方
export default function ThreeBackground() {
  return (
    // 変更点: "-z-10" を削除し、"z-0" に変更
    // これにより、親要素の背景に隠れず、マウスイベントを受け取れるようになります
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