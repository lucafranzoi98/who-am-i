import useStore from "../useStore"

export default function Button({ children = 'Continue' }) {

   const { phase, introPhase, maxIntroPhase, creationPhase, maxCreationPhase, nextPhase, nextIntroPhase, nextCreationPhase, isFading, setFading, restart } = useStore()

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
         setFading(false)
      }, 1000)
   }

   return <button
      className='px-4 py-2 rounded-md text-gray-400 uppercase shadow_button'
      onClick={handleClick}
      disabled={isFading}
   >
      {children}
   </button>
}