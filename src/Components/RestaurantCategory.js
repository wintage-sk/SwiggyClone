import React,{useState} from 'react'
import ListItem from './ListItem';


const RestaurantCategory = ({data, showItems, setShowIndex}) => {
 
  const[isVisible,setIsVisible]=useState(false);
    const handleClick=()=>{
        setShowIndex()
        setIsVisible(!isVisible)

    }
   
  return (
    <div  className=" w-9/12 p-5">
    <div className="flex justify-between items-center" onClick={handleClick} >
        <h3
         className="font-bold text-lg cursor-pointer">
            {data.title} ({data.itemCards.length})
          </h3>
          {isVisible ? (
          <span onClick={handleClick} className="cursor-pointer">⬆️</span>
        ) : (
          <span onClick={handleClick} className="cursor-pointer">⬇️</span>
        )}
    </div>
    {isVisible&&showItems && <div className="flex flex-col " > {data.itemCards.map((item)=> (<ListItem key ={item.id} items={item.card.info }/>))}</div>
}
    
    </div>
  )
}

export default RestaurantCategory