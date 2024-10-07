import AppHeader from "./components/layout/AppHeader.jsx";
import AppSider from "./components/layout/AppSider.jsx";
import AppContent from "./components/layout/AppContent.jsx";

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
