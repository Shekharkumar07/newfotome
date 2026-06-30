'use client'

import { Canvas, useLoader } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { TextureLoader } from 'three'

export default function VRViewer({ imageUrl }) {
  const texture = useLoader(TextureLoader, imageUrl)

  return (
    <Canvas camera={{ position: [0, 0, 0.1] }}>
      <ambientLight />
      <mesh>
        <sphereGeometry args={[5, 64, 64]} />
        <meshBasicMaterial map={texture} side={2} />
      </mesh>
      <OrbitControls enableZoom={false} enablePan={false} />
    </Canvas>
  )
}
