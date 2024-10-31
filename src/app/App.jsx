import AppProvider from "./AppProvider.jsx";
import AppRoutes from "./routes/AppRoutes.jsx";
import './../styles/styles.css'
import {TitleProvider} from "../components/TitleContext/TitleContext.jsx";

export default function App() {
    return (
        <TitleProvider>
            <AppProvider>
                <AppRoutes />
            </AppProvider>
        </TitleProvider>
    );
}