import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, Center } from "@react-three/drei";
import { Suspense, useRef } from "react";

function Model() {
  const { scene } = useGLTF("/Protein_Model.glb");
  const ref = useRef();

  // Auto-rotation
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.002; // slow rotation around Y-axis
    }
  });

  return (
    <Center ref={ref}>
      <primitive object={scene} scale={1.9} />
    </Center>
  );
}

export default function ModelViewer() {
  return (
    <div className="w-full h-[600px] bg-black rounded-xl">
      <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
        {/* Lights */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />

        {/* Protein Model */}
        <Suspense fallback={null}>
          <Model />
        </Suspense>

        {/* OrbitControls */}
        <OrbitControls
          enableZoom={false}   // Disable zoom
          enablePan={false}    // Disable pan
          enableRotate={true}  // Allow manual rotation
          target={[0, 0, 0]}   // Center rotation on model
        />
      </Canvas>
    </div>
  );
}

