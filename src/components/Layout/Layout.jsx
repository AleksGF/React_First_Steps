import {Outlet} from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import styles from "./Layout.module.css";
import HeaderContainer from "../Header/HeaderContainer";

const Layout = () => {
  return (
    <div className="app-wrapper">
      <HeaderContainer/>
      <Navbar/>
      <main className={styles.content_wrapper}>
        <Outlet/>
      </main>
    </div>
  );
};

export default Layout;