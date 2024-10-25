import s from "../../components/SideBar/SideBar.module.css";
import iconTop from "../../assets/icons/hackatons.svg";
import iconMiddle from "../../assets/icons/profile.svg";
import iconButton from "../../assets/icons/notifications.svg";

import {useNavigate} from "react-router-dom";

const SideBar = () => {
  const navigate = useNavigate();

  const mainClick = () => {
    navigate("/");
  }

  const profileClick = () => {
    navigate("/profile");
  }

  const messageClick = () => {
    navigate("/message");
  }

  return (
    <aside>
      <div className={s.container}>
        <div className={s.wrapper}>
          <button onClick={mainClick} className={s.button}>
            {" "}
            <img src={iconTop} alt="icon" />
          </button>
          <button onClick={profileClick} className={s.middleButton}>
            {" "}
            <img src={iconMiddle} alt="icon" />
          </button>
          <button onClick={messageClick} className={s.button}>
            {" "}
            <img src={iconButton} alt="icon" />
          </button>
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
