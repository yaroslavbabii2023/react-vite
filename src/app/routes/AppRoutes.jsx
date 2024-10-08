import {lazy, Suspense} from "react";
import {Route, Routes} from "react-router-dom";
//import component

//import types
import {RoutesList} from "./routes.types.js";
import Preloader from "../../components/Preloader/Preloader.jsx";
import AppLayout from "../AppLayout.jsx";

const HomePage = lazy(() => import("./../../pages/HomePage/HomePage.jsx"));

const AppRoutes = () => {
    return (
        <Suspense fallback={<Preloader/>}>
            <Routes>
                <Route path={RoutesList.home} element={<AppLayout/>}>
                    {/*=== home page ===*/}
                    <Route index element={<HomePage/>}/>
                </Route>
            </Routes>
        </Suspense>
    );
};

export default AppRoutes;
