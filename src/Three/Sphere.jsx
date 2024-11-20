import * as THREE from 'three'
import { mergeVertices } from 'three/examples/jsm/utils/BufferGeometryUtils.js'
import CustomShaderMaterial from 'three-custom-shader-material'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import { OrbitControls } from '@react-three/drei'
import gsap from 'gsap'

import vertexShader from '../shaders/vertex.glsl'
import fragmentShader from '../shaders/fragment.glsl'
import useStore from '../useStore'

export default function Sphere() {
   const introPhase = useStore(state => state.introPhase)

   let geometry = new THREE.IcosahedronGeometry(2, 64)
   geometry = mergeVertices(geometry)
   geometry.computeTangents()

   const material = useRef()
   const sphere = useRef()

   if (introPhase == 1)
      gsap.to(sphere.current.scale, {
         x: 1,
         y: 1,
         z: 1,
         duration: 1,
         ease: 'power2.inOut'
      })

   const uStrength = useStore((state) => state.uStrength)
   const uSpeed = useStore((state) => state.uSpeed)
   const hueColorIn = useStore((state) => state.hueColorIn)
   const hueColorOut = useStore((state) => state.hueColorOut)

   useFrame((_, delta) => {
      material.current.uniforms.uTime.value += delta
      material.current.uniforms.uStrength.value = uStrength
      material.current.uniforms.uSpeed.value = uSpeed
      material.current.uniforms.uColorIn.value = hueColorIn
      material.current.uniforms.uColorOut.value = hueColorOut
   })

   return <>

      <OrbitControls />

      <ambientLight />

      <directionalLight position={[1, 1, 1]} />

      <mesh
         geometry={geometry}
         ref={sphere}
         // scale={[0.1, 0.1, 0.1]}
      >
         <CustomShaderMaterial
            ref={material}
            baseMaterial={THREE.MeshPhysicalMaterial}
            vertexShader={vertexShader}
            fragmentShader={fragmentShader}
            uniforms={{
               uTime: new THREE.Uniform(0),
               uStrength: new THREE.Uniform(uStrength),
               uSpeed: new THREE.Uniform(uSpeed),
               uColorIn: new THREE.Uniform(hueColorIn),
               uColorOut: new THREE.Uniform(hueColorOut)
            }}

            metalness={0}
            roughness={1}
         />
      </mesh>
   </>
}