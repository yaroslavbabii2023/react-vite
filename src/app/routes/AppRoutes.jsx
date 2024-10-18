import {lazy, Suspense} from "react";
import {Route, Routes} from "react-router-dom";
//import component

//import types
import {RoutesList} from "./routes.types.js";
import Preloader from "../../components/Preloader/Preloader.jsx";
import AppLayout from "../AppLayout.jsx";

const AppProfile = lazy(() => import("../../components/AppProfile/AppProfile.jsx"));

const AppRoutes = () => {
    return (
        <Suspense fallback={<Preloader/>}>
            <Routes>
                <Route path={RoutesList.profile} element={AppProfile}></Route>
                <Route path={RoutesList.home} element={<AppLayout/>}>
                    {/*=== home page ===*/}
                </Route>
            </Routes>
        </Suspense>
    );
};


export default AppRoutes;
