import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import './index.css'
import App from './Three/App.jsx'
import Interface from './React/Interface.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <Interface />

    <div id="canvas-container">
      <Canvas
        shadows
      >
        <App />
      </Canvas>
    </div>


  </StrictMode>,
)
