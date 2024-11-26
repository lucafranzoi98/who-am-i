import Button from "../utils/Button";
import useStore from "../useStore";
import Slider from "../utils/Slider";
import { useEffect, useState } from "react";

export default function Creation() {

   const store = useStore(state => state)

   const parameters = [
      {
         name: 'Strength',
         minText: 'Passive',
         maxText: 'Active',
         value: store.uStrength,
         min: store.uStrengthMin,
         max: store.uStrengthMax,
         count: 5,
         function: (value) => store.setStrength(value)
      },
      {
         name: 'Speed',
         minText: 'Calm',
         maxText: 'Impulsive',
         value: store.uSpeed,
         min: store.uSpeedMin,
         max: store.uSpeedMax,
         count: 5,
         function: (value) => store.setSpeed(value)
      },
      {
         name: 'HueColorIn',
         minText: 'Introvert',
         maxText: 'Extrovert',
         value: store.uColorBase,
         min: store.uColorBaseMin,
         max: store.uColorBaseMax,
         count: 5,
         function: (value) => store.setColorBase(value)
      },
      {
         name: 'HueColorOut',
         minText: 'A',
         maxText: 'B',
         value: store.uColorAccent,
         min: store.uColorAccentMin,
         max: store.uColorAccentMax,
         count: 5,
         function: (value) => store.setColorAccent(value)
      },
      {
         name: 'Roughness',
         minText: 'Liscio',
         maxText: 'Ruvido',
         value: store.uRoughness,
         min: store.uRoughnessMin,
         max: store.uRoughnessMax,
         count: 3,
         function: (value) => store.setRoughness(value)
      },
      {
         name: 'Bloom',
         minText: 'No',
         maxText: 'Si',
         value: store.uBloom,
         min: store.uBloomMin,
         max: store.uBloomMax,
         count: 3,
         function: (value) => store.setBloom(value)
      }
   ]

   const currentParameter = parameters[store.creationPhase]

   // To force the re-render of the slider
   const [key, setKey] = useState(0)

   const [activeValue, setActiveValue] = useState(0)

   useEffect(() => {
      setActiveValue(currentParameter.value)
   }, [store.creationPhase])


   return <>

      <p>{currentParameter.name}</p>
      <Slider
         minText={currentParameter.minText}
         maxText={currentParameter.maxText}
         min={currentParameter.min}
         max={currentParameter.max}
         value={activeValue}
         count={currentParameter.count}
         handleClick={(e) => {
            currentParameter.function(e.target.value)
            setActiveValue(e.target.value)
         }}
         key={key}
      />
      <Button />
   </>
}