import { Outlet } from "react-router-dom";

const AppProfile = () => {
    return (
        <div className="app-profile">
            <h2>Profile Section</h2>
            {/* Змінний контент буде рендеритись тут */}
            <Outlet />
        </div>
    );
};

export default AppProfile;
