import Radio from "./Radio"

export default function Slider({ minText, maxText, min, max, count, handleClick, value }) {

   const step = (max - min) / (count - 1)

   let texts = [
      minText,
      null,
      null,
      maxText
   ]

   let sliderStyle = 'h-1 bg-neutral-500 absolute bottom-2 -z-10 '

   if (count == 2) {
      texts = texts.filter(val => val)
      sliderStyle += 'w-36 md:w-36'
   } else {
      sliderStyle += 'w-40 md:w-56'
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
               hasText={index == 0 || index == count - 1}
               text={texts[index]}
               checked={value == val}
               count={count}
            />
         )}
      </div>
   </>
}
