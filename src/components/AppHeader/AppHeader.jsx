import styles from "./AppHeader.module.css";
import headerLogo from "/assets/icons/backgroundIcon.svg"

export default function AppHeader() {
    return(
        <header className={styles.headerContainer}>
            <img src={headerLogo} alt="logo"/>
        </header>
    )
}
