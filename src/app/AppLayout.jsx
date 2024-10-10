import {Outlet} from "react-router-dom";
import AppHeader from "../components/AppHeader/AppHeader.jsx";

export default function AppLayout() {
    return (
        <>
            <AppHeader/>
            <main className="app-main">
                <Outlet/>
            </main>
        </>
    );
}
