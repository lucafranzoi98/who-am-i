export default function Radio({ handleClick, value, hasText, text, checked }) {

   let myRadioStyle = 'my_radio self-center h-6 w-1 rounded-sm hover:bg-yellow-100 transition '

   if (checked)
      myRadioStyle += 'bg-yellow-400'
   else
      myRadioStyle += 'bg-orange-400'


   return <label
      className="text-white flex flex-col justify-end cursor-pointer w-10"
   >
      {hasText && <span className="self-center">{text}</span>}
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
