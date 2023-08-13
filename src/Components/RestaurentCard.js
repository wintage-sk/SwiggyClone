import React from "react";
import  ReactDOM  from "react-dom/client";
import {CDN_URL} from "../utils/constants"
import { AiFillStar } from "react-icons/ai";


const RestaurentCard = (props) => {
    const { restData } = props;
    const {
      cloudinaryImageId,
      name,
      avgRating,
      cuisines,
      costForTwo,
      deliveryTime
    } = restData;
    console.log(restData.sla.deliveryTime)
    const buttonStyle = {
      backgroundColor: avgRating == "--" ? "#fff" : parseFloat(avgRating) < 4.0 ? "#db7c38":"#48c479",
      color : isNaN(avgRating)? "#535665" : "#fff"
    }
    
    return (
       
        <div className=" flex flex-wrap  m-4 p-4 w-[250px] h-[400px] basis-[250px] mob:basis-[150px]   rounded-lg bg-gray-100 hover:bg-gray-200">
          <img className="w-full h-[200px] mob:w-[130px]"
          src={
            CDN_URL +
            cloudinaryImageId
          }
          alt="logoimage"
        />
    
        <h3 className="text-base font-bold w-full ">{name}</h3>
      <p className="text-gray-dark text-xs w-full overflow-hidden">{cuisines.join(", ")}</p>
      <div className="flex gap-2 mt-1 justify-between text-xs  text-gray-details font-semibold mob:flex-col mob:items-start">
      <div>{costForTwo}</div>
      <div>|</div>
      <div>{restData.sla.deliveryTime}MIN</div>
      <div>|</div>
          <div className="flex items-center h-5 w-11 gap-1 py-0 px-1" style={buttonStyle}>
            <AiFillStar /><span>{avgRating}</span>
          </div>
          </div>
        </div>
    );
  };
  export const withPromoted=(RestaurentCard)=>{
    return (props)=>{
      return(
        <div>
        <label className="absolute bg-black  text-white m-2 p=2">{}</label>
        <RestaurentCard  {...props}/>
        </div>
      )
    }
  };
  
export default RestaurentCard; 