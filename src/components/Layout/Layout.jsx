import {Outlet} from "react-router-dom";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import styles from "./Layout.module.css";

const Layout = () => {
  return (
    <div className="app-wrapper">
      <Header/>
      <Navbar/>
      <main className={styles.content_wrapper}>
        <Outlet/>
      </main>
    </div>
  );
};

export default Layout;