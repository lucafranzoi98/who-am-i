import * as THREE from 'three'
import { mergeVertices } from 'three/examples/jsm/utils/BufferGeometryUtils.js'
import CustomShaderMaterial from 'three-custom-shader-material'
import { useFrame } from '@react-three/fiber'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'

import vertexShader from '../shaders/vertex.glsl'
import fragmentShader from '../shaders/fragment.glsl'
import useStore from '../useStore'
import FakeGlowMaterial from './FakeGlowMaterial'

let geometry = new THREE.SphereGeometry(2, 256, 256)
geometry = mergeVertices(geometry)
geometry.computeTangents()

export default function Sphere() {
   const material = useRef()
   const sphere = useRef()

   const { uStrength, uStrengthMin, uStrengthMax, uSpeed, uColorBase, uColorBaseLight, uColorMiddle, uColorMiddleLight, uColorTop, uColorTopLight, uRoughness, phase, introPhase, creationPhase, setStrength, setColorBaseLight, setColorMiddleLight, setColorTopLight, uGlow } = useStore()

   const speedCurrent = useRef(uSpeed)
   const strengthCurrent = useRef(uStrength)
   const colorBaseCurrent = useRef(uColorBase)
   const colorBaseLightCurrent = useRef(uColorBaseLight)
   const colorMiddleCurrent = useRef(uColorMiddle)
   const colorMiddleLightCurrent = useRef(uColorMiddleLight)
   const colorTopCurrent = useRef(uColorTop)
   const colorTopLightCurrent = useRef(uColorTopLight)
   const roughnessCurrent = useRef(uRoughness)
   const glowCurrent = useRef(uGlow)
   const glow = useRef()

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
            x: 0.6,
            y: 0.6,
            z: 0.6,
            duration: 2,
            ease: 'power2.inOut'
         })

      if (introPhase == 3)
         setStrength((uStrengthMin + uStrengthMax) / 2)

   }, [introPhase])

   useEffect(() => {

      if (creationPhase == 2 && uColorBase !== 0.5)
         setColorBaseLight(0)

      if (creationPhase == 3 && uColorMiddle !== 0.5)
         setColorMiddleLight(0)

      if (creationPhase == 4 && uColorTop !== 0.5)
         setColorTopLight(0)

   }, [creationPhase, uColorBase, uColorMiddle, uColorTop, ])

   useFrame((_, delta) => {

      sphere.current.rotation.y += delta * 0.1
      material.current.uniforms.uTime.value = uTime.current

      // Speed
      speedCurrent.current += (uSpeed - speedCurrent.current) * delta * speedTransition
      uTime.current += speedCurrent.current * delta

      // Strength
      strengthCurrent.current += (uStrength - strengthCurrent.current) * delta * speedTransition
      material.current.uniforms.uStrength.value = strengthCurrent.current

      // Color Base
      colorBaseCurrent.current += (uColorBase - colorBaseCurrent.current) * delta
      material.current.uniforms.uColorBase.value = colorBaseCurrent.current

      colorBaseLightCurrent.current += (uColorBaseLight - colorBaseLightCurrent.current) * delta * speedTransition
      material.current.uniforms.uColorBaseLight.value = colorBaseLightCurrent.current

      // Color Middle
      colorMiddleCurrent.current += (uColorMiddle - colorMiddleCurrent.current) * delta
      material.current.uniforms.uColorMiddle.value = colorMiddleCurrent.current

      colorMiddleLightCurrent.current += (uColorMiddleLight - colorMiddleLightCurrent.current) * delta * speedTransition
      material.current.uniforms.uColorMiddleLight.value = colorMiddleLightCurrent.current

      // Color Top
      colorTopCurrent.current += (uColorTop - colorTopCurrent.current) * delta
      material.current.uniforms.uColorTop.value = colorTopCurrent.current

      colorTopLightCurrent.current += (uColorTopLight - colorTopLightCurrent.current) * delta * speedTransition
      material.current.uniforms.uColorTopLight.value = colorTopLightCurrent.current

      // Roughness
      roughnessCurrent.current += (uRoughness - roughnessCurrent.current) * delta * speedTransition
      material.current.uniforms.uRoughness.value = roughnessCurrent.current

      //Glow
      glowCurrent.current += (uGlow - glowCurrent.current) * delta * speedTransition
      glow.current.material.opacity = glowCurrent.current
   })

   return <>

      <mesh
         ref={sphere}
         frustumCulled={false}
         geometry={geometry}
         scale={[0.02, 0.02, 0.02]}
         position-y={4.5}
         // scale={[0.6, 0.6, 0.6]}
         // position-y={1}
      >
         <CustomShaderMaterial
            ref={material}
            baseMaterial={THREE.MeshStandardMaterial}
            vertexShader={vertexShader}
            fragmentShader={fragmentShader}
            uniforms={{
               uTime: new THREE.Uniform(uTime.current),
               uSpeed: new THREE.Uniform(uSpeed),
               uStrength: new THREE.Uniform(uStrength),
               uColorBase: new THREE.Uniform(uColorBase),
               uColorBaseLight: new THREE.Uniform(uColorBaseLight),
               uColorMiddle: new THREE.Uniform(uColorMiddle),
               uColorMiddleLight: new THREE.Uniform(uColorMiddleLight),
               uColorTop: new THREE.Uniform(uColorTop),
               uColorTopLight: new THREE.Uniform(uColorTopLight),
               uRoughness: new THREE.Uniform(uRoughness),
            }}
         />

      </mesh>

      <mesh
         position-y={1}
         ref={glow}
      >
         <sphereGeometry args={[3]} />
         <FakeGlowMaterial
            falloff={0}
            glowInternalRadius={10}
            glowSharpness={0}
            glowColor='#ffffee'
            opacity={uGlow}
         />
      </mesh>

   </>
}