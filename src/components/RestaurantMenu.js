import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useParams } from "react-router-dom";
import React, { useState } from "react";
import ItemList from "./ItemList";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () =>{

    const {resId} = useParams();

    const [showIndex, setShowIndex] = useState(null);
            
    //import resInfo from useRestaurantMenu.
    const  resInfo = useRestaurantMenu(resId);
    
    if(resInfo === null) return <Shimmer/>;

    const {name, cuisines, costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info;

    const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    // Iterate over itemCards to display items using map() function.

    const Categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter( c => 
        c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

        console.log(Categories);
    return (  
        <div className="p-6 text-center">
            <h1 className="font-bold text-lg">{name}</h1>   
            <p className="pt-2 pb-0 font-medium">{cuisines.join(", ")} - {costForTwoMessage}</p>
            {/*Categories accordian*/}
            {/* Controlled Component*/}
            {Categories.map((catagory, index) => (
              <RestaurantCategory key={catagory?.card?.card.title} 
                data={catagory?.card?.card}
                showItems={index === showIndex ? true : false}
                setShowIndex={() => setShowIndex(index)}
              />
            ))}
        </div>
    );
};  

export default RestaurantMenu;