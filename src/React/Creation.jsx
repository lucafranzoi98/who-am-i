import Button from "../utils/Button";
import useStore from "../useStore";
import Slider from "../utils/Slider";
import { useEffect, useState } from "react";

export default function Creation() {

   const store = useStore((state) => state)

   const parameters = [
      {
         name: 'Strenght',
         minText: 'Passive',
         maxText: 'Active',
         min: 0.1,
         max: 1.5,
         function: (value) => store.setStrength(value)
      },
      {
         name: 'Speed',
         minText: 'Calm',
         maxText: 'Impulsive',
         min: 0.1,
         max: 1.5,
         function: (value) => store.setSpeed(value)
      },
      {
         name: 'HueColorIn',
         minText: 'Introvert',
         maxText: 'Extrovert',
         min: 0,
         max: 0.8,
         function: (value) => store.setHueColorIn(value)
      },
      {
         name: 'HueColorOut',
         minText: 'A',
         maxText: 'B',
         min: 0,
         max: 0.8,
         function: (value) => store.setHueColorOut(value)
      }
   ]

   const currentParameter = parameters[store.creationPhase]

   // To force the re-render of the slider
   const [key, setKey] = useState(0)

   const [activeValue, setActiveValue] = useState(0)

   useEffect(() => {
      const middleValue = (currentParameter.min + currentParameter.max) / 2
      setActiveValue(middleValue)
      
   }, [store.creationPhase])

   const handleClick = () => {
      if (store.creationPhase < parameters.length - 1) {
         setKey(key => key + 1)
         store.nextCreationPhase()
      }
      else
         store.nextPhase()
   }

   return <>

      <p>{currentParameter.name}</p>
      <Slider
         minText={currentParameter.minText}
         maxText={currentParameter.maxText}
         min={currentParameter.min}
         max={currentParameter.max}
         value={activeValue}
         handleClick={(e) => {
            currentParameter.function(e.target.value)
            setActiveValue(e.target.value)
         }}
         key={key}
      />
      <Button handleClick={handleClick} />
   </>
}