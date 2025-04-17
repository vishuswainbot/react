import {LOGO_URL} from "../utils/constants";

const RestaurantCard = (props) => {
    const {resData} = props;
  
    const {name ,cuisines, avgRating, deliveryTime, costForTwo} = resData?.info;
  
    return(
      <div className="res-card">
        <img alt="res-logo" className="res-logo" src={LOGO_URL + resData.info.cloudinaryImageId}/>
        <h3>{name}</h3>
        <h3>{cuisines.join(", ")}</h3>
        <h3>{avgRating}</h3>
        <h3>{deliveryTime}</h3>
        <h3>{costForTwo}</h3>
      </div>
    );
  };

  export default RestaurantCard;