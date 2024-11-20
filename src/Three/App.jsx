import Sphere from './Sphere'
import useStore from '../useStore'

function App() {
  const phase = useStore((state) => state.phase)

  return (
    <>
    {phase >= 1 && <Sphere/>}
    </>
  )
}

export default App
