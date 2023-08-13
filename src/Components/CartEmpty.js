import React from 'react'
import { NavLink } from 'react-router-dom'

const CartEmpty = ({text, buttonText}) => {
  return (
		<div className="flex flex-col justify-center items-center p-10 mt-20">
			<img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0" alt="" className="h-[200px] w-[200px]" />
			<h2 className="px-14 pt-8 my-4">{text}</h2>
			{buttonText && (
				<NavLink to="/">
					<button className="px-4 py-2 text-white bg- bg-red-400 hover:drop-shadow-lg backdrop-blur">
						{buttonText}
					</button>
				</NavLink>
			)}
		</div>
	);
};

export default CartEmpty;