import s from './AppHeader.module.css'

export default function AppHeader() {
    console.log(s)
    return (
        <header className={s.header}>
            <div className={s.wrapper}></div>
        </header>
    )
}