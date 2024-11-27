import { useState } from "react"
import useStore from "../useStore"

export default function Button({ children = 'Continue' }) {

   const { phase, introPhase, maxIntroPhase, creationPhase, maxCreationPhase, nextPhase, nextIntroPhase, nextCreationPhase, isFading, setFading, restart } = useStore()

   const [isClicked, setIsClicked] = useState(false)

   const handleClick = () => {

      setFading(true)
      setIsClicked(true)
      
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
      }, 1500)
   }

   return <button
      className={`btn ${isClicked && 'active'} text-lg md:text-xl lg:text-xl`}
      onClick={handleClick}
      disabled={isFading}
   >
      {children}
   </button>
}