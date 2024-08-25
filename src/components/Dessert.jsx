import React, { useState } from "react";
import useCart  from "../contexts/Cart";
export default function Dessert(){
    const {addItem,cart,removeItem} = useCart()
    const buttonCall = (data) => {
        addItem(data)
    }
    const removeCall = (data) => {
        removeItem(data)
    }
    return(
        <>
         <div className="ml-16">
            <p className="font-semibold text-2xl">Dessert Menu</p>
            <div className="grid grid-cols-custom-grid mt-7 gap-5">
                <div className="flex w-72 h-44 gap-10 rounded-md p-2 justify-between shadow-lg" style={{background:"#F8F8F8"}}>
                    <div className="flex flex-col text-xs gap-5">
                        <p className="font-semibold text-xl">Veg Pizza</p>
                        <div className="flex flex-col gap-1">
                            <div className="flex gap-1">
                                <input type="checkbox" id="regular"/>
                                <label htmlFor="regular">Regular Size(8 inches)</label>
                            </div>
                            <div className="flex gap-1">
                                <input type="checkbox" id="med"/>
                                <label htmlFor="med">Medium Size(8 inches)</label>
                            </div>
                            <div className="flex gap-1">
                                <input type="checkbox" id="large"/>
                                <label htmlFor="large">Large Size(8 inches)</label>
                            </div>
                        </div>
                        <div className="flex flex-row mt-3">
                            <button onClick={()=>removeCall({id:0, item:"veg pizza", quantity:1,price:"Rs 149"})}><img src="/image/Group 94.png" alt="" /></button>
                            0{cart.length > 0 ? (cart.map((item) => item.id === 0 ? (item.quantity):null)):null}
                            <button onClick={()=>buttonCall({id:0, item:"veg pizza", quantity:1,price:"Rs 149"})}><img src="/image/Group 95.png" alt="" /></button>
                        </div>
                    </div>
                    <div className="mt-2 flex flex-col items-end text-xs gap-6">
                        <img src="/image/Group 99.png" className="w-4 h-4" alt="" />
                        <div className="flex flex-col gap-1">
                            <p>Rs 100</p>
                            <p>Rs 149</p>
                            <p>Rs 179</p>
                        </div>
                        <button><img src="/image/Group 699.png" alt="" className="mt-3"/></button>
                    </div>
                </div>
                <div className="flex w-72 h-44 gap-10 rounded-md p-2 justify-between shadow-lg" style={{background:"#F8F8F8"}}>
                    <div className="flex flex-col text-xs gap-5">
                        <p className="font-semibold text-xl">Veg Pizza</p>
                        <div className="flex flex-col gap-1">
                            <div className="flex gap-1">
                                <input type="checkbox" id="regular"/>
                                <label htmlFor="regular">Regular Size(8 inches)</label>
                            </div>
                            <div className="flex gap-1">
                                <input type="checkbox" id="med"/>
                                <label htmlFor="med">Medium Size(8 inches)</label>
                            </div>
                            <div className="flex gap-1">
                                <input type="checkbox" id="large"/>
                                <label htmlFor="large">Large Size(8 inches)</label>
                            </div>
                        </div>
                        <div className="flex flex-row mt-3">
                            <button onClick={()=>removeCall({id:1, item:"veg pizza", quantity:1,price:"Rs 149"})}><img src="/image/Group 94.png" alt="" /></button>
                            0{cart.length > 0 ? (cart.map((item) => item.id === 1 ? (item.quantity):null)):null}
                            <button onClick={()=>buttonCall({id:1, item:"veg pizza", quantity:1,price:"Rs 149"})}><img src="/image/Group 95.png" alt="" /></button>
                        </div>
                    </div>
                    <div className="mt-2 flex flex-col items-end text-xs gap-6">
                        <img src="/image/Group 99.png" className="w-4 h-4" alt="" />
                        <div className="flex flex-col gap-1">
                            <p>Rs 100</p>
                            <p>Rs 149</p>
                            <p>Rs 179</p>
                        </div>
                        <button><img src="/image/Group 699.png" alt="" className="mt-3"/></button>
                    </div>
                </div>
                <div className="flex w-72 h-44 gap-10 rounded-md p-2 justify-between shadow-lg" style={{background:"#F8F8F8"}}>
                    <div className="flex flex-col text-xs gap-5">
                        <p className="font-semibold text-xl">Veg Pizza</p>
                        <div className="flex flex-col gap-1">
                            <div className="flex gap-1">
                                <input type="checkbox" id="regular"/>
                                <label htmlFor="regular">Regular Size(8 inches)</label>
                            </div>
                            <div className="flex gap-1">
                                <input type="checkbox" id="med"/>
                                <label htmlFor="med">Medium Size(8 inches)</label>
                            </div>
                            <div className="flex gap-1">
                                <input type="checkbox" id="large"/>
                                <label htmlFor="large">Large Size(8 inches)</label>
                            </div>
                        </div>
                        <div className="flex flex-row mt-3">
                            <button onClick={()=>removeCall({id:2, item:"veg pizza", quantity:1,price:"Rs 149"})}><img src="/image/Group 94.png" alt="" /></button>
                            0{cart.length > 0 ? (cart.map((item) => item.id === 2 ? (item.quantity):null)):null}
                            <button onClick={()=>buttonCall({id:2, item:"veg pizza", quantity:1,price:"Rs 149"})}><img src="/image/Group 95.png" alt="" /></button>
                        </div>
                    </div>
                    <div className="mt-2 flex flex-col items-end text-xs gap-6">
                        <img src="/image/Group 99.png" className="w-4 h-4" alt="" />
                        <div className="flex flex-col gap-1">
                            <p>Rs 100</p>
                            <p>Rs 149</p>
                            <p>Rs 179</p>
                        </div>
                        <button><img src="/image/Group 699.png" alt="" className="mt-3"/></button>
                    </div>
                </div>
                <div className="flex w-72 h-44 gap-10 rounded-md p-2 justify-between shadow-lg" style={{background:"#F8F8F8"}}>
                    <div className="flex flex-col text-xs gap-5">
                        <p className="font-semibold text-xl">Veg Pizza</p>
                        <div className="flex flex-col gap-1">
                            <div className="flex gap-1">
                                <input type="checkbox" id="regular"/>
                                <label htmlFor="regular">Regular Size(8 inches)</label>
                            </div>
                            <div className="flex gap-1">
                                <input type="checkbox" id="med"/>
                                <label htmlFor="med">Medium Size(8 inches)</label>
                            </div>
                            <div className="flex gap-1">
                                <input type="checkbox" id="large"/>
                                <label htmlFor="large">Large Size(8 inches)</label>
                            </div>
                        </div>
                        <div className="flex flex-row mt-3">
                            <button onClick={()=>removeCall({id:3, item:"veg pizza", quantity:1,price:"Rs 149"})}><img src="/image/Group 94.png" alt="" /></button>
                            0{cart.length > 0 ? (cart.map((item) => item.id === 3 ? (item.quantity):null)):null}
                            <button onClick={()=>buttonCall({id:3, item:"veg pizza", quantity:1,price:"Rs 149"})}><img src="/image/Group 95.png" alt="" /></button>
                        </div>
                    </div>
                    <div className="mt-2 flex flex-col items-end text-xs gap-6">
                        <img src="/image/Group 99.png" className="w-4 h-4" alt="" />
                        <div className="flex flex-col gap-1">
                            <p>Rs 100</p>
                            <p>Rs 149</p>
                            <p>Rs 179</p>
                        </div>
                        <button><img src="/image/Group 699.png" alt="" className="mt-3"/></button>
                    </div>
                </div>
                <div className="flex w-72 h-44 gap-10 rounded-md p-2 justify-between shadow-lg" style={{background:"#F8F8F8"}}>
                    <div className="flex flex-col text-xs gap-5">
                        <p className="font-semibold text-xl">Veg Pizza</p>
                        <div className="flex flex-col gap-1">
                            <div className="flex gap-1">
                                <input type="checkbox" id="regular"/>
                                <label htmlFor="regular">Regular Size(8 inches)</label>
                            </div>
                            <div className="flex gap-1">
                                <input type="checkbox" id="med"/>
                                <label htmlFor="med">Medium Size(8 inches)</label>
                            </div>
                            <div className="flex gap-1">
                                <input type="checkbox" id="large"/>
                                <label htmlFor="large">Large Size(8 inches)</label>
                            </div>
                        </div>
                        <div className="flex flex-row mt-3">
                            <button onClick={()=>removeCall({id:4, item:"veg pizza", quantity:1,price:"Rs 149"})}><img src="/image/Group 94.png" alt="" /></button>
                            0{cart.length > 0 ? (cart.map((item) => item.id === 4 ? (item.quantity):null)):null}
                            <button onClick={()=>buttonCall({id:4, item:"veg pizza", quantity:1,price:"Rs 149"})}><img src="/image/Group 95.png" alt="" /></button>
                        </div>
                    </div>
                    <div className="mt-2 flex flex-col items-end text-xs gap-6">
                        <img src="/image/Group 99.png" className="w-4 h-4" alt="" />
                        <div className="flex flex-col gap-1">
                            <p>Rs 100</p>
                            <p>Rs 149</p>
                            <p>Rs 179</p>
                        </div>
                        <button><img src="/image/Group 699.png" alt="" className="mt-3"/></button>
                    </div>
                </div>
                <div className="flex w-72 h-44 gap-10 rounded-md p-2 justify-between shadow-lg" style={{background:"#F8F8F8"}}>
                    <div className="flex flex-col text-xs gap-5">
                        <p className="font-semibold text-xl">Veg Pizza</p>
                        <div className="flex flex-col gap-1">
                            <div className="flex gap-1">
                                <input type="checkbox" id="regular"/>
                                <label htmlFor="regular">Regular Size(8 inches)</label>
                            </div>
                            <div className="flex gap-1">
                                <input type="checkbox" id="med"/>
                                <label htmlFor="med">Medium Size(8 inches)</label>
                            </div>
                            <div className="flex gap-1">
                                <input type="checkbox" id="large"/>
                                <label htmlFor="large">Large Size(8 inches)</label>
                            </div>
                        </div>
                        <div className="flex flex-row mt-3">
                            <button onClick={()=>removeCall({id:5, item:"veg pizza", quantity:1,price:"Rs 149"})}><img src="/image/Group 94.png" alt="" /></button>
                            0{cart.length > 0 ? (cart.map((item) => item.id === 5 ? (item.quantity):null)):null}
                            <button onClick={()=>buttonCall({id:5, item:"veg pizza", quantity:1,price:"Rs 149"})}><img src="/image/Group 95.png" alt="" /></button>
                        </div>
                    </div>
                    <div className="mt-2 flex flex-col items-end text-xs gap-6">
                        <img src="/image/Group 99.png" className="w-4 h-4" alt="" />
                        <div className="flex flex-col gap-1">
                            <p>Rs 100</p>
                            <p>Rs 149</p>
                            <p>Rs 179</p>
                        </div>
                        <button><img src="/image/Group 699.png" alt="" className="mt-3"/></button>
                    </div>
                </div>
            </div>
            
        </div>
        </>
    )
}
