import NewPost from "./NewPost/NewPost";
import Posts from "./Posts/Posts";
import styles from "./PostsContainer.module.css";

const PostsContainer = (props) => {
    return (
        <div className={styles.post_container}>
            <NewPost textareaText={props.textareaText}
                     dispatch={props.dispatch}/>
            <Posts posts={props.posts}/>
        </div>
    );
};

export default PostsContainer;