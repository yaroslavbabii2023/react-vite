import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
// import types
import { RoutesList } from "./routes.types.js";
import Preloader from "../../components/Preloader/Preloader.jsx";
import AppLayout from "../AppLayout.jsx";
import AppProfile from "../../components/AppProfile/AppProfile.jsx"; // Імпортуємо AppProfile


// const AppProfile = lazy(() => import("../../components/AppProfile/AppProfile.jsx"));

const AppRoutes = () => {
    return (
        <Suspense fallback={<Preloader />}>
            <Routes>
                <Route path={RoutesList.home} element={<AppLayout />}>
                    <Route path="/" element={<AppProfile />}>
                        {/* Зміст профілю можна розширити тут */}
                        {/*<Route index element={<HomePage />} /> /!* Головна сторінка профілю *!/*/}
                        {/*<Route path="about" element={<AboutPage />} /> /!* Сторінка "Про нас" профілю *!/*/}
                    </Route>
                </Route>
            </Routes>
        </Suspense>
    );
};

export default AppRoutes;
