import { useDispatch, useSelector } from "react-redux";
import ListItem from "./ListItem";
import { clearCart } from "../utils/cartSlice";
import CartEmpty from "./CartEmpty";
import CartItemQuantity from "./CartItemQuantity";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return Object.values(cartItems).length > 0 ? (
    <div className="flex mt-5 mx-6 p-20 justify-between sm:p-0 xsm:p-0 mob:p-0 sm:flex-col xsm:flex-col mob:flex-col">
      <div className="bg-white text-black drop-shadow-md flex-2 p-6 w-auto">
        <div className="flex justify-between items-center mb-2">
          <h1 className="text-lg mt-2.5 text-title font-bold ">Cart</h1>
          <button
            className="w-[80px] h-[22px] rounded-md bg-red text-black text-sm"
            onClick={() => handleClearCart()}
          >
            Clear Cart
          </button>
        </div>
        {/* <ListItem items={cartItems} /> */}
        {Object.values(cartItems).map((item) => {
          return (
            <div className="my-3">
              <div className="flex items-center mt-2">
                <p className="px-2 w-48 text-lg bg-white text-black">{item.name}</p>
                <div className="px-5">
                  <CartItemQuantity items={item} key={item.id} />
                </div>

                <p className="font-thin text-sm">
                  {"₹ " + (item.price
                ? item.price / 100
                : item.defaultPrice / 100 )* item.quantity}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  ) : (
    <div className="container mx-auto">
      <CartEmpty
        text={"Your cart is empty ! "}
        buttonText={"SEE RESTAURANTS NEAR YOU"}
      />
    </div>
  );
};

export default Cart;

//  {cartItems.map((item)=>{
//   return (
//     <div className="my-3">
//       <div className="flex items-center mt-2">
//         <p className="px-2 w-48 text-sm">{item.name}</p>
//         <div className="px-5">
//           <ListItem items={item} key={item.id} />
//         </div>

//         <p className="font-thin text-sm">
//           {"₹ " + (item.price / 100) * item.quantity}
//         </p>
//       </div>
//     </div>
//   );
// })}
