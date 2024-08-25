import React from "react";
import Dashboard from "./components/Dashboard";
import Sidebar from "./components/Sidebar";
import { Outlet } from "react-router-dom";

export default function Layout(){
    return(
        <>
        <div className="grid grid-cols-custom-grid gap-0">
        <Sidebar/>
        <Outlet/>
        </div>
        </>
    )
}
