import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const SPACING = 7;
const STAGE_COUNT = 7;

type ProgressRef = React.RefObject<number>;

function clamp01(v: number) {
  return Math.min(1, Math.max(0, v));
}

// --- Stage 0: Data Sources -------------------------------------------------
function SourcesStage({ seg, x }: { seg: React.RefObject<number>; x: number }) {
  const group = useRef<THREE.Group>(null);
  const shapes = useMemo(
    () => [
      { pos: [-1.6, 1, 0], color: "#22d3ee", kind: "cylinder" },
      { pos: [-0.5, -0.8, 0.6], color: "#3b82f6", kind: "sphere" },
      { pos: [0.8, 0.9, -0.4], color: "#8b5cf6", kind: "box" },
      { pos: [1.8, -0.6, 0.2], color: "#22d3ee", kind: "box" },
      { pos: [0.2, 1.8, 0.3], color: "#3b82f6", kind: "sphere" },
    ],
    []
  );
  useFrame(() => {
    if (!group.current) return;
    const s = seg.current;
    group.current.scale.setScalar(0.6 + s * 0.4);
    group.current.children.forEach((c, i) => {
      c.position.y += Math.sin(Date.now() * 0.001 + i) * 0.0003;
      (c as THREE.Mesh).material &&
        (((c as THREE.Mesh).material as THREE.MeshStandardMaterial).opacity = 0.25 + s * 0.75);
    });
  });
  return (
    <group ref={group} position={[x, 0, 0]}>
      {shapes.map((s, i) => (
        <mesh key={i} position={s.pos as [number, number, number]}>
          {s.kind === "cylinder" && <cylinderGeometry args={[0.35, 0.35, 0.9, 16]} />}
          {s.kind === "sphere" && <sphereGeometry args={[0.4, 16, 16]} />}
          {s.kind === "box" && <boxGeometry args={[0.6, 0.6, 0.6]} />}
          <meshStandardMaterial color={s.color} emissive={s.color} emissiveIntensity={0.5} transparent opacity={0.9} />
        </mesh>
      ))}
    </group>
  );
}

// --- Stage 1: Ingestion -----------------------------------------------------
function IngestionStage({ seg, x }: { seg: React.RefObject<number>; x: number }) {
  const group = useRef<THREE.Group>(null);
  const particles = useRef<THREE.Points>(null);
  const COUNT = 60;
  const base = useMemo(() => {
    const arr = new Float32Array(COUNT * 3);
    for (let i = 0; i < COUNT; i++) {
      arr[i * 3] = Math.random() * SPACING - SPACING / 2;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 1.2;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 0.6;
    }
    return arr;
  }, []);

  useFrame((state) => {
    if (!group.current) return;
    const s = seg.current;
    group.current.scale.setScalar(0.7 + s * 0.3);
    if (particles.current) {
      const t = state.clock.getElapsedTime();
      const posAttr = particles.current.geometry.attributes.position as THREE.BufferAttribute;
      for (let i = 0; i < COUNT; i++) {
        const speed = 0.6 + (i % 5) * 0.08;
        let px = (base[i * 3] + t * speed) % SPACING;
        if (px > SPACING / 2) px -= SPACING;
        posAttr.setX(i, px);
      }
      posAttr.needsUpdate = true;
      (particles.current.material as THREE.PointsMaterial).opacity = 0.2 + s * 0.8;
    }
  });

  return (
    <group ref={group} position={[x, 0, 0]}>
      <points ref={particles}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[base, 3]} />
        </bufferGeometry>
        <pointsMaterial color="#22d3ee" size={0.09} sizeAttenuation transparent opacity={0.9} />
      </points>
      <mesh position={[-2, 0, 0]}>
        <boxGeometry args={[0.5, 1.4, 0.5]} />
        <meshStandardMaterial color="#3b82f6" emissive="#3b82f6" emissiveIntensity={0.4} transparent opacity={0.85} />
      </mesh>
      <mesh position={[2, 0, 0]}>
        <boxGeometry args={[0.5, 1.4, 0.5]} />
        <meshStandardMaterial color="#8b5cf6" emissive="#8b5cf6" emissiveIntensity={0.4} transparent opacity={0.85} />
      </mesh>
    </group>
  );
}

// --- Stage 2: Storage (warehouse layers) -----------------------------------
function StorageStage({ seg, x }: { seg: React.RefObject<number>; x: number }) {
  const group = useRef<THREE.Group>(null);
  const layers = [
    { y: -0.9, color: "#64748b", label: "raw" },
    { y: 0, color: "#3b82f6", label: "staging" },
    { y: 0.9, color: "#22d3ee", label: "curated" },
  ];
  useFrame(() => {
    if (!group.current) return;
    const s = seg.current;
    group.current.scale.set(0.6 + s * 0.4, clamp01(s * 1.3), 0.6 + s * 0.4);
    group.current.rotation.y += 0.0025;
  });
  return (
    <group ref={group} position={[x, 0, 0]}>
      {layers.map((l, i) => (
        <mesh key={i} position={[0, l.y, 0]}>
          <cylinderGeometry args={[1.5, 1.5, 0.7, 24]} />
          <meshStandardMaterial color={l.color} emissive={l.color} emissiveIntensity={0.35} transparent opacity={0.55} wireframe={i !== 2} />
        </mesh>
      ))}
    </group>
  );
}

// --- Stage 3: SQL & dbt transforms ------------------------------------------
function TransformStage({ seg, x }: { seg: React.RefObject<number>; x: number }) {
  const group = useRef<THREE.Group>(null);
  const nodes = useMemo(
    () => [
      [-1.6, 0.8, 0],
      [-1.6, -0.8, 0],
      [0, 0, 0],
      [1.6, 0.6, 0],
      [1.6, -0.6, 0],
    ],
    []
  );
  useFrame((state) => {
    if (!group.current) return;
    const s = seg.current;
    const t = state.clock.getElapsedTime();
    group.current.scale.setScalar(0.6 + s * 0.4);
    group.current.children.forEach((c, i) => {
      c.position.y = (nodes[i]?.[1] ?? 0) + Math.sin(t * 1.2 + i) * 0.08;
    });
  });
  return (
    <group ref={group} position={[x, 0, 0]}>
      {nodes.map((p, i) => (
        <mesh key={i} position={p as [number, number, number]}>
          <octahedronGeometry args={[0.35, 0]} />
          <meshStandardMaterial
            color={i === 2 ? "#22d3ee" : "#8b5cf6"}
            emissive={i === 2 ? "#22d3ee" : "#8b5cf6"}
            emissiveIntensity={0.55}
            transparent
            opacity={0.9}
          />
        </mesh>
      ))}
    </group>
  );
}

// --- Stage 4: Orchestration (DAG) -------------------------------------------
function OrchestrationStage({ seg, x }: { seg: React.RefObject<number>; x: number }) {
  const group = useRef<THREE.Group>(null);
  const dagNodes = useMemo(
    () => [
      [-1.8, 1, 0],
      [-1.8, -1, 0],
      [0, 0.5, 0],
      [0, -0.5, 0],
      [1.8, 0, 0],
    ],
    []
  );
  const edges = [
    [0, 2],
    [1, 3],
    [2, 4],
    [3, 4],
  ];
  const edgePositions = useMemo(() => {
    const arr: number[] = [];
    edges.forEach(([a, b]) => {
      arr.push(...(dagNodes[a] as number[]), ...(dagNodes[b] as number[]));
    });
    return new Float32Array(arr);
  }, []);

  useFrame(() => {
    if (!group.current) return;
    const s = seg.current;
    group.current.scale.setScalar(0.6 + s * 0.4);
  });

  return (
    <group ref={group} position={[x, 0, 0]}>
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[edgePositions, 3]} />
        </bufferGeometry>
        <lineBasicMaterial color="#22d3ee" transparent opacity={0.6} />
      </lineSegments>
      {dagNodes.map((p, i) => (
        <mesh key={i} position={p as [number, number, number]}>
          <sphereGeometry args={[0.28, 16, 16]} />
          <meshStandardMaterial color="#3b82f6" emissive="#3b82f6" emissiveIntensity={0.5} />
        </mesh>
      ))}
    </group>
  );
}

// --- Stage 5: Analytics (bars) ----------------------------------------------
function AnalyticsStage({ seg, x }: { seg: React.RefObject<number>; x: number }) {
  const group = useRef<THREE.Group>(null);
  const heights = [0.6, 1.3, 0.9, 1.7, 1.1, 0.8];
  const bars = useRef<(THREE.Mesh | null)[]>([]);

  useFrame(() => {
    if (!group.current) return;
    const s = seg.current;
    group.current.scale.setScalar(0.6 + s * 0.4);
    bars.current.forEach((b, i) => {
      if (!b) return;
      const target = heights[i] * clamp01((s - i * 0.08) / 0.5);
      b.scale.y = THREE.MathUtils.lerp(b.scale.y, Math.max(0.02, target), 0.15);
      b.position.y = (b.scale.y * 1) / 2 - 1;
    });
  });

  return (
    <group ref={group} position={[x, 0, 0]}>
      {heights.map((_, i) => (
        <mesh key={i} ref={(el) => (bars.current[i] = el)} position={[(i - 2.5) * 0.5, -1, 0]}>
          <boxGeometry args={[0.32, 1, 0.32]} />
          <meshStandardMaterial color="#22d3ee" emissive="#22d3ee" emissiveIntensity={0.45} />
        </mesh>
      ))}
    </group>
  );
}

// --- Stage 6: AI / ML --------------------------------------------------------
function AIStage({ seg, x }: { seg: React.RefObject<number>; x: number }) {
  const group = useRef<THREE.Group>(null);
  const COUNT = 90;
  const base = useMemo(() => {
    const arr = new Float32Array(COUNT * 3);
    for (let i = 0; i < COUNT; i++) {
      const r = 1.3 + Math.random() * 0.3;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, []);

  useFrame((state) => {
    if (!group.current) return;
    const s = seg.current;
    const t = state.clock.getElapsedTime();
    group.current.scale.setScalar(0.4 + s * 0.6);
    group.current.rotation.y = t * 0.2;
    group.current.rotation.x = Math.sin(t * 0.15) * 0.2;
  });

  return (
    <group ref={group} position={[x, 0, 0]}>
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[base, 3]} />
        </bufferGeometry>
        <pointsMaterial color="#8b5cf6" size={0.07} sizeAttenuation transparent opacity={0.9} />
      </points>
      <mesh>
        <sphereGeometry args={[0.3, 16, 16]} />
        <meshStandardMaterial color="#22d3ee" emissive="#22d3ee" emissiveIntensity={0.8} />
      </mesh>
    </group>
  );
}

function CameraRig({ progress }: { progress: ProgressRef }) {
  useFrame(({ camera }) => {
    const p = progress.current ?? 0;
    const travel = p * (STAGE_COUNT - 1) * SPACING;
    const targetX = travel;
    const zoomOut = p > 0.93 ? (p - 0.93) / 0.07 : 0;
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, targetX, 0.12);
    camera.position.z = THREE.MathUtils.lerp(camera.position.z, 5.5 + zoomOut * 10, 0.08);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, 0.4 + zoomOut * 2.5, 0.08);
    camera.lookAt(targetX, 0, 0);
  });
  return null;
}

function ConnectorLine({ progress }: { progress: ProgressRef }) {
  const ref = useRef<THREE.Line>(null);
  const positions = useMemo(() => {
    const arr = new Float32Array(STAGE_COUNT * 3);
    for (let i = 0; i < STAGE_COUNT; i++) {
      arr[i * 3] = i * SPACING;
      arr[i * 3 + 1] = 0;
      arr[i * 3 + 2] = 0;
    }
    return arr;
  }, []);
  useFrame(() => {
    if (!ref.current) return;
    const mat = ref.current.material as THREE.LineBasicMaterial;
    mat.opacity = 0.15 + (progress.current ?? 0) * 0.35;
  });
  return (
    <primitive
      object={
        new THREE.Line(
          new THREE.BufferGeometry().setAttribute("position", new THREE.BufferAttribute(positions, 3)),
          new THREE.LineBasicMaterial({ color: "#22d3ee", transparent: true, opacity: 0.2 })
        )
      }
      ref={ref}
    />
  );
}

export default function PipelineScene({ progress }: { progress: ProgressRef }) {
  // per-stage local "build" progress refs, derived each frame from the master progress
  const segs = useMemo(() => Array.from({ length: STAGE_COUNT }, () => ({ current: 0 })), []);

  function SegSync() {
    useFrame(() => {
      const p = (progress.current ?? 0) * STAGE_COUNT;
      segs.forEach((seg, i) => {
        seg.current = clamp01(p - i + 0.4);
      });
    });
    return null;
  }

  return (
    <Canvas camera={{ position: [0, 0, 6], fov: 50 }} dpr={[1, 1.6]} gl={{ antialias: true, alpha: true }}>
      <ambientLight intensity={0.55} />
      <pointLight position={[0, 5, 5]} intensity={40} color="#22d3ee" />
      <pointLight position={[10, -5, -5]} intensity={30} color="#8b5cf6" />
      <CameraRig progress={progress} />
      <SegSync />
      <ConnectorLine progress={progress} />
      <SourcesStage seg={segs[0]} x={0} />
      <IngestionStage seg={segs[1]} x={SPACING} />
      <StorageStage seg={segs[2]} x={SPACING * 2} />
      <TransformStage seg={segs[3]} x={SPACING * 3} />
      <OrchestrationStage seg={segs[4]} x={SPACING * 4} />
      <AnalyticsStage seg={segs[5]} x={SPACING * 5} />
      <AIStage seg={segs[6]} x={SPACING * 6} />
    </Canvas>
  );
}
