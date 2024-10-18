import {Outlet} from "react-router-dom";
import AppHeader from "../components/AppHeader/AppHeader.jsx";
import AppProfile from "../components/AppProfile/AppProfile.jsx";

export default function AppLayout() {
    return (
        <>
            <AppHeader/>
            <main className="app-main">
                <AppProfile />
                <Outlet/>
            </main>
        </>
    );
}
