import { Outlet } from "react-router-dom";
import s from "./AppProfile.module.css";
import Badge from "../Badge/Badge";
import icon from "../../assets/icons/ellipse.svg";

const badgesList = ["Дизайн", "Data Science", "AR"];

const AppProfile = () => {
  return (
    <div className={s.appProfile}>
      <div className={s.container}>
        <div className={s.wrapper}>
          <div className={s.card}>
            <div className={s.cardWrapper}>
              <div className={s.itemTop}>
                <h5 className={s.cardTitle}>
                  More Tech <br />
                  <span className={s.cardDate}>20 октября 2021</span>
                </h5>
                <a href="#" className={s.link}>
                  Сайт
                </a>
              </div>
              <div className={s.itemBottom}>
                <div className={s.badges}>
                  {badgesList.map((title, index) => {
                    return <Badge badgeTitle={title} key={index} />;
                  })}
                </div>
                <div className={s.descriptions}>
                  <p className={s.description}>
                    Lorem ipsum dolor sit amet, consectetur <br /> adipiscing
                    elit. Odio amet feugiat ut integer <br /> tincidunt sed.
                    Fusce vulputate sed commodo, <br /> sed lorem. Mi semper
                    orci, semper vestibulum.
                  </p>
                </div>
                <div className={s.statuses}>
                  <div className={s.statusItem}>
                    <img src={icon} alt="icon" />
                    <span className={s.status}> Есть отбор</span>
                  </div>
                  <div className={s.statusItem}>
                    <img src={icon} alt="icon" />
                    <span className={s.status}>Регистрация до 21.09</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Змінний контент буде рендеритись тут */}
      <Outlet />
    </div>
  );
};

export default AppProfile;
