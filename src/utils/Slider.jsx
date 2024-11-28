import Radio from "./Radio"

export default function Slider({ minText, maxText, min, max, count, handleClick, value }) {

   const step = (max - min) / (count - 1)

   let texts = [
      minText,
      null,
      'Neutral',
      null,
      maxText
   ]

   let sliderStyle = 'h-1 bg-neutral-500 absolute bottom-2 -z-10 '

   if (count == 3) {
      texts = texts.filter(val => val)
      sliderStyle += 'w-32 md:w-40'
   } else {
      sliderStyle += 'w-60 md:w-80'
   }

   const values = Array.from({ length: count }, (_, i) => {
      const value = min + (step * i)
      return Math.round(value * 100) / 100
   })

   return <>
      <div className="flex w-full justify-center relative mb-10">
         <div className={sliderStyle}></div>
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
