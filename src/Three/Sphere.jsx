import * as THREE from 'three'
import { mergeVertices } from 'three/examples/jsm/utils/BufferGeometryUtils.js'
import CustomShaderMaterial from 'three-custom-shader-material'
import { useFrame } from '@react-three/fiber'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'

import vertexShader from '../shaders/vertex.glsl'
import fragmentShader from '../shaders/fragment.glsl'
import useStore from '../useStore'

let geometry = new THREE.SphereGeometry(2, 256, 256)
geometry = mergeVertices(geometry)
geometry.computeTangents()

export default function Sphere() {
   const material = useRef()
   const sphere = useRef()

   const { uStrength, uSpeed, uColorBaseLightness, uColorBase, uColorAccentLightness, uColorAccent, uRoughness, phase, introPhase, creationPhase, setStrength, setColorBaseLightness, setColorAccentLightness } = useStore()

   const strengthCurrent = useRef(uStrength)
   const speedCurrent = useRef(uSpeed)
   const colorBaseLightnessCurrent = useRef(uColorBaseLightness)
   const colorBaseCurrent = useRef(uColorBase)
   const colorAccentLightnessCurrent = useRef(uColorAccentLightness)
   const colorAccentCurrent = useRef(uColorAccent)
   const roughnessCurrent = useRef(uRoughness)

   const speedTransition = 2

   const uTime = useRef(0)

   useEffect(() => {
      if (phase == 0) {
         gsap.to(sphere.current.position, {
            x: 0,
            y: 4.5,
            z: 0,
            duration: 2,
            ease: 'elastic.in(1.25, 1)'
         })

         gsap.to(sphere.current.scale, {
            x: 0.02,
            y: 0.02,
            z: 0.02,
            duration: 2,
            ease: 'power2.inOut'
         })
      }

   }, [phase])

   useEffect(() => {

      if (introPhase == 1)
         gsap.to(sphere.current.position, {
            x: 0,
            y: 1,
            z: 0,
            duration: 5,
            ease: 'elastic.out(1.25, 1)'
         })

      if (introPhase == 2)
         gsap.to(sphere.current.scale, {
            x: 0.75,
            y: 0.75,
            z: 0.75,
            duration: 2,
            ease: 'power2.inOut'
         })

      if (introPhase == 3)
         setStrength(0.1)

   }, [introPhase])

   useEffect(() => {

      if (creationPhase == 2 && uColorBase !== 0)
         setColorBaseLightness(0.5)

      if (creationPhase == 3 && uColorAccent !== 0)
         setColorAccentLightness(0.5)

   }, [creationPhase, uColorBase, uColorAccent])

   useFrame((_, delta) => {

      strengthCurrent.current += (uStrength - strengthCurrent.current) * delta * speedTransition
      material.current.uniforms.uStrength.value = strengthCurrent.current

      speedCurrent.current += (uSpeed - speedCurrent.current) * delta * speedTransition
      uTime.current += speedCurrent.current * delta

      material.current.uniforms.uTime.value = uTime.current

      colorBaseLightnessCurrent.current += (uColorBaseLightness - colorBaseLightnessCurrent.current) * delta * speedTransition
      material.current.uniforms.uColorBaseLightness.value = colorBaseLightnessCurrent.current

      colorBaseCurrent.current += (uColorBase - colorBaseCurrent.current) * delta
      material.current.uniforms.uColorBase.value = colorBaseCurrent.current

      colorAccentLightnessCurrent.current += (uColorAccentLightness - colorAccentLightnessCurrent.current) * delta * speedTransition
      material.current.uniforms.uColorAccentLightness.value = colorAccentLightnessCurrent.current

      colorAccentCurrent.current += (uColorAccent - colorAccentCurrent.current) * delta
      material.current.uniforms.uColorAccent.value = colorAccentCurrent.current

      roughnessCurrent.current += (uRoughness - roughnessCurrent.current) * delta * speedTransition
      material.current.uniforms.uRoughness.value = roughnessCurrent.current

   })

   return <>

      <mesh
         ref={sphere}
         frustumCulled={false}
         geometry={geometry}
         scale={[0.02, 0.02, 0.02]}
         position-y={4.5}
      >
         <CustomShaderMaterial
            ref={material}
            baseMaterial={THREE.MeshStandardMaterial}
            vertexShader={vertexShader}
            fragmentShader={fragmentShader}
            uniforms={{
               uTime: new THREE.Uniform(uTime.current),
               uStrength: new THREE.Uniform(uStrength),
               uSpeed: new THREE.Uniform(uSpeed),
               uColorBase: new THREE.Uniform(uColorBase),
               uColorBaseLightness: new THREE.Uniform(uColorBaseLightness),
               uColorAccent: new THREE.Uniform(uColorAccent),
               uColorAccentLightness: new THREE.Uniform(uColorAccentLightness),
               uRoughness: new THREE.Uniform(uRoughness)
            }}
         />
      </mesh>

   </>
}