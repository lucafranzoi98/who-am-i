export default function Button({ children = 'Continue', handleClick }) {

   return <>
      <button
         className='px-4 py-2 rounded-md text-gray-400 uppercase shadow_button'
         onClick={handleClick}
      >
         {children}
      </button>
   </>
}