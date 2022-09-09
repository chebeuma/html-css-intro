
import './Summary.css'

const LeftSide = () =>{
    return(
        
        <div className=" flex flex-row border border-black w-2/12 mt-2">
            <div>
                <div>
                <div className=" text-2xl p-2 text-center mb-0"> In Seasons</div>
                   <div className="flex flex-row border border-gray-100 p-2 ">
                       <button className="text-xs summary-left">Fall Flavours</button>
                       <button className=" summary-right">></button>
                    </div>
                    
                    <div className="flex flex-row border border-gray-100 p-2">
                       <button className="text-xs summary-left">Tailgating</button>
                       <button className="summary-right">></button>
                    </div>
                     
                    
                    <div className="flex flex-row border border-gray-100 p-2">
                       <button className="text-xs summary-left">Back to School</button>
                       <button className="summary-right">></button>
                    </div>
                    
                    <div className="flex flex-row border border-gray-100 p-2">
                      <button className="text-xs summary-left">Back to College</button>
                      <button className="summary-right">></button>
                    </div>
                   
                    <div className="flex flex-row border border-gray-100 p-2">
                       <button className="text-xs summary-left">Halloween</button>
                       <button className=" summary-right">></button>
                    </div>
                    
                </div>
            <div>             
               <div lassName=" text-2xl p-2 text-center mb-0">Featured Shops</div>
                     <div className="flex flex-row border border-gray-100 p-2 ">
                         <button className="text-xs summary-left">Fall Flavours</button>
                         <button className=" summary-right">></button>
                    </div>

                    <div className="flex flex-row border border-gray-100 p-2 ">
                         <button className="text-xs summary-left">Everyday Meals</button>
                         <button className=" summary-right">></button>
                    </div>

                    <div className="flex flex-row border border-gray-100 p-2 ">
                         <button className="text-xs summary-left">New & Trending</button>
                         <button className=" summary-right">></button>
                    </div>

                    <div className="flex flex-row border border-gray-100 p-2 ">
                         <button className="text-xs summary-left">Shop by Price</button>
                         <button className=" summary-right">></button>
                    </div>

                    <div className="flex flex-row border border-gray-100 p-2 ">
                         <button className="text-xs summary-left">Our Brands</button>
                         <button className=" summary-right">></button>
                    </div>
            
            </div>
            
            </div>
        </div>
    )
}
export default LeftSide