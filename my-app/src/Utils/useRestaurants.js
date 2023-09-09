import { useState,useEffect} from "react";
import { swiggy_menu_api_URL } from "../constants";

const useRestaurant =(id)=>{
     const [restaurant,setRestauraunt]=useState(null);
    useEffect(() => {
        getRestaurantInfo();
    }, []);

    async function getRestaurantInfo() {
        const data = await fetch({swiggy_menu_api_URL } +
            { id }
        );
        const json = await data.json();
        console.log(json);
        setRestauraunt(json.data);
    }
    return restaurant;
}
export default useRestaurant;