export default function Radio({ handleClick, value, hasText, text, checked }) {

   let myRadioStyle = 'self-center h-5 w-5 rounded-xl group-hover:bg-neutral-100 group-hover:border-neutral-100 transition-all duration-500 border-2 '
   let myTextStyle = 'self-center group-hover:text-neutral-100 transition-all duration-500 '

   if (checked) {
      myRadioStyle += 'bg-neutral-100 border-neutral-100 radio_shadow'
      myTextStyle += 'text-neutral-100'
   }
   else {
      myRadioStyle += 'bg-neutral-800 border-neutral-500'
      myTextStyle += 'text-neutral-500'
   }


   return <label
      className="group text-neutral-100 cursor-pointer w-10 flex flex-col justify-between px-10"
   >
      {hasText && <span className={myTextStyle}>{text}</span>}
      <input
         type="radio"
         name="slider"
         value={value}
         checked={checked}
         onChange={handleClick}
         className="invisible"
      />
      <div className={myRadioStyle}></div>
   </label>
}
