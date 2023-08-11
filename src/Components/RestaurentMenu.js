import React from "react";
import { useParams } from "react-router-dom";
import { useState} from "react";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { AiFillStar } from "react-icons/ai";
import RestaurantCategory from "./RestaurantCategory";

// import { CDN_URL } from "../utils/constants";
// import { MENU_API } from "../utils/constants"
import { useSelector } from "react-redux";
import useItemTotal from "../utils/useItemTotal";
import CartItemQuantity from "./CartItemQuantity";
  // import CartEmpty from "./CartEmpty";
import { Link } from "react-router-dom";
const CartEmpty = ({text}) => {
  return (
		<div className="flex flex-col justify-center items-center">
			<img src="" alt="" className="h-[200px] w-[200px]" />
			<h2 className="px-14 pt-8 my-4">{text}</h2>
			{/* { (
				<NavLink to="/">
					<button className="bg-yellow px-4 py-2 text-blue-dark hover:drop-shadow-lg backdrop-blur">
						Hello
					</button>
				</NavLink>
			)} */}
		</div>
	);
};

const RestaurentMenu = () => {
 
 
  const { resID } = useParams();
   const resInfo =useRestaurantMenu(resID);
   const cartItems = useSelector((store) => store.cart.items);
  // get total price for cart items
  const getItemTotal = useItemTotal();
   const [showIndex, setShowIndex] = useState(null);
console.log(resInfo);
//  const { name, cuisines, costForTwoMessage } =
//    resInfo?.cards[0]?.card?.card?.info;

  // const { itemCards } =
  //   resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  //   console.log(itemCards)
  // const categories =
  //   resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
  //     (c) =>
  //       c.card?.["card"]?.["@type"] ===
  //       "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  //   );
  //   console.log(categories)
  return resInfo &&resInfo.length === 0 ? (
    <Shimmer />
  ) :
   (

    <div className="container">
      <div className="flex basis-full h-60 justify-evenly items-center bg-blue-dark text-gray p-8">
        <img
          className="w-[254px] h-[165px] mob:w-[130px] mob:[81px]"
          src={ "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + resInfo?.cards[0]?.card?.card?.info?.cloudinaryImageId}
          alt={resInfo?.cards[0]?.card?.card?.info?.name}
        />
        <div className="flex flex-col basis-[540px] m-5 ">
          <h2 className="text-3xl max-w-[538px] font-semibold">
            {resInfo?.cards[0]?.card?.card?.info?.name}
          </h2>
          <p className="overflow-hidden whitespace-nowrap text-[15px] max-w-[538px]">
            {resInfo?.cards[0]?.card?.card?.info?.cuisines.join(", ")}
          </p>
          <div className="flex mt-5 justify-between items-center text-sm font-semibold pb-2.5 max-w-[342px] mob:text-xs mob:font-normal">
            <div className="flex items-center px-1 py-0 gap-1">
              <AiFillStar />
              <span>{resInfo?.cards[0]?.card?.card?.info?.avgRating}</span>
            </div>
            <div>|</div>
            <div>{resInfo?.cards[0]?.card?.card?.info?.locality
}</div>
            <div>|</div>
            <div>{resInfo?.cards[0]?.card?.card?.info?.costForTwoMessage}</div>
          </div>
        </div>
      </div>

    <div className="flex justify-center items-center sm:flex-col xsm:flex-col mob:flex-col" >
    
        {/* <h1 className="font-bold my-6 text-2xl">{resInfo?.cards[0]?.card?.card?.info.name}</h1>
        <p className="font-bold text-lg">
        {resInfo?.cards[0]?.card?.card?.info.cuisines.join(", ")}- { resInfo?.cards[0]?.card?.card?.info?.costForTwoMessage}
        </p>  */}
       {resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    ).map((c,index)=> <RestaurantCategory key={c?.card?.card?.title} data={c?.card?.card} 
    showItems={index === showIndex ? true : false}
    setShowIndex={() => setShowIndex(index)}/>)}  
     
  </div> 
  
  {/* <div className="basis-[30%]">
          {Object.values(cartItems).length > 0 ? (
            <div className=" card-container basis-[298px] p-10">
              <h1 className="font-bold text-lg mt-2.5">Cart</h1>

              <p className="text-gray-count">
                {Object.values(cartItems).length} item
              </p>

              {Object.values(cartItems).map((item) => {
                return (
                  <div className="flex items-center mt-2 justify-between">
                    <p className="w-40 text-sm">{item.name}</p>
                    <div className="w-30 px-5">
                      <CartItemQuantity items={item} key={item.id} />
                    </div>

                    <p className="w-10 font-thin text-sm">
                      {"₹ " + (item.price / 100) * item.quantity}
                    </p>
                  </div>
                );
              })}
              <div className="border border-gray my-4"></div>
              <div className="flex justify-between mt-4">
                <p className="text-sm text-bio ">Sub Total</p>
                {"₹ " + getItemTotal()}
              </div>
              <div className="flex justify-center mt-10">
                <Link to="/cart">
                  {" "}
                  <button className="bg-yellow px-4 py-2 text-blue-dark hover:drop-shadow-lg backdrop-blur">
                    {" "}
                    CHECKOUT
                  </button>
                </Link>
              </div>
            </div>
          ) : (
            <div className="card-container w-[348px]">
              
               <CartEmpty
                text={
                  "Good food is always cooking! Go ahead, order some yummy items from the menu."
                }
              /> 
            </div>
          )}
  </div> */}
  </div>
  
  );

 }
export default RestaurentMenu;
