import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./profile-management/pages/LoginPage";
import RegisterPage from "./profile-management/pages/RegisterPage";
import AuthLayout from "./profile-management/layouts/AuthLayout";
import AppLayout from "./application-management/layouts/AppLayout";
import LinkTreePage from "./application-management/pages/LinkTreePage";
import ProfilePage from "./profile-management/pages/ProfilePage";
import HandlePage from "./profile-management/pages/HandlePage";
import NotFoundPage from "./application-management/pages/NotFoundPage";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/auth/login" element={<LoginPage />} />
          <Route path="/auth/register" element={<RegisterPage />} />
        </Route>

        <Route path="/admin" element={<AppLayout />}>
          <Route index={true} element={<LinkTreePage />} />
          <Route path="profile" element={<ProfilePage />} />
        </Route>

        <Route path="/:handle" element={<AuthLayout />}>
          <Route element={<HandlePage />} index={true} />
        </Route>

        <Route path="/404" element={<AuthLayout />}>
          <Route element={<NotFoundPage />} index={true} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
