import Sphere from './Sphere'
import useStore from '../useStore'
import { Environment, Float } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import { Bloom, EffectComposer } from '@react-three/postprocessing'
import { useFrame, useThree } from '@react-three/fiber'
import { useRef } from 'react'


export default function Experience() {
  const { uBloom } = useStore()
  const bloomCurrent = useRef(uBloom)

  const bloomPass = useRef()

  useFrame((_, delta) => {
    bloomCurrent.current += (uBloom - bloomCurrent.current) * delta * 2

    bloomPass.current.intensity = bloomCurrent.current
  })

  return (
    <>
      {/* <color args={['#1e1e1e']} attach='background' /> */}

      <Environment
        preset='warehouse'
        environmentIntensity={0.5}
      />

      <ambientLight intensity={0.2} />

      <EffectComposer>
        <Bloom
          ref={bloomPass}
          luminanceThreshold={0}
          intensity={bloomCurrent.current}
          mipmapBlur
          radius={1}
        />
      </EffectComposer>

      <Float
        speed={2}
        rotationIntensity={0.1}
        floatingRange={[-0.1, 0.1]}
      >
        <Sphere />
      </Float>

      {/* <Perf /> */}
    </>
  )
}