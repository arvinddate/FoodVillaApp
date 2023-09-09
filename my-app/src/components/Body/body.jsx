import React, { useEffect, useState } from "react";
import axios from "axios";
import { restaurantList } from "../../constants";
import RestaurantCard from "../Card/restaurantCard";
import "./body.css"
import { Link } from "react-router-dom";
import Shimmer from "../Shimmer/shimmer";


function filterData(searchText, restaurants) {
    const filterData = restaurants.filter((restaurant) =>
        restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase())
    );

    return filterData;
}

function Body() {

    useEffect(() => {
        // API call
        getRestaurants();
    }, []);

    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [errorMessage, setErrorMessage] = useState("");


    async function getRestaurants() {
        // handle the error using try... catch
        try {
            const response = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING");
            const json = await response.json();

            // initialize checkJsonData() function to check Swiggy Restaurant data
            async function checkJsonData(jsonData) {
                for (let i = 0; i < jsonData?.data?.cards.length; i++) {

                    // initialize checkData for Swiggy Restaurant data
                    let checkData = json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

                    // if checkData is not undefined then return it
                    if (checkData !== undefined) {
                        return checkData;
                    }
                }
            }

            // call the checkJsonData() function which return Swiggy Restaurant data
            const resData = await checkJsonData(json);

            // update the state variable restaurants with Swiggy API data
            setAllRestaurants(resData);
            setFilteredRestaurants(resData);
        } catch (error) {
            console.log(error);
        }
    }
    //https://reqres.in/api/users?page=2




    const searchData = (searchText, restaurants) => {
        if (searchText !== "") {
            const filteredData = filterData(searchText, restaurants);
            setFilteredRestaurants(filteredData);
            setErrorMessage("");
            if (filteredData.length === 0) {
                setErrorMessage(`Sorry, We couldn't find any results for "${searchText}"`)
            }

        } else {
            setErrorMessage("");
            setFilteredRestaurants(restaurants);
        }
    };
    if (!allRestaurants) return null;

    return (
        <>
            <div className="site-body">
                <div className="body-container">
                    <div className="search-box">
                        <div className="searchField-box">
                            <input type="text"
                                className="input-search"
                                onChange={(e) => { setSearchText(e.target.value) }}
                                placeholder="Search the Restaurants"
                                value={searchText} />
                            <button
                                className="search-btn"
                                onClick={() => {
                                    searchData(searchText, allRestaurants);
                                }}>Search</button>
                        </div>
                    </div>
                    {errorMessage && <div className="search-error-message">{errorMessage}</div>}



                  <div className="restaurant-list">
                        {filteredRestaurants.map((restaurant) => {
                            return (
                                <Link to={"/restaurant/" + restaurant?.info?.id} key={restaurant?.info?.id}>
                                    <RestaurantCard {...restaurant.info} />
                                </Link>
                            );
                        })}
                    </div>

                </div>

            </div>

        </>
    )
}
export default Body;