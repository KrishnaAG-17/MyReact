import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({resData}) => {
    const {name, cuisines, cloudinaryImageId, deliveryTime,avgRating, costForTwoString} = resData;
    return (
        <div className="w-44 m-4 bg-gray-200 p-2 rounded-lg hover:bg-blue-100">
            <img className="rounded-lg" 
            alt="res-logo" src={CDN_URL +     
            cloudinaryImageId}/>
            <h3 className="text-sm pt-1 font-bold">{name}</h3>
            <h4 className="text-sm pt-1">{cuisines?.join(', ')}</h4>
            <h4 className="text-sm pt-1">Delivery By: {resData?.sla?.deliveryTime} minutes</h4>
            <h4 className="rating text-sm pt-1">Rating: {avgRating}</h4>
            <h4 className="text-sm pt-1">{costForTwoString}</h4>
        </div>
    );
};

export const withBestSellerLabel = () => {
    
    return (props) => {

        return (
            <div>
                <label className=" absolute bg-gray-700 text-white rounded-lg text-sm p-0.5">BestSeller</label>
                <RestaurantCard {...props} />
            </div>
        );
    };
};


export default RestaurantCard;