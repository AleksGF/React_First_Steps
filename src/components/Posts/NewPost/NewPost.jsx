import styles from "./NewPost.module.css";

const NewPost = () => {
    return (
        <div className={styles.new_post}>
            <textarea className={styles.new_post_text} defaultValue="What`s in your mind?.."/>
            <button className={styles.new_post_submit}>Send new post</button>
        </div>
    );
};

export default NewPost;