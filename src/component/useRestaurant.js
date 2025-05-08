import { useState, useEffect } from "react";

const useRestaurant = () => {
  const [listOfResturant, setList] = useState([]);
  const [filteredRestaurant, setFiltered] = useState([]);
  const [searchText, setSearchText] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    setList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFiltered(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  return { listOfResturant, filteredRestaurant, searchText, setSearchText, setFiltered};
};

export default useRestaurant;
