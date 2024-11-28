import Button from "../utils/Button";
import useStore from "../useStore";
import Slider from "../utils/Slider";
import { useEffect, useState } from "react";

export default function Creation() {

   const store = useStore(state => state)

   const parameters = [
      {
         minText: 'Passive',
         maxText: 'Active',
         value: store.uStrength,
         min: store.uStrengthMin,
         max: store.uStrengthMax,
         count: 5,
         function: (value) => store.setStrength(value)
      },
      {
         minText: 'Calm',
         maxText: 'Impulsive',
         value: store.uSpeed,
         min: store.uSpeedMin,
         max: store.uSpeedMax,
         count: 5,
         function: (value) => store.setSpeed(value)
      },
      {
         minText: 'Extrovert',
         maxText: 'Introvert',
         value: store.uColorBase,
         min: store.uColorBaseMin,
         max: store.uColorBaseMax,
         count: 5,
         function: (value) => store.setColorBase(value)
      },
      {
         minText: 'Positive',
         maxText: 'Negative',
         value: store.uColorAccent,
         min: store.uColorAccentMin,
         max: store.uColorAccentMax,
         count: 5,
         function: (value) => store.setColorAccent(value)
      },
      {
         minText: 'Obvious',
         maxText: 'Mysterious',
         value: store.uRoughness,
         min: store.uRoughnessMin,
         max: store.uRoughnessMax,
         count: 3,
         function: (value) => store.setRoughness(value)
      },
      {
         minText: 'Selfish',
         maxText: 'Selfless',
         value: store.uGlow,
         min: store.uGlowMin,
         max: store.uGlowMax,
         count: 3,
         function: (value) => store.setGlow(value)
      }
   ]

   const currentParameter = parameters[store.creationPhase]

   // To force the re-render of the slider
   const [sliderKey, setSliderKey] = useState(10)

   const [activeValue, setActiveValue] = useState(0)

   useEffect(() => {
      setActiveValue(currentParameter.value)
   }, [store.creationPhase])

   return <>

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
         key={sliderKey}
      />
      <Button />
   </>
}