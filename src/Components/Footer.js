import React from 'react'


const Footer = () => {
  const Year = new Date().getFullYear()
  return (
    <div className="flex mob:flex-col mob:basis-[150px]   justify-around  w-full shadow h-14 bg-red-500 text-white text-center leading-[3.5rem] bottom-0 fixed z-40">
       <div className="text-center mob:text-xs "> &copy; {Year} GoodFood</div>
      <span className=" text-left mob:text-xs mob:text-center ">Hey  .... Thanks for using our Good Food <span className="text-blue">&#x2764;</span> </span>
      <span className="text-center mob:text-xs">Developed by Satheesh</span>
    </div>
  )
}

export default Footer