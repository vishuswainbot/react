import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState, useEffect   } from "react";

const Body = () => {

  const [listOfResturant, setList] = useState(resList);

  useEffect(()=> {
    fetchData();
  }, []
  );

  const fetchData = async () =>{
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json.data.cards[0].card.card.imageGridCards.info[0]);
    setList(json.data.cards[0].card.card.imageGridCards.info);
  };

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
          (res)=>res.info.avgRating >4.5
        );
        setList(filteredList);
      }}>

        Top Rated Restaurant</button>
        </div>
      <div className="res-container">
  
      {listOfResturant.map((restaurant) => (
        <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
       ))}
  
      </div>
      </div>
    );
  };

  export default Body;