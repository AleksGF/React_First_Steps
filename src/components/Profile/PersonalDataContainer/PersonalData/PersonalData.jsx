import styles from "./PersonalData.module.css";

const PersonalData = () => {
    return (
        <div className={styles.personal_data}>
            <h2 className={styles.full_name}>Anonim Anonimus</h2>
            <p><span className={styles.colored_text}>Birthday: </span>01.01.2001</p>
            <p><span className={styles.colored_text}>About me: </span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse elementum, purus a venenatis tempus, ex lorem rhoncus massa, vel rhoncus eros tellus ut dolor. Nulla laoreet erat vel lorem posuere, non vulputate eros ornare. Donec et lorem risus. Morbi orci velit, porttitor quis luctus eget, ultrices sed dui.</p>
        </div>
    );
};

export default PersonalData;