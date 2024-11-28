import { useState } from "react"
import useStore from "../useStore"

export default function Button({ children = 'Continue', id }) {

   const { phase, introPhase, maxIntroPhase, creationPhase, maxCreationPhase, nextPhase, nextIntroPhase, nextCreationPhase, isFading, setFading, restart } = useStore()

   const [isClicked, setIsClicked] = useState(false)

   const handleClick = () => {

      setIsClicked(true)
      setFading(true)

      setTimeout(() => {
         setIsClicked(false)

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
      className={`btn text-md text-center text-balance pointer-events-auto ${isClicked ? 'clicked' : 'not-clicked'}`}
      onClick={handleClick}
      disabled={isFading}
   >
      {children}
   </div>
}