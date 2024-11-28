import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Interface from "./React/Interface"
import { Canvas } from '@react-three/fiber'
import Experience from './Three/Experience.jsx'

createRoot(document.getElementById('root')).render(
  <>

    <Interface />

    <div id="canvas-container">
      <Canvas>
        <Experience />
      </Canvas>
    </div>


  </>,
)
