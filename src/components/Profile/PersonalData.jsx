import PersonalInfo from "./PersonalInfo";
import styles from "./PersonalData.module.css";

const PersonalData = () => {
  return (
      <div className={styles.personal_data_container}>
          <img className={styles.avatar} src="https://buddy.ai/buddy-dino.8e355d36.png" alt="Avatar pic" />
          <PersonalInfo />
      </div>
  );
};

export default PersonalData;