import { useState } from "react"


const CartCounter= () =>{
    const [counter,setCounter] =useState(1)
return(
    <div className="flex mt-1 p-4">
                  <div className="border border-black flex py-6">
                       <div className="w-3/12 flex">
                          <img src={require('./images.jpg')} ></img>
                       </div>

                    <div className="w-7/12 space-y-4">
                            <div className="space-y-3">
                                <h3 className="text-start">
                                   <strong>Osmond Armchair</strong>
                                </h3>
                               <div className="text-start text-sm">
                                   <strong><span className="text-gray-400">Color</span> Gunnared beige</strong>
                               </div>
                            </div>
             
                    <div className="flex">
                             <div className="flex flex-row border border-gray-300 w-7/12 text-2xl">
                                     <button className="w-4/12"><strong>-</strong></button>
                                  <div className="w-4/12 text-1xl">{counter}</div>
                                      <button className="w-4/12"><strong>+</strong></button>
                             </div>
  
                             <div className=" w-5/12 ">
                                    <button className="text-orange-500 my-auto"><strong>REMOVE</strong></button>
                             </div>
                        </div>
                     </div>
            

                                <h3 className="w-2/12 text-lg p-2 mt-4">
                                    <strong>$149.99</strong>
                                </h3>

                
                    </div>

    </div>

    )

}

export default CartCounter