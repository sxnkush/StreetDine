import React from "react";
import {Link, NavLink, Outlet} from 'react-router-dom'
import Cart from "./Cart";

const Dashboard = () => {
    let date = new Date()
    let day = date.getDay()
    let dateVal = date.getDate()
    let monthVal = date.getMonth()
    let yearVal = date.getFullYear()

    let dayList = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    let monthList = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    return(
        <>
        <div className="">
            <div className="w-full flex flex-col gap-10 overflow-y-hidden" style={{height: "100%", background:"#ECF0F1"}}>
                {/*user */}
                <div className="flex justify-between p-4 mt-4">
                    <h1 className="font-semibold text-2xl ml-12">
                        Add Order
                    </h1>
                    <div className="flex gap-6">
                        <p className="font-semibold text-l">{dayList[day]}, {dateVal} {monthList[monthVal-1]} {yearVal}</p>
                        <div className="flex w-32 h-10 gap-1.5 align-middle justify-center">
                            <img src="\image\Ellipse 1.png" alt="" />
                            <p className="text-xs font-semibold">Shruti Bisht<br/><p className="text-purple-700 text-center">Admin</p></p>
                        </div>
                    </div>
                </div>

                {/* search bar */}
                <div className="w-full h-20 flex items-center -mt-5" style={{background: '#F3F5F5'}}>
                    <input type="text" placeholder="Search" className="ml-16" style={{width: '406px',height: '30px'}}/>
                </div>

                {/* navbar */}
                <div className="grid grid-cols-custom-grid-2 ">
                    <div>
                        <div className="w-3/4 h-32 gap-5 flex overflow-auto ml-12 overflow-y-hidden p-4 -mt-5">
                            <NavLink to="dashboard/breakfast" className={({isActive})=>`${isActive?"bg-blue-500 text-white":"bg-white text-black"} flex gap-4 w-40 h-14 justify-center items-center p-3 rounded-md`}>
                                <img src="\image\breakfast_dining.png" alt="" className="w-7 h-7 bg-white rounded-sm"/>
                                <div>
                                    <p className="font-semibold text-sm">Breakfast</p>
                                    <p className="font-medium text-xs">10 items</p>
                                </div>
                            </NavLink>
                            <NavLink to="dashboard/lunch" className={({isActive})=>`${isActive?"bg-blue-500 text-white":"bg-white text-black"} flex gap-4 w-40 h-14 justify-center items-center p- rounded-md`}>
                                <img src="\image\lunch_dining.png" alt="" className="w-7 h-7 bg-white rounded-sm"/>
                                <div>
                                    <p className="font-semibold text-sm">Lunch</p>
                                    <p className="font-medium text-xs">10 items</p>
                                </div>
                            </NavLink>
                            <NavLink to="dashboard/dinner" className={({isActive})=>`${isActive?"bg-blue-500 text-white":"bg-white text-black"} flex gap-4 w-40 h-14 justify-center items-center p rounded-md`}>
                                <img src="\image\breakfast_dining.png" alt="" className="w-7 h-7 bg-white rounded-sm"/>
                                <div>
                                    <p className="font-semibold text-sm ">Dinner</p>
                                    <p className="font-medium text-xs">10 items</p>
                                </div>
                            </NavLink>
                            <NavLink to="dashboard/dessert" className={({isActive})=>`${isActive?"bg-blue-500 text-white":"bg-white text-black"} flex gap-4 w-40 h-14 justify-center items-center p-3  rounded-md`}>
                                <img src="\image\icecream.png" alt="" className="w-7 h-7 bg-white rounded-sm"/>
                                <div>
                                    <p className="font-semibold text-sm">Dessert</p>
                                    <p className="font-medium text-xs">10 items</p>
                                </div>
                            </NavLink>
                        </div>
                        <div className="overflow-auto grid grid-cols-custom-grid gap-56"> 
                        <Outlet/>
                        </div>
                    </div>
                    <div className="right-52 overflow-y-auto">
                        <Cart />
                    </div>
                </div>
                
                

               
            </div>
        </div>
        </>
    )
}

export default Dashboard