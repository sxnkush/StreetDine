import React from "react";
import { NavLink } from "react-router-dom";
export default function Sidebar(){
    return(
        <>
            <div className="flex flex-col gap-6 items-center h-screen overflow-hidden">
                <img src="\image\image 6.png" alt="" className="w-28 h-28 -mt-2"/>
                <div className="flex flex-col gap-1 -mt-5">
                    <NavLink to="/dashboard" className={({isActive}) => `${isActive?"font-semibold text-xl bg-custom-gradient": "font-medium text-base "} h-12 w-48 flex rounded-md gap-2 items-center p-2`}>
                        <img src="\image\dashboard.png" alt="" className="w-7 h-7"/>
                        <p>Dashboard</p>
                    </NavLink>
                    <NavLink to="/orders" className={({isActive}) => `${isActive?"font-semibold text-xl bg-custom-gradient": "font-medium text-lg "} h-12 w-48 flex rounded-md gap-2 items-center p-2`}>
                        <img src="\image\Group 3.png" alt="" className="w-7 h-7"/>
                        <p>Orders</p>
                    </NavLink>
                    <NavLink to="/createorder" className={({isActive}) => `${isActive?"font-semibold text-xl bg-custom-gradient": "font-medium text-lg "} h-12 w-48 flex rounded-md gap-2 items-center p-2`}>
                        <img src="\image\Group 7.png" alt="" className="w-7 h-7"/>
                        <p>Create Order</p>
                    </NavLink>
                    <NavLink to="/menu" className={({isActive}) => `${isActive?"font-semibold text-xl bg-custom-gradient": "font-medium text-lg "} h-12 w-48 flex rounded-md gap-2 items-center p-2`}>
                        <img src="\image\Group 11.png" alt="" className="w-7 h-7"/>
                        <p>Menu</p>
                    </NavLink>
                    <NavLink to="/tables" className={({isActive}) => `${isActive?"font-semibold text-xl bg-custom-gradient": "font-medium text-lg "} h-12 w-4 flex rounded-md gap-4 items-center `}>
                        <img src="\image\table.png" alt="" className="w-7 h-7 ml-3"/>
                        <p>Tables</p>
                    </NavLink>
                    <NavLink to="/employees" className={({isActive}) => `${isActive?"font-semibold text-xl bg-custom-gradient": "font-medium text-lg "} h-12 w-48 flex rounded-md gap-2 items-center p-2`}>
                        <img src="\image\Group 11.png" alt="" className="w-7 h-7"/>
                        <p>Employees</p>
                    </NavLink>
                    <NavLink to="/inventory" className={({isActive}) => `${isActive?"font-semibold text-xl bg-custom-gradient": "font-medium text-lg "} h-12 w-48 flex rounded-md gap-2 items-center p-2`}>
                        <img src="\image\Group 23.png" alt="" className="w-7 h-7"/>
                        <p>Inventory</p>
                    </NavLink>
                    <NavLink to="/kitchenorders" className={({isActive}) => `${isActive?"font-semibold text-xl bg-custom-gradient": "font-medium text-lg "} h-12 w-48 flex rounded-md gap-2 items-center p-2`}>
                        <img src="\image\Group 39975.png" alt="" className="w-7 h-7"/>
                        <p>Kitchen Orders</p>
                    </NavLink>
                    <NavLink to="/reports" className={({isActive}) => `${isActive?"font-semibold text-2xl bg-custom-gradient": "font-medium text-lg "} h-12 w-48 flex rounded-md gap-2 items-center p-2`}>
                        <img src="\image\Group 39969.png" alt="" className="w-7 h-7"/>
                        <p>Reports</p>
                    </NavLink>
                    <NavLink to="/reports" className={({isActive}) => `${isActive?"font-semibold text-2xl bg-custom-gradient": "font-medium text-lg "} h-12 w-48 flex rounded-md gap-2 items-center p-2`}>
                        <img src="\image\Group 20.png" alt="" className="w-7 h-7"/>
                        <p>Settings</p>
                    </NavLink>

                </div>
                <NavLink to="/reports" className={({isActive}) => `${isActive?"font-semibold text-2xl bg-custom-gradient": "font-medium text-lg "} h-12 w-48 flex rounded-md gap-2 items-center p-2`}>
                        <img src="\image\Group 26.png" alt="" className="w-7 h-8"/>
                        <p>Log Out</p>
                </NavLink>
            </div>
        </>
    )
}
