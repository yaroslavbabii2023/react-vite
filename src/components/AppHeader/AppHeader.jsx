import styles from "./AppHeader.module.css";
import headerLogo from "/assets/icons/backgroundIcon.svg"

export default function AppHeader() {
    return(
        <header className={styles.headerContainer}>
            <img src={headerLogo} alt="logo"/>
            <div>
                <h2 className={styles.headerTitle}>Учавствуй Совершенствуйся
                    Выигрывай бабло</h2>
                <p className={styles.headerDesc}>последнее не точно</p>
            </div>
        </header>
    )
}
