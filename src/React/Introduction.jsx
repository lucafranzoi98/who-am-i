import useStore from "../useStore"
import Button from "../utils/Button"

export default function Introduction() {
   const { introPhase } = useStore()

   const texts = [
      "I'm human. I'm complex. I'm unique.",
      'What if I could turn myself into a simple sphere?',
      'Maybe a little bigger.',
      'And obviously full of life.',
      'Who am I?'
   ]

   const buttonTexts = [
      'Ok, so?',
      'Mmh, tell me more',
      'Yeah, better',
      "Ok, but what's the point?",
      "I'm more..."
   ]

   return <>
      <p className="text-neutral-100 mb-10 text-lg lg:text-2xl text-center">{texts[introPhase]}</p>
      <Button>
         {buttonTexts[introPhase]}
      </Button>
   </>
}