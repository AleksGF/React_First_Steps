import styles from "./Header.module.css";

const Header = () => {
  return (
      <header className={styles.header}>
          <img className={styles.logo} src="https://api.freelogodesign.org/assets/thumb/logo/15046535_400.png" alt="Just some logo"/>
      </header>
  );
}

export default Header;