import s from "../../pages/ProfilePage/ProfilePage.module.css";
import firstIcon from "../../assets/icons/ellipse2";
import secondIcon from "../../assets/icons/ellipse3";
import thirdIcon from "../../assets/icons/ellipse4";
import fourthIcon from "../../assets/icons/ellipse5";

const ProfilePage = () => {
  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <div className={s.firstCard}>
          <div className={s.header}>
            <h2>Профиль</h2>
            <img src={firstIcon} alt="icon" />
          </div>
        </div>
        <div className={s.secondCard}></div>
        <div className={s.thirdCard}></div>
      </div>
    </div>
  );
};
export default ProfilePage;
