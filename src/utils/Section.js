
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import React from "react";



const Section = ({id, title, description, isVisible, setIsVisible }) => {
  
    return (
      
      <div className="flex flex-col shadow rounded-md p-2.5 m-2.5">
        <div className="flex justify-between items-center"> 
          <h3 className="font-semibold text-lg text-title">{title}</h3>
          {
          isVisible ? (
          <SlArrowUp onClick={() => setIsVisible(false)} className="cursor-pointer" />
        ) : (
          <SlArrowDown onClick={() => setIsVisible(true)} className="cursor-pointer" />
        )}
        </div>
        {isVisible && <p className="text-bio text-base">{description===null?<a class="_1vMNs" href="mailto:careers@swiggy.in?subject=I want to explore career opportunities with Swiggy">SEND AN EMAIL</a>:description}</p>}
      </div>
    );
  };
  export default Section;