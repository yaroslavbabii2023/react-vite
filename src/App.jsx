import AppHeader from "./components/AppHeader/AppHeader.jsx";
import AppSider from "./components/AppSider/AppSider.jsx";
import AppContent from "./components/AppContent/AppContent.jsx";

export default function App() {
    return (
        <div>
            <AppHeader />
            <div>
                <AppSider/>
                <AppContent/>
            </div>
        </div>
    )
}
