import { Outlet } from "react-router-dom";
import s from "./AppProfile.module.css";
import Badge from "../Badge/Badge";
import icon from "../../assets/icons/ellipse.svg";


const badgesList = ["Дизайн", "Data Science", "AR"];

const cardsData = Array(8).fill({
  title: "More Tech",
  date: "20 октября 2021",
  description:
    "Lorem ipsum dolor sit amet, consectetur \n adipiscing elit. Odio amet feugiat ut integer \n tincidunt sed. Fusce vulputate sed commodo, \n sed lorem. Mi semper orci, semper vestibulum.",
  statuses: ["Есть отбор", "Регистрация до 21.09"],
});

const AppProfile = () => {
  return (
    <div className={s.appProfile}>
      <div className={s.container}>
        <div className={s.wrapper}>
          <div className={s.cardGrid}>
            {cardsData.map((card, index) => (
              <div className={s.card} key={index}>
                <div className={s.cardWrapper}>
                  <div className={s.itemTop}>
                    <h5 className={s.cardTitle}>
                      {card.title} <br />
                      <span className={s.cardDate}>{card.date}</span>
                    </h5>
                    <a href="#" className={s.link}>
                      Сайт
                    </a>
                  </div>
                  <div className={s.itemBottom}>
                    <div className={s.badges}>
                      {badgesList.map((title, index) => (
                        <Badge badgeTitle={title} key={index} />
                      ))}
                    </div>
                    <div className={s.descriptions}>
                      <p className={s.description}>{card.description}</p>
                    </div>
                    <div className={s.statuses}>
                      {card.statuses.map((status, statusIndex) => (
                        <div className={s.statusItem} key={statusIndex}>
                          <img src={icon} alt="icon" />
                          <span className={s.status}>{status}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Змінний контент буде рендеритись тут */}
      <Outlet />
    </div>
  );
};

export default AppProfile;
