import React from "react";
import styles from "./NewPost.module.css";

const NewPost = (props) => {
  const textAreaElement = React.createRef();

  return (
        <div className={styles.new_post}>
            <textarea className={styles.new_post_text}
                      ref={textAreaElement}
                      value={props.textAreaValue}
                      onChange={() => {
                        props.changeTextAreaValue(textAreaElement.current.value);
                        textAreaElement.current.focus();
                      }}
            />
            <button className={styles.new_post_submit} onClick={props.addNewPost}>Send new post</button>
        </div>
    );
};

export default NewPost;