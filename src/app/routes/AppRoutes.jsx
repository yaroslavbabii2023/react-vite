import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
// import types
import { RoutesList } from "./routes.types.js";
import Preloader from "../../components/Preloader/Preloader.jsx";
import AppLayout from "../AppLayout.jsx";


const MainPage = lazy(() => import("../../pages/MainPage/MainPage.jsx"));
const ProfilePage = lazy(() => import("../../pages/ProfilePage/ProfilePage.jsx/"));
const MessagePage = lazy(() => import("../../pages/MessagePage/MessagePage.jsx"));

const AppRoutes = () => {
    return (
        <Suspense fallback={<Preloader />}>
            <Routes>
                <Route path={RoutesList.main} element={<AppLayout />}>
                    <Route index element={<MainPage />}/>
                    <Route path={RoutesList.profile} element={<ProfilePage />}/>
                    <Route path={RoutesList.message} element={<MessagePage />}/>
                </Route>
            </Routes>
        </Suspense>
    );
};

export default AppRoutes;
