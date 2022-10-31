import styles from "./NewPost.module.css";

const NewPost = () => {
    return (
        <div className={styles.new_post}>
            <textarea className={styles.new_post_text}>What`s in your mind?..</textarea>
            <button className={styles.new_post_submit}>Send new post</button>
        </div>
    );
};

export default NewPost;