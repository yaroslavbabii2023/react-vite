import s from "./Badge.module.css";

const Badge = ({ badgeTitle }) => {
  return <span className={s.badge}>{badgeTitle}</span>;
};

export default Badge;
