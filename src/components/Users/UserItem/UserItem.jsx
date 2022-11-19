import styles from "./UserItem.module.css";
import userAvatar from "../../../assets/images/avatar.png";
import {Link} from "react-router-dom";

const UserItem = (props) => {
  return (
    <div className={styles.user_item}>
      <div className={styles.user_avatar_container}>
        <Link to={`/profile/${props.user.id}`} className={styles.user_link}>
          <img className={styles.user_avatar} src={
            props.user.photos.small ? props.user.photos.small : userAvatar
          } alt={"User's avatar"}/>
        </Link>
      </div>
      <div className={styles.user_info}>
        <div className={styles.user_name}>
          {`Name: ${props.user.name}`}
        </div>
        <div className={styles.user_status}>
          {`Status: ${props.user.status ? props.user.status : "No status yet"}`}
        </div>
      </div>
      <div className={styles.follow_button}>
        {props.user.followed
          ? <button onClick={() => props.onUnfollowUser(props.user.id)}>Unfollow</button>
          : <button onClick={() => props.onFollowUser(props.user.id)}>Follow</button>
        }
      </div>
    </div>

  );
};

export default UserItem;