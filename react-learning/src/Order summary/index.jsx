import './summary.css'
import CartCounter from "./CartCounter"
import Discount from "./Discount"

function OrderSummary(){
    return(
    <div className="order-summary">

                <div className=" flex flex-row border border-black w-3/12  mt-0">
                    <div>
                               <div className="my-10 text-2xl mt-4 p-2 text-center mb-0"> Order Summary </div>
            
                               <div className="flex flex-col">
                                    <div className="flex flex-row mt-0">
                                          <div className="bg-white  felx text-1xl summary-left mt-0">Price </div>
                                          <div className="bg-white  flex text-1xl summary-right mt-0">$319.98</div>
                                    </div>

                                    <div className="flex flex-row mt-0">
                                        <div className="bg-white  text-1xl summary-left  ">Discount </div>
                                        <div className="bg-white  text-1xl summary-right ">$31.9</div>
                                    </div>
                          
                                    <div className="flex flex-row mt-0">
                                        <div className="bg-white  text-1xl summary-left">Shipping </div>
                                        <div className="bg-white  text-1xl summary-right text-green-600 ">Free</div>
                                    </div>
                          
                                    <div className="flex flex-row mt-0">
                                         <div className="bg-white  text-1xl summary-left ">Coupon Applied </div>
                                         <div className="bg-white  text-1xl summary-right">$0.00</div>
                                    </div>
                           
                                         <hr className="border mt-2"></hr>
                           
                                    <div className="flex flex-row summary-data mt-0">
                                          <div className="bg-white  text-1xl  summary-left ">TOTAL </div>
                                          <div className="bg-white  text-1xl  summary-right float-left">$288.08 </div>
                                    </div>
                           
                                    <div className="text-1xl text-start border-width-1px mt-0">Estimated Delivery by <strong> 01 Feb 2021</strong> </div>
                  
                                    
                                    <label className="flex flex-col text-start mt-0">
                          
                                    <input placeholder='Coupon Code' className="border border-black p-2 mt-2 rounded-md"/>
                               
                                    </label>
                                    
                                     <button className="bg-blue-600 p-2 mt-2 text-white rounded-md mb-2">PROCEED TO CHECKOUT</button>
             
                                </div>
                    </div>
                </div>
             <div className='w-full md:w-7/12'>
              <CartCounter/>
             </div>   

             <div className='w-full md:w-7/12'>
              <Discount/>
             </div> 
                
    </div>

    )
}
 export default OrderSummary
       
