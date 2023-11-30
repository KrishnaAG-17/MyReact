
import { CDN_URL } from "../utils/constants";

const ItemList = ({items}) => {

    console.log(items);
    return (
        <div>
           {items.map((item) => (
            <div>
            <div
                key={item.card.info.id}
                className="p-2 m-2 border-gray-300 border-b-2 text-left flex justify-between">
                <div className="w-9/12">
                    <div className="py-2">
                        <span className="font-medium text-base">{item.card.info.name}</span>
                        <span className="font-medium text-base"> ₹
                            {item.card.info.price ? 
                            item.card.info.price / 100 : 
                            item.card.info.defaultPrice / 100}</span>
                    </div>
                        <p className="text-xs align-bottom">{item.card.info.description}</p>
                </div>
                <div>
                    <button className="absolute mt-12 ml-9 px-1  bg-gray-100 border-green-500 border font-medium text-green-500 rounded-md hover: cursor-pointer">
                        ADD
                    </button>
                    <img src={CDN_URL + item.card.info.imageId} className="w-28 rounded-lg object-right"/>
                </div>
                  
            </div>
            </div>
           ) )}
        </div>

    );
};


export default ItemList;