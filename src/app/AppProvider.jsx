import { BrowserRouter } from "react-router-dom";

export default function AppProvider ({ children }) {
    return <BrowserRouter>{children}</BrowserRouter>
}
