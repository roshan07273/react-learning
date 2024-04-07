import React, { useEffect } from "react";
import RestaurantCard from "../components/RestaurantCard";
import restaurantList from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
const Body = () => {
  const [listOfRestaurant, setlistOfRestaurant] = useState(restaurantList);
  const [searchText, setsearchText] = useState("");
  //API calling using use effect hook
  /*  useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //   const data = await fetch(
  //     "https://www.swiggy.com/mapi/restaurants/list/v5?lat=28.65420&lng=77.23730&collection=83667&tags=layout_CCS_Sandwiches&sortBy=&filters=&type=rcv2&offset=0&carousel=true&third_party_vendor=1"
  //   );
  //   const json = await data.json();
  //   setlistOfRestaurant(json?.data?.cards[2]?.data?.data?.cards);
  };*/

  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          />
          <button
            className="search-btn"
            onClick={() => {
              const filterData = listOfRestaurant.filter((items) => {
                return items.data.name.toLowerCase().includes(searchText);
              });
              setlistOfRestaurant(filterData);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filterData = listOfRestaurant.filter(
              (res) => res.data.avgRating > 4
            );
            setlistOfRestaurant(filterData);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
