import { useMemo, useRef } from "react";
import { Canvas, useFrame, type ThreeElements } from "@react-three/fiber";
import * as THREE from "three";

const NODE_COUNT = 140;

function NodeNetwork({ mouse }: { mouse: React.RefObject<{ x: number; y: number }> }) {
  const groupRef = useRef<THREE.Group>(null);
  const pointsRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.LineSegments>(null);

  const { positions, linePositions } = useMemo(() => {
    const pts: THREE.Vector3[] = [];
    for (let i = 0; i < NODE_COUNT; i++) {
      pts.push(
        new THREE.Vector3(
          (Math.random() - 0.5) * 14,
          (Math.random() - 0.5) * 9,
          (Math.random() - 0.5) * 8
        )
      );
    }
    const positions = new Float32Array(pts.length * 3);
    pts.forEach((p, i) => p.toArray(positions, i * 3));

    const lineVerts: number[] = [];
    const maxDist = 2.1;
    for (let i = 0; i < pts.length; i++) {
      for (let j = i + 1; j < pts.length; j++) {
        if (pts[i].distanceTo(pts[j]) < maxDist) {
          lineVerts.push(pts[i].x, pts[i].y, pts[i].z, pts[j].x, pts[j].y, pts[j].z);
        }
      }
    }
    return { positions, linePositions: new Float32Array(lineVerts) };
  }, []);

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.getElapsedTime();
    groupRef.current.rotation.y = t * 0.035 + (mouse.current?.x ?? 0) * 0.35;
    groupRef.current.rotation.x = (mouse.current?.y ?? 0) * 0.2;
    groupRef.current.position.y = Math.sin(t * 0.25) * 0.15;
  });

  return (
    <group ref={groupRef}>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        </bufferGeometry>
        <pointsMaterial color="#22d3ee" size={0.065} sizeAttenuation transparent opacity={0.9} />
      </points>
      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[linePositions, 3]} />
        </bufferGeometry>
        <lineBasicMaterial color="#3b82f6" transparent opacity={0.18} />
      </lineSegments>
    </group>
  );
}

function RotatingCore(props: ThreeElements["mesh"]) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.getElapsedTime();
    ref.current.rotation.y = t * 0.15;
    ref.current.rotation.x = t * 0.08;
  });
  return (
    <mesh ref={ref} {...props}>
      <icosahedronGeometry args={[1.15, 1]} />
      <meshBasicMaterial color="#8b5cf6" wireframe transparent opacity={0.35} />
    </mesh>
  );
}

export default function HeroScene({ reduced }: { reduced: boolean }) {
  const mouse = useRef({ x: 0, y: 0 });

  function handlePointerMove(e: React.PointerEvent<HTMLDivElement>) {
    const { innerWidth, innerHeight } = window;
    mouse.current.x = (e.clientX / innerWidth - 0.5) * 2;
    mouse.current.y = (e.clientY / innerHeight - 0.5) * 2;
  }

  return (
    <div
      className="absolute inset-0"
      onPointerMove={reduced ? undefined : handlePointerMove}
      aria-hidden="true"
    >
      <Canvas
        camera={{ position: [0, 0, 7], fov: 55 }}
        dpr={[1, 1.75]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.6} />
        {!reduced && <NodeNetwork mouse={mouse} />}
        {reduced && <NodeNetworkStatic />}
        <RotatingCore position={[0, 0, -1]} />
      </Canvas>
    </div>
  );
}

function NodeNetworkStatic() {
  const { positions } = useMemo(() => {
    const pts: THREE.Vector3[] = [];
    for (let i = 0; i < 80; i++) {
      pts.push(
        new THREE.Vector3(
          (Math.random() - 0.5) * 12,
          (Math.random() - 0.5) * 8,
          (Math.random() - 0.5) * 6
        )
      );
    }
    const positions = new Float32Array(pts.length * 3);
    pts.forEach((p, i) => p.toArray(positions, i * 3));
    return { positions };
  }, []);
  return (
    <points>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial color="#22d3ee" size={0.06} sizeAttenuation transparent opacity={0.7} />
    </points>
  );
}
