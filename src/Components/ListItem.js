import React,{useState} from 'react';
import { CDN_URL } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addItem,removeItem} from '../utils/cartSlice';

const ListItem = ({items}) => {
  const dispatch=useDispatch();
  const [itemCount, setItemCount] = useState(0);
  const { id, name, description, price, imageId } = items;
  console.log(items)

  const handleAddItem = (item) => {
    dispatch(addItem(item)); // redux send action object to store {payload : item}
    setItemCount(itemCount + 1);
  };

  const handleRemoveItem = (id) => {
    let updatedCount;
    dispatch(removeItem(id));
    updatedCount = itemCount > 0 ? itemCount - 1 : 0;
    setItemCount(updatedCount);
  };
  // const handleAddItem=(item)=>{
  //   dispatch(addItem(item));
  // };
    return(
    
      <div
        className="flex justify-between basis-[848px] max-h-[180px] p-5 border-b border-gray"
        key={items.id}
      >
        <div  className="flex flex-col basis-[400px]">
            <h3 className="font-bold text-lg w-3/5" >{items.name}</h3>
            <p className="mt-1 text-base font-normal">
              - ₹
              {items.price
                ? items.price / 100
                : items.defaultPrice / 100}
            </p>
          <p className="mt-3.5 leading-5 text-gray-desc w-4/5 text-base overflow-hidden">{items.description}</p>
        </div>
        <div className="flex flex-col justify-center items-center w-[118px] h-[150px]">
        {items.imageId && (
          <img
            className="w-[118px] h-[96px]"
            src={CDN_URL + items.imageId}
            alt={items.name}
          />
        )}
        <div className=" flex justify-evenly items-center w-[100px] h-[34px] mt-2.5 text-gray-count outline-none border bg-white border-gray ">
        {/* <img src={CDN_URL + item.card.info.imageId} className="w-full" /> */}
          <button
            className="text-xl text-gray-count font-semibold"
            onClick={() => handleRemoveItem(id)}
          >
            {" "}
            -{" "}
          </button>
          <span className="text-base text-green"> {itemCount} </span>
          <button
            className="text-green text-xl"
            onClick={() => handleAddItem(items)}
          >
            {" "}
            +{" "}
          </button>
        </div>
          {/* <div className="absolute">
            <button
              className="p-2 mx-16 rounded-lg bg-black text-white shadow-lg"
              onClick={() => handleAddItem(item)}
            >
              Add +
            </button>
          </div> */}
          </div>
      </div>
);
};
export default ListItem