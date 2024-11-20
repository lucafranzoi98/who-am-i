import useStore from "../useStore"
import Creation from "./Creation"
import Introduction from "./Introduction"
import Result from "./Result"
import StartScreen from "./StartScreen"
import Container from "../utils/Container"

export default function Interface() {
   const phase = useStore((state) => state.phase)

   const components = [
      <StartScreen />,
      <Introduction />,
      <Creation />,
      <Result />
   ]

   return <>
      <Container isCentered={phase == 0}>
         {components[phase]}
      </Container>

   </>
}