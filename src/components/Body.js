import RestaurantCard, { withBestSellerLabel }from "./RestaurantCard";
import {useState ,useEffect} from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {   
    
    // state variable - Super Powerful variables
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState(listOfRestaurants)
    const [searchText, setSearchText] = useState("");

    const onlineStatus = useOnlineStatus();

    const RestaurantCardWithBestSeller = withBestSellerLabel(RestaurantCard);

    useEffect(() => {
        fetchData();
      }, []);
    
      const fetchData = async () => {
        const data = await fetch(
          'https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
        );
        const json = await data?.json();

        console.log(json);
        //Optional Chaining
        setListOfRestaurants(
          json?.data?.cards?.[2]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
        );
        setFilteredRestaurants(
          json?.data?.cards?.[2]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
        );
      } ;

    // conditional Rendering
    // if(listOfRestaurants.length === 0){
    //     return <Shimmer/>;
    // }

    if(onlineStatus === false) return <h1 className="p-8 font-medium text-lg ">Looks like you're Offline, Please check your internet connection;</h1>;

    return listOfRestaurants?.length === 0 ? ( <Shimmer/> ) 
    : (
        <div className="filter">
            <div className="flex flex-wrap p-4">
                <div className="p-2">
                    <input type="text" className="p-2 border border-solid border-blue-300  rounded-lg" value={searchText} onChange={(e) => {
                        setSearchText(e.target.value);
                    }}/>
                </div>
                <div>
                    <button className="p-2 m-2 bg-blue-100 rounded-lg hover:bg-blue-200" onClick={() => 
                   { //Filter the restaurant cards and update the UI
                     //searchText
                   
                    const filteredRestaurant =  listOfRestaurants.filter((res) =>  
                    res?.info?.name?.toLowerCase().includes(searchText.toLowerCase())
                    );
                    setFilteredRestaurants(filteredRestaurant);
                    console.log(filteredRestaurant);
                    }}>Search</button>

                </div>
                <div>
                <button className="p-2 m-2 bg-blue-100 rounded-lg hover:bg-blue-200" onClick= {() => {
                    const filteredList = listOfRestaurants.filter(
                        (res) => res?.info?.avgRating > 4.2
                    );     
                    setFilteredRestaurants(filteredList);
                }}>
                Top Rated Restaurant</button>
                <button className="p-2 m-2 bg-blue-100 rounded-lg hover:bg-blue-200" onClick= {() => {                        
                    setFilteredRestaurants(listOfRestaurants);
                }}>
                Reset</button>
            </div>
          </div>
            <div className="restaurant-list flex flex-wrap pl-10 shadow-lg">
            {filteredRestaurants?.map((restaurant) => {
        return <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}>
          { restaurant.info.avgRating >= 4.5 ? (<RestaurantCardWithBestSeller resData= {restaurant.info}/>) :
              (<RestaurantCard resData={restaurant?.info} />
         )}
         </Link>;
      })}
    </div>  
    </div>
     )
};

export default Body;