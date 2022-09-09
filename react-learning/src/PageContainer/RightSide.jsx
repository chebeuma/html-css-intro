const RightSide = () => {
    return(
           
        <div className="flex flex-col">
        
            <div className="flex flex-row mt-2">
                <button className="border border-gray-100 w-2/12" type="button" aria-label="my items">My Items</button>
                <button className="border border-gray-100 w-2/12">Snacks</button>
                <button className="border border-gray-100 w-2/12">Beverages</button>
                <button className="border border-gray-100  w-2/12">Meat & Seafood</button>
                <button className="border border-gray-100  w-2/12">Fresh Produce</button>
                <button className="border border-gray-100  w-2/12">Delli</button>
                <button className="border border-gray-100  w-2/12">Frozen Food</button>
                <button className="border border-gray-100  w-2/12">Dairy</button>
                <button className="border border-gray-100  w-2/12">></button>
            
            </div>
            
            <div className="flex flex-row bg-gray-200 p-4 mt-8">
                 <h2 className="p-2"> Reserve pickup or delivery</h2>
                 <h3 className="p-2">|</h3>
                 <button type="button" aria-label="see times">see times</button>
            </div>
            
            
            <div className=" flex py-10 w-full mt-8 p-8">
                       
                 <img src={require('./walmart.jpeg')} ></img>
                      
            </div>
           
        
        </div>

    )
}
export default RightSide;