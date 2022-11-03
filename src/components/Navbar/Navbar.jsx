import styles from "./Navbar.module.css";
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <div className={styles.nav_list_item}>
                <NavLink className={({isActive}) =>
                    isActive
                        ? styles.nav_list_item_link + " " + styles.active
                        : styles.nav_list_item_link
                } to='/profile'>Profile</NavLink>
            </div>
            <div className={styles.nav_list_item}>
                <NavLink className={({isActive}) =>
                    isActive
                        ? styles.nav_list_item_link + " " + styles.active
                        : styles.nav_list_item_link
                } to='/dialogues'>Messages</NavLink>
            </div>
            <div className={styles.nav_list_item}>
                <NavLink className={({isActive}) =>
                    isActive
                        ? styles.nav_list_item_link + " " + styles.active
                        : styles.nav_list_item_link
                } to='/news'>News</NavLink>
            </div>
            <div className={styles.nav_list_item}>
                <NavLink className={({isActive}) =>
                    isActive
                        ? styles.nav_list_item_link + " " + styles.active
                        : styles.nav_list_item_link
                } to='/music'>Music</NavLink>
            </div>
            <div className={styles.nav_list_item}>
                <NavLink className={({isActive}) =>
                    isActive
                        ? styles.nav_list_item_link + " " + styles.active
                        : styles.nav_list_item_link
                } to='/settings'>Settings</NavLink>
            </div>
        </nav>
    );
}

export default Navbar;