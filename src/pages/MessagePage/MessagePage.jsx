import s from "../../pages/MessagePage/MessagePage.module.css";
import logo from "../../assets/icons/logo_notifications.svg";
import image from "../../assets/pictures/image.png";
import Badge from "../../components/Badge/Badge.jsx";

const badgesList = ["Дизайн", "Data Science", "AR"];
const MessagePage = () => {
  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <div className={s.header}>
          <h1 className={s.title}>Приглашения</h1>
          <a className={s.link} href="#">
            {" "}
            <img src={logo} alt="notification" />
          </a>
        </div>
        <div className={s.card}>
          <div className={s.cardContainer}>
            <div className={s.item}>
              <img src={image} alt="image" />
              <h2 className={s.titleCard}>
                ITAM - 1 <br />{" "}
                <span className={s.subtitleCard}>3 человека</span>
              </h2>
            </div>
            <div className={s.buttonWrapper}>
              <button className={s.button}>принять</button>
            </div>
          </div>
          <div className={s.middleWrapper}>
            <p className={s.description}>
              Привет, нам нужен дизайнер, не хочешь к нам <br /> в команду?
            </p>
          </div>
          <div className={s.bottomWrapper}>
            {badgesList.map((title, index) => (
              <Badge badgeTitle={title} key={index} />
            ))}
          </div>
        </div>

        <div className={s.card}>
          <div className={s.cardContainer}>
            <div className={s.item}>
              <img src={image} alt="image" />
              <h2 className={s.titleCard}>
                ITAM - 1 <br />{" "}
                <span className={s.subtitleCard}>3 человека</span>
              </h2>
            </div>
            <div className={s.buttonWrapper}>
              <button className={s.button}>принять</button>
            </div>
          </div>
          <div className={s.middleWrapper}>
            <p className={s.description}>
              Привет, нам нужен дизайнер, не хочешь к нам <br /> в команду?
            </p>
          </div>
          <div className={s.bottomWrapper}>
            {badgesList.map((title, index) => (
              <Badge badgeTitle={title} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessagePage;
