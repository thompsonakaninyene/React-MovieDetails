import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom"


export default function ProtectedRoutes() {


const isAuth = JSON.parse(localStorage.getItem("token"))

if (!isAuth) {
    return <Navigate to="/loginPath" replace/>
}
    return<Outlet />
        
    
}