import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";
import resList from "../utils/mockData";

const Body = () => {

  const [listOfResturant, setList] = useState(resList);

    return (
      <div className="body">
      <div className="search">
        <button className="search">
          Search
        </button>
      </div>
      <div className="filter">
      <button className="filter-btn"
      onClick={()=> {
        setList()
        const filteredList = listOfResturant.filter(
          (res)=>res.avgRating >4.3
        );
        setList(filteredList);
      }}>

        Top Rated Restaurant</button>
        </div>
      <div className="res-container">
  
      {listOfResturant.map((restaurant) => (
        <RestaurantCard key={restaurant.id} resData={restaurant}/>
       ))}
  
      </div>
      </div>
    );
  };

  export default Body;