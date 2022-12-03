import styles from "./PostItem.module.css";
import avatarImg from "../../../assets/images/avatar.png";

const PostItem = (props) => {
    return (
        <div className={styles.post_item}>
            <img
              className={styles.authorAvatar}
              src={props.author.avatar ? props.author.avatar : avatarImg}
              alt="avatar" />
            <h6 className={styles.header}>Posted {props.post.date} by {props.author.name}</h6>
            <div className={styles.postText}>{props.post.text}</div>
        </div>
    );
}

export default PostItem;