export default function Container({ children, isCentered = false}) {
   let containerStyle = "flex flex-col h-full items-center p-10 "
   if (isCentered)
      containerStyle += 'justify-center'
   else
      containerStyle += 'justify-end'

   return <>
      <div className={containerStyle}>
         {children}
      </div>
   </>
}