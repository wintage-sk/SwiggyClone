import React from 'react'
import { NavLink } from 'react-router-dom'

const CartEmpty = ({text, buttonText}) => {
  return (
		<div className="flex flex-col justify-center items-center">
			<img src="" alt="" className="h-[200px] w-[200px]" />
			<h2 className="px-14 pt-8 my-4">{text}</h2>
			{buttonText && (
				<NavLink to="/">
					<button className="bg-yellow px-4 py-2 text-blue-dark hover:drop-shadow-lg backdrop-blur">
						{buttonText}
					</button>
				</NavLink>
			)}
		</div>
	);
};

export default CartEmpty;