import s from "../../components/SideBar/SideBar.module.css";
import iconTop from "../../assets/icons/hackatons.svg";
import iconMiddle from "../../assets/icons/profile.svg";
import iconButton from "../../assets/icons/notifications.svg";

const SideBar = () => {
  return (
    <aside>
      <div className={s.container}>
        <div className={s.wrapper}>
          <button className={s.button}>
            {" "}
            <img src={iconTop} alt="icon" />
          </button>
          <button className={s.middleButton}>
            {" "}
            <img src={iconMiddle} alt="icon" />
          </button>
          <button className={s.button}>
            {" "}
            <img src={iconButton} alt="icon" />
          </button>
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
