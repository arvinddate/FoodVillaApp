import React from "react";
import "./restaurantCard.css"
import { IMG_CDN_URL } from "../../constants";
const RestaurantCard = ({
    name,
    cuisines,
    cloudinaryImageId,
    lastMileTravelString,
}) => {
    return (
        <div className="card">
            <img src={IMG_CDN_URL + cloudinaryImageId} alt="Card img" />

            <h2>{name}</h2>
            <h3>{cuisines.join(", ")}</h3>
            <h4>{lastMileTravelString} Minutes</h4>
        </div>
    );

};
export default RestaurantCard;