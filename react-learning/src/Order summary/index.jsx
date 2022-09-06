import "./summary.css";

function OrderSummary(){
    return(
        <div className="order-summary">
           <div className=" flex flex-row">
                <div className=" flex flex-row border border-black w-4/12 space-y-12 mt-12  ">
                    <div>
                        <h1 className=" bg-white  my-10 text-4xl w-50%  space-y-4  border-width-0px">Order Summary </h1>
            
                    <div className="flex flex-col">
                           <div className="flex flex-row">
                                <div className="bg-white  felx text-2xl summary-left border-width-1px">Price </div>
                                <div className="bg-white  flex text-2xl summary-right border-width-1px">$319.98</div>
                           </div>

                           <div className="flex flex-row">
                                 <div className="bg-white  text-2xl summary-left  border-width-1px">Discount </div>
                                 <div className="bg-white  text-2xl summary-right border-width-1px">$31.9</div>
                           </div>
                          
                           <div className="flex flex-row">
                                 <div className="bg-white  text-2xl summary-left  border-width-1px">Shipping </div>
                                 <div className="bg-white  text-2xl summary-right border-width-1px text-green-600 ">Free</div>
                           </div>
                          
                           <div className="flex flex-row">
                                <div className="bg-white  text-2xl summary-left  border-width-1px">Coupon Applied </div>
                                <div className="bg-white  text-2xl summary-right border-width-1px">$0.00</div>
                           </div>
                           
                                 <hr className="border mt-9 w-auto"></hr>
                           
                           <div className="flex flex-row summary-data">
                                <div className="bg-white  text-2xl  summary-left  space-y-4  border-width-1px mt-8">TOTAL </div>
                                <div className="bg-white  text-2xl  summary-right  space-y-4  border-width-1px mt-8 float-left">$288.08 </div>
                           </div>
                           
                           <div className="bg-white  text-2xl  w-25%  space-y-4 text-start border-width-1px mt-4">Estimated Delivery by <strong> 01 Feb 2021</strong> </div>
                           
                                <label className="flex flex-col text-start mt-4">
                          
                                    <input className="border border-black p-4 mt-4 rounded-md"/>
                               
                                 </label>
                              
                                 <button className="bg-green-500 p-4 mt-8 text-white rounded-md mb-4">PROCEED TO CHECKOUT</button>
             
                            </div>
                    </div>
            </div>
        </div>
    <div className="flex flex-row my-10  w-4/12  space-y-4  mt-4 text-start border-width-0px ">
                 <img src={require('./images.jpg')} ></img>
    <div className='flex flex-col W-100%'>
             <div className="bg-white text-xs w-100%  space-y-4 text-start border-width-1px">Osmond Armchair</div>
             
             <div className="bg-white text-xs w-25%  space-y-4 text-start border-width-1px mt-4">color    <strong>  Gunnared beige</strong></div>
         
        <div className='flex flex-row'>
              <div className='flex flex-row border border-black rounded-md'>

              <button lassName='flex flex-col border border-black rounded-md' >- </button>
              <form>
                 <label>Enter your name:
                 <input type="1" />

                 </label>
               </form>
              <button lassName='flex flex-col border border-black rounded-md' > + </button>
               </div>
            
             
        
             <div className=' text-xs p-10 text-red-600 m-8 '>REMOVE</div>
            </div>
    </div>
    
          <div className='text-xl p-8 mt-8'>$149.99</div>
    
        </div>
    
    </div>
       
      
    )
}
export default OrderSummary