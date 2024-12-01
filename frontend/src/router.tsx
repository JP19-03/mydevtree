import { BrowserRouter, Routes, Route } from "react-router-dom";    
import LoginPage from "./profile-management/pages/LoginPage";
import RegisterPage from "./profile-management/pages/RegisterPage";

export default function Router() {

    return (
        <BrowserRouter>
            <Routes>
                <Route>
                    <Route path="/auth/login" element={<LoginPage />} />
                    <Route path="/auth/register" element={<RegisterPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}