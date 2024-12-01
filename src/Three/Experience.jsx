import Sphere from './Sphere'
import { Environment, Float, Sparkles } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { Perf } from 'r3f-perf'
import { useState } from 'react'

export default function Experience() {

  const [opacity, setOpacity] = useState(0)

  useFrame((_, delta) => {
    setOpacity((prev) => Math.min(prev + delta * 0.5, 1))
  })

  return (
    <>
      <Environment
        preset='warehouse'
        environmentIntensity={0.5}
      />

      <ambientLight intensity={0.2} />

      <Float
        speed={2}
        rotationIntensity={0.1}
        floatingRange={[-0.1, 0.1]}
      >
        <Sphere />
      </Float>

      <Sparkles
        scale={[10, 8, 6]}
        size={1}
        speed={0.2}
        count={400}
        opacity={opacity}
      />

      <Perf />
    </>
  )
}