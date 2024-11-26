import useStore from "../useStore"
import Creation from "./Creation"
import Introduction from "./Introduction"
import Result from "./Result"
import StartScreen from "./StartScreen"
import Container from "../utils/Container"
import { useEffect } from "react"

export default function Interface() {
   const { isFading, setFading, phase } = useStore()

   const components = [
      <StartScreen />,
      <Introduction />,
      <Creation />,
      <Result />
   ]

   useEffect(() => {
      if (phase == 0) {
         setFading(true)
         setTimeout(() => {
            setFading(false)
         }, 1000)
      }
   }, [phase])

   return <div className={`fade ${isFading ? 'fade-out' : 'fade.in'}`}>

      <Container>
         {components[phase]}
      </Container>

   </div>
}