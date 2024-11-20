import Radio from "./Radio"

export default function Slider({ minText, maxText, min, max, handleClick, value }) {

   const count = 5
   const step = (max - min) / (count - 1)

   const texts = [
      minText,
      null,
      'Neutral',
      null,
      maxText
   ]

   const values = Array.from({ length: count }, (_, i) => {
      const value = min + (step * i)
      return Math.round(value * 100) / 100
   })


   return <>
      <div className="flex gap-10 my-8">
         {values.map((val, index) =>
            <Radio
               handleClick={handleClick}
               value={val}
               key={index}
               hasText={!(index % 2)}
               text={texts[index]}
               checked={value == val}
            />
         )}
      </div>
   </>
}
