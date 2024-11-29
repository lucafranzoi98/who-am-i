export default function Radio({ handleClick, value, hasText, text, checked, count }) {

   let myRadioStyle = 'self-center h-5 w-5 rounded-xl group-hover:bg-neutral-100 group-hover:border-neutral-100 transition-all duration-500 border-2 '
   let myTextStyle = 'self-center group-hover:text-neutral-100 transition-all duration-500 text-lg md:text-xl text-center text-balance '

   if (checked) {
      myRadioStyle += 'bg-neutral-100 border-neutral-100 radio_shadow'
      myTextStyle += 'text-neutral-100'
   }
   else {
      myRadioStyle += 'bg-neutral-800 border-neutral-500'
      myTextStyle += 'text-neutral-500'
   }

   let myLabelStyle = 'group text-neutral-100 cursor-pointer w-1 flex flex-col justify-between px-7 md:px-10 '

   if(count == 2) {
      myLabelStyle += 'px-16 md:px-16'
   }
    

   return <label
      className={myLabelStyle}
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
