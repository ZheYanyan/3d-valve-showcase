import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Group } from 'three';

interface ValveModelProps {
  autoRotate: boolean;
}

export default function ValveModel({ autoRotate }: ValveModelProps) {
  const groupRef = useRef<Group>(null);
  const handleRef = useRef<Group>(null);

  useFrame((state, delta) => {
    if (groupRef.current && autoRotate) {
      groupRef.current.rotation.y += delta * 0.5;
    }
    if (handleRef.current) {
      handleRef.current.rotation.y += delta * 1.5;
    }
  });

  const metal = { color: '#8a8a8a', metalness: 0.8, roughness: 0.3 };
  const darkMetal = { color: '#4a4a4a', metalness: 0.7, roughness: 0.5 };

  return (
    <group ref={groupRef}>
      <mesh position={[0, 0, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[1.2, 1.2, 2.5, 32]} />
        <meshStandardMaterial {...metal} />
      </mesh>

      <mesh position={[-2.2, 0, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.6, 0.8, 1.8, 32]} />
        <meshStandardMaterial {...metal} />
      </mesh>
      <mesh position={[-3.2, 0, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.45, 0.45, 0.8, 32]} />
        <meshStandardMaterial {...metal} />
      </mesh>
      <mesh position={[-3.8, 0, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.7, 0.5, 0.4, 32]} />
        <meshStandardMaterial {...darkMetal} />
      </mesh>

      <mesh position={[2.2, 0, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.6, 0.8, 1.8, 32]} />
        <meshStandardMaterial {...metal} />
      </mesh>
      <mesh position={[3.2, 0, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.45, 0.45, 0.8, 32]} />
        <meshStandardMaterial {...metal} />
      </mesh>
      <mesh position={[3.8, 0, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.7, 0.5, 0.4, 32]} />
        <meshStandardMaterial {...darkMetal} />
      </mesh>

      <mesh position={[0, 1.6, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[1.4, 1.2, 0.8, 32]} />
        <meshStandardMaterial {...metal} />
      </mesh>

      <mesh position={[0, 2.2, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.5, 0.5, 0.4, 6]} />
        <meshStandardMaterial {...darkMetal} />
      </mesh>

      <mesh position={[0, 2.6, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.15, 0.15, 1.2, 16]} />
        <meshStandardMaterial {...metal} />
      </mesh>

      <group ref={handleRef} position={[0, 3.2, 0]}>
        <mesh position={[0, 0, 0]} castShadow receiveShadow rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.12, 0.12, 3, 16]} />
          <meshStandardMaterial color="#2a2a2a" metalness={0.7} roughness={0.3} />
        </mesh>
        <mesh position={[1.5, 0, 0]} castShadow receiveShadow>
          <capsuleGeometry args={[0.22, 0.6, 8, 16]} />
          <meshStandardMaterial color="#3a3a3a" metalness={0.5} roughness={0.5} />
        </mesh>
        <mesh position={[-1.5, 0, 0]} castShadow receiveShadow>
          <capsuleGeometry args={[0.22, 0.6, 8, 16]} />
          <meshStandardMaterial color="#3a3a3a" metalness={0.5} roughness={0.5} />
        </mesh>
      </group>

      {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => {
        const angle = (i / 8) * Math.PI * 2;
        const x = Math.cos(angle) * 1.6;
        const z = Math.sin(angle) * 1.6;
        return (
          <mesh key={i} position={[x, 1.2, z]} castShadow receiveShadow>
            <cylinderGeometry args={[0.12, 0.12, 0.3, 6]} />
            <meshStandardMaterial {...darkMetal} />
          </mesh>
        );
      })}

      <mesh position={[0, -1.8, 0]} castShadow receiveShadow>
        <boxGeometry args={[2.5, 0.3, 2.5]} />
        <meshStandardMaterial {...darkMetal} />
      </mesh>
    </group>
  );
}
