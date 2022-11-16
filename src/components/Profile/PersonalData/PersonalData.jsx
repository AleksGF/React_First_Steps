import styles from './PersonalData.module.css';
import avatarImg from '../../../assets/images/avatar.png';
import Loader from "../../Loader/Loader";

const PersonalData = (props) => {
  return (
    <>
    {props.isFetching ? <Loader/> : null}
    <div className={styles.personal_data_wrapper}>
      <img className={styles.avatar} src={
        props.user?.photos?.large || avatarImg
      } alt="Avatar pic"/>
      <div className={styles.personal_data}>
        <h2 className={styles.full_name}>{props.user.fullName || 'Anonim Anonimenko'}</h2>
        <p><span className={styles.colored_text}>About me: </span>{props.user?.aboutMe ||
          "Lorem ipsum dolor sit amet"}</p>
      </div>
    </div>
    </>
  );
};

export default PersonalData;