import s from "../../pages/ProfilePage/ProfilePage.module.css";
import firstIcon from "../../assets/icons/logo1.svg";
import secondIcon from "../../assets/icons/logo2.svg";
import thirdIcon from "../../assets/icons/logo3.svg";
import fourthIcon from "../../assets/icons/logo4.svg";
import vk from "../../assets/icons/vk.svg";
import tg from "../../assets/icons/tg.svg";
import image from "../../assets/pictures/image.png";
import pictureFirst from "../../assets/pictures/image2.png";
import pictureSecond from "../../assets/pictures/image3.png";
import Badge from "../../components/Badge/Badge.jsx";

const badgesList = ["Дизайн", "Data Science", "AR"];

const ProfilePage = () => {
  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <div className={s.firstCard}>
          <div className={s.header}>
            <h3 className={s.title}>Профиль</h3>
            <img src={firstIcon} alt="icon" />
          </div>
          <div className={s.item}>
            <h4 className={s.titleItem}>
              Tim Cock <br />{" "}
              <span className={s.subtitleItem}>БИВТ 21 - 2</span>
            </h4>
            <div className={s.icons}>
              <img src={vk} className={s.icon} alt="VK" />
              <img src={tg} className={s.icon} alt="TG" />
            </div>
          </div>
          <div className={s.descriptions}>
            <p className={s.description}>
              Привет, меня зовут Tim. Я начинающий UX/UI <br /> Дизайнер. Учусь
              в НИТУ МИСИС и готов <br /> учавствовать в хакатонах разных
              уровней. <br /> Есть опыт.
            </p>
          </div>
          <div className={s.badges}>
            {badgesList.map((title, index) => (
              <Badge badgeTitle={title} key={index} />
            ))}
          </div>
        </div>
        <div className={s.secondCard}>
          <div className={s.header}>
            <h3 className={s.title}>Достижения</h3>
            <img src={secondIcon} alt="icon" />
          </div>
          <div className={s.cardWrapper}>
            <div className={s.cardContainer}>
              <img src={pictureFirst} alt="picture" />
              <h5 className={s.containerTitle}>
                Цифровой прорыв <br />{" "}
                <span className={s.containerSubtitle}>1 место</span>
              </h5>
            </div>
            <div className={s.cardContainer}>
              <img src={pictureSecond} alt="picture" />
              <h5 className={s.containerTitle}>
                Ещё один рандомный хак <br />{" "}
                <span className={s.containerSubtitle}>Гран при года</span>
              </h5>
            </div>
          </div>
        </div>
        <div className={s.thirdCard}>
          <div className={s.header}>
            <h3 className={s.title}>Текущая команда</h3>
            <img src={thirdIcon} alt="icon" />
          </div>

          <div className={s.content}>
            <img src={image} alt="Image" />

            <h5 className={s.contentTitle}>
              ITAM - 1 <br />{" "}
              <span className={s.contentSubtitle}>More tech</span>{" "}
            </h5>
          </div>
        </div>
        <div className={s.thirdCard}>
          <div className={s.header}>
            <h3 className={s.title}>Архив</h3>
            <img src={fourthIcon} alt="icon" />
          </div>

          <div className={s.cardWrapper}>
            <div className={s.cardContainer}>
              <img src={pictureFirst} alt="picture" />
              <h5 className={s.containerTitle}>
                Цифровой прорыв <br />{" "}
                <span className={s.containerSubtitle}>1 место</span>
              </h5>
            </div>
            <div className={s.cardContainer}>
              <img src={pictureSecond} alt="picture" />
              <h5 className={s.containerTitle}>
                Ещё один рандомный хак <br />{" "}
                <span className={s.containerSubtitle}>Гран при года</span>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProfilePage;
