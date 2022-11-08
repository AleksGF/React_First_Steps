import React from "react";
import styles from "./NewPost.module.css";
import {changeTextareaTextCreator, addNewPostCreator} from "../../../redux/profileReducer";

const NewPost = (props) => {
  const onChangeText = (newText) => {
    const action = changeTextareaTextCreator(newText);
    props.dispatch(action);
  };

  const onAddNewPost = () => {
    const action = addNewPostCreator();
    props.dispatch(action);
  };

  return (
    <div className={styles.new_post}>
            <textarea className={styles.new_post_text}
                      value={props.textareaText}
                      onChange={(event) => onChangeText(event.currentTarget.value)}
            />
      <button className={styles.new_post_submit} onClick={onAddNewPost}>Send new post</button>
    </div>
  );
};

export default NewPost;