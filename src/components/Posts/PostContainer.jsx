import NewPost from "./NewPost";
import Posts from "./Posts";
import styles from "./PostContainer.module.css";

const PostContainer = () => {
    return (
        <div className={styles.post_container}>
            <NewPost />
            <Posts />
        </div>
    );
};

export default PostContainer;