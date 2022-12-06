import { Navigate } from "react-router-dom"

export const ProtectedRoute = ({avaliableRole, redirect, children}) =>{

    const user = JSON.parse(localStorage.getItem("dataUser")) || {}

    if(user.role === avaliableRole) return children
    
    return <Navigate to={redirect} replace/>
}