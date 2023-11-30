import ItemList from "./ItemList";


const RestaurantCategory = ({data, showItems, setShowIndex}) => {

    const handleClick = () => {
        setShowIndex();
    };
  
    return (
    
        <div>
        <div className="w-7/12 bg-gray-100 shadow-lg p-4 mx-auto my-4 rounded-lg">
            {/*Header*/}
            <div className="flex justify-between hover:cursor-pointer" onClick={handleClick}>
                <span className="font-medium text-md">{data.title} ({data.itemCards.length})</span>
                <span className>⬇</span>
            </div>  
            {showItems && <ItemList items={data.itemCards}/>}
            {/* Accordian body */}
        </div>
        </div>

    )
};


export default RestaurantCategory;