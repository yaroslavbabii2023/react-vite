import { Outlet } from "react-router-dom";
import AppHeader from "../components/AppHeader/AppHeader";
import AppProfile from "../components/AppProfile/AppProfile";

export default function AppLayout() {
    return (
        <>
            <AppHeader />
            <AppProfile />
            <main className="app-main">
                <Outlet />
            </main>
        </>
    );
}
