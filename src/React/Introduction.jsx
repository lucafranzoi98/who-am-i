import useStore from "../useStore"
import Button from "../utils/Button"

export default function Introduction() {
   const { introPhase } = useStore()

   const texts = [
      'Introduzione 1',
      'Introduzione 2',
      'Introduzione 3',
      'Introduzione 4'
   ]

   return <>
      <p className="text-white pb-8">{texts[introPhase]}</p>
      <Button />
   </>
}