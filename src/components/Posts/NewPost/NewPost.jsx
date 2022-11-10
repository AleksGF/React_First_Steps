import styles from "./NewPost.module.css";


const NewPost = (props) => {
  return (
    <div className={styles.new_post}>
            <textarea className={styles.new_post_text}
                      value={props.textareaText}
                      onChange={(event) => props.onChangeText(event.currentTarget.value)}
            />
      <button className={styles.new_post_submit} onClick={props.onAddNewPost}>Send new post</button>
    </div>
  );
};

export default NewPost;