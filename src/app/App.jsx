import AppProvider from "./AppProvider.jsx";
import AppRoutes from "./routes/AppRoutes.jsx";
import './../styles/styles.css'

export default function App() {
    return (
        <AppProvider>
            <AppRoutes />
        </AppProvider>
    );
}