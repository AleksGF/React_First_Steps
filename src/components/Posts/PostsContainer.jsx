import NewPost from "./NewPost";
import Posts from "./Posts";
import styles from "./PostsContainer.module.css";

const PostsContainer = () => {
    return (
        <div className={styles.post_container}>
            <NewPost />
            <Posts />
        </div>
    );
};

export default PostsContainer;