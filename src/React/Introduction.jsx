import useStore from "../useStore"
import Button from "../utils/Button"

export default function Introduction() {
   const store = useStore(state => state)

   const texts = [
      'Introduzione 1',
      'Introduzione 2',
      'Introduzione 3'
   ]

   const nextIntroPhase = () => {
      if (store.introPhase < texts.length - 1)
         store.nextIntroPhase()
      else
         store.nextPhase()
   }

   return <>
      <p className="text-white pb-8">{texts[store.introPhase]}</p>
      <Button handleClick={nextIntroPhase} />
   </>
}