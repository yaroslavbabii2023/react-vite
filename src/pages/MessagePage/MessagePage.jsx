import s from "../../pages/MessagePage/MessagePage.module.css";
import logo from "../../assets/icons/logo_notifications.svg";
import image from "../../assets/pictures/image.png";

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
              <h2 className={s.titleItem}>
                ITAM - 1 <br />{" "}
                <span className={s.subtitleItem}>3 человека</span>
              </h2>
            </div>

            <button className={s.button}>принять</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessagePage;
