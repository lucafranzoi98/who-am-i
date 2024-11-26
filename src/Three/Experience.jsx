import Sphere from './Sphere'
import useStore from '../useStore'
import { Environment } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import { Bloom, EffectComposer } from '@react-three/postprocessing'
import { useFrame } from '@react-three/fiber'
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

      <Sphere />

      {/* <Perf /> */}
    </>
  )
}