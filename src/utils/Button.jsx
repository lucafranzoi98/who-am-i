import { useEffect } from "react"
import useStore from "../useStore"

export default function Button({ children = 'Continue', isDisabled }) {

   const { phase, introPhase, maxIntroPhase, creationPhase, maxCreationPhase, nextPhase, nextIntroPhase, nextCreationPhase, isFading, setFading, restart, uSpeed, uStrength, uColorBase, uColorMiddle, uColorTop, uRoughness, uGlow } = useStore()

   const handleClick = () => {

      setFading(true)

      setTimeout(() => {
         if (phase == 1 && introPhase < maxIntroPhase)
            nextIntroPhase()
         else if (phase == 2 && creationPhase < maxCreationPhase)
            nextCreationPhase()
         else if (phase == 3)
            restart()
         else
            nextPhase()
      }, 1000)
      
      setTimeout(() => {
         setFading(false)
      }, 1750)
   }


   return <div
      className={`btn text-md text-center text-balance ${isDisabled && 'disabled'} ${isFading && 'pointer-events-none'}`}
      onClick={handleClick}
   >
      {children}
   </div>
}