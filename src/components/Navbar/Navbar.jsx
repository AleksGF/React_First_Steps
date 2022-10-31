import styles from "./Navbar.module.css";

const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <div className={styles.nav_list_item}>
                <a className={styles.nav_list_item_link} href='/JS/react_study/first_app/it-kamasutra-1/public'>Profile</a>
            </div>
            <div className={styles.nav_list_item}>
                <a className={styles.nav_list_item_link} href='/JS/react_study/first_app/it-kamasutra-1/public'>Messages</a>
            </div>
            <div className={styles.nav_list_item}>
                <a className={styles.nav_list_item_link} href='/JS/react_study/first_app/it-kamasutra-1/public'>News</a>
            </div>
            <div className={styles.nav_list_item}>
                <a className={styles.nav_list_item_link} href='/JS/react_study/first_app/it-kamasutra-1/public'>Music</a>
            </div>
            <div className={styles.nav_list_item}>
                <a className={styles.nav_list_item_link} href='/JS/react_study/first_app/it-kamasutra-1/public'>Settings</a>
            </div>
        </nav>
    );
}

export default Navbar;