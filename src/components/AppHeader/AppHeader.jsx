import s from "./AppHeader.module.css";
import logo from "../../assets/icons/logo.svg";

export default function AppHeader() {

  return (
    <header className={s.header}>
      <div className={s.container}>
        <div className={s.wrapper}>
          <div className={s.headerLogo}>
            <img className={s.logo} src={logo} alt="logo" />
            <span className={s.span}>#хатаконы</span>
          </div>
          <div className={s.item}>
            <h1 className={s.title}>
              Учавствуй <br /> Совершенствуйся <br />
              Выигрывай бабло
            </h1>
            <p className={s.subtitle}>последнее не точно</p>
          </div>
        </div>
      </div>
    </header>
  );
}
