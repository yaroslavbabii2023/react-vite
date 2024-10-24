import { Outlet } from "react-router-dom";
import AppHeader from "../components/AppHeader/AppHeader";
import SideBar from "../components/SideBar/SideBar.jsx";

export default function AppLayout() {
    return (
        <>
            <AppHeader />
            <SideBar/>
            <main className="app-main">
                <Outlet />
            </main>
        </>
    );
}
