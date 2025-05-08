import { LOGO_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { name, cuisines, avgRating, deliveryTime, costForTwo } = resData?.info;

  return (
    <div className="res-card">
      <img
        alt="res-logo"
        className="res-logo"
        src={LOGO_URL + resData.info.cloudinaryImageId}
      />
      <div className="res-name-container">
        <h3 className="res-name">{name}</h3>
      </div>

      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{deliveryTime}</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

export default RestaurantCard;
