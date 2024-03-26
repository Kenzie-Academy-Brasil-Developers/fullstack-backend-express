import { Route, Routes } from "react-router-dom"
import { LoginPage } from "../pages/login"
import { DashboardPage } from "../pages/dashboard"
import { RegisterPage } from "../pages/register"



export const RoutesMain = () => {
    return (
        <Routes>
            <Route path="/" element={<LoginPage/>}/>
            <Route path="/dashboard" element={<DashboardPage/>}/>
            <Route path="/register" element={<RegisterPage/>}/>
        </Routes>
    )
}