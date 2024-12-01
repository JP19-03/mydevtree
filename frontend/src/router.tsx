import { BrowserRouter, Routes, Route } from "react-router-dom";    
import LoginPage from "./profile-management/pages/LoginPage";
import RegisterPage from "./profile-management/pages/RegisterPage";
import AuthLayout from "./profile-management/layouts/AuthLayout";

export default function Router() {

    return (
        <BrowserRouter>
            <Routes>
                <Route element={<AuthLayout />}>
                    <Route path="/auth/login" element={<LoginPage />} />
                    <Route path="/auth/register" element={<RegisterPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}