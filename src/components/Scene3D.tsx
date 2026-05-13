import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, ContactShadows } from '@react-three/drei';
import Lighting from './Lighting';
import ValveModel from './ValveModel';

interface Scene3DProps {
  autoRotate: boolean;
}

export default function Scene3D({ autoRotate }: Scene3DProps) {
  return (
    <div className="w-full h-full">
      <Canvas
        shadows
        camera={{ position: [8, 6, 10], fov: 50 }}
        className="cursor-grab active:cursor-grabbing"
      >
        <color attach="background" args={['#1a1a2e']} />
        <fog attach="fog" args={['#1a1a2e', 10, 30]} />

        <Environment preset="city" />
        <Lighting />
        <ValveModel autoRotate={autoRotate} />

        <ContactShadows
          resolution={1024}
          scale={20}
          blur={2}
          opacity={0.5}
          far={10}
          color="#000000"
        />

        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]} receiveShadow>
          <planeGeometry args={[50, 50]} />
          <meshStandardMaterial color="#16213e" roughness={0.8} />
        </mesh>

        <gridHelper args={[20, 20, 0x444444, 0x222222]} position={[0, -1.99, 0]} />

        <OrbitControls
          enableDamping
          dampingFactor={0.05}
          minDistance={5}
          maxDistance={30}
          maxPolarAngle={Math.PI / 2 + 0.3}
        />
      </Canvas>
    </div>
  );
}
