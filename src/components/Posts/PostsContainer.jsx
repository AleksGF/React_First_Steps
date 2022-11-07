import NewPost from "./NewPost/NewPost";
import Posts from "./Posts/Posts";
import styles from "./PostsContainer.module.css";
import {addNewPost, changeTextAreaValue} from "../../redux/state";

const PostsContainer = (props) => {
    return (
        <div className={styles.post_container}>
            <NewPost textAreaValue={props.textAreaValue}
                     changeTextAreaValue={props.changeTextAreaValue}
                     addNewPost={props.addNewPost}/>
            <Posts posts={props.posts}/>
        </div>
    );
};

export default PostsContainer;