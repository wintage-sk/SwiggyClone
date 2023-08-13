import React, { useEffect, useState } from "react";
import { ReactDOM } from "react";
import RestaurentCard, { withPromoted } from "./RestaurentCard";
import { useState, useEffect,useContext } from "react";
import Shimmer from "./Shimmer";
import { CARD_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "./userContext";

const Body = () => {
  const [listOfRest, setListOfRest] = useState([]);
  const [filterRestaurant, setFilterRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const { loggedInUser, setUserName } = useContext(UserContext);

  PromotedRestaurant = withPromoted(RestaurentCard);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(CARD_URL);
    const json = await data.json();
    console.log(json)
    setListOfRest(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setFilterRestaurant(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();

  if (!onlineStatus){
    return (
      <h1  className="font-bold bg-gray text-red-500 text-3xl text-center">
        Looks like you're offline!! Please check your internet connection.
      </h1>
    );}
  return listOfRest&&listOfRest.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex justify-between mob:flex-col">
        <div className="flex justify-evenly min-w-[500px] mob:min-w-[375px] h-[100px] mob:h-[50px] items-center m-auto">
          <input
            className="outline-none text-base mob:text-xs p-[5px] basis-[350px] mob:basis-[270px] h-[30px] rounded-md ring-1 ring-gray bg-gray" key="input-text"
            type="text"
            placeholder=" Search for restaurant" 
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
          className=" p-1 rounded-md primary bg-blue-300 basis-[60px] mob:basis-[100px] mob:text-xs"
            onClick={() => {
              const filterRestaurants = listOfRest.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setFilterRestaurant(filterRestaurants);
              console.log(list)
            }}
          >
            Search
          </button>
        </div>
        <div className="p-2 flex justify-center items-center m-auto bg-green-200 rounded-lg mob:text-xs basis-[350px]">
          <button
            className="outline-none text-base "
            onClick={() => {
              const filterTop = listOfRest.filter(
                (top) => top.info.avgRating > 4.1
              );
              setFilterRestaurant(filterTop);
            }}
          >
            Top Rated Restaurant
          </button>
        </div>
        {/* <div className="search m-4 p-4 flex items-center">
          <label className="p-2">UserName : </label>
          <input
            className="border border-black p"
            value={loggedInUser}
             onChange={(e) => setUserName(e.target.value)}
          />
        </div> */}
      </div>

      <div className="flex flex-wrap justify-center">
        {filterRestaurant.map((resl) => (
          <Link key={resl?.info.id} to={"/restaurant/" + resl?.info.id} className="basis-[250px] p-2.5 mb-2 mob:basis-[150px]" >
            {resl?.info?.isOpen ? (
              <PromotedRestaurant restData={resl?.info} />
            ) : (
              <RestaurentCard restData={resl?.info} />
            )}
          </Link>
        ))}
      </div>
     
    </div>
  );
};

export default Body;
