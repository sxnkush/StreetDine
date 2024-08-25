import React, { useState } from "react";
import useCart from "../contexts/Cart";

export default function Cart(){
    const {cart, subTotal, totalItems} = useCart()
    return(
        <>
            <div className="flex flex-col gap-4 bg-white w-72 h-fit p-4 rounded-md">
                <div className="flex flex-col justify-center items-center gap-3">
                    <p className="font-semibold text-xl">Cart Information</p>
                    <div className="flex gap-3">
                        <button className="w-24 h-8 bg-blue-600 rounded-md text-white flex justify-center items-center">Dine In</button>
                        <button className="w-24 h-8 border-2  border-blue-600 rounded-md text-gray-400 flex justify-center items-center">Take Away</button>
                    </div>
                </div>
                <div>
                    <p className="font-semibold">Order details</p>
                    <div className="flex flex-row justify-between">
                        <div className="flex flex-col">
                        {
                            cart.map(
                                (cartitem)=>cartitem.quantity>0?(<div className="text-s font-medium flex flex-col"><p>{cartitem.item}</p><p className="text-xs text-gray-400">{("x"+JSON.stringify(cartitem.quantity))}</p></div>):null
                            )
                        }
                        
                        </div>
                        <div className="flex flex-col gap-4">
                        {
                            cart.map(
                                (cartitem)=>cartitem.quantity>0?(<p>{"Rs " + JSON.stringify(parseInt(cartitem.price.replace(/\D/g, '')) * cartitem.quantity)}</p>):null
                            )
                        }
                        </div>
                    </div>
                </div>
                <div className="flex justify-between">
                    <p className="font-semibold">Table info</p>
                    <p className="text-black bg-yellow-400 rounded-md text-center w-8 h-8 font-semibold text-xl">T3</p>
                </div>
                <div className="flex flex-col gap-3">
                    <p className="font-semibold">Payment Summary</p>
                    <div className="flex flex-row justify-between">
                        <div className="text-xs font-medium gap-2 flex flex-col">
                            <p>Subtotal </p>
                            <p>CGST @2.5% </p>
                            <p>SGST @2.5% </p>
                            <p>Total </p>
                        </div>
                        <div className="text-xs font-medium gap-2 flex flex-col">
                            <p>Rs {subTotal}</p>
                            <p>Rs {parseInt(2.5/100 * subTotal)}</p>
                            <p>Rs {parseInt(2.5/100 * subTotal)}</p>
                            <p>Rs {parseInt(2.5/100 * subTotal) * 2 + subTotal}</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between items-center">
                    <p className="text-xs font-medium">Add {totalItems } items</p>
                    <button className="text-black bg-yellow-400 rounded-md text-center w-24 h-8 font-semibold text-xs">Place Order</button>
                </div>
            </div>
        </>
    )
}