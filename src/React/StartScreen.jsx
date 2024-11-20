import useStore from "../useStore"
import Button from "../utils/Button"

export default function StartScreen() {
   const nextPhase = useStore((state) => state.nextPhase)

   return <>
      <Button handleClick={nextPhase}>
         Start
      </Button>
   </>
}