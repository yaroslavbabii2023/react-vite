import s from "../../components/SideBar/SideBar.module.css";
import iconTop from "../../assets/icons/hackatons.svg";
import iconMiddle from "../../assets/icons/profile.svg";
import iconButton from "../../assets/icons/notifications.svg";

import {Link} from "react-router-dom";

const SideBar = () => {

  return (
    <aside>
      <div className={s.container}>
        <div className={s.wrapper}>
          <Link to='/' className={s.button}>
            {" "}
            <img src={iconTop} alt="icon" />
          </Link>
          <Link to='/profile' className={s.middleButton}>
            {" "}
            <img src={iconMiddle} alt="icon" />
          </Link>
          <Link to='/message' className={s.button}>
            {" "}
            <img src={iconButton} alt="icon" />
          </Link>
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
