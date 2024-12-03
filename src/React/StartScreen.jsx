import Button from "../utils/Button"

export default function StartScreen() {
   return <>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
         <h1 className="text-neutral-100 whitespace-nowrap text-5xl md:text-6xl lg:text-8xl">Who am I?</h1>
         <h3 className="text-neutral-300 text-md md:text-lg lg:text-xl mt-2">A soul simulator</h3>
      </div>
      <Button>
         Start
      </Button>
      <span className="absolute text-sm text-neutral-500 bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap pb-1">A project by Luca Franzoi</span>
   </>
}