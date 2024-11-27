import Button from "../utils/Button"

export default function StartScreen() {
   return <>
      <h1 className="text-neutral-100 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-5xl md:text-6xl lg:text-8xl ">Who am I?</h1>
      <Button>
         Start
      </Button>
   </>
}