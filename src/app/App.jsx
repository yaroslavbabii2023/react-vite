import AppProvider from "./AppProvider.jsx";
import AppRoutes from "./routes/AppRoutes.jsx";

export default function App() {
    return (
        <AppProvider>
            <AppRoutes />
        </AppProvider>
    );
}