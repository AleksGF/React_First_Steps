import styles from "./Header.module.css";
import {Link} from "react-router-dom";
import Loader from "../common/Loader/Loader";
import {useEffect} from "react";

const Header = (props) => {
  const getCurrentUser = props.getCurrentUser;
  const logout = props.logout;

  useEffect(() => {
    getCurrentUser();
  }, [getCurrentUser]);

  return (
    <header className={styles.header}>
      <img className={styles.logo}
           src="https://api.freelogodesign.org/assets/thumb/logo/15046535_400.png"
           alt="Just some logo"/>
      <div className={styles.login}>
        {props.isFetching ? <Loader/> : null}
        {props.userId !== null
          ? (
            <div>
              <div>{props.login}</div>
              <div><button onClick={logout}>Logout</button></div>
            </div>
          )
          : <Link to={'/login'}>Login</Link>}
      </div>
    </header>
  );
}

export default Header;