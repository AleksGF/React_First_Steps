import Profile from "../Profile/Profile";
import Dialogues from "../Dialogues/Dialogues";
import styles from "./MainContent.module.css";

const MainContent = () => {
    return (
        <main className={styles.content_wrapper}>
            {/*<Profile />*/}
            <Dialogues />

        </main>
    );
};

export default MainContent;