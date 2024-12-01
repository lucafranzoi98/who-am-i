import Button from "../utils/Button";
import useStore from "../useStore";
import Slider from "../utils/Slider";
import { useEffect, useState } from "react";

export default function Creation() {

   const store = useStore(state => state)

   const parameters = [
      {
         minText: 'Introvert',
         maxText: 'Extrovert',
         value: store.uSpeed,
         default: store.uSpeedDefault,
         min: store.uSpeedMin,
         max: store.uSpeedMax,
         count: 4,
         function: (value) => store.setSpeed(value)
      },
      {
         minText: 'Close-minded',
         maxText: 'Open-minded',
         value: store.uStrength,
         default: store.uStrengthDefault,
         min: store.uStrengthMin,
         max: store.uStrengthMax,
         count: 4,
         function: (value) => store.setStrength(value)
      },
      {
         minText: 'Insecure',
         maxText: 'Self-confident',
         value: store.uColorBase,
         default: store.uColorBaseDefault,
         min: store.uColorBaseMin,
         max: store.uColorBaseMax,
         count: 4,
         function: (value) => store.setColorBase(value)
      },
      {
         minText: 'Quiet',
         maxText: 'Energetic',
         value: store.uColorMiddle,
         default: store.uColorMiddleDefault,
         min: store.uColorMiddleMin,
         max: store.uColorMiddleMax,
         count: 4,
         function: (value) => store.setColorMiddle(value)
      },
      {
         minText: 'A',
         maxText: 'B',
         value: store.uColorTop,
         default: store.uColorTopDefault,
         min: store.uColorTopMin,
         max: store.uColorTopMax,
         count: 4,
         function: (value) => store.setColorTop(value)
      },
      {
         minText: 'Obvious',
         maxText: 'Mysterious',
         value: store.uRoughness,
         default: store.uRoughnessDefault,
         min: store.uRoughnessMin,
         max: store.uRoughnessMax,
         count: 2,
         function: (value) => store.setRoughness(value)
      },
      {
         minText: 'Selfish',
         maxText: 'Altruistic',
         value: store.uGlow,
         default: store.uGlowDefault,
         min: store.uGlowMin,
         max: store.uGlowMax,
         count: 2,
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
      <Button
         key={sliderKey}
         isDisabled={activeValue == currentParameter.default}
      />
   </>
}